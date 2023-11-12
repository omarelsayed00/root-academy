import styled from "styled-components";

export const Container = styled.div`
  width: 66.5%;
  background-color: #ffffff;
  border: 0.4px solid #ecedee;
  box-shadow: 0px 2px 1px rgba(236, 237, 238, 0.6);
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  padding-top: 14px;
  gap: 6px;
`;

export const Title = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 11px;
    font-weight: bold;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  h1 {
    font-size: 20px;
    line-height: px;
    font-weight: bold;
    text-align: right;
  }
  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    text-align: right;

    color: #acadb1;
  }
`;

export const Percent = styled.div`
  padding: 6px 10px;
  display: flex;
  align-items: center;
  border-radius: 26px;
  background: #f7f5ff;
  border-radius: 26px;
  color: #a090ff;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 16px;
`;
