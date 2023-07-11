import React, { useEffect, useRef } from "react";
// import Chart from "@toast-ui/chart";
// import { BarChart } from "@toast-ui/chart";
// import "@toast-ui/chart/dist/toastui-chart.min.css";
import "@toast-ui/chart/dist/toastui-chart.min.css";
import { BarChart, LineChart } from "@toast-ui/react-chart";

export default function List() {
  const data = {
    categories: ["June", "July", "Aug", "Sep", "Oct", "Nov"],
    series: [
      {
        name: "Budget",
        data: [5000, 3000, 5000, 7000, 6000, 4000],
      },
      {
        name: "Income",
        data: [8000, 1000, 7000, 2000, 5000, 3000],
      },
    ],
  };

  const options = {
    chart: {
      width: 1160,
      height: 650,
      title: "Monthly Revenue",
      format: "1,000",
    },
    yAxis: {
      title: "Month",
    },
    xAxis: {
      title: "Amount",
      min: 0,
      max: 9000,
      suffix: "$",
    },
    series: {
      showLabel: true,
    },
  };

  return (
    <div>
      <h2>Chart 목록</h2>
      <BarChart data={data} options={options} />
    </div>
  );
}
