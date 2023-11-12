import styled, { css } from "styled-components";

export const TabsContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
  margin-bottom: 17px;
  margin-right: -36px;
`;

export const Tab = styled.div<{ active: boolean }>`
  padding-block: 20px;
  margin-inline-start: 38px;
  font-weight: 400;
  font-size: 14px;
  line-height: 134.6%;
  color: ${({ active }) => (active ? "#5C9EF6" : "#000")};
  border-bottom: 2px solid
    ${({ active }) => (active ? "#5C9EF6" : "transparent")};
  transition: all 0.2s ease-in;
  cursor: pointer;
`;
