import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;

  //justify-content: space-around;
`;

export const LeftContainer = styled.div`
  display: flex;
  width: 60%;
  height: 100%;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  padding: 0px 48px;
  width: 40%;
  justify-content: center;
  background-color: #ffffff;
  gap: 48px;

  h1 {
    font-size: 32px;
    line-height: 36px;
    font-weight: bold;
    padding: 0px;
    color: #0b3a2d;
  }

  button {
    margin-top: 48px;
    background-color: transparent;
    display: flex;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    align-items: center;
    justify-content: space-around;

    :hover {
      opacity: 0.85;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-weight: 400;
    font-size: 18px;
    color: #0b3a2d;
    line-height: 36px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 0px;

  button {
    display: flex;
    align-items: center;
    gap: 18px;
  }
  h1 {
    font-weight: 700;
    font-size: 32px;
    color: #ff9f4b;
  }
`;
