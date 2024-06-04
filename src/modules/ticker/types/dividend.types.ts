export type Dividend = {
  date: Date;
  label: string;
  adjDividend: number;
  dividend: number;
  recordDate: Date | null;
  paymentDate: Date | null;
  declarationDate: Date | null;
};
