import Image from "next/image";
import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: end;
  width: 100%;
  height: 100%;
  padding: 32px 90px;
  padding-top: 0px;
  gap: 48px;

  span {
    width: 100%;
    border-top: 2px solid #a1a1a1;
  }

  h1 {
    font-size: 20px;
    color: #000000;
  }
`;

export const Main = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  height: 100%;

  img {
    width: 300px;
    height: auto;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 36px;
  border-radius: 12px;
  background: #f4f4f4;
  gap: 18px;
  height: 60%;

  h4 {
    width: 100%;
    text-align: right;
    font-size: 20px;
    color: #000000;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 30%;
  background-color: white;
  border-radius: 12px;
  height: max-content;
  padding: 12px 0px;

  h2 {
    height: 2px;
    border-top: 1.5px solid #bebebe;
    width: 100%;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0px 16px;
  h1 {
    font-size: 40px;
    font-size: calc(0.777vw + 15px);
    font-weight: 600;
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 24px;
  padding-top: 0px;

  width: 100%;
  justify-content: space-between;
  h1 {
    font-size: 18px;
    font-weight: 600;
    line-height: 28px;
    color: #0b3a2d;
    padding: 0px;
    margin-top: 8px;
  }

  input {
    font-size: 15px;
    font-weight: 500;
    border: none;
    border-radius: 2px;
    color: black;
    background-color: #f2f2f7;
    padding: 2px 4px;

    :focus {
      outline: 1.5px solid grey;
    }
  }
`;

export const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  justify-content: center;
  width: 30%;
  border-radius: 12px;
  height: 100%;
`;

export const Column2Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;
  background-color: white;
  border-radius: 12px;
  height: 100%;
  padding: 12px 0px;

  h2 {
    height: 2px;
    border-top: 1.5px solid #bebebe;
    width: 100%;
  }
  input {
    direction: ltr;
  }
`;

export const HalfCircle = styled.div`
  height: 20%;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 25px;
    font-weight: bold;
    line-height: 32px;
  }
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  background-color: white;
  border-radius: 12px;
  padding: 12px;
  gap: 24px;

  h1 {
    font-size: 24px;
  }
  div {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  input {
    font-size: 26px;
    font-weight: 600;
    padding: 6px 16px;
    background-color: #f2f2f7;
    border-radius: 8px;
    width: 70px;
    text-align: center;
    border: 1px solid black;
    direction: ltr;
  }
  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 12px;
`;

export const Stats = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  padding: 24px;
`;
export const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const Info2 = styled.div<{ editable: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  h3 {
    font-size: 18px;
    font-weight: 600;
    color: black;
  }
  input {
    font-size: 20px;
    font-weight: 600;
    color: black;
    width: 30px;
    border: none;
    text-align: center;
    ${({ editable }) =>
      editable
        ? css`
            border: 1px solid grey;
            background-color: #f2f2f7;
          `
        : css``};
  }
`;

export const ProgressBar = styled.div<{ percent: number }>`
  height: 32px;
  width: 100%;
  background-color: #f2f2f7;
  border-radius: 4px;

  div {
    height: 100%;
    width: calc(${(props) => props.percent} / 100 * 100%);
    max-width: 100%;
    border-radius: 4px;

    ${({ percent }) =>
      percent / 100 > 0.79
        ? css`
            background-color: #1b914b;
          `
        : percent / 100 > 0.49
        ? css`
            background-color: #caa700;
          `
        : css`
            background-color: #d03838;
          `};
  }
`;

export const Button = styled.button`
  display: flex;
  text-align: center;
  justify-content: center;
  gap: 6px;
  font-size: 18px;
  color: white;
  font-weight: 600;
  padding: 6px;
  width: 120px;
  background-color: #4bad60;
  border-radius: 8px;
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
  font-size: 18px;
  color: white;
  font-weight: 600;
  padding: 6px;
  width: 120px;
  background-color: #db1515;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  :hover {
    opacity: 0.85;
  }
`;

export const Button3 = styled.button`
  display: flex;
  text-align: center;
  justify-content: center;
  gap: 6px;
  font-size: 13px;
  color: white;
  font-weight: 600;
  padding: 1px 12px;
  background-color: #4bad60 !important;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  :hover {
    opacity: 0.85;
  }
`;

export const Button4 = styled.button`
  display: flex;
  text-align: center;
  justify-content: center;
  gap: 6px;
  font-size: 16px;
  color: white;
  font-weight: 600;
  padding: 2px 12px;
  background-color: #4bad60 !important;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  :hover {
    opacity: 0.85;
  }
`;

export const SelectFilter = styled.select`
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 1px 12px;
  font-size: calc(0.7vw + 6px);
  border-radius: 7px;
  background-color: #f2f2f7;
  cursor: pointer;
  border: none;
  border-left: 0.5vw solid transparent;
  border: 1px solid #f0f0f0;
  border-radius: 26px;
  border: 1px solid black;
  border-radius: 4px;
  width: 100%;

  option {
    outline: none;
    border: none;
    border-radius: 2px;
    color: black;
    background-color: #f2f2f7;
    cursor: pointer;
    font-size: calc(0.7vw + 7px);

    &:hover {
      background-color: red !important; /* Change the background color on hover */
    }
  }
`;
