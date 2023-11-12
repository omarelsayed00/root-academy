import Image from "next/image";
import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 28px 82px;
  gap: 18px;
`;

export const Schedule = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 24px;
  background-color: #d9d9d9;
  border-radius: 12px;

  h1 {
    font-size: 24px;
    line-height: 48px;
    font-weight: 600;
    color: var(--primary-color);
  }
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  h1 {
    padding-right: 8%;
  }

  input {
    font-size: 20px;
    font-weight: 600;
    color: black;
    background-color: #f2f2f7;
    border-radius: 4px;
    padding: 8px 10px;
    border: none;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 46px;
  width: 85%;
  justify-content: space-between;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: right;

  h2 {
    font-size: 16px;
    line-height: 28px;
    font-weight: 600;
    color: #0b3a2d;
  }

  h4 {
    width: 125%;
    font-size: 20px;
    font-weight: 600;
    color: black;
    background-color: #f2f2f7;
    border-radius: 4px;
    padding: 8px 10px;
  }
`;

export const Time = styled.div`
  display: flex;
  align-items: center;
  background-color: #f2f2f7;
  gap: 4px;
  border-radius: 4px;
  padding: 4px 16px;

  h3 {
    font-size: 24px;
    font-weight: 600;
    color: #0b3a2d;
  }
  p {
    font-size: 22px;
    font-weight: 600;
    background-color: #d9d9d9;
    border-radius: 4px;
    padding: 4px;
  }
`;

export const Button = styled.div`
  width: 300px;
  padding: 12px;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  color: white;
  background: var(--primary-color);
  border-radius: 20px;
  cursor: pointer;

  :hover {
    opacity: 0.9;
  }
`;

export const SelectWrapper = styled.div`
  position: relative;
`;

export const SelectStyled = styled.select`
  width: 120%;
  padding: 0.5rem;
  border-radius: 4px;
  border: none;
  background-color: #f2f2f7;
  font-size: 20px;
  font-weight: 600;
  color: #000000;
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 8px;
  font-size: 14px;
  text-align: center;
  color: white;
  background: #e1284a;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  :hover {
    opacity: 0.9;
  }
`;

export const EditButton = styled.button`
  gap: 6px;
  padding: 8px;
  font-size: 14px;
  text-align: center;
  color: white;
  background: #1b914b;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  :hover {
    opacity: 0.9;
  }
`;
