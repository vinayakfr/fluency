"use client";

import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

// Define the types for the data
interface DataPoint {
  date: string; // Dates as strings (ISO format)
  value: number;
}

interface Dataset {
  name: string; // Name of the dataset
  values: DataPoint[]; // Array of data points
}

interface BarChartProps {
  data: Dataset[]; // Array of datasets
  width?: number;
  height?: number;
}

const BarChart: React.FC<BarChartProps> = ({
  data,
  width = 1320,
  height = 300,
}) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const margin = { top: 20, right: 30, bottom: 50, left: 40 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    // Select the SVG element and clear previous content
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    // Create a group element for the chart
    const chart = svg
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // Set up scales
    const x0Scale = d3
      .scaleBand()
      .domain(data[0].values.map((d) => d.date)) // Dates as categories
      .range([0, innerWidth])
      .padding(0.2);

    const x1Scale = d3
      .scaleBand()
      .domain(data.map((d) => d.name)) // Dataset names as categories
      .range([0, x0Scale.bandwidth()])
      .padding(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(data, (dataset) =>
          d3.max(dataset.values, (d) => d.value)
        ) as number,
      ])
      .range([innerHeight, 0]);

    const colorScale = d3
      .scaleLinear<string>()
      .domain([0, data.length - 1]) // Index-based domain
      .range(["#f43f5e", "#22d3ee"]); // Color range from red to blue

    // Add X-axis
    chart
      .append("g")
      .attr("transform", `translate(0, ${innerHeight})`)
      .call(d3.axisBottom(x0Scale).tickFormat(d3.timeFormat("%b %d") as any))
      .selectAll("text")
      .attr("transform", "rotate(-45)")
      .style("text-anchor", "end")
      .attr("fill", "white");

    // Add Y-axis
    chart
      .append("g")
      .call(d3.axisLeft(yScale).ticks(5))
      .selectAll("text")
      .attr("fill", "white");

    // Add bars
    chart
      .selectAll(".group")
      .data(data)
      .enter()
      .append("g")
      .attr("class", "group")
      .attr("transform", (d) => `translate(${x0Scale(d.values[0].date)}, 0)`)
      .selectAll("rect")
      .data((d) => d.values.map((value) => ({ ...value, datasetName: d.name })))
      .enter()
      .append("rect")
      .attr("x", (d) => x0Scale(d.date)! + (x1Scale(d.datasetName) || 0))
      .attr("y", (d) => yScale(d.value))
      .attr("width", x1Scale.bandwidth())
      .attr("height", (d) => innerHeight - yScale(d.value))
      .attr("fill", (d) => {
        const index = data.findIndex(
          (dataset) => dataset.name === d.datasetName
        );
        return colorScale(index); // Use the numeric index with the color scale
      });

    // Add legend
    const legend = svg
      .append("g")
      .attr("transform", `translate(${margin.left}, ${height - 10})`);

    legend
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 100)
      .attr("width", 20)
      .attr("height", 10)
      .attr("fill", "#fff");

    legend
      .selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .attr("x", (d, i) => i * 100 + 25)
      .attr("y", 10)
      .attr("fill", "white")
      .text((d) => d.name);
  }, [data, height, width]);

  return <svg ref={svgRef} width={width} height={height} />;
};

export default BarChart;
