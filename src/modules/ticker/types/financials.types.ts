export type RatioTTM = {
  dividendYielTTM: number;
  dividendYielPercentageTTM: number;
  peRatioTTM: number;
  pegRatioTTM: number;
  payoutRatioTTM: number;
  currentRatioTTM: number;
  quickRatioTTM: number;
  cashRatioTTM: number;
  daysOfSalesOutstandingTTM: number;
  daysOfInventoryOutstandingTTM: number;
  operatingCycleTTM: number;
  daysOfPayablesOutstandingTTM: number;
  cashConversionCycleTTM: number;
  grossProfitMarginTTM: number;
  operatingProfitMarginTTM: number;
  pretaxProfitMarginTTM: number;
  netProfitMarginTTM: number;
  effectiveTaxRateTTM: number;
  returnOnAssetsTTM: number;
  returnOnEquityTTM: number;
  returnOnCapitalEmployedTTM: number;
  netIncomePerEBTTTM: number;
  ebtPerEbitTTM: number;
  ebitPerRevenueTTM: number;
  debtRatioTTM: number;
  debtEquityRatioTTM: number;
  longTermDebtToCapitalizationTTM: number;
  totalDebtToCapitalizationTTM: number;
  interestCoverageTTM: number;
  cashFlowToDebtRatioTTM: number;
  companyEquityMultiplierTTM: number;
  receivablesTurnoverTTM: number;
  payablesTurnoverTTM: number;
  inventoryTurnoverTTM: number;
  fixedAssetTurnoverTTM: number;
  assetTurnoverTTM: number;
  operatingCashFlowPerShareTTM: number;
  freeCashFlowPerShareTTM: number;
  cashPerShareTTM: number;
  operatingCashFlowSalesRatioTTM: number;
  freeCashFlowOperatingCashFlowRatioTTM: number;
  cashFlowCoverageRatiosTTM: number;
  shortTermCoverageRatiosTTM: number;
  capitalExpenditureCoverageRatioTTM: number;
  dividendPaidAndCapexCoverageRatioTTM: number;
  priceBookValueRatioTTM: number;
  priceToBookRatioTTM: number;
  priceToSalesRatioTTM: number;
  priceEarningsRatioTTM: number;
  priceToFreeCashFlowsRatioTTM: number;
  priceToOperatingCashFlowsRatioTTM: number;
  priceCashFlowRatioTTM: number;
  priceEarningsToGrowthRatioTTM: number;
  priceSalesRatioTTM: number;
  enterpriseValueMultipleTTM: number;
  priceFairValueTTM: number;
  dividendPerShareTTM: number;
};

export type Ratio = {
  symbol: string;
  date: Date;
  calendarYear: string;
  period: string;
  currentRatio: number | null;
  quickRatio: number | null;
  cashRatio: number | null;
  daysOfSalesOutstanding: number | null;
  daysOfInventoryOutstanding: number | null;
  operatingCycle: number | null;
  daysOfPayablesOutstanding: number | null;
  cashConversionCycle: number | null;
  grossProfitMargin: number | null;
  operatingProfitMargin: number | null;
  pretaxProfitMargin: number | null;
  netProfitMargin: number | null;
  effectiveTaxRate: number | null;
  returnOnAssets: number | null;
  returnOnEquity: number | null;
  returnOnCapitalEmployed: number | null;
  netIncomePerEBT: number | null;
  ebtPerEbit: number | null;
  ebitPerRevenue: number | null;
  debtRatio: number | null;
  debtEquityRatio: number | null;
  longTermDebtToCapitalization: number | null;
  totalDebtToCapitalization: number | null;
  interestCoverage: number | null;
  cashFlowToDebtRatio: number | null;
  companyEquityMultiplier: number | null;
  receivablesTurnover: number | null;
  payablesTurnover: number | null;
  inventoryTurnover: number | null;
  fixedAssetTurnover: number | null;
  assetTurnover: number | null;
  operatingCashFlowPerShare: number | null;
  freeCashFlowPerShare: number | null;
  cashPerShare: number | null;
  payoutRatio: number | null;
  operatingCashFlowSalesRatio: number | null;
  freeCashFlowOperatingCashFlowRatio: number | null;
  cashFlowCoverageRatios: number | null;
  shortTermCoverageRatios: number | null;
  capitalExpenditureCoverageRatio: number | null;
  dividendPaidAndCapexCoverageRatio: number | null;
  dividendPayoutRatio: number | null;
  priceBookValueRatio: number | null;
  priceToBookRatio: number | null;
  priceToSalesRatio: number | null;
  priceEarningsRatio: number | null;
  priceToFreeCashFlowsRatio: number | null;
  priceToOperatingCashFlowsRatio: number | null;
  priceCashFlowRatio: number | null;
  priceEarningsToGrowthRatio: number | null;
  priceSalesRatio: number | null;
  dividendYield: number | null;
  enterpriseValueMultiple: number | null;
  priceFairValue: number | null;
};

