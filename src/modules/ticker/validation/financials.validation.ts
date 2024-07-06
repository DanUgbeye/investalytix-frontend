import { ZodType, z } from "zod";
import {
  BalanceSheetStatement,
  BalanceSheetStatementGrowth,
  CashFlowStatement,
  CashFlowStatementGrowth,
  FinancialGrowth,
  FinancialPeriod,
  Financials,
  IncomeStatement,
  IncomeStatementGrowth,
  Ratio,
  RatioTTM,
  SecFiling,
} from "../types";

export const RatioTTMSchema = z.object({
  dividendYielTTM: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  dividendYielPercentageTTM: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  peRatioTTM: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  pegRatioTTM: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  payoutRatioTTM: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  currentRatioTTM: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  quickRatioTTM: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  cashRatioTTM: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  daysOfSalesOutstandingTTM: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  daysOfInventoryOutstandingTTM: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  operatingCycleTTM: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  daysOfPayablesOutstandingTTM: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  cashConversionCycleTTM: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  grossProfitMarginTTM: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  operatingProfitMarginTTM: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  pretaxProfitMarginTTM: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  netProfitMarginTTM: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  effectiveTaxRateTTM: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  returnOnAssetsTTM: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  returnOnEquityTTM: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  returnOnCapitalEmployedTTM: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  netIncomePerEBTTTM: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  ebtPerEbitTTM: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  ebitPerRevenueTTM: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  debtRatioTTM: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  debtEquityRatioTTM: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  longTermDebtToCapitalizationTTM: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  totalDebtToCapitalizationTTM: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  interestCoverageTTM: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  cashFlowToDebtRatioTTM: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  companyEquityMultiplierTTM: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  receivablesTurnoverTTM: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  payablesTurnoverTTM: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  inventoryTurnoverTTM: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  fixedAssetTurnoverTTM: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  assetTurnoverTTM: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  operatingCashFlowPerShareTTM: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  freeCashFlowPerShareTTM: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  cashPerShareTTM: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  operatingCashFlowSalesRatioTTM: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  freeCashFlowOperatingCashFlowRatioTTM: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  cashFlowCoverageRatiosTTM: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  shortTermCoverageRatiosTTM: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  capitalExpenditureCoverageRatioTTM: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  dividendPaidAndCapexCoverageRatioTTM: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  priceBookValueRatioTTM: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  priceToBookRatioTTM: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  priceToSalesRatioTTM: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  priceEarningsRatioTTM: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  priceToFreeCashFlowsRatioTTM: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  priceToOperatingCashFlowsRatioTTM: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  priceCashFlowRatioTTM: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  priceEarningsToGrowthRatioTTM: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  priceSalesRatioTTM: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  enterpriseValueMultipleTTM: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  priceFairValueTTM: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  dividendPerShareTTM: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
}) satisfies ZodType<RatioTTM>;

export const RatioSchema = z.object({
  symbol: z.string(),
  date: z.coerce.date(),
  calendarYear: z.string(),
  period: z.string(),
  currentRatio: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  quickRatio: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  cashRatio: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  daysOfSalesOutstanding: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  daysOfInventoryOutstanding: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  operatingCycle: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  daysOfPayablesOutstanding: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  cashConversionCycle: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  grossProfitMargin: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  operatingProfitMargin: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  pretaxProfitMargin: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  netProfitMargin: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  effectiveTaxRate: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  returnOnAssets: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  returnOnEquity: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  returnOnCapitalEmployed: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  netIncomePerEBT: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  ebtPerEbit: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  ebitPerRevenue: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  debtRatio: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  debtEquityRatio: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  longTermDebtToCapitalization: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  totalDebtToCapitalization: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  interestCoverage: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  cashFlowToDebtRatio: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  companyEquityMultiplier: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  receivablesTurnover: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  payablesTurnover: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  inventoryTurnover: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  fixedAssetTurnover: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  assetTurnover: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  operatingCashFlowPerShare: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  freeCashFlowPerShare: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  cashPerShare: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  payoutRatio: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  operatingCashFlowSalesRatio: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  freeCashFlowOperatingCashFlowRatio: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  cashFlowCoverageRatios: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  shortTermCoverageRatios: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  capitalExpenditureCoverageRatio: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  dividendPaidAndCapexCoverageRatio: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  dividendPayoutRatio: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  priceBookValueRatio: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  priceToBookRatio: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  priceToSalesRatio: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  priceEarningsRatio: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  priceToFreeCashFlowsRatio: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  priceToOperatingCashFlowsRatio: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  priceCashFlowRatio: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  priceEarningsToGrowthRatio: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  priceSalesRatio: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  dividendYield: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  enterpriseValueMultiple: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
  priceFairValue: z
    .union([z.number().nullable(), z.undefined()])
    .transform((data) => (typeof data === "number" ? data : null)) as ZodType<
    number | null
  >,
}) satisfies ZodType<Ratio>;

