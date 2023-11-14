import styled from "styled-components";

export const MLStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: transparent;
  z-index: 120;
  transform: translate(-50%, -50%);
`;

export const MLContainer = styled.div`
  overflow: hidden;
  background-color: white;
  border-radius: 14px;
  box-shadow: 0px 0px 14px -4px rgba(0, 0, 0, 0.05),
    0px 32px 48px -8px rgba(0, 0, 0, 0.1);
  margin: auto;
  position: relative;
  min-width: 360px;
  min-height: 250px;
`;

export const MLHeader = styled.div`
  height: 54px;
  background-color: white;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  padding: 0 16px;
  span {
    display: inline-block;
    flex: 1;
    font-weight: 600;
    font-size: 18px;
    line-height: 29px;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .icon {
    width: 32px;
    height: 32px;
    cursor: pointer;
    margin-top: 8px;
    transition: all 0.2s ease-out;
    display: grid;
    place-items: center;
    margin-inline-start: auto;
  }
`;
