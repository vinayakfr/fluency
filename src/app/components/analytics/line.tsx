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

interface MultiLineChartProps {
  data: Dataset[]; // Array of datasets
  width?: number;
  height?: number;
}

const MultiLineChart: React.FC<MultiLineChartProps> = ({
  data,
  width = 1320,
  height = 200,
}) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const margin = { top: 20, right: 30, bottom: 50, left: 20 };
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
    const xScale = d3
      .scaleTime()
      .domain(
        d3.extent(data[0].values, (d) => new Date(d.date)) as [Date, Date]
      )
      .range([0, innerWidth]);

    const yScale = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(data, (dataset) =>
          d3.max(dataset.values, (d) => d.value)
        ) as number,
      ])
      .range([innerHeight, 0]);

    // Create a color scale from #f43f5e to #22d3ee
    const colorScale = d3
      .scaleLinear<string>()
      .domain([0, data.length - 1])
      .range(["#f43f5e", "#22d3ee"]);

    // Add X-axis
    chart
      .append("g")
      .attr("transform", `translate(0, ${innerHeight})`)
      .call(
        d3
          .axisBottom(xScale)
          .tickFormat((domainValue) =>
            d3.timeFormat("%b %d")(domainValue as Date)
          )
      )
      .selectAll("text")
      .attr("transform", "rotate(-45)")
      .style("text-anchor", "end")
      .attr("fill", "white");

    // Add Y-axis
    chart.append("g").call(d3.axisLeft(yScale));

    // Add lines with color scale
    const lineGenerator = d3
      .line<DataPoint>()
      .x((d) => xScale(new Date(d.date)))
      .y((d) => yScale(d.value))
      .curve(d3.curveMonotoneX); // Smooth lines

    chart
      .selectAll(".line")
      .data(data)
      .enter()
      .append("path")
      .attr("class", "line")
      .attr("d", (dataset) => lineGenerator(dataset.values)!)
      .attr("fill", "none")
      .attr("stroke", (d, i) => colorScale(i)) // Apply color scale based on index
      .attr("stroke-width", 3);

    // Add labels
    data.forEach((dataset, i) => {
      chart
        .append("text")
        .datum(dataset.values[dataset.values.length - 1])
        .attr("x", (d) => xScale(new Date(d.date)) + 5)
        .attr("y", (d) => yScale(d.value))
        .text(dataset.name)
        .style("fill", colorScale(i)) // Use color scale for labels
        .style("font-size", "12px");
    });
  }, [data, height, width]);

  return <svg ref={svgRef} width={width} height={height} />;
};

export default MultiLineChart;
