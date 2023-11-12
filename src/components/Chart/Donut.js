/* eslint-disable react/display-name */
import React, { memo } from "react";

const Donut = memo(
  ({ values = [], width, height, bgColor, lineWidth = 3.5 }) => {
    const r = 15.91549430918954;
    const circumference = 2 * Math.PI * r;

    const sum = values.reduce((a, b) => a + b[0], 0);
    /* if (sum < 100 && bgColor) {
      values.push([sum, bgColor]);
    } */

    const aggregated = values.reduce(
      (output, item) => {
        const [value, color] = item;
        const length = (circumference / 100) * value;
        const fillLength = (circumference / 100) * (100 - value);
        const dashArray = [length, fillLength];
        const rotation = 25 - output.total;
        output.total += value;
        output.items.push([dashArray.join(" "), rotation, color]);
        return output;
      },
      {
        total: 0,
        items: [],
      }
    );
    return (
      <svg width={width} height={height} viewBox="0 0 40 40">
        {aggregated.items.map(([dashArray, rotation, color], i) => (
          <circle
            key={`cicle_${i}`}
            cx="20"
            cy="20"
            r={r}
            fill="transparent"
            stroke={color}
            stroke-width={lineWidth}
            strokeDasharray={dashArray}
            strokeDashoffset={rotation}
          />
        ))}
      </svg>
    );
  }
);

export default Donut;
