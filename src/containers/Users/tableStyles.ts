import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  table {
    width: 100%;
    //height: 245px;
    border-collapse: collapse;
    position: relative;

    div {
      //width: 40px;
    }
  }

  thead tr th {
    font-weight: 500;
    text-align: right;
    background-color: #f3f4f6d9;
    color: #999999;
    border-bottom: 2px solid #f5f5f5;
    padding: 18px;
    font-size: 12px;
  }

  tbody tr:nth-child(even) {
    //background-color: #fafafa;
  }

  th,
  td {
    height: 40px;
    width: 220px;
    text-align: right;
    //gap: 20px;
    padding: 18px 16px;
    font-size: 13px;
    font-weight: 600;
    //overflow-wrap: break-word;
    //align-items: center;
    border-bottom: 1px solid #efefef;
    //padding-right: 26px;
  }
`;
export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Name = styled.div`
  display: flex;
  flex-direction: column;
  align-items: right;
  gap: 6px;

  span {
    text-align: right;
  }
  p {
    font-size: 10px;
    line-height: 15px;
    text-align: right;

    color: #b1b1b1;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

export const Edit = styled.button`
  background: #a090ff;
  border-radius: 8px;
  padding: 8px;
  border: none;
  color: #ffffff;
  display: flex;
  gap: 5px;
  align-items: center;
  cursor: pointer;
  font-size: 12px;
`;

export const Block = styled.button`
  background: #e1284a;
  border-radius: 8px;
  padding: 8px 12px;
  padding-left: 16px;
  border: none;
  color: #ffffff;
  display: flex;
  gap: 5px;
  font-size: 12px;
  align-items: center;
  cursor: pointer;
`;

export const Button = styled.button`
  // padding-left: 16px;

  display: flex;
  text-align: center;
  justify-content: center;
  gap: 6px;
  font-size: 13px;
  color: white;
  font-weight: 100;
  padding-left: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 80px;
  height: 25px;
  background-color: #575757;
  border-radius: 5px;
  border: none;
  //padding: 5px 5px 5 5;
  cursor: pointer;
`;
