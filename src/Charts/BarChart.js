import React from "react";
import ReactEcharts from "echarts-for-react";
import data from "../Wine-Data.json";

function BarChart() {

  const alcoholMalicAcidAvgMap = new Map();
  const MalicAcid1 = "Malic Acid";

  for (let i = 0; i < data.length; i++) {
    alcoholMalicAcidAvgMap.set(
      data[i].Alcohol,
      alcoholMalicAcidAvgMap.has(data[i].Alcohol)
        ? alcoholMalicAcidAvgMap.get(data[i].Alcohol) + data[i][MalicAcid1]
        : data[i][MalicAcid1]
    );
  }
  const alcoholType = alcoholMalicAcidAvgMap.size;
  let occurance = [alcoholType + 1];
  for (let i = 0; i <= alcoholType; ++i) occurance[i] = 0;
  for (let i = 0; i < data.length; i++) {
    occurance[data[i].Alcohol]++;
  }

  for (const [key, value] of alcoholMalicAcidAvgMap) {
    alcoholMalicAcidAvgMap.set(key, value / occurance[key]);
  }
  let xAxis = [];
  let yAxis = [];
  for (const [key, value] of alcoholMalicAcidAvgMap) {
    xAxis.push(key);
    yAxis.push(value);
  }

  const option = {
    grid: {},
    tooltip: {
      axisPointer: {
        type: "shadow",
      },
    },
    xAxis: {
      axisLabel: {
        align: "center",
        fontWeight: "bolder",
      },
      type: "category",
      data: xAxis,
      name: "Alcohol",
    },
    yAxis: {
      axisLabel: {
        align: "center",
        fontWeight: "bolder",
      },
      type: "value",
      name: "Avg Malic Acid",
    },
    series: [
      {
        data: yAxis,
        type: "bar",
      },
    ],
  };
  return <ReactEcharts option={option} />;
}
export default BarChart;
