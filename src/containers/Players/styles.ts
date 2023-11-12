import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  height: 100%;
  padding: 10px 5%;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 24px;
  gap: 36px;
  h1 {
    font-size: 24px;
    font-weight: bold;
  }
`;

export const Input = styled.div`
  display: flex;
  width: 100%;
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
      font-size: 14px;
      margin-bottom: 5px;
    }
    &:focus {
      //outline: 1px solid #aaacb6;
      outline: none;
    }
  }
`;

export const AddBtn = styled.button`
  outline: none;
  color: white;
  width: 12%;
  font-size: 16px;
  font-weight: 600;
  background-color: var(--primary-color);
  border-radius: 20px;
  border: none;
  padding: 8px;
  cursor: pointer;

  :hover {
    opacity: 0.85;
  }
`;
