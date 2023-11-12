import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-bottom: 5%;

  table {
    width: 100%;
    border-collapse: separate !important;
    position: relative;
    box-shadow: 0px 0px 4px 3px rgba(0, 0, 0, 0.1);
    border-radius: 25px 25px 0px 0px;
  }

  thead,
  th {
  }

  thead tr th {
    text-align: right;
    background-color: #e4e4e4;
    color: var(--primary-color);
    padding: 18px;
    font-size: 18px;
    font-weight: 600;
    border-top: none;
    //padding-left: 150px;
    //width: 400px !important;
  }

  table thead tr:last-child th:first-child {
    border-top-right-radius: 20px;
  }

  table tr:last-child th:last-child {
    border-top-left-radius: 20px;
  }
  th,
  td {
    height: 40px;
    width: 500px;
    text-align: right;
    color: #181828;
    //gap: 20px;
    padding: 12px 16px;
    font-size: 16px;
    font-weight: 600;
    //overflow-wrap: break-word;
    //align-items: center;
    border-top: 2px solid #bebebe;
    background-color: #ffffff;
    //padding-right: 26px;
  }
`;
export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  input[type="checkbox"] {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
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
  background: #67b375;
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
