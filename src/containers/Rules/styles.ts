import Image from "next/image";
import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 36px;
  gap: 24px;
  background-color: #d9d9d9;
  border-radius: 12px;
  margin: 36px 66px;
  //height: 100%;

  h1,
  h2,
  p {
    white-space: pre-line;
    color: #181828;
  }

  textarea {
    background-color: transparent;
    border: none;
    resize: none;
    overflow: hidden;

    :focus {
      outline: none;
    }
  }
  //white-space: pre-line;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #f2f2f7;
  padding: 24px;
  padding-bottom: 0px;
  gap: 28px;
  border-radius: 12px;
  height: 100%;
`;
export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #f2f2f7;
  padding: 0px 36px;
  padding-bottom: 0px;
  gap: 28px;
  border-radius: 12px;

  h1 {
    width: 100%;
    text-align: right;
    font-size: 20px;
    font-weight: bold;
    line-height: 0px;
    color: black;
  }

  br {
    line-height: 2px;
  }

  p {
    width: 100%;
    text-align: right;
    font-size: 17px;
    line-height: 32px;
    color: #000000;
  }

  textarea {
    background-color: transparent;
    border: none;
    border-radius: 8px;
    padding: 8px;
    font-size: 17px;
    line-height: 32px;
    resize: none;
    overflow: hidden;
    width: 100%;
  }
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  text-align: center;
  justify-content: space-between;
  margin-bottom: 80px;

  h1 {
    font-size: 23px;
    font-weight: bold;
    line-height: 48px;
  }

  h2 {
    font-size: 20px;
    font-weight: 400;
  }

  textarea {
    font-size: 23px;
    font-weight: bold;
    //line-height: 48px;
    text-align: center;
    width: 800px;
  }

  button {
    border: none;
    background-color: #1b914b;
    display: flex;
    padding: 8px;
    border-radius: 8px;
    cursor: pointer;
  }
`;

export const TitleInput = styled.textarea`
  font-size: 23px;
  font-weight: bold;
  justify-content: center;
  line-height: 28px;
  width: 800px;
`;

export const TitleInput2 = styled.textarea`
  font-size: 20px;
  font-weight: 400 !important;
  line-height: 24px;
  text-align: center;
  width: 800px;
`;

export const SubTitleInput = styled.textarea`
  font-size: 20px !important;
  font-weight: bold;
  justify-content: center;
  line-height: 28px;
  width: 800px;
`;
export const TextInput = styled.textarea`
  font-size: 16px;
  justify-content: center;
  line-height: 28px;
  width: 800px;
  border: 1px solid lightgray !important;
  height: 300px;
`;

export const SaveButton = styled.button`
  border: none;
  border-radius: 20px;
  cursor: pointer;
  background-color: var(--primary-color);
  color: white;
  width: 320px;
  padding: 8px;
  font-size: 20px;
  font-weight: 600;

  :hover {
    opacity: 0.9;
  }
`;

export const Button = styled.button`
  display: flex;
  text-align: center;
  justify-content: center;
  gap: 6px;
  font-size: 13px;
  color: white;
  font-weight: 100;
  padding: 4px 48px;
  width: 80px;
  background-color: #4bad60;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;

export const Button2 = styled.button`
  display: flex;
  text-align: center;
  justify-content: center;
  gap: 6px;
  font-size: 13px;
  color: white;
  font-weight: 100;
  padding: 4px 48px;
  width: 80px;
  background-color: #db1515;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;
