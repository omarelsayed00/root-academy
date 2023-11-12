import styled from "styled-components";

export const IconWrapper = styled.div<{
  strokeColor?: string;
  fill?: string;
  strokeWidth: number;
}>`
  display: flex;
  & > svg {
    fill: ${({ fill }) => fill || "transparent"};
    path {
      stroke-width: ${({ strokeWidth }) => strokeWidth};
      fill: ${({ fill }) => fill || "B9BABB"};
      stroke: ${({ strokeColor }) => strokeColor || "#transparent"};
      fill: ${({ fill }) => fill || "B9BABB"};
    }
    circle {
      stroke: ${({ fill }) => fill || "B9BABB"};
    }
  }
`;
