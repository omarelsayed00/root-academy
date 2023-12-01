import Image from "next/image";
import styled, { css } from "styled-components";

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
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  gap: 46px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: right;
  width: 100%;
  h2 {
    font-size: 18px;
    line-height: 36px;
    font-weight: 600;
    color: #0b3a2d;
  }

  h4 {
    width: 100%;
    font-size: 18px;
    line-height: 26px;
    font-weight: 400;
    color: black;
    background-color: #f2f2f7;
    border-radius: 4px;
    padding: 16px;
  }

  textarea {
    font-size: 20px;
    line-height: 26px;
    font-weight: 600;
    background-color: #f2f2f7;
    border-radius: 4px;
    padding: 16px;
    border: none;
    height: 150px;
    resize: none;
    :focus {
      border: 1px solid grey;
    }
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

  :hover {
    opacity: 0.9;
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

export const UploadContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-radius: 2px;
  background-color: #f2f2f7;
  padding-left: 6px;

  h5 {
    font-size: 18px;
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
  h1 {
    display: flex;
    flex: 1;
    justify-content: center;
  }
  div {
    display: flex;
    flex: 1;
  }

  .actions {
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 8px;
  }
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
