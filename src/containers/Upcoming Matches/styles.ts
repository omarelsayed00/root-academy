import Image from "next/image";
import styled, { css } from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 28px 82px;
  gap: 18px;
`;

export const Schedule = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 24px;
  background-color: #d9d9d9;
  border-radius: 12px;

  h1 {
    font-size: 24px;
    line-height: 28px;
    color: var(--primary-color);
  }

  .actions {
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 8px;
  }

  h6 {
    color: red;
    font-size: 16px;
    font-weight: bold;
  }
`;

export const Schedule2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 24px;
  background-color: #d9d9d9;
  border-radius: 12px;

  h1 {
    font-size: 24px;
    line-height: 28px;
    color: var(--primary-color);
  }

  .actions {
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 8px;
  }

  h6 {
    color: red;
    font-size: 16px;
    font-weight: bold;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  justify-content: space-between;
  gap: 46px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: right;
  width: 80%;

  h2 {
    font-size: 16px;
    line-height: 28px;
    font-weight: 600;
    color: #0b3a2d;
  }

  h4 {
    //width: 100%;
    font-size: 20px;
    font-weight: 600;
    color: black;
    background-color: #f2f2f7;
    border-radius: 4px;
    padding: 8px 10px;
  }

  input {
    font-size: 22px;
    font-weight: 600;
    background-color: #f2f2f7;
    border-radius: 4px;
    padding: 4px;
    border: none;
  }
`;

export const DateContainer = styled.div`
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
  input {
    width: 100%;
    font-size: 22px;
    font-weight: 600;
    border-radius: 4px;
    padding: 3px;
    text-align: center;

    :focus {
      outline: none;
    }
  }

  p {
    width: 26%;
    font-size: 22px;
    font-weight: 600;
    border-radius: 4px;
    padding: 6px;
    text-align: center;
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
    padding: 6px;
  }
`;

export const TimeInput = styled.div`
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
  input {
    font-size: 22px;
    font-weight: 600;
    background-color: #d9d9d9;
    border-radius: 4px;
    padding: 3px;
    border: none;
    width: 40px;
    text-align: center;
  }
`;

export const Button = styled.button`
  width: 300px;
  padding: 12px;
  font-size: 20px;
  text-align: center;
  color: white;
  background: #4bad60;
  border-radius: 20px;
  cursor: pointer;
  border: none;

  :hover {
    opacity: 0.9;
  }
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px;
  font-size: 14px;
  text-align: center;
  color: white;
  background: #e1284a;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  margin-top: -4%;
`;

export const UploadContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-radius: 2px;
  background-color: #f2f2f7;
  padding-left: 6px;
  //height: 40px;

  h5 {
    font-size: 18px;
    font-weight: bold;
    padding: 8px 0px;
  }
`;

export const Upload = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 38px;
  cursor: pointer;

  div {
  }
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Button3 = styled.button`
  display: flex;
  text-align: center;
  justify-content: center;
  gap: 6px;
  font-size: 16px;
  color: white;
  font-weight: 100;
  padding: 6px;
  width: 100px;
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
  font-size: 16px;
  color: white;
  font-weight: 100;
  padding: 6px;
  width: 100px;
  background-color: #db1515;
  border-radius: 20px;
  border: none;
  cursor: pointer;

  :hover {
    opacity: 0.85;
  }
`;

export const EditButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px;
  font-size: 14px;
  text-align: center;
  color: white;
  background: #4bad60;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  :hover {
    opacity: 0.9;
  }
`;

export const SelectFilter = styled.select`
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 4px 12px;
  font-size: calc(0.7vw + 7px);
  border-radius: 7px;
  background-color: #ededed;
  cursor: pointer;
  border: none;
  border-left: 0.5vw solid transparent;
  border: 1px solid #f0f0f0;
  border-radius: 26px;
  border: 1px solid black;
  border-radius: 4px;
  width: 100%;
  font-weight: bold;

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
