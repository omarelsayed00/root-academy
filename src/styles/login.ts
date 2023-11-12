import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  background-color: #faf9fc;
  overflow: hidden;

  //justify-content: space-around;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: var(--primary-color);
  padding-right: 6%;
  border-radius: 0% 120% 120% 0%;
  height: 110%;
  gap: 12px;

  h1 {
    color: white;
    font-size: 24px;
    font-weight: 400;
    line-height: 36px;
  }
  p {
    color: white;
    font-size: 12px;
    font-weight: 400 !important;
    line-height: 6px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const RightContainer = styled.div`
  display: flex;
  height: 100%;
  padding: 24px 48px;
  width: 55%;
  justify-content: center;
  background-color: #faf9fc;
  height: 100%;

  h1 {
    margin-bottom: 24px;
  }

  form {
    width: 65%;
    display: flex;
    flex-direction: column;
    align-items: right;
    margin: 30px 0;
    gap: 12px;

    .validation-errors {
      font-size: 0.8em;
      color: rgb(212, 18, 18);
      line-height: 1;
      margin-top: 0;
    }

    input[type="password"] {
      font-family: "Arb-Regular";
      //letter-spacing: 0.125em;
      letter-spacing: 0.08em;
      font-size: 20px;
      font-weight: bold;
      padding: 8px 16px;
    }

    input {
      padding: 12px 16px;
      width: 100%;
      border: 0;
      font-size: 16px;
      border-radius: 6px;
      border: 2px solid var(--primary-color);
      transition: all 0.2s ease-out;

      &:not(:last-of-type) {
        margin-bottom: 8px;
      }

      &:focus {
        outline: 1.4px solid var(--primary-color);
      }

      ::placeholder {
        color: #d9d9d9;
        font-size: 13px;
      }
    }

    input.error {
      //border-color: red;
    }
  }

  p {
    margin-top: 36px;
    color: red;
  }

  label {
    color: #181828;
    font-size: 20px;
  }

  h5 {
    font-weight: bold;
  }
`;

export const Letter = styled.a`
  background: #eeeeee;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex; /* or inline-flex */
  align-items: center;
  justify-content: center;
  outline: none;
  cursor: pointer;
  border: none;
  text-decoration: none;
`;

export const Logo = styled.div`
  display: flex;
  width: 65%;
  flex-direction: column;
  gap: 4px;
  //padding-bottom: 60px;
  align-items: right;
  justify-content: right;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  //padding-left: 135px;

  h1 {
    font-size: 36px;
    line-height: 56px !important;
    font-weight: bold;
    padding: 0px;
    color: #0b3a2d;
    margin-bottom: 0px;
  }
  p {
    font-weight: 600;
    font-size: 22px;
    color: #181828;
    line-height: 22px;
    margin-top: 0px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const Button = styled.button`
  display: flex;
  width: 75%;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: var(--primary-color);
  padding: 10px;
  color: white;
  font-size: 18px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

export const ForgetPassword = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: right;
  gap: 6px;
  padding-right: 6px;

  span {
    font-size: 13px;
    font-weight: bold;
    text-align: right;
    cursor: pointer;
    color: var(--primary-color);
    line-height: 0px;

    &:hover {
      opacity: 0.7;
    }
  }
`;
