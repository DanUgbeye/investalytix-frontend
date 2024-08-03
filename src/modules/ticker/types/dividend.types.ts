export type Dividend = {
  date: Date;
  label: string;
  adjDividend: number | null;
  dividend: number | null;
  recordDate: Date | null;
  paymentDate: Date | null;
  declarationDate: Date | null;
};
