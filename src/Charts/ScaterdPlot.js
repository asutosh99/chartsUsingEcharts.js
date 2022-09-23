import React from "react";
import ReactEcharts from "echarts-for-react";
import data from "../Wine-Data.json";

function ScaterdPlot() {
  const ColorIntensity = "Color intensity";
  let xAxis = [];
  let yAxis = [];
  for (let i = 0; i < data.length; i++) {
    xAxis.push(data[i][ColorIntensity]);
    yAxis.push(data[i].Hue);
  }

  const option = {
    axisPointer: {
        type: "shadow"
      },
    xAxis: {
      type: "category",
      data: xAxis,
      name: 'Color intensity',
      axisLabel: {
        align: 'center'
      },
    },
    yAxis: {
      type: "value",
      name:'Hue',
      axisLabel: {
        align: 'center'
      },
    },
    series: [
      {
        data: yAxis,
        type: "scatter",
      },
    ],
  };
  return <ReactEcharts option={option} />;
}
export default ScaterdPlot;
