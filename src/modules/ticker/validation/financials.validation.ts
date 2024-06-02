import { ZodType, z } from "zod";
import {
  BalanceSheetStatement,
  CashFlowStatement,
  FinancialPeriod,
  Financials,
  IncomeStatement,
  Ratio,
  RatioTTM,
  SecFiling,
} from "../types";

export const RatioTTMSchema = z.object({
  dividendYielTTM: z.number(),
  dividendYielPercentageTTM: z.number(),
  peRatioTTM: z.number(),
  pegRatioTTM: z.number(),
  payoutRatioTTM: z.number(),
  currentRatioTTM: z.number(),
  quickRatioTTM: z.number(),
  cashRatioTTM: z.number(),
  daysOfSalesOutstandingTTM: z.number(),
  daysOfInventoryOutstandingTTM: z.number(),
  operatingCycleTTM: z.number(),
  daysOfPayablesOutstandingTTM: z.number(),
  cashConversionCycleTTM: z.number(),
  grossProfitMarginTTM: z.number(),
  operatingProfitMarginTTM: z.number(),
  pretaxProfitMarginTTM: z.number(),
  netProfitMarginTTM: z.number(),
  effectiveTaxRateTTM: z.number(),
  returnOnAssetsTTM: z.number(),
  returnOnEquityTTM: z.number(),
  returnOnCapitalEmployedTTM: z.number(),
  netIncomePerEBTTTM: z.number(),
  ebtPerEbitTTM: z.number(),
  ebitPerRevenueTTM: z.number(),
  debtRatioTTM: z.number(),
  debtEquityRatioTTM: z.number(),
  longTermDebtToCapitalizationTTM: z.number(),
  totalDebtToCapitalizationTTM: z.number(),
  interestCoverageTTM: z.number(),
  cashFlowToDebtRatioTTM: z.number(),
  companyEquityMultiplierTTM: z.number(),
  receivablesTurnoverTTM: z.number(),
  payablesTurnoverTTM: z.number(),
  inventoryTurnoverTTM: z.number(),
  fixedAssetTurnoverTTM: z.number(),
  assetTurnoverTTM: z.number(),
  operatingCashFlowPerShareTTM: z.number(),
  freeCashFlowPerShareTTM: z.number(),
  cashPerShareTTM: z.number(),
  operatingCashFlowSalesRatioTTM: z.number(),
  freeCashFlowOperatingCashFlowRatioTTM: z.number(),
  cashFlowCoverageRatiosTTM: z.number(),
  shortTermCoverageRatiosTTM: z.number(),
  capitalExpenditureCoverageRatioTTM: z.number(),
  dividendPaidAndCapexCoverageRatioTTM: z.number(),
  priceBookValueRatioTTM: z.number(),
  priceToBookRatioTTM: z.number(),
  priceToSalesRatioTTM: z.number(),
  priceEarningsRatioTTM: z.number(),
  priceToFreeCashFlowsRatioTTM: z.number(),
  priceToOperatingCashFlowsRatioTTM: z.number(),
  priceCashFlowRatioTTM: z.number(),
  priceEarningsToGrowthRatioTTM: z.number(),
  priceSalesRatioTTM: z.number(),
  enterpriseValueMultipleTTM: z.number(),
  priceFairValueTTM: z.number(),
  dividendPerShareTTM: z.number(),
}) satisfies ZodType<RatioTTM>;

export const RatioSchema = z.object({
  symbol: z.string(),
  date: z.coerce.date(),
  calendarYear: z.string(),
  period: z.string(),
  currentRatio: z.number(),
  quickRatio: z.number(),
  cashRatio: z.number(),
  daysOfSalesOutstanding: z.union([z.number(), z.null()]),
  daysOfInventoryOutstanding: z.number(),
  operatingCycle: z.union([z.number(), z.null()]),
  daysOfPayablesOutstanding: z.number(),
  cashConversionCycle: z.union([z.number(), z.null()]),
  grossProfitMargin: z.number(),
  operatingProfitMargin: z.number(),
  pretaxProfitMargin: z.number(),
  netProfitMargin: z.number(),
  effectiveTaxRate: z.number(),
  returnOnAssets: z.number(),
  returnOnEquity: z.number(),
  returnOnCapitalEmployed: z.number(),
  netIncomePerEBT: z.number(),
  ebtPerEbit: z.number(),
  ebitPerRevenue: z.number(),
  debtRatio: z.number(),
  debtEquityRatio: z.number(),
  longTermDebtToCapitalization: z.number(),
  totalDebtToCapitalization: z.number(),
  interestCoverage: z.number(),
  cashFlowToDebtRatio: z.union([z.number(), z.null()]),
  companyEquityMultiplier: z.number(),
  receivablesTurnover: z.number(),
  payablesTurnover: z.number(),
  inventoryTurnover: z.number(),
  fixedAssetTurnover: z.number(),
  assetTurnover: z.number(),
  operatingCashFlowPerShare: z.union([z.number(), z.null()]),
  freeCashFlowPerShare: z.union([z.number(), z.null()]),
  cashPerShare: z.union([z.number(), z.null()]),
  payoutRatio: z.number(),
  operatingCashFlowSalesRatio: z.union([z.number(), z.null()]),
  freeCashFlowOperatingCashFlowRatio: z.number(),
  cashFlowCoverageRatios: z.union([z.number(), z.null()]),
  shortTermCoverageRatios: z.union([z.number(), z.null()]),
  capitalExpenditureCoverageRatio: z.number(),
  dividendPaidAndCapexCoverageRatio: z.number(),
  dividendPayoutRatio: z.number(),
  priceBookValueRatio: z.number(),
  priceToBookRatio: z.number(),
  priceToSalesRatio: z.number(),
  priceEarningsRatio: z.number(),
  priceToFreeCashFlowsRatio: z.number(),
  priceToOperatingCashFlowsRatio: z.number(),
  priceCashFlowRatio: z.number(),
  priceEarningsToGrowthRatio: z.number(),
  priceSalesRatio: z.number(),
  dividendYield: z.union([z.number(), z.null()]),
  enterpriseValueMultiple: z.union([z.number(), z.null()]),
  priceFairValue: z.number(),
}) satisfies ZodType<Ratio>;

export const FinancialPeriodSchema = z.enum([
  "annual",
  "quarterly",
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

export const SecFilingSchema = z.object({
  symbol: z.string(),
  fillingDate: z.coerce.date(),
  acceptedDate: z.coerce.date(),
  cik: z.string(),
  type: z.string(),
  link: z.string(),
  finalLink: z.string(),
}) satisfies ZodType<SecFiling>;