export const FinancialPeriodSchema = z.enum([
  "annual",
  "quarter",
]) satisfies ZodType<FinancialPeriod>;

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
  link: z.string().nullable(),
  finalLink: z.string().nullable(),
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
  link: z.string().nullable(),
  finalLink: z.string().nullable(),
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
  link: z.string().nullable(),
  finalLink: z.string().nullable(),
}) satisfies ZodType<CashFlowStatement>;

export const FinancialsSchema = z.object({
  income: z.array(IncomeStatementSchema),
  balance: z.array(BalanceSheetStatementSchema),
  cash: z.array(CashFlowStatementSchema),
}) satisfies ZodType<Financials>;

export const SecFilingSchema = z.object({
  symbol: z.string(),
  fillingDate: z.coerce.date(),
  acceptedDate: z.coerce.date(),
  cik: z.string(),
  type: z.string(),
  link: z.string(),
  finalLink: z.string(),
}) satisfies ZodType<SecFiling>;

export const FinancialGrowthSchema = z.object({
  symbol: z.string(),
  date: z.coerce.date(),
  calendarYear: z.string(),
  period: z.string(),
  revenueGrowth: z.number().nullable(),
  grossProfitGrowth: z.number().nullable(),
  ebitgrowth: z.number().nullable(),
  operatingIncomeGrowth: z.number().nullable(),
  netIncomeGrowth: z.number().nullable(),
  epsgrowth: z.number().nullable(),
  epsdilutedGrowth: z.number().nullable(),
  weightedAverageSharesGrowth: z.number().nullable(),
  weightedAverageSharesDilutedGrowth: z.number().nullable(),
  dividendsperShareGrowth: z.number().nullable(),
  operatingCashFlowGrowth: z.number().nullable(),
  freeCashFlowGrowth: z.number().nullable(),
  tenYRevenueGrowthPerShare: z.number().nullable(),
  fiveYRevenueGrowthPerShare: z.number().nullable(),
  threeYRevenueGrowthPerShare: z.number().nullable(),
  tenYOperatingCFGrowthPerShare: z.number().nullable(),
  fiveYOperatingCFGrowthPerShare: z.number().nullable(),
  threeYOperatingCFGrowthPerShare: z.number().nullable(),
  tenYNetIncomeGrowthPerShare: z.number().nullable(),
  fiveYNetIncomeGrowthPerShare: z.number().nullable(),
  threeYNetIncomeGrowthPerShare: z.number().nullable(),
  tenYShareholdersEquityGrowthPerShare: z.number().nullable(),
  fiveYShareholdersEquityGrowthPerShare: z.number().nullable(),
  threeYShareholdersEquityGrowthPerShare: z.number().nullable(),
  tenYDividendperShareGrowthPerShare: z.number().nullable(),
  fiveYDividendperShareGrowthPerShare: z.number().nullable(),
  threeYDividendperShareGrowthPerShare: z.number().nullable(),
  receivablesGrowth: z.number().nullable(),
  inventoryGrowth: z.number().nullable(),
  assetGrowth: z.number().nullable(),
  bookValueperShareGrowth: z.number().nullable(),
  debtGrowth: z.number().nullable(),
  rdexpenseGrowth: z.number().nullable(),
  sgaexpensesGrowth: z.number().nullable(),
}) satisfies ZodType<FinancialGrowth>;

export const BalanceSheetStatementGrowthSchema = z.object({
  date: z.coerce.date(),
  symbol: z.string(),
  calendarYear: z.string(),
  period: z.string(),
  growthCashAndCashEquivalents: z.number().nullable(),
  growthShortTermInvestments: z.number().nullable(),
  growthCashAndShortTermInvestments: z.number().nullable(),
  growthNetReceivables: z.number().nullable(),
  growthInventory: z.number().nullable(),
  growthOtherCurrentAssets: z.number().nullable(),
  growthTotalCurrentAssets: z.number().nullable(),
  growthPropertyPlantEquipmentNet: z.number().nullable(),
  growthGoodwill: z.number().nullable(),
  growthIntangibleAssets: z.number().nullable(),
  growthGoodwillAndIntangibleAssets: z.number().nullable(),
  growthLongTermInvestments: z.number().nullable(),
  growthTaxAssets: z.number().nullable(),
  growthOtherNonCurrentAssets: z.number().nullable(),
  growthTotalNonCurrentAssets: z.number().nullable(),
  growthOtherAssets: z.number().nullable(),
  growthTotalAssets: z.number().nullable(),
  growthAccountPayables: z.number().nullable(),
  growthShortTermDebt: z.number().nullable(),
  growthTaxPayables: z.number().nullable(),
  growthDeferredRevenue: z.number().nullable(),
  growthOtherCurrentLiabilities: z.number().nullable(),
  growthTotalCurrentLiabilities: z.number().nullable(),
  growthLongTermDebt: z.number().nullable(),
  growthDeferredRevenueNonCurrent: z.number().nullable(),
  growthDeferrredTaxLiabilitiesNonCurrent: z.number().nullable(),
  growthOtherNonCurrentLiabilities: z.number().nullable(),
  growthTotalNonCurrentLiabilities: z.number().nullable(),
  growthOtherLiabilities: z.number().nullable(),
  growthTotalLiabilities: z.number().nullable(),
  growthCommonStock: z.number().nullable(),
  growthRetainedEarnings: z.number().nullable(),
  growthAccumulatedOtherComprehensiveIncomeLoss: z.number().nullable(),
  growthOthertotalStockholdersEquity: z.number().nullable(),
  growthTotalStockholdersEquity: z.number().nullable(),
  growthTotalLiabilitiesAndStockholdersEquity: z.number().nullable(),
  growthTotalInvestments: z.number().nullable(),
  growthTotalDebt: z.number().nullable(),
  growthNetDebt: z.number().nullable(),
}) satisfies ZodType<BalanceSheetStatementGrowth>;

