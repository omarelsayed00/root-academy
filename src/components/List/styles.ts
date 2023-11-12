import styled, { css } from "styled-components";

const Flex = css`
  display: flex;
  align-items: center;
`;

export const ListContainer = styled.div<{ type: "head" | "body" }>`
  ${Flex}
  justify-content: space-between;
  padding: 12px 20px;
  ${({ type }) =>
    type === "head"
      ? css`
          background-color: #f9fafb;
        `
      : css``}
`;

export const ListInfo = styled.div`
  ${Flex};
  flex: 1;
  flex-direction: row;
  gap: 120px;
`;

export const ListActions = styled.div`
  ${Flex};
  width: 100%;
  max-width: 0px;
`;

export const Item = styled.div<{ length: number; color?: string }>`
  width: calc(100% / ${({ length }) => length});
  height: 20px;

  span {
    display: inline-block;
    color: ${({ color }) => color || "#727272"};
    font-weight: 300;
    font-size: 11px;
    line-height: 12px;
    text-align: center;
  }
`;

export const Status = styled(Item)<{
  status: "قيد المراجعة" | "تم التحقق" | "تم الرفض";
}>`
  span {
    padding: 6px 6px;
    font-size: 9px;
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

export const ReportsStatus = styled(Item)<{
  status: "قيد المراجعة" | "تم التحقق";
}>`
  span {
    padding: 6px 6px;
    font-size: 9px;
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

export const AnalyticsStatus = styled(Item)<{
  status: "الأرباح" | "السائقين" | "المستخدمين";
}>`
  span {
    padding: 5px 8px;
    font-size: 6px;
    border-radius: 3px;
    line-height: 7px;
    background-color: ${({ status }) =>
      status === "الأرباح"
        ? "#F3B304"
        : status === "السائقين"
        ? "#2FBF71"
        : "#CC4F1E"};
    color: ${({ status }) => (status === "الأرباح" ? "#111" : "#eee")};
  }
`;

export const Button = styled.button`
  font-size: 10px;
  color: dark--grey;
  font-weight: 100;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 80px;
  height: 25px;
  background-color: #e5e4e2;
  border-radius: 5px;
  border: none;
  //padding: 5px 5px 5 5;
  cursor: pointer;
`;

export const ArrowButton = styled.button`
  font-size: 15px;
  font-weight: 100;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 30px;
  height: 30px;
  background-color: transparent;
  border-radius: 5px;
  border-color: #e5e4e2;
  //padding: 5px 5px 5 5;
  cursor: pointer;
`;
