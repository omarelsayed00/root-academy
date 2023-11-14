import styled, { css } from "styled-components";

export const MLStyled = styled.div`
  position: fixed;
  //right: -20%;
  background: var(--primary-color);
  height: 100vh;
  z-index: 120;
  padding: 34px 0px;
  padding-right: 90px;
  overflow-y: auto;
  direction: ltr;
  //transform: translate(-50%, -50%);
`;

export const MLContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: right;
  justify-content: right;
  gap: 12px;
  width: 280px;
  height: 100%;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.03);
  direction: rtl;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  img {
    width: 47px;
    height: 47px;
    border-radius: 50%;
    border: 2px solid #ffffff;
  }
`;

export const Name = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 11px;
    line-height: 14px;
    color: #ffffff;
  }
`;

export const NavLink = styled.a<{ active: boolean }>`
  color: white;
  font-family: inherit;
  text-decoration: none;
  font-size: 18px;
  //font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px 0px;
  cursor: pointer;
  border-bottom: 2px solid #ffffff;
  padding-right: 6px;
  ${({ active }) =>
    active
      ? css`
          background-color: #ffffff !important;
          color: var(--primary-color);
          font-weight: 600;
        `
      : css`
          color: #ffffff;
        `};

  :hover {
    background-color: #ffffff !important;
    color: var(--primary-color);
    font-weight: 600;
  }

  span {
    //line-height: 21.5px;
  }
`;

export const NavbarLinks = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12%;
  border-top: 2px solid #ffffff;
`;

export const Notifications = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2px 5px;
  border-radius: 4px;
  background-color: var(--primary-color);

  h1 {
    font-size: 14px;
    color: #0b3a2d;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background: transparent;
  color: #ff9f4b;
  font-family: inherit;
  text-decoration: none;
  font-size: 18px;
  display: flex;
  align-items: center;
  padding: 10px 0px;
  cursor: pointer;
  border: none;
  border-bottom: 2px solid #ffffff;

  :hover {
    background-color: #ffffff !important;
    color: var(--primary-color) !important;
    font-weight: 600;
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
  padding: 6px 10px;
  background-color: #4bad60;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  min-width: 100px;

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
  padding: 6px 10px;
  background-color: #db1515;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  min-width: 100px;

  :hover {
    opacity: 0.85;
  }
`;
