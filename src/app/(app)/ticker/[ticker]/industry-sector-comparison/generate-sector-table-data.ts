import { SectorPerformanceHistory } from "@/modules/market/types";
import appUtils from "@/utils/app-util";

type RowData = {
  label: string;
  cols: string[];
};

export function generateSectorData(
  data: SectorPerformanceHistory[]
): RowData[] {
  return [
    {
      label: "Basic Materials",
      cols: data.map((item) =>
        appUtils.formatNumber(item.basicMaterialsChangesPercentage, {
          style: "decimal",
        })
      ),
    },
    {
      label: "Communication Services",
      cols: data.map((item) =>
        appUtils.formatNumber(item.communicationServicesChangesPercentage, {
          style: "decimal",
        })
      ),
    },
    {
      label: "Consumer Cyclical",
      cols: data.map((item) =>
        appUtils.formatNumber(item.consumerCyclicalChangesPercentage, {
          style: "decimal",
        })
      ),
    },
    {
      label: "Consumer Defensive",
      cols: data.map((item) =>
        appUtils.formatNumber(item.consumerDefensiveChangesPercentage, {
          style: "decimal",
        })
      ),
    },
    {
      label: "Energy",
      cols: data.map((item) =>
        appUtils.formatNumber(item.energyChangesPercentage, {
          style: "decimal",
        })
      ),
    },
    {
      label: "Financial Services",
      cols: data.map((item) =>
        appUtils.formatNumber(item.financialServicesChangesPercentage, {
          style: "decimal",
        })
      ),
    },
    {
      label: "Healthcare",
      cols: data.map((item) =>
        appUtils.formatNumber(item.healthcareChangesPercentage, {
          style: "decimal",
        })
      ),
    },
    {
      label: "Industrials",
      cols: data.map((item) =>
        appUtils.formatNumber(item.industrialsChangesPercentage, {
          style: "decimal",
        })
      ),
    },
    {
      label: "Real Estate",
      cols: data.map((item) =>
        appUtils.formatNumber(item.realEstateChangesPercentage, {
          style: "decimal",
        })
      ),
    },
    {
      label: "Technology",
      cols: data.map((item) =>
        appUtils.formatNumber(item.technologyChangesPercentage, {
          style: "decimal",
        })
      ),
    },
    {
      label: "Utilities",
      cols: data.map((item) =>
        appUtils.formatNumber(item.utilitiesChangesPercentage, {
          style: "decimal",
        })
      ),
    },
  ];
}
