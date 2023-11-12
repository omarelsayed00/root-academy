import styled from "styled-components";

export const Wrapper = styled.div`
  //height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
  background-color: #f2f2f7;

  /*  @media screen and (max-width: 900px) {
    width: 1500px;
    //height: 5500px;
  } */
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  height: calc(100vh - 100px);
  width: 100%;
  background-color: #f2f2f7;
`;

export const Page = styled.div`
  //padding: 10px 16px;
  flex: 1;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  overflow-y: scroll;
  background-color: #f2f2f7;
  &::-webkit-scrollbar {
    //display: none;
  }
`;

export const MainTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: sticky;
  //background-color: #f2f2f7;
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.15);
  border-radius: 0px 0px 60px 60px;

  h1 {
    padding: 12px;
    padding-left: 0px;
    color: var(--primary-color);
    font-size: 22px;
    line-height: 32px;
  }
`;
