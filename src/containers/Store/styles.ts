import Image from "next/image";
import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 28px 82px;
  gap: 36px;
`;

export const Products = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 24px;
  background-color: #d9d9d9;
  border-radius: 12px;
`;

export const Product = styled.div`
  width: 22%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  background-color: #d9d9d9;
  border-radius: 12px;

  h1 {
    font-size: 18px;
    font-weight: 600;
    line-height: 28px;
  }
`;

export const ProductContent = styled.div<{ bk: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 12px;
  background-color: white;
  background-image: url(${(props) => props.bk});
  background-size: 100% 100%;
  //background-size: cover;
  border-radius: 12px;
  width: 100%;
  height: 250px;
  margin-bottom: 12px;

  h1 {
    font-size: 24px;
    line-height: 28px;
    color: var(--primary-color);
  }
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Header = styled.div`
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

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
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
    width: 98%;
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
  padding: 4px 8px;
  font-size: 14px;
  text-align: center;
  color: white;
  background: #e1284a;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  margin-top: -4%;
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

export const Input = styled.div`
  display: flex;
  width: 60%;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #f0f0f0;
  border-radius: 20px;
  background-color: #ffffff;
  padding: 0px 12px;
  img {
    padding-left: 5px;
    padding-right: 5px;
  }

  input {
    padding: 8px;
    width: 100%;
    border: 0;
    border-radius: 20px;

    font-size: 16px;
    border-radius: 5px;
    //border: 1px solid #b9bfd2;
    transition: all 0.2s ease-out;
    ::placeholder {
      color: #aaacb6;
      font-size: 18px;
      margin-bottom: 5px;
    }
    &:focus {
      //outline: 1px solid #aaacb6;
      outline: none;
    }
  }
`;
