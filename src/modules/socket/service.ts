import { StockSocketData } from "@/types";
import { Socket } from "socket.io-client";
import {
  ServiceSubscriptions,
  SOCKET_EMIT_EVENTS,
  SOCKET_LISTEN_EVENTS,
  SocketEmitEventsMap,
  SocketListenEventsMap,
  SUBSCRIPTION_TYPE,
  SubscriptionType,
  TickerSubscriber,
} from "./types";

export class SocketService {
  private subscriptionList: ServiceSubscriptions = {
    stock: new Map(),
    fx: new Map(),
    crypto: new Map(),
  };

  constructor(
    private socket: Socket<SocketListenEventsMap, SocketEmitEventsMap>
  ) {}

  setSocket(socket: Socket<SocketListenEventsMap, SocketEmitEventsMap>) {
    this.socket = socket;
  }

  authenticate(auth: string) {
    if (!this.socket.connected) return false;
    this.socket.emit(SOCKET_EMIT_EVENTS.LOG_IN, auth);
  }

  addListeners() {
    this.socket.on(SOCKET_LISTEN_EVENTS.STOCK, this.handleStockData);
    this.socket.on(SOCKET_LISTEN_EVENTS.FX, this.handleFxData);
    this.socket.on(SOCKET_LISTEN_EVENTS.CRYPTO, this.handleCryptoData);
  }

  removeListeners() {
    this.socket.off(SOCKET_LISTEN_EVENTS.STOCK, this.handleStockData);
    this.socket.off(SOCKET_LISTEN_EVENTS.FX, this.handleFxData);
    this.socket.off(SOCKET_LISTEN_EVENTS.CRYPTO, this.handleCryptoData);
  }

  private handleStockData = (data: StockSocketData) => {
    // TODO validate data
    this.notify(SUBSCRIPTION_TYPE.STOCK, data.s, data);
  };

  private handleFxData = (data: StockSocketData) => {
    // TODO validate data
    this.notify(SUBSCRIPTION_TYPE.FX, data.s, data);
  };

  private handleCryptoData = (data: StockSocketData) => {
    // TODO validate data
    this.notify(SUBSCRIPTION_TYPE.CRYPTO, data.s, data);
  };

  private notify(
    type: SubscriptionType,
    ticker: string,
    data: StockSocketData
  ) {
    let uppercaseTicker = ticker.toUpperCase();
    let subscribers = this.subscriptionList[type].get(uppercaseTicker);
    if (!subscribers || subscribers.length <= 0) {
      return;
    }
    subscribers.forEach((subscriber) => subscriber(data));
  }

  subscribe(
    type: SubscriptionType,
    ticker: string,
    subscriber: TickerSubscriber
  ) {
    let uppercaseTicker = ticker.toUpperCase();
    let subscriptions = this.subscriptionList[type].get(uppercaseTicker);

    if (!subscriptions) {
      subscriptions = [subscriber];

      // Emit subscription event to the server
      switch (type) {
        case SUBSCRIPTION_TYPE.STOCK: {
          this.socket.emit(SOCKET_EMIT_EVENTS.SUBSCRIBE_STOCK, uppercaseTicker);
          break;
        }
        case SUBSCRIPTION_TYPE.FX: {
          this.socket.emit(SOCKET_EMIT_EVENTS.SUBSCRIBE_FX, uppercaseTicker);
          break;
        }
        case SUBSCRIPTION_TYPE.CRYPTO: {
          this.socket.emit(
            SOCKET_EMIT_EVENTS.SUBSCRIBE_CRYPTO,
            uppercaseTicker
          );
          break;
        }
      }
    } else {
      // ensure that subscribers are added only once
      const index = subscriptions.indexOf(subscriber);
      if (index === -1) {
        subscriptions.push(subscriber);
      }
    }

    this.subscriptionList[type].set(uppercaseTicker, subscriptions);
  }

  unsubscribe(
    type: SubscriptionType,
    ticker: string,
    subscriber: TickerSubscriber
  ) {
    let uppercaseTicker = ticker.toUpperCase();
    let subscriptions = this.subscriptionList[type].get(uppercaseTicker);

    if (subscriptions) {
      const index = subscriptions.indexOf(subscriber);
      if (index !== -1) {
        subscriptions.splice(index, 1);
      }

      // If no more subscribers for this ticker, clean up and notify the server
      if (subscriptions.length === 0) {
        this.subscriptionList[type].delete(uppercaseTicker);

        // Emit unsubscription event to the server
        switch (type) {
          case SUBSCRIPTION_TYPE.STOCK: {
            this.socket.emit(
              SOCKET_EMIT_EVENTS.UNSUBSCRIBE_STOCK,
              uppercaseTicker
            );
            break;
          }
          case SUBSCRIPTION_TYPE.FX: {
            this.socket.emit(
              SOCKET_EMIT_EVENTS.UNSUBSCRIBE_FX,
              uppercaseTicker
            );
            break;
          }
          case SUBSCRIPTION_TYPE.CRYPTO: {
            this.socket.emit(
              SOCKET_EMIT_EVENTS.UNSUBSCRIBE_CRYPTO,
              uppercaseTicker
            );
            break;
          }
        }
      }
    }
  }
}
