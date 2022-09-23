import React from "react";
import ReactEcharts from "echarts-for-react";
import data from "../Wine-Data.json";

function BarChart() {
  // console.log(data[0]);

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
  //console.log(alcoholMalicAcidAvgMap);
  const alcoholType = alcoholMalicAcidAvgMap.size;
  // console.log(alcoholType);
  let occurance = [alcoholType + 1];
  for (let i = 0; i <= alcoholType; ++i) occurance[i] = 0;
  for (let i = 0; i < data.length; i++) {
    occurance[data[i].Alcohol]++;
  }
  // console.log(occurance);

  for (const [key, value] of alcoholMalicAcidAvgMap) {
    console.log(key, value);
    alcoholMalicAcidAvgMap.set(key, value / occurance[key]);
  }
  // console.log(alcoholMalicAcidAvgMap);
  let xAxis = [];
  let yAxis = [];
  for (const [key, value] of alcoholMalicAcidAvgMap) {
    console.log(key, value);
    xAxis.push(key);
    yAxis.push(value);
  }
  // console.log(xAxis);
  //console.log(yAxis);

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
      name: "Alcohol"
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
        type: "bar"
      },
    ],
  };
  return <ReactEcharts option={option} />;
}
export default BarChart;
