import { LineChart } from "@toast-ui/react-chart";
import React from "react";

export default function Line() {
  const data = {
    categories: [
      "01/01/2020",
      "02/01/2020",
      "03/01/2020",
      "04/01/2020",
      "05/01/2020",
      "06/01/2020",
      "07/01/2020",
      "08/01/2020",
      "09/01/2020",
      "10/01/2020",
      "11/01/2020",
      "12/01/2020",
    ],
    series: [
      {
        name: "Seoul",
        data: [-3.5, -1.1, 4.0, 11.3, 17.5, 21.5, 25.9, 27.2, 24.4, 13.9, 6.6, -0.6],
      },
      {
        name: "Seattle",
        data: [3.8, 5.6, 7.0, 9.1, 12.4, 15.3, 17.5, 17.8, 15.0, 10.6, 6.6, 3.7],
      },
    ],
  };

  const options = {
    chart: {
      width: 1160,
      height: 650,
      title: "Mean.Tempolary",
    },
    series: {
      spline: true,
      zoomable: true,
    },
  };

  return (
    <div>
      <h2>Line 차트</h2>
      <LineChart data={data} options={options} />
    </div>
  );
}
