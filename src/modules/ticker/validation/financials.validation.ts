import { ZodType, z } from "zod";
import {
  BalanceSheetStatement,
  CashFlowStatement,
  Financials,
  IncomeStatement,
} from "../types";

export const IncomeStatementSchema = z.object({
  date: z.coerce.date(),
  symbol: z.string(),
  reportedCurrency: z.string(),
  cik: z.string(),
  fillingDate: z.coerce.date(),
  acceptedDate: z.coerce.date(),
  calendarYear: z.string(),
  period: z.string(),
  revenue: z.number(),
  costOfRevenue: z.number(),
  grossProfit: z.number(),
  grossProfitRatio: z.number(),
  researchAndDevelopmentExpenses: z.number(),
  generalAndAdministrativeExpenses: z.number(),
  sellingAndMarketingExpenses: z.number(),
  sellingGeneralAndAdministrativeExpenses: z.number(),
  otherExpenses: z.number(),
  operatingExpenses: z.number(),
  costAndExpenses: z.number(),
  interestIncome: z.number(),
  interestExpense: z.number(),
  depreciationAndAmortization: z.number(),
  ebitda: z.number(),
  ebitdaratio: z.number(),
  operatingIncome: z.number(),
  operatingIncomeRatio: z.number(),
  totalOtherIncomeExpensesNet: z.number(),
  incomeBeforeTax: z.number(),
  incomeBeforeTaxRatio: z.number(),
  incomeTaxExpense: z.number(),
  netIncome: z.number(),
  netIncomeRatio: z.number(),
  eps: z.number(),
  epsdiluted: z.number(),
  weightedAverageShsOut: z.number(),
  weightedAverageShsOutDil: z.number(),
  link: z.string(),
  finalLink: z.string(),
}) satisfies ZodType<IncomeStatement>;

export const BalanceSheetStatementSchema = z.object({
  date: z.coerce.date(),
  symbol: z.string(),
  reportedCurrency: z.string(),
  cik: z.string(),
  fillingDate: z.coerce.date(),
  acceptedDate: z.coerce.date(),
  calendarYear: z.string(),
  period: z.string(),
  cashAndCashEquivalents: z.number(),
  shortTermInvestments: z.number(),
  cashAndShortTermInvestments: z.number(),
  netReceivables: z.number(),
  inventory: z.number(),
  otherCurrentAssets: z.number(),
  totalCurrentAssets: z.number(),
  propertyPlantEquipmentNet: z.number(),
  goodwill: z.number(),
  intangibleAssets: z.number(),
  goodwillAndIntangibleAssets: z.number(),
  longTermInvestments: z.number(),
  taxAssets: z.number(),
  otherNonCurrentAssets: z.number(),
  totalNonCurrentAssets: z.number(),
  otherAssets: z.number(),
  totalAssets: z.number(),
  accountPayables: z.number(),
  shortTermDebt: z.number(),
  taxPayables: z.number(),
  deferredRevenue: z.number(),
  otherCurrentLiabilities: z.number(),
  totalCurrentLiabilities: z.number(),
  longTermDebt: z.number(),
  deferredRevenueNonCurrent: z.number(),
  deferredTaxLiabilitiesNonCurrent: z.number(),
  otherNonCurrentLiabilities: z.number(),
  totalNonCurrentLiabilities: z.number(),
  otherLiabilities: z.number(),
  capitalLeaseObligations: z.number(),
  totalLiabilities: z.number(),
  preferredStock: z.number(),
  commonStock: z.number(),
  retainedEarnings: z.number(),
  accumulatedOtherComprehensiveIncomeLoss: z.number(),
  othertotalStockholdersEquity: z.number(),
  totalStockholdersEquity: z.number(),
  totalEquity: z.number(),
  totalLiabilitiesAndStockholdersEquity: z.number(),
  minorityInterest: z.number(),
  totalLiabilitiesAndTotalEquity: z.number(),
  totalInvestments: z.number(),
  totalDebt: z.number(),
  netDebt: z.number(),
  link: z.string(),
  finalLink: z.string(),
}) satisfies ZodType<BalanceSheetStatement>;

export const CashFlowStatementSchema = z.object({
  date: z.coerce.date(),
  symbol: z.string(),
  reportedCurrency: z.string(),
  cik: z.string(),
  fillingDate: z.coerce.date(),
  acceptedDate: z.coerce.date(),
  calendarYear: z.string(),
  period: z.string(),
  netIncome: z.number(),
  depreciationAndAmortization: z.number(),
  deferredIncomeTax: z.number(),
  stockBasedCompensation: z.number(),
  changeInWorkingCapital: z.number(),
  accountsReceivables: z.number(),
  inventory: z.number(),
  accountsPayables: z.number(),
  otherWorkingCapital: z.number(),
  otherNonCashItems: z.number(),
  netCashProvidedByOperatingActivities: z.number(),
  investmentsInPropertyPlantAndEquipment: z.number(),
  acquisitionsNet: z.number(),
  purchasesOfInvestments: z.number(),
  salesMaturitiesOfInvestments: z.number(),
  otherInvestingActivites: z.number(),
  netCashUsedForInvestingActivites: z.number(),
  debtRepayment: z.number(),
  commonStockIssued: z.number(),
  commonStockRepurchased: z.number(),
  dividendsPaid: z.number(),
  otherFinancingActivites: z.number(),
  netCashUsedProvidedByFinancingActivities: z.number(),
  effectOfForexChangesOnCash: z.number(),
  netChangeInCash: z.number(),
  cashAtEndOfPeriod: z.number(),
  cashAtBeginningOfPeriod: z.number(),
  operatingCashFlow: z.number(),
  capitalExpenditure: z.number(),
  freeCashFlow: z.number(),
  link: z.string(),
  finalLink: z.string(),
}) satisfies ZodType<CashFlowStatement>;

export const FinancialsSchema = z.object({
  income: z.array(IncomeStatementSchema),
  balance: z.array(BalanceSheetStatementSchema),
  cash: z.array(CashFlowStatementSchema),
}) satisfies ZodType<Financials>;