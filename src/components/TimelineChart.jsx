import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const TimelineChart = ({ data, color = "#0d6efd" }) => {
  const ref = useRef();

  useEffect(() => {
    const margin = { top: 20, right: 20, bottom: 20, left: 20 };
    const width = 600 - margin.left - margin.right;
    const height = data.length * 100;

    d3.select(ref.current).selectAll("svg").remove();

    const svg = d3
      .select(ref.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Scale
    const yScale = d3
      .scalePoint()
      .domain(data.map((d) => d.title))
      .range([0, height - 50])
      .padding(1);

    // Line
    svg
      .append("line")
      .attr("x1", width / 2)
      .attr("x2", width / 2)
      .attr("y1", 0)
      .attr("y2", height)
      .attr("stroke", "#ccc")
      .attr("stroke-width", 2);

    // Nodes
    svg
      .selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", width / 2)
      .attr("cy", (d) => yScale(d.title))
      .attr("r", 10)
      .attr("fill", color)
      .attr("stroke", "white")
      .attr("stroke-width", 3);

    // Labels
    svg
      .selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .attr("x", width / 2 + 20)
      .attr("y", (d) => yScale(d.title))
      .attr("alignment-baseline", "middle")
      .style("font-size", "14px")
      .text((d) => `${d.title} (${d.duration})`);
  }, [data, color]);

  return <div ref={ref} className="d3-timeline" />;
};

export default TimelineChart;