export type FinancialPeriod = "annual" | "quarter";

export type Financials = {
  income: IncomeStatement[];
  cash: CashFlowStatement[];
  balance: BalanceSheetStatement[];
};

export type IncomeStatement = {
  date: Date;
  symbol: string;
  reportedCurrency: string;
  cik: string;
  fillingDate: Date;
  acceptedDate: Date;
  calendarYear: string;
  period: string;
  revenue: number;
  costOfRevenue: number;
  grossProfit: number;
  grossProfitRatio: number;
  researchAndDevelopmentExpenses: number;
  generalAndAdministrativeExpenses: number;
  sellingAndMarketingExpenses: number;
  sellingGeneralAndAdministrativeExpenses: number;
  otherExpenses: number;
  operatingExpenses: number;
  costAndExpenses: number;
  interestIncome: number;
  interestExpense: number;
  depreciationAndAmortization: number;
  ebitda: number;
  ebitdaratio: number;
  operatingIncome: number;
  operatingIncomeRatio: number;
  totalOtherIncomeExpensesNet: number;
  incomeBeforeTax: number;
  incomeBeforeTaxRatio: number;
  incomeTaxExpense: number;
  netIncome: number;
  netIncomeRatio: number;
  eps: number;
  epsdiluted: number;
  weightedAverageShsOut: number;
  weightedAverageShsOutDil: number;
  link: string | null;
  finalLink: string | null;
};

export type CashFlowStatement = {
  date: Date;
  symbol: string;
  reportedCurrency: string;
  cik: string;
  fillingDate: Date;
  acceptedDate: Date;
  calendarYear: string;
  period: string;
  netIncome: number;
  depreciationAndAmortization: number;
  deferredIncomeTax: number;
  stockBasedCompensation: number;
  changeInWorkingCapital: number;
  accountsReceivables: number;
  inventory: number;
  accountsPayables: number;
  otherWorkingCapital: number;
  otherNonCashItems: number;
  netCashProvidedByOperatingActivities: number;
  investmentsInPropertyPlantAndEquipment: number;
  acquisitionsNet: number;
  purchasesOfInvestments: number;
  salesMaturitiesOfInvestments: number;
  otherInvestingActivites: number;
  netCashUsedForInvestingActivites: number;
  debtRepayment: number;
  commonStockIssued: number;
  commonStockRepurchased: number;
  dividendsPaid: number;
  otherFinancingActivites: number;
  netCashUsedProvidedByFinancingActivities: number;
  effectOfForexChangesOnCash: number;
  netChangeInCash: number;
  cashAtEndOfPeriod: number;
  cashAtBeginningOfPeriod: number;
  operatingCashFlow: number;
  capitalExpenditure: number;
  freeCashFlow: number;
  link: string | null;
  finalLink: string | null;
};

