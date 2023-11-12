import { TabName } from "@components/Tabs/DriverTabs";
import React, { Fragment } from "react";
import { Item, ListActions, ListContainer, ListInfo, Status } from "./styles";

const ordersInfo: Array<string> = [
  "إسم السائق",
  "إسم المستخدم",
  "التاريخ",
  "المبلغ",
];

const LastEarningsList = (props: any) => {
  return (
    <Fragment>
      <ListContainer type="head">
        <ListInfo>
          {ordersInfo.map((item, idx) => (
            <Item key={`${idx}-${item}`} length={ordersInfo.length}>
              <span>{item}</span>
            </Item>
          ))}
        </ListInfo>
        <ListActions></ListActions>
      </ListContainer>
      {/*  array.sort((a,b)=>a.getTime()-b.getTime()); */}
      {props.orders.slice(0, 8).map((order: any, idx: any) => (
        <ListContainer key={`${idx}-${order["Driver Name"]}`} type="body">
          <ListInfo>
            <Item length={ordersInfo.length} color="#111">
              <span>{order["Driver Name"]}</span>
            </Item>
            <Item length={ordersInfo.length}>
              <span>{order.sdate}</span>
            </Item>
            <Item length={ordersInfo.length}>
              <span>{order.Date_of_Order.substring(0, 10)}</span>
            </Item>
            <Item length={ordersInfo.length}>
              <span>{order.price} ريال</span>
            </Item>
          </ListInfo>
          <ListActions></ListActions>
        </ListContainer>
      ))}
    </Fragment>
  );
};

export default LastEarningsList;
