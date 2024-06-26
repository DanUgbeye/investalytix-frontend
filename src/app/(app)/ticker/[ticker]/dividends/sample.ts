import { Dividend } from "@/modules/ticker/types";

export const HISTORICAL_DIVIDENDS = [
  {
    date: new Date("2024-05-10"),
    label: "May 10, 24",
    adjDividend: 0.25,
    dividend: 0.25,
    recordDate: new Date("2024-05-13"),
    paymentDate: new Date("2024-05-16"),
    declarationDate: new Date("2024-05-02"),
  },
  {
    date: new Date("2024-02-09"),
    label: "February 09, 24",
    adjDividend: 0.24,
    dividend: 0.24,
    recordDate: new Date("2024-02-12"),
    paymentDate: new Date("2024-02-15"),
    declarationDate: new Date("2024-02-01"),
  },
  {
    date: new Date("2023-11-10"),
    label: "November 10, 23",
    adjDividend: 0.24,
    dividend: 0.24,
    recordDate: new Date("2023-11-13"),
    paymentDate: new Date("2023-11-16"),
    declarationDate: new Date("2023-11-02"),
  },
  {
    date: new Date("2023-08-11"),
    label: "August 11, 23",
    adjDividend: 0.24,
    dividend: 0.24,
    recordDate: new Date("2023-08-14"),
    paymentDate: new Date("2023-08-17"),
    declarationDate: new Date("2023-08-03"),
  },
  {
    date: new Date("2023-05-12"),
    label: "May 12, 23",
    adjDividend: 0.24,
    dividend: 0.24,
    recordDate: new Date("2023-05-15"),
    paymentDate: new Date("2023-05-18"),
    declarationDate: new Date("2023-05-04"),
  },
  {
    date: new Date("2023-02-10"),
    label: "February 10, 23",
    adjDividend: 0.23,
    dividend: 0.23,
    recordDate: new Date("2023-02-13"),
    paymentDate: new Date("2023-02-16"),
    declarationDate: new Date("2023-02-02"),
  },
  {
    date: new Date("2022-11-04"),
    label: "November 04, 22",
    adjDividend: 0.23,
    dividend: 0.23,
    recordDate: new Date("2022-11-07"),
    paymentDate: new Date("2022-11-10"),
    declarationDate: new Date("2022-10-27"),
  },
  {
    date: new Date("2022-08-05"),
    label: "August 05, 22",
    adjDividend: 0.23,
    dividend: 0.23,
    recordDate: new Date("2022-08-08"),
    paymentDate: new Date("2022-08-11"),
    declarationDate: new Date("2022-07-28"),
  },
  {
    date: new Date("2022-05-06"),
    label: "May 06, 22",
    adjDividend: 0.23,
    dividend: 0.23,
    recordDate: new Date("2022-05-09"),
    paymentDate: new Date("2022-05-12"),
    declarationDate: new Date("2022-04-28"),
  },
  {
    date: new Date("2022-02-04"),
    label: "February 04, 22",
    adjDividend: 0.22,
    dividend: 0.22,
    recordDate: new Date("2022-02-07"),
    paymentDate: new Date("2022-02-10"),
    declarationDate: new Date("2022-01-27"),
  },
  {
    date: new Date("2021-11-05"),
    label: "November 05, 21",
    adjDividend: 0.22,
    dividend: 0.22,
    recordDate: new Date("2021-11-08"),
    paymentDate: new Date("2021-11-11"),
    declarationDate: new Date("2021-10-28"),
  },
  {
    date: new Date("2021-08-06"),
    label: "August 06, 21",
    adjDividend: 0.22,
    dividend: 0.22,
    recordDate: new Date("2021-08-09"),
    paymentDate: new Date("2021-08-12"),
    declarationDate: new Date("2021-07-27"),
  },
  {
    date: new Date("2021-05-07"),
    label: "May 07, 21",
    adjDividend: 0.22,
    dividend: 0.22,
    recordDate: new Date("2021-05-10"),
    paymentDate: new Date("2021-05-13"),
    declarationDate: new Date("2021-04-28"),
  },
  {
    date: new Date("2021-02-05"),
    label: "February 05, 21",
    adjDividend: 0.205,
    dividend: 0.205,
    recordDate: new Date("2021-02-08"),
    paymentDate: new Date("2021-02-11"),
    declarationDate: new Date("2021-01-27"),
  },
  {
    date: new Date("2020-11-06"),
    label: "November 06, 20",
    adjDividend: 0.205,
    dividend: 0.205,
    recordDate: new Date("2020-11-09"),
    paymentDate: new Date("2020-11-12"),
    declarationDate: new Date("2020-10-29"),
  },
  {
    date: new Date("2020-08-07"),
    label: "August 07, 20",
    adjDividend: 0.205,
    dividend: 0.82,
    recordDate: new Date("2020-08-10"),
    paymentDate: new Date("2020-08-13"),
    declarationDate: new Date("2020-07-30"),
  },
  {
    date: new Date("2020-05-08"),
    label: "May 08, 20",
    adjDividend: 0.205,
    dividend: 0.82,
    recordDate: new Date("2020-05-11"),
    paymentDate: new Date("2020-05-14"),
    declarationDate: new Date("2020-04-30"),
  },
  {
    date: new Date("2020-02-07"),
    label: "February 07, 20",
    adjDividend: 0.1925,
    dividend: 0.77,
    recordDate: new Date("2020-02-10"),
    paymentDate: new Date("2020-02-13"),
    declarationDate: new Date("2020-01-28"),
  },
].reverse() satisfies Dividend[];
