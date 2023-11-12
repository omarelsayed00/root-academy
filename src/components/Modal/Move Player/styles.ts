import Image from "next/image";
import styled, { css } from "styled-components";

export const MLStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: transparent;
  z-index: 120;
  transform: translate(-50%, -50%);
`;

export const MLContainer = styled.div`
  overflow: hidden;
  background-color: white;
  border-radius: 14px;
  box-shadow: 0px 0px 14px -4px rgba(0, 0, 0, 0.05),
    0px 32px 48px -8px rgba(0, 0, 0, 0.1);
  margin: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 400px;
  padding: 24px 0px;
`;

export const MLHeader = styled.div`
  //height: 24px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 30px;
    font-weight: 600;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 12px 36px;
  height: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 24px;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;
  height: 100%;
  padding: 36px;

  p {
    color: black;
    font-size: 20px;
  }
`;

export const Team = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  background-color: #f2f2f7;
  padding: 8px;
  border-radius: 20px;

  h1 {
    font-size: 22px;
    font-weight: 600;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  gap: 24px;
`;

export const SelectControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 3.5px solid #ff9f4b;
  border-radius: 14.767px;
  padding: 0px 12px;
  height: 70%;
  gap: 12px;
`;

export const Button = styled.button`
  display: flex;
  text-align: center;
  justify-content: center;
  gap: 6px;
  font-size: 20px;
  color: white;
  font-weight: 600;
  padding: 6px;
  width: 140px;
  background-color: #4bad60;
  border-radius: 20px;
  border: none;
  cursor: pointer;

  :hover {
    opacity: 0.85;
  }
`;

export const Button2 = styled.button`
  display: flex;
  text-align: center;
  justify-content: center;
  gap: 6px;
  font-size: 20px;
  font-weight: 600;
  color: white;
  padding: 6px;
  width: 140px;
  background-color: #db1515;
  border-radius: 20px;
  border: none;
  cursor: pointer;

  :hover {
    opacity: 0.85;
  }
`;
