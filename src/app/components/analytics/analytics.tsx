import React from "react";
import MultiLineChart from "./line";
import BarChart from "./bar";

function Analytics() {
  const sampleData = [
    {
      name: "Dataset 1",
      values: [
        { date: "2025-01-01", value: 30 },
        { date: "2025-01-02", value: 50 },
        { date: "2025-01-03", value: 90 },
        { date: "2025-01-04", value: 70 },
      ],
    },
    {
      name: "Dataset 2",
      values: [
        { date: "2025-01-01", value: 40 },
        { date: "2025-01-02", value: 20 },
        { date: "2025-01-03", value: 60 },
        { date: "2025-01-04", value: 80 },
      ],
    },
    {
      name: "Dataset 2",
      values: [
        { date: "2025-01-01", value: 10 },
        { date: "2025-01-02", value: 40 },
        { date: "2025-01-03", value: 70 },
        { date: "2025-01-04", value: 30 },
      ],
    },
  ];

  // const sampleData2 = [
  //   {
  //     name: "Grammar",
  //     values: [
  //       { date: "2025-01-01", value: 45 },
  //       { date: "2025-01-02", value: 80 },
  //       { date: "2025-01-03", value: 34 },
  //       { date: "2025-01-04", value: 78 },
  //     ],
  //   },
  //   {
  //     name: "Fluency",
  //     values: [
  //       { date: "2025-01-01", value: 50 },
  //       { date: "2025-01-02", value: 67 },
  //       { date: "2025-01-03", value: 87 },
  //       { date: "2025-01-04", value: 40 },
  //     ],
  //   },
  //   {
  //     name: "Confidence",
  //     values: [
  //       { date: "2025-01-01", value: 10 },
  //       { date: "2025-01-02", value: 40 },
  //       { date: "2025-01-03", value: 70 },
  //       { date: "2025-01-04", value: 30 },
  //     ],
  //   },
  // ];

  return (
    <div className="flex place-content-center place-items-center w-full">
      <div className="flex items-center justify-between h-auto">
        <div className="flex-col place-content-center place-items-center">
          <div className="flex place-content-center place-items-center p-2 bg-white/10 rounded-xl shadow-lg">
            <MultiLineChart data={sampleData} />
          </div>
          {/* <div className="flex place-content-center place-items-center p-2 rounded-xl w-auto shadow-lg">
            <BarChart data={sampleData2} />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Analytics;
