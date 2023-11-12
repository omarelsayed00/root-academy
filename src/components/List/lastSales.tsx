import { TabName } from "@components/Tabs/DriverTabs";
import React, { Fragment } from "react";

import { Item, ListActions, ListContainer, ListInfo } from "./lastDriverStyles";
import { driversData } from "@mocks/driversList";
const driversInfos: Array<string> = [
  "التحويلات",
  "رقم الطلب",
  "التاريخ",
  "القيمة",
];
const LastSalesList = (props: any) => {
  return (
    <Fragment>
      <ListContainer type="head">
        <ListInfo>
          {driversInfos.map((item, idx) => (
            <Item key={`${idx}-${item}`} length={driversInfos.length}>
              <span>{item}</span>
            </Item>
          ))}
        </ListInfo>
      </ListContainer>
      {driversData
        .filter((driver: any, idx: any) => idx < 4)
        .map((driver: any, idx: any) => (
          <ListContainer key={`${idx}-${driver.name}`} type="body">
            <ListInfo>
              <Item length={driversInfos.length}>
                <span>تم الدفع من {driver.full_name}</span>
              </Item>
              <Item length={driversInfos.length}>
                <span>9999# {driver.full_name}</span>
              </Item>
              <Item length={driversInfos.length} color="#C6C6C6">
                <span>23 أبريل 2023{driver.plate_number}</span>
              </Item>
              <Item length={driversInfos.length}>
                <span>90 ريال{driver.license}</span>
              </Item>
            </ListInfo>
            <ListActions></ListActions>
          </ListContainer>
        ))}
    </Fragment>
  );
};

export default LastSalesList;
