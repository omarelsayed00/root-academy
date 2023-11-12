import styled from "styled-components";

export const Form = styled.form`
  padding: 32px 62px;
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  //margin-bottom: 32px;
  h3 {
    font-weight: 275;
    font-size: 16px;
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
  width: 424px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 18px;
  gap: 22px;
  label {
    color: red;
    font-weight: 400;
  }
`;

export const InputControl = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  background-color: #f3f3f3;
  border-radius: 4px;
  padding: 6px;
  height: 47px;
`;

export const InputIcon = styled.div`
  width: 40px;
  height: 100%;
  display: grid;
  place-items: center;
  border-inline-end: 1px solid #eaeaea;
  margin-inline-end: 5px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: none;
  outline: none;
  height: 100%;
  font-size: 18px;
  background-color: inherit;
  &::placeholder {
    font-weight: 275;
    font-size: 16px;
    line-height: 19px;
    color: #bebebe;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  padding-right: 210px;
`;
