import styled from "styled-components";
import PhoneInput from "react-phone-input-2";

export const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
`;

export const LeftContainer = styled.div`
  background-color: #fcfcfc;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .img {
    margin-top: 36px;
    border: 2px solid red;
  }

  h1 {
    font-weight: 100;
    font-size: 22px;
    line-height: 34px;
    margin-top: 16px;
    margin-bottom: 14px;
    text-align: center;
  }

  p {
    font-size: 14px;
    line-height: 20px;
    width: 50ch;
    text-align: center;
    color: rgba(0, 0, 0, 0.3);
    padding-bottom: 56px;
  }
`;

export const RightContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  //justify-content: space-around;

  p {
    margin-top: 36px;
    color: red;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 18px;
  //margin: 48px 0;

  label {
    color: grey;
    font-size: 15px;
    line-height: 24px;
  }

  h1 {
    margin-bottom: 16px;
    font-size: 24px;
  }
  button {
    width: 370px;
    background-color: #242424;
    padding: 16px;
    font-size: 14px;
    color: white;
    border: none;
    outline: none;
    border-radius: 24px;
    cursor: pointer;

    &:hover {
      background-color: black;
    }
  }
`;

export const Input = styled.div`
  display: flex;
  background-color: #f3f3f3;
  align-items: center;
  border-radius: 8px;

  img {
    padding-left: 16px;
    padding-right: 16px;
  }

  label {
    //padding-left: 16px;
    padding-right: 6px;
    color: #999999;
  }

  input {
    background-color: #f3f3f3;

    padding: 16px;
    width: 240px;
    border: 0;
    font-size: 16px;
    border-radius: 5px;
    //border: 1px solid #b9bfd2;
    transition: all 0.2s ease-out;

    &:not(:last-of-type) {
      margin-bottom: 16px;
    }

    &:focus {
      outline: 1px solid black;
    }
  }

  input.error {
    border-color: red;
  }
`;

export const ResetButton = styled.button`
  margin-top: 8px;
  width: 370px;
  background-color: white;
  padding: 16px;
  font-size: 16px;
  color: black;
  border: 1px solid black;
  outline: none;
  border-radius: 24px;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }
`;

export const DigitInput = styled.input`
  width: 74px;
  //height: 107px;
  border: 1px solid #dee1e7;
  font-size: 48px;
  font-weight: 500;
  text-align: center;
  line-height: 80px;
  border-radius: 38px;
`;

export const DigitalInputDiv = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 20px;
`;

export const Username = styled.div`
  display: flex;
  background-color: #f3f3f3;
  align-items: center;
  border-radius: 8px;

  img {
    padding-left: 16px;
    padding-right: 16px;
  }

  label {
    //padding-left: 16px;
    padding-right: 6px;
    color: #999999;
  }

  input {
    background-color: #f3f3f3;
    padding: 16px;
    width: 100%;
    border: 0;
    font-size: 16px;
    border-radius: 5px;
    //border: 1px solid #b9bfd2;
    transition: all 0.2s ease-out;

    &:not(:last-of-type) {
      margin-bottom: 16px;
    }

    &:focus {
      outline: none;
    }
    ::placeholder {
      font-size: 12px;
    }
  }

  input.error {
    border-color: red;
  }
`;