export const IncomeStatementGrowthSchema = z.object({
  date: z.coerce.date(),
  symbol: z.string(),
  calendarYear: z.string(),
  period: z.string(),
  growthRevenue: z.number().nullable(),
  growthCostOfRevenue: z.number().nullable(),
  growthGrossProfit: z.number().nullable(),
  growthGrossProfitRatio: z.number().nullable(),
  growthResearchAndDevelopmentExpenses: z.number().nullable(),
  growthGeneralAndAdministrativeExpenses: z.number().nullable(),
  growthSellingAndMarketingExpenses: z.number().nullable(),
  growthOtherExpenses: z.number().nullable(),
  growthOperatingExpenses: z.number().nullable(),
  growthCostAndExpenses: z.number().nullable(),
  growthInterestExpense: z.number().nullable(),
  growthDepreciationAndAmortization: z.number().nullable(),
  growthEBITDA: z.number().nullable(),
  growthEBITDARatio: z.number().nullable(),
  growthOperatingIncome: z.number().nullable(),
  growthOperatingIncomeRatio: z.number().nullable(),
  growthTotalOtherIncomeExpensesNet: z.number().nullable(),
  growthIncomeBeforeTax: z.number().nullable(),
  growthIncomeBeforeTaxRatio: z.number().nullable(),
  growthIncomeTaxExpense: z.number().nullable(),
  growthNetIncome: z.number().nullable(),
  growthNetIncomeRatio: z.number().nullable(),
  growthEPS: z.number().nullable(),
  growthEPSDiluted: z.number().nullable(),
  growthWeightedAverageShsOut: z.number().nullable(),
  growthWeightedAverageShsOutDil: z.number().nullable(),
}) satisfies ZodType<IncomeStatementGrowth>;

export const CashFlowStatementGrowthSchema = z.object({
  date: z.coerce.date(),
  symbol: z.string(),
  calendarYear: z.string(),
  period: z.string(),
  growthNetIncome: z.number().nullable(),
  growthDepreciationAndAmortization: z.number().nullable(),
  growthDeferredIncomeTax: z.number().nullable(),
  growthStockBasedCompensation: z.number().nullable(),
  growthChangeInWorkingCapital: z.number().nullable(),
  growthAccountsReceivables: z.number().nullable(),
  growthInventory: z.number().nullable(),
  growthAccountsPayables: z.number().nullable(),
  growthOtherWorkingCapital: z.number().nullable(),
  growthOtherNonCashItems: z.number().nullable(),
  growthNetCashProvidedByOperatingActivites: z.number().nullable(),
  growthInvestmentsInPropertyPlantAndEquipment: z.number().nullable(),
  growthAcquisitionsNet: z.number().nullable(),
  growthPurchasesOfInvestments: z.number().nullable(),
  growthSalesMaturitiesOfInvestments: z.number().nullable(),
  growthOtherInvestingActivites: z.number().nullable(),
  growthNetCashUsedForInvestingActivites: z.number().nullable(),
  growthDebtRepayment: z.number().nullable(),
  growthCommonStockIssued: z.number().nullable(),
  growthCommonStockRepurchased: z.number().nullable(),
  growthDividendsPaid: z.number().nullable(),
  growthOtherFinancingActivites: z.number().nullable(),
  growthNetCashUsedProvidedByFinancingActivities: z.number().nullable(),
  growthEffectOfForexChangesOnCash: z.number().nullable(),
  growthNetChangeInCash: z.number().nullable(),
  growthCashAtEndOfPeriod: z.number().nullable(),
  growthCashAtBeginningOfPeriod: z.number().nullable(),
  growthOperatingCashFlow: z.number().nullable(),
  growthCapitalExpenditure: z.number().nullable(),
  growthFreeCashFlow: z.number().nullable(),
}) satisfies ZodType<CashFlowStatementGrowth>;
