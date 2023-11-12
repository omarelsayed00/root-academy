import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  padding: 10px 16px;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 12px;

  h1 {
    font-size: 24px;
    font-weight: bold;
  }
`;

export const Input = styled.div`
  display: flex;

  align-items: center;
  border-radius: 8px;
  background: #f9fafb;
  border: 1px solid #f0f0f0;
  border-radius: 6px;

  img {
    padding-left: 5px;
    padding-right: 5px;
  }

  input {
    background-color: #faf9fc;

    padding: 8px;
    width: 290px;
    border: 0;
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
  width: 130px;
  font-size: 14px;
  background-color: var(--primary-color);
  border-radius: 58px;
  border: none;
  padding: 12px 20px;
  margin-bottom: 16px;
  cursor: pointer;
`;

export const TableContainer = styled.div`
  position: fixed;
  margin-top: 220px;
`;