export type BalanceSheetStatement = {
  date: Date;
  symbol: string;
  reportedCurrency: string;
  cik: string;
  fillingDate: Date;
  acceptedDate: Date;
  calendarYear: string;
  period: string;
  cashAndCashEquivalents: number;
  shortTermInvestments: number;
  cashAndShortTermInvestments: number;
  netReceivables: number;
  inventory: number;
  otherCurrentAssets: number;
  totalCurrentAssets: number;
  propertyPlantEquipmentNet: number;
  goodwill: number;
  intangibleAssets: number;
  goodwillAndIntangibleAssets: number;
  longTermInvestments: number;
  taxAssets: number;
  otherNonCurrentAssets: number;
  totalNonCurrentAssets: number;
  otherAssets: number;
  totalAssets: number;
  accountPayables: number;
  shortTermDebt: number;
  taxPayables: number;
  deferredRevenue: number;
  otherCurrentLiabilities: number;
  totalCurrentLiabilities: number;
  longTermDebt: number;
  deferredRevenueNonCurrent: number;
  deferredTaxLiabilitiesNonCurrent: number;
  otherNonCurrentLiabilities: number;
  totalNonCurrentLiabilities: number;
  otherLiabilities: number;
  capitalLeaseObligations: number;
  totalLiabilities: number;
  preferredStock: number;
  commonStock: number;
  retainedEarnings: number;
  accumulatedOtherComprehensiveIncomeLoss: number;
  othertotalStockholdersEquity: number;
  totalStockholdersEquity: number;
  totalEquity: number;
  totalLiabilitiesAndStockholdersEquity: number;
  minorityInterest: number;
  totalLiabilitiesAndTotalEquity: number;
  totalInvestments: number;
  totalDebt: number;
  netDebt: number;
  link: string | null;
  finalLink: string | null;
};

export type SecFiling = {
  symbol: string;
  fillingDate: Date;
  acceptedDate: Date;
  cik: string;
  type: string;
  link: string;
  finalLink: string;
};

export type FinancialGrowth = {
  symbol: string;
  date: Date;
  calendarYear: string;
  period: string;
  revenueGrowth: number | null;
  grossProfitGrowth: number | null;
  ebitgrowth: number | null;
  operatingIncomeGrowth: number | null;
  netIncomeGrowth: number | null;
  epsgrowth: number | null;
  epsdilutedGrowth: number | null;
  weightedAverageSharesGrowth: number | null;
  weightedAverageSharesDilutedGrowth: number | null;
  dividendsperShareGrowth: number | null;
  operatingCashFlowGrowth: number | null;
  freeCashFlowGrowth: number | null;
  tenYRevenueGrowthPerShare: number | null;
  fiveYRevenueGrowthPerShare: number | null;
  threeYRevenueGrowthPerShare: number | null;
  tenYOperatingCFGrowthPerShare: number | null;
  fiveYOperatingCFGrowthPerShare: number | null;
  threeYOperatingCFGrowthPerShare: number | null;
  tenYNetIncomeGrowthPerShare: number | null;
  fiveYNetIncomeGrowthPerShare: number | null;
  threeYNetIncomeGrowthPerShare: number | null;
  tenYShareholdersEquityGrowthPerShare: number | null;
  fiveYShareholdersEquityGrowthPerShare: number | null;
  threeYShareholdersEquityGrowthPerShare: number | null;
  tenYDividendperShareGrowthPerShare: number | null;
  fiveYDividendperShareGrowthPerShare: number | null;
  threeYDividendperShareGrowthPerShare: number | null;
  receivablesGrowth: number | null;
  inventoryGrowth: number | null;
  assetGrowth: number | null;
  bookValueperShareGrowth: number | null;
  debtGrowth: number | null;
  rdexpenseGrowth: number | null;
  sgaexpensesGrowth: number | null;
};

