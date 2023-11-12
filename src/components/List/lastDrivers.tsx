import { TabName } from "@components/Tabs/DriverTabs";
import React, { Fragment } from "react";
import { driversInfos } from "@mocks/driversList";

import {
  Item,
  ListActions,
  ListContainer,
  ListInfo,
  Status,
} from "./lastDriverStyles";
//make array and sort it descending order from date then map to first 7 users.

const List = (props: any) => {
  const getstatus = (status: any) => {
    if (status == "verified") {
      return "تم التحقق";
    } else if (status == "rejected") {
      return "تم الرفض";
    } else {
      return "قيد المراجعة";
    }
  };
  return (
    <Fragment>
      <ListContainer type="head">
        <ListInfo>
          {driversInfos
            .filter((info) => info != "التحقق")
            .map((item, idx) => (
              <Item key={`${idx}-${item}`} length={driversInfos.length}>
                <span>{item}</span>
              </Item>
            ))}
        </ListInfo>
        <ListActions></ListActions>
      </ListContainer>
      {props.driversData
        .filter((driver: any, idx: any) => idx < 8)
        .map((driver: any, idx: any) => (
          <ListContainer key={`${idx}-${driver.name}`} type="body">
            <ListInfo>
              <Item length={driversInfos.length} color="#111">
                <span>{driver.full_name}</span>
              </Item>
              <Item length={driversInfos.length}>
                <span>{driver.plate_number}</span>
              </Item>
              <Item length={driversInfos.length}>
                <span>{driver.license}</span>
              </Item>
              <Item length={driversInfos.length}>
                <span>{driver.number_of_shipments}</span>
              </Item>
              <Status
                length={driversInfos.length}
                status={getstatus(driver.verified)}
              >
                <span>{getstatus(driver.verified)}</span>
              </Status>
            </ListInfo>
            <ListActions></ListActions>
          </ListContainer>
        ))}
    </Fragment>
  );
};

export default List;
