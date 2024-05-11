"use client";

import RatioTable from "./ratio-table";

const ratioData = {
  dividendYielTTM: 0.005256817435111159,
  dividendYielPercentageTTM: 0.525681743511116,
  peRatioTTM: 28.025156368924883,
  pegRatioTTM: 2.56143397196098,
  payoutRatioTTM: 0.15083325862395283,
  currentRatioTTM: 1.0371016459110658,
  quickRatioTTM: 0.874642632165528,
  cashRatioTTM: 0.23889131172166497,
  daysOfSalesOutstandingTTM: 39.35755968586799,
  daysOfInventoryOutstandingTTM: 10.954025147237994,
  operatingCycleTTM: 50.31158483310598,
  daysOfPayablesOutstandingTTM: 80.42033256764762,
  cashConversionCycleTTM: -30.108747734541637,
  grossProfitMarginTTM: 0.4558582685005883,
  operatingProfitMarginTTM: 0.3098345749601046,
  pretaxProfitMarginTTM: 0.3094991654066972,
  netProfitMarginTTM: 0.2630580441954494,
  effectiveTaxRateTTM: 0.15005249254944458,
  returnOnAssetsTTM: 0.2975273479524971,
  returnOnEquityTTM: 1.4833218821339125,
  returnOnCapitalEmployedTTM: 0.553586561105675,
  netIncomePerEBTTTM: 0.8499475074505554,
  ebtPerEbitTTM: 0.9989174560216508,
  ebitPerRevenueTTM: 0.3098345749601046,
  debtRatioTTM: 0.30997803865315593,
  debtEquityRatioTTM: 1.4096827236703777,
  longTermDebtToCapitalizationTTM: 0.5531154946544196,
  totalDebtToCapitalizationTTM: 0.585007606944693,
  interestCoverageTTM: 39.38707528314457,
  cashFlowToDebtRatioTTM: 1.05710871020174,
  companyEquityMultiplierTTM: 4.54768579669515,
  receivablesTurnoverTTM: 9.273948967193196,
  payablesTurnoverTTM: 4.538653203068651,
  inventoryTurnoverTTM: 33.32108472400513,
  fixedAssetTurnoverTTM: 8.763675194047673,
  assetTurnoverTTM: 1.1310330724250246,
  operatingCashFlowPerShareTTM: 7.17668657944096,
  freeCashFlowPerShareTTM: 6.615601236309102,
  cashPerShareTTM: 4.358732160030575,
  operatingCashFlowSalesRatioTTM: 0.28971786291706736,
  freeCashFlowOperatingCashFlowRatioTTM: 0.921818329821007,
  cashFlowCoverageRatiosTTM: 1.05710871020174,
  shortTermCoverageRatiosTTM: 8.665491025942472,
  capitalExpenditureCoverageRatioTTM: 12.790721888014808,
  dividendPaidAndCapexCoverageRatioTTM: 4.648238459598083,
  priceBookValueRatioTTM: 37.91974314257217,
  priceToBookRatioTTM: 37.91974314257217,
  priceToSalesRatioTTM: 7.389491141781287,
  priceEarningsRatioTTM: 28.025156368924883,
  priceToFreeCashFlowsRatioTTM: 27.669029111353133,
  priceToOperatingCashFlowsRatioTTM: 25.446283320098043,
  priceCashFlowRatioTTM: 25.446283320098043,
  priceEarningsToGrowthRatioTTM: 2.56143397196098,
  priceSalesRatioTTM: 7.389491141781287,
  enterpriseValueMultipleTTM: 22.333041047913664,
  priceFairValueTTM: 37.91974314257217,
  dividendPerShareTTM: 0.96,
};

const ratios = {
  issueData: {
    name: "Issue Data",
    fields: [
      {
        label: "Last Px",
        value: "USD/182.89",
      },
      {
        label: "P/E",
        value: "29.9",
      },
      {
        label: "Dvd Ind Yld",
        value: "0.5%",
      },
      {
        label: "P/B",
        value: "17.69",
      },
      {
        label: "P/S",
        value: "17.69",
      },
      {
        label: "52 Week Range",
        value: "3.11 - 20.09",
      },
      {
        label: "Volume",
        value: "59,763,221",
      },
      {
        label: "Avg. Volume",
        value: "40,368,106",
      },
    ],
  },

  perShareData: {
    name: "Per Share Data",
    fields: [],
  },

  cashFlowAnalysis: {
    name: "Cash Flow Analysis",
    fields: [],
  },

  growthPotential: {
    name: "Growth Potential",
    fields: [],
  },

  profitability: {
    name: "Profitability",
    fields: [],
  },

  structure: {
    name: "Structure",
    fields: [],
  },
};

interface RatiosScreenProps {
  ticker: string;
}

export default function RatiosScreen(props: RatiosScreenProps) {
  const { ticker } = props;

  return (
    <section className=" space-y-8 pb-12 ">
      <div className=" grid divide-y divide-inherit lg:grid-cols-3 lg:divide-x lg:divide-y-0 dark:border-main-gray-600 ">
        <div className=" flex flex-wrap gap-x-4 py-2 lg:w-full lg:justify-center lg:px-3 ">
          <span className="  ">Fiscal Year End</span>
          <span className=" font-bold ">09/2023</span>
        </div>

        <div className=" flex flex-wrap gap-x-4 py-2 lg:w-full lg:justify-center lg:px-3 ">
          <span className="  ">Last Quarter End</span>
          <span className=" font-bold ">09/2023 Q4</span>
        </div>

        <div className=" flex flex-wrap gap-x-4 py-2 lg:w-full lg:justify-center lg:px-3 ">
          <span className="  ">Current/T12M</span>
          <span className=" font-bold ">(USD)</span>
        </div>
      </div>

      <div className=" grid gap-10 sm:grid-cols-2 sm:justify-center xl:grid-cols-3 ">
        <RatioTable className="  " ratio={ratios.issueData} />

        <RatioTable className="  " ratio={ratios.perShareData} />

        <RatioTable className="  " ratio={ratios.cashFlowAnalysis} />

        <RatioTable className="  " ratio={ratios.growthPotential} />

        <RatioTable className="  " ratio={ratios.profitability} />

        <RatioTable className="  " ratio={ratios.structure} />
      </div>
    </section>
  );
}
