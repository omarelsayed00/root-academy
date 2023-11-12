import Image from "next/image";
import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 28px 140px;
  gap: 28px;

  h4 {
    width: 100%;
    text-align: right;
    font-size: 24px;
    color: var(--primary-color);
  }

  button {
    border: none;
    border-radius: 2px;
    cursor: pointer;
    background-color: #ff9f4b;
    color: white;
    width: 320px;
    padding: 8px;
    font-size: 16px;

    :hover {
      opacity: 0.9;
    }
  }
`;

export const Block1 = styled.div`
  width: 100%;
  display: flex;
  padding: 24px 36px;
  border: 2px solid #d9d9d9;
  border-radius: 12px;
  background: linear-gradient(90deg, transparent 89%, #0b3a2d 11%);
  gap: 30px;
`;

export const Block = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 24px 36px;
  border: 2px solid #d9d9d9;
  border-radius: 12px;
  gap: 30px;
`;

export const Block3 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 0px;
  border: 2px solid #d9d9d9;
  border-radius: 12px;

  h1 {
    font-size: 20px;
    color: var(--primary-color);
    padding-bottom: 24px;
  }
`;

export const Row2 = styled.div`
  display: flex;
  align-items: center;
  padding: 14px 24px;
  width: 100%;
  border-top: 2.5px solid #a1a1a1;

  h1 {
    font-size: 16px;
    color: #0b3a2d;
    padding-bottom: 0px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    color: #0b3a2d;
    font-size: 16px;
    line-height: 36px;
  }

  h2 {
    font-size: 20px;
    color: var(--primary-color);
  }
`;

export const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  h1 {
    color: #0b3a2d;
    font-size: 16px;
    line-height: 36px;
  }

  h2 {
    font-size: 20px;
    color: var(--primary-color);
  }
`;

export const ProfilePhoto = styled.div`
  display: flex;
  align-items: center;
  border-radius: 12px;
  div {
    position: relative;
  }
  img {
    border-radius: 12px;
  }
  div {
    display: flex;
  }

  button {
    padding: 8px;
    position: absolute;
    border: none;
    background: transparent;
    cursor: pointer;
  }
`;

export const Separator = styled.div`
  border-right: 2.5px solid #a1a1a1;
`;

export const Numbers = styled.div`
  display: flex;
  gap: 32px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 16px;
    font-weight: 600;
    color: #000000;
    line-height: 28px;
  }

  p {
    font-size: 12px;
    line-height: 18px;
    color: #a1a1a1;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;

  h1 {
    font-size: 38px;
    font-weight: bold;
    letter-spacing: 2px;
    color: #000000;
  }

  p {
    font-size: 12px;
    color: #a1a1a1;
  }
`;

export const CircularChart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-content: center;
`;

export const Label = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    color: #000000;
    font-size: 38px;
    line-height: 48px;
  }

  p {
    font-size: 16px;
    color: #a1a1a1;
  }
`;

export const FileContainer = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
  border: 2px solid #b0b0b0;
  border-radius: 16px;
`;

export const Task = styled.div`
  display: flex;
  align-items: center;
  padding: 14px 24px;
  width: 100%;
  border-top: 2.5px solid #a1a1a1;
  justify-content: space-between;
  h1 {
    font-size: 16px;
    color: #0b3a2d;
    padding-bottom: 0px;
    font-weight: 600;
  }

  h2 {
    font-size: 16px;
    font-weight: 600;
  }
`;

export const Status = styled.div<{
  status: "InProgress" | "NotStarted" | "Ended";
}>`
  display: flex;
  justify-content: center;
  padding: 9px;
  border-radius: 12px;
  width: 110px;
  background-color: ${({ status }: any) =>
    status === "NotStarted"
      ? "#447AD4"
      : status === "InProgress"
      ? "#FF9F4B"
      : "#0FC683"};

  p {
    font-size: 14px;
    color: #ffffff;
  }
`;

export const ProgressBarContainer = styled.div`
  display: flex;
  gap: 24px;
`;

export const ProgressBar = styled.div<{
  status: "InProgress" | "NotStarted" | "Ended";
}>`
  height: 20px;
  width: 400px;
  border: 2px solid #a0a0a0;
  border-radius: 12px;

  div {
    height: 100%;
    border-radius: 12px;
    width: ${({ status }: any) =>
      status === "NotStarted"
        ? "0%"
        : status === "InProgress"
        ? "50%"
        : "100%"};
    background-color: ${({ status }: any) =>
      status === "NotStarted"
        ? "#447AD4"
        : status === "InProgress"
        ? "#FF9F4B"
        : "#0FC683"};
  }
`;

export const DateContainer = styled.div`
  display: flex;
  padding: 6px;
  border: 2px solid #a0a0a0;
  border-radius: 12px;
  gap: 6px;

  div {
    border-right: 1.5px solid #a0a0a0;
  }
`;
