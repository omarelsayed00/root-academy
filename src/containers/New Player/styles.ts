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
`;

export const Card = styled.div`
  width: 60%;
  height: 100%;
  background-image: url("/images/newPlayerCard.png");
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
`;

export const CardContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CardHeader = styled.div`
  height: 60%;
  width: 100%;
  display: flex;
  align-items: flex-end;
`;

export const Position = styled.div`
  width: 30%;
  height: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: -6%;
  h1 {
    font-size: 80px;
    font-weight: 600;
    text-align: center;
  }
  h2 {
    font-size: 40px;
    font-weight: 600;
    text-align: center;
  }
`;

export const ImageCard = styled.div`
  height: 72%;
  width: 65%;
  display: flex;
  justify-content: center;
  padding-right: 2%;
  //align-items: flex-end;

  img {
    width: 72%;
    height: 82%;
  }

  //padding-top: 18%;
`;

export const Details = styled.div`
  height: 41%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  h1 {
    font-size: 28px;
    line-height: 0px;
    font-weight: 600;
    padding-bottom: 10px;
    text-align: center;
  }
`;

export const StatsCard = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  gap: 18px;

  p {
    font-size: 18px;
    font-weight: 600;
    direction: ltr;
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
  gap: 6px;
  width: 30%;
  background-color: white;
  border-radius: 12px;
  height: 100%;
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
  justify-content: space-around;
  width: 100%;
  padding: 0px 16px;
  h1 {
    font-size: 20px;
    font-weight: 600;
    text-align: center;
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
  padding: 0px 24px;
  padding-top: 0px;
  width: 100%;
  justify-content: space-between;
  h1 {
    font-size: 18px;
    font-weight: 600;
    line-height: 26px;
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
  justify-content: space-between;
  background-color: white;
  border-radius: 12px;
  padding: 12px;

  h1 {
    font-size: 24px;
    font-weight: 600;
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
    border: none;
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

export const Info2 = styled.div`
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
    width: 33px;
    border: none;
    text-align: center;
    border: none;
    border-radius: 4px;
    background-color: #f2f2f7;
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

export const UploadContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-radius: 2px;
  background-color: #f2f2f7;
  padding-left: 6px;
  cursor: pointer;

  div {
  }
`;

export const Upload = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 25px;
  cursor: pointer;

  div {
  }
`;
