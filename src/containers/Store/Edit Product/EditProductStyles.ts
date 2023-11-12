import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  padding: 24px;
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;

  h3 {
    font-weight: 275;
    font-size: 20px;
  }
  p {
    font-weight: 275;
    font-size: 8px;
    line-height: 11px;
    text-align: right;
    letter-spacing: -0.025em;
    max-width: 460px;
    color: #929292;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  align-items: center;
`;

export const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 280px;
  width: 100%;
  gap: 24px;
  padding-bottom: 24px;

  img {
    width: auto;
    height: 100%;
  }

  p {
    color: #000000;
    font-size: 20px;
  }
`;

export const InputControl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: right;
  padding: 6px;
  gap: 10px;
  width: 100%;

  h1 {
    font-size: 18px;
    font-weight: 600;
    line-height: 20px;
    text-align: right;
    color: #000000;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px 16px;
  font-size: 18px;
  background: #f2f2f7;
  border: none;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.03);
  border-radius: 20px;

  ::placeholder {
    font-size: 14px;
    line-height: 18px;
    text-align: right;
    color: #c7c7c7;
  }

  :focus {
    outline: 1px solid grey;
  }
`;

export const Actions = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
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

export const Button = styled.button`
  display: flex;
  text-align: center;
  justify-content: center;
  gap: 6px;
  font-size: 20px;
  color: white;
  font-weight: 600;
  padding: 6px;
  width: 140px;
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
  font-size: 20px;
  font-weight: 600;
  color: white;
  padding: 6px;
  width: 140px;
  background-color: #db1515;
  border-radius: 20px;
  border: none;
  cursor: pointer;

  :hover {
    opacity: 0.85;
  }
`;

export const UploadContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-radius: 20px;
  background-color: #f2f2f7;
  padding-left: 12px;

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