export type BalanceSheetStatementGrowth = {
  date: Date;
  symbol: string;
  calendarYear: string;
  period: string;
  growthCashAndCashEquivalents: number | null;
  growthShortTermInvestments: number | null;
  growthCashAndShortTermInvestments: number | null;
  growthNetReceivables: number | null;
  growthInventory: number | null;
  growthOtherCurrentAssets: number | null;
  growthTotalCurrentAssets: number | null;
  growthPropertyPlantEquipmentNet: number | null;
  growthGoodwill: number | null;
  growthIntangibleAssets: number | null;
  growthGoodwillAndIntangibleAssets: number | null;
  growthLongTermInvestments: number | null;
  growthTaxAssets: number | null;
  growthOtherNonCurrentAssets: number | null;
  growthTotalNonCurrentAssets: number | null;
  growthOtherAssets: number | null;
  growthTotalAssets: number | null;
  growthAccountPayables: number | null;
  growthShortTermDebt: number | null;
  growthTaxPayables: number | null;
  growthDeferredRevenue: number | null;
  growthOtherCurrentLiabilities: number | null;
  growthTotalCurrentLiabilities: number | null;
  growthLongTermDebt: number | null;
  growthDeferredRevenueNonCurrent: number | null;
  growthDeferrredTaxLiabilitiesNonCurrent: number | null;
  growthOtherNonCurrentLiabilities: number | null;
  growthTotalNonCurrentLiabilities: number | null;
  growthOtherLiabilities: number | null;
  growthTotalLiabilities: number | null;
  growthCommonStock: number | null;
  growthRetainedEarnings: number | null;
  growthAccumulatedOtherComprehensiveIncomeLoss: number | null;
  growthOthertotalStockholdersEquity: number | null;
  growthTotalStockholdersEquity: number | null;
  growthTotalLiabilitiesAndStockholdersEquity: number | null;
  growthTotalInvestments: number | null;
  growthTotalDebt: number | null;
  growthNetDebt: number | null;
};

export type IncomeStatementGrowth = {
  date: Date;
  symbol: string;
  calendarYear: string;
  period: string;
  growthRevenue: number | null;
  growthCostOfRevenue: number | null;
  growthGrossProfit: number | null;
  growthGrossProfitRatio: number | null;
  growthResearchAndDevelopmentExpenses: number | null;
  growthGeneralAndAdministrativeExpenses: number | null;
  growthSellingAndMarketingExpenses: number | null;
  growthOtherExpenses: number | null;
  growthOperatingExpenses: number | null;
  growthCostAndExpenses: number | null;
  growthInterestExpense: number | null;
  growthDepreciationAndAmortization: number | null;
  growthEBITDA: number | null;
  growthEBITDARatio: number | null;
  growthOperatingIncome: number | null;
  growthOperatingIncomeRatio: number | null;
  growthTotalOtherIncomeExpensesNet: number | null;
  growthIncomeBeforeTax: number | null;
  growthIncomeBeforeTaxRatio: number | null;
  growthIncomeTaxExpense: number | null;
  growthNetIncome: number | null;
  growthNetIncomeRatio: number | null;
  growthEPS: number | null;
  growthEPSDiluted: number | null;
  growthWeightedAverageShsOut: number | null;
  growthWeightedAverageShsOutDil: number | null;
};

export type CashFlowStatementGrowth = {
  date: Date;
  symbol: string;
  calendarYear: string;
  period: string;
  growthNetIncome: number | null;
  growthDepreciationAndAmortization: number | null;
  growthDeferredIncomeTax: number | null;
  growthStockBasedCompensation: number | null;
  growthChangeInWorkingCapital: number | null;
  growthAccountsReceivables: number | null;
  growthInventory: number | null;
  growthAccountsPayables: number | null;
  growthOtherWorkingCapital: number | null;
  growthOtherNonCashItems: number | null;
  growthNetCashProvidedByOperatingActivites: number | null;
  growthInvestmentsInPropertyPlantAndEquipment: number | null;
  growthAcquisitionsNet: number | null;
  growthPurchasesOfInvestments: number | null;
  growthSalesMaturitiesOfInvestments: number | null;
  growthOtherInvestingActivites: number | null;
  growthNetCashUsedForInvestingActivites: number | null;
  growthDebtRepayment: number | null;
  growthCommonStockIssued: number | null;
  growthCommonStockRepurchased: number | null;
  growthDividendsPaid: number | null;
  growthOtherFinancingActivites: number | null;
  growthNetCashUsedProvidedByFinancingActivities: number | null;
  growthEffectOfForexChangesOnCash: number | null;
  growthNetChangeInCash: number | null;
  growthCashAtEndOfPeriod: number | null;
  growthCashAtBeginningOfPeriod: number | null;
  growthOperatingCashFlow: number | null;
  growthCapitalExpenditure: number | null;
  growthFreeCashFlow: number | null;
};
