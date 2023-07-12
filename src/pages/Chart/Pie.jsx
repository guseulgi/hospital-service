import { BarChart, PieChart } from "@toast-ui/react-chart";
import React, { useRef } from "react";

export default function Pie() {
  const chartRef = useRef(null);

  const data = {
    categories: ["Browser"],
    series: [
      {
        name: "Chrome",
        data: 46.02,
        visible: false,
      },
      {
        name: "IE",
        data: 20.47,
      },
      {
        name: "Firefox",
        data: 17.71,
      },
      {
        name: "Safari",
        data: 5.45,
      },
      {
        name: "Opera",
        data: 3.1,
      },
      {
        name: "Etc",
        data: 7.25,
      },
    ],
  };

  const options = {
    chart: {
      width: 1160,
      height: 650,
      title: "Most Browser",
      format: "1,000",
    },
    series: {
      selectable: true,
      clockwise: false,
      radiusRange: {
        inner: "40%",
        outer: "100%",
      },
    },
  };

  const handleClickButton = () => {
    chartRef.current.getInstance().showSeriesDataLabel();
    console.log("...", chartRef.current);
    console.log("type:", chartRef.current.getInstance().showSeriesDataLabel());
  };

  return (
    <>
      <h2>Pie 차트</h2>
      <PieChart ref={chartRef} data={data} options={options} />
      <button onClick={handleClickButton}>showSeriesDataLabel</button>
    </>
  );
}
