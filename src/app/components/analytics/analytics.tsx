import React from "react";
import MultiLineChart from "./line";

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

  return (
    <div className="flex place-content-center place-items-center w-full">
      <div className="flex items-center justify-between h-auto">
        <div className="flex-col place-content-center place-items-center">
          <div className="flex place-content-center place-items-center p-2 bg-white/10 rounded-xl shadow-lg">
            <MultiLineChart data={sampleData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
