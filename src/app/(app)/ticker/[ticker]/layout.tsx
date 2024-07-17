import { Container } from "@/components/container";
import { serverAPI } from "@/config/server/api";
import { TickerRepository } from "@/modules/ticker/repository";
import { CompanyOutlook } from "@/modules/ticker/types";
import { Quote, Result } from "@/types";
import { errorUtils } from "@/utils/error.utils";
import { notFound } from "next/navigation";
import { PropsWithChildren } from "react";
import ErrorScreen from "./error-screen";
import TickerLayout from "./ticker-layout";
import QuotesBoard from "@/components/ui/QuotesBoard";

async function getTickerData(
  ticker: string
): Promise<
  Result<{ quote: Quote; outlook: CompanyOutlook; currency?: string }>
> {
  try {
    const tickerRepo = new TickerRepository(serverAPI);

    const [quote, outlook] = await Promise.all([
      tickerRepo.getQuote(ticker),
      tickerRepo.getCompanyOutLook(ticker),
    ]);

    return {
      data: { quote, outlook, currency: outlook.profile.currency || undefined },
    };
  } catch (error: any) {
    if (errorUtils.is404Error(error)) {
      notFound();
    }

    return { error };
  }
}

export interface TickerLayoutProps extends PropsWithChildren {
  params: {
    ticker: string;
  };
}

export default async function Layout(props: TickerLayoutProps) {
  const {
    params: { ticker },
    children,
  } = props;

  const { data, error } = await getTickerData(ticker);

  if (error) {
    return (
      <Container className="min-h-[max(calc(70dvh-90px),30rem)] py-10">
        <ErrorScreen error={{ message: error.message }} />
      </Container>
    );
  }

  return (
    <div className=" ">
      <QuotesBoard />

      <TickerLayout ticker={ticker} {...data}>
        {children}
      </TickerLayout>
    </div>
  );
}
