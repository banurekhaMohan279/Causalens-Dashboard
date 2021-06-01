import React, { useEffect } from 'react';
import * as d3 from 'd3';

export default function BarChart({ id, data, width = 550, height = 300 }) {
  useEffect(() => {
    const svg = d3
      .select('#' + id)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .style('margin-left', 100);

    svg
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * 70)
      .attr('y', (d, i) => height - 10 * d)
      .attr('width', 65)
      .attr('height', (d, i) => d * 10)
      .attr('fill',  'green');
  }, []);
  return <div id={id} />;
}
