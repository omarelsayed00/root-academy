import styled from "styled-components";

export const SecurityWrapper = styled.div`
  display: grd;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid #e6e6e6;
  border-radius: 20px;
  margin-bottom: 26px;

  padding: 5px 20px 10px 20px;
`;

export const Hr = styled.hr`
  border: 1px solid #e6e6e6;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border: none;
  margin-top: 16px;
  padding: 5px 10px 10px 20px;
  width: 100%;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 36px;
  margin-top: 0;
  margin-bottom: 20px;
  vertical-align: middle;
  width: 100%;

  h1 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
    margin-top: 10px;
  }
  h2 {
    font-size: 16px;
    margin-bottom: 10px;
    margin-top: 10px;
  }
  h3 {
    font-size: 12px;
    color: grey;
    padding: 0;
  }
`;

/* export default styled(Button)`
  outline: none;
  color: white;
  background-color: #5c9ef6;
  border: 1px solid #e6e6e6;
  border-radius: 7px;
  padding: 12px 24px;
  cursor: pointer;
  margin-right: 450px;
`; */

/* export const Btn = styled.button`
  outline: none;
  color: white;
  background-color: #5c9ef6;
  border: 1px solid #e6e6e6;
  border-radius: 7px;
  padding: 12px 24px;
  cursor: pointer;
  margin-right: 450px;
`; */

export const Btn = styled.div`
  margin-top: 5px;
  margin-right: 680px;
`;

export const ActivateBtn = styled.button`
  outline: none;
  color: white;
  background-color: #5c9ef6;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.04);
  border: 1px solid #e6e6e6;
  border-radius: 7px;
  padding: 14px 24px;

  cursor: pointer;
`;

export const SetupBtn = styled.button`
  outline: none;
  color: black;
  background-color: white;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.04);
  border: 1px solid #e6e6e6;
  border-radius: 7px;
  padding: 14px 24px;
  cursor: pointer;
`;
