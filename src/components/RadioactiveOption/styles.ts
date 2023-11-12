import styled from "styled-components";

export const Container = styled.div`
  width: 590px;
  background-color: #ffffff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  //padding: 16px;
`;

export const Content = styled.div`
  padding: 16px 16px 8px 16px;
  align-items: center;
  display: flex;
  gap: 24px;

  img {
    margin-right: 12px;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 350px;

  h1 {
    font-size: 16px;
    font-weight: 600;
  }

  p {
    font-size: 11px;
    line-height: 18px;
    color: #868686;
  }
`;

export const Separator = styled.label`
  border: 1px solid #f5f5f5;
  width: 100%;
`;

export const Driver = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 8px;
  margin-right: 16px;
  cursor: pointer;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  //align-items: center;
  margin-right: 16px;
  margin-top: 0;
  vertical-align: middle;
  width: 100%;
  gap: 6px;

  h1 {
    font-size: 14px;
  }
  h3 {
    font-size: 12px;
    color: #9f9f9f;
  }
`;

export const Button = styled.button`
  outline: none;
  font-family: inherit;
  font-size: 11px;

  color: white;
  background: #1877f2;
  border: 1px solid #e6e6e6;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.04);
  border-radius: 7px;
  padding: 12px 24px;
  cursor: pointer;
  margin-inline-end: 10px;
  :hover {
    //box-shadow: 2px 2px 2px 1px rgba(0, 0, 0.5);
  }
`;

export const Button2 = styled.button`
  background-color: transparent;
  border: 1px solid #e6e6e6;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.04);
  border-radius: 7px;
  padding: 12px 28px;
  cursor: pointer;
  font-size: 11px;
  color: #5e5e5e;

  :hover {
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
    color: black;
  }
`;

export const DriverForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 200px;
  padding: 24px;
  border: 1px solid black #eff0f7;
  box-shadow: 0px 4px 8px rgba(74, 58, 255, 0.08);
  h1 {
    font-size: 16px;
    font-weight: 600;
    color: black;
  }

  p {
    font-size: 12px;
    color: #9f9f9f;
  }
`;

export const RatingForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  width: 200px;
  background-color: #fcf6e4;
  border-radius: 8px;
  height: 40px;
  padding: 4px 10px;
  h1 {
    font-size: 12px;
    font-weight: 600;
    color: black;
  }

  p {
    padding-top: 4px;
    font-size: 10px;
    color: #a3905d;
  }
  div {
    display: flex;
    align-items: center;
    //gap: 0px;
  }
`;
