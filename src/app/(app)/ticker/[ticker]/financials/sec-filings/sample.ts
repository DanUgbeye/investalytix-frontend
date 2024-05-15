import { SecFiling } from "@/modules/ticker/types";

export const SEC_FILINGS_SAMPLE = [
  {
    symbol: "AAPL",
    fillingDate: new Date("2024-05-14 00:00:00"),
    acceptedDate: new Date("2024-05-14 18:30:21"),
    cik: "0000320193",
    type: "4",
    link: "https://www.sec.gov/Archives/edgar/data/320193/000032019324000071/0000320193-24-000071-index.htm",
    finalLink:
      "https://www.sec.gov/Archives/edgar/data/320193/000032019324000071/xslF345X05/wk-form4_1715725806.xml",
  },
  {
    symbol: "AAPL",
    fillingDate: new Date("2024-05-03 00:00:00"),
    acceptedDate: new Date("2024-05-03 16:35:42"),
    cik: "0000320193",
    type: "8-K",
    link: "https://www.sec.gov/Archives/edgar/data/320193/000114036124024352/0001140361-24-024352-index.htm",
    finalLink:
      "https://www.sec.gov/Archives/edgar/data/320193/000114036124024352/ef20028273_ex99-1.htm",
  },
  {
    symbol: "AAPL",
    fillingDate: new Date("2024-05-03 00:00:00"),
    acceptedDate: new Date("2024-05-02 18:04:25"),
    cik: "0000320193",
    type: "10-Q",
    link: "https://www.sec.gov/Archives/edgar/data/320193/000032019324000069/0000320193-24-000069-index.htm",
    finalLink:
      "https://www.sec.gov/Archives/edgar/data/320193/000032019324000069/aapl-20240330.htm",
  },
  {
    symbol: "AAPL",
    fillingDate: new Date("2024-05-02 00:00:00"),
    acceptedDate: new Date("2024-05-02 16:30:34"),
    cik: "0000320193",
    type: "8-K",
    link: "https://www.sec.gov/Archives/edgar/data/320193/000032019324000067/0000320193-24-000067-index.htm",
    finalLink:
      "https://www.sec.gov/Archives/edgar/data/320193/000032019324000067/a8-kex991q2202403302024.htm",
  },
  {
    symbol: "AAPL",
    fillingDate: new Date("2024-04-17 00:00:00"),
    acceptedDate: new Date("2024-04-17 18:30:52"),
    cik: "0000320193",
    type: "4",
    link: "https://www.sec.gov/Archives/edgar/data/320193/000032019324000058/0000320193-24-000058-index.htm",
    finalLink:
      "https://www.sec.gov/Archives/edgar/data/320193/000032019324000058/xslF345X05/wk-form4_1713393040.xml",
  },
  {
    symbol: "AAPL",
    fillingDate: new Date("2024-04-15 00:00:00"),
    acceptedDate: new Date("2024-04-15 18:31:11"),
    cik: "0000320193",
    type: "4",
    link: "https://www.sec.gov/Archives/edgar/data/320193/000032019324000056/0000320193-24-000056-index.htm",
    finalLink:
      "https://www.sec.gov/Archives/edgar/data/320193/000032019324000056/xslF345X05/wk-form4_1713220262.xml",
  },
  {
    symbol: "AAPL",
    fillingDate: new Date("2024-04-15 00:00:00"),
    acceptedDate: new Date("2024-04-15 18:30:24"),
    cik: "0000320193",
    type: "4",
    link: "https://www.sec.gov/Archives/edgar/data/320193/000032019324000055/0000320193-24-000055-index.htm",
    finalLink:
      "https://www.sec.gov/Archives/edgar/data/320193/000032019324000055/xslF345X05/wk-form4_1713220215.xml",
  },
  {
    symbol: "AAPL",
    fillingDate: new Date("2024-04-03 00:00:00"),
    acceptedDate: new Date("2024-04-03 18:34:04"),
    cik: "0000320193",
    type: "4",
    link: "https://www.sec.gov/Archives/edgar/data/320193/000032019324000052/0000320193-24-000052-index.htm",
    finalLink:
      "https://www.sec.gov/Archives/edgar/data/320193/000032019324000052/xslF345X05/wk-form4_1712183631.xml",
  },
  {
    symbol: "AAPL",
    fillingDate: new Date("2024-04-03 00:00:00"),
    acceptedDate: new Date("2024-04-03 18:33:14"),
    cik: "0000320193",
    type: "4",
    link: "https://www.sec.gov/Archives/edgar/data/320193/000032019324000051/0000320193-24-000051-index.htm",
    finalLink:
      "https://www.sec.gov/Archives/edgar/data/320193/000032019324000051/xslF345X05/wk-form4_1712183580.xml",
  },
  {
    symbol: "AAPL",
    fillingDate: new Date("2024-04-03 00:00:00"),
    acceptedDate: new Date("2024-04-03 18:32:26"),
    cik: "0000320193",
    type: "4",
    link: "https://www.sec.gov/Archives/edgar/data/320193/000032019324000050/0000320193-24-000050-index.htm",
    finalLink:
      "https://www.sec.gov/Archives/edgar/data/320193/000032019324000050/xslF345X05/wk-form4_1712183535.xml",
  },
] satisfies SecFiling[];
