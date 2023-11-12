import styled, { css } from "styled-components";

const Flex = css`
  display: flex;
  align-items: center;
`;

export const ListContainer = styled.div<{ type: "head" | "body" }>`
  ${Flex}
  justify-content: space-between;
  padding: 11px 10px;
  ${({ type }) =>
    type === "head"
      ? css`
          background-color: #f9fafb;
        `
      : css``}
  width:100%;
`;

export const ListInfo = styled.div`
  ${Flex};
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 12px;
`;

export const ListActions = styled.div`
  ${Flex};
  width: 100%;
  max-width: 0px;
`;

export const Item = styled.div<{ length: number; color?: string }>`
  //width: 185px;
  height: 11px;

  span {
    display: inline-block;
    color: ${({ color }) => color || "#000000"};
    font-weight: 300;
    font-size: 11px;
    line-height: 11px;
    text-align: right;
  }
`;

export const Status = styled(Item)<{
  status: "قيد المراجعة" | "تم التحقق" | "تم الرفض";
}>`
  span {
    padding: 5px 8px;
    font-size: 8px;
    border-radius: 3px;
    line-height: 7px;
    background-color: ${({ status }) =>
      status === "قيد المراجعة"
        ? "#F3B304"
        : status === "تم التحقق"
        ? "#2FBF71"
        : "#CC4F1E"};
    color: ${({ status }) => (status === "قيد المراجعة" ? "#111" : "#eee")};
  }
`;
