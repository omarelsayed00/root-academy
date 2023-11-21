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
  width: 700px;
  //height: 813px;
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 100%;
`;

export const MLHeader = styled.div`
  height: 74px;
  background-color: white;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  padding: 0 24px;
  justify-content: space-between;
  span {
    font-weight: bold;
    font-size: 20px;
    line-height: 29px;
    text-align: center;
  }

  .icon {
    width: 32px;
    height: 32px;
    cursor: pointer;
    margin-top: 8px;
    transition: all 0.2s ease-out;
    display: grid;
    place-items: center;
  }
`;
