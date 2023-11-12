import styled from "styled-components";

export const Form = styled.form`
  padding: 28px;
`;

export const FormContent = styled.div`
  //margin-bottom: 32px;
  h3 {
    font-weight: 275;
    font-size: 20px;
    line-height: 19px;
  }
  p {
    font-weight: 275;
    font-size: 8px;
    line-height: 11px;
    text-align: right;
    letter-spacing: -0.025em;
    margin-block: 13px 17px;
    max-width: 460px;
    color: #929292;
  }
`;

export const ControlField = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
  gap: 36px;
`;

export const InputControl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: right;
  padding: 6px;
  gap: 10px;
  width: 100%;

  h1 {
    font-size: 16px;
    line-height: 18px;
    text-align: right;
    color: #c0c0c0;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 16px;
  font-size: 18px;
  background: #f9fafb;
  border: 1px solid #d1d5db;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.03);
  border-radius: 10px;

  :focus {
    outline: 1px solid grey;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  padding-right: 210px;
  justify-content: space-between;

  .btn {
    width: 192px;
    //padding-block: 15px;
    border-radius: 4px;
    filter: brightness(0.94);
    margin: 0;
    &:hover {
      filter: brightness(1);
    }
  }
`;

export const StateHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 16px;
  border: 2px solid #a090ff;
  border-radius: 11px;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 16px;
  }
  h3 {
    font-size: 12px;
    color: grey;
    padding: 0;
  }
`;

export const Upload = styled.button`
  padding: 12px 24px;
  cursor: pointer;
  color: #ffffff;
  background-color: #a090ff;
  border-radius: 11px;
  border: none;
`;

export const Btn = styled.button`
  padding: 16px 12px;
  width: 200px;
  color: #ffffff;
  background-color: #a090ff;
  border-radius: 11px;
  border: none;
  cursor: pointer;
`;
