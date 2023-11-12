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
  min-width: 780px;
  min-height: 530px;
`;

export const MLHeader = styled.div`
  //height: 24px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;

  .icon {
    width: 32px;
    height: 32px;
    cursor: pointer;
    font-weight: bold;
    margin-top: 8px;
    transition: all 0.2s ease-out;
    display: grid;
    place-items: center;
    margin-inline-start: auto;
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
  gap: 48px;
  width: 100%;
  height: 100%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 12px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 200px;

  h1 {
    color: #0b3a2d;
    font-size: 18px;
    line-height: 56px;
  }
`;

export const InputControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 3.5px solid #ff9f4b;
  border-radius: 14.767px;
  padding: 0px 12px;
  height: 70%;

  input {
    width: 90%;
    border: none;
    font-size: 16px;

    :focus {
      outline: none;
    }
  }

  textarea {
    height: 100%;
    border: none;
    font-size: 16px;

    :focus {
      outline: none;
    }
  }
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

export const TextArea = styled.div`
  height: 100%;
  display: flex;
  //align-items: center;
  justify-content: space-between;
  border: 3.5px solid #ff9f4b;
  border-radius: 14.767px;
  padding: 6px 12px;

  textarea {
    display: flex;
    flex-grow: 1;
    height: 100%;
    width: 100%;
    border: none;
    font-size: 16px;
    line-height: 24px;
    resize: none;
    :focus {
      outline: none;
    }
  }
  div {
    /* position: absolute;
    margin-bottom: 11%;
    width: 100%;
    margin-right: 100%; */
    display: flex;
    //flex-direction: column;
    align-items: flex-start;
  }
`;

export const Calender = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Button = styled.div`
  width: 300px;
  padding: 12px;
  font-size: 18px;
  text-align: center;
  color: white;
  background: #ff9f4b;
  border-radius: 4px;
  cursor: pointer;
`;
