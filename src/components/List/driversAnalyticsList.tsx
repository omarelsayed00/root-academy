import { TabName } from "@components/Tabs/AnalyticsTabs";
import { driversData, driversInfos } from "@mocks/driversList";
import UpArrow from "@icons/UpArrow";
import DownArrow from "@icons/DownArrow";
import Icon from "@components/Icon";
import React, { Fragment } from "react";
import {
  Item,
  Button,
  ListActions,
  ListContainer,
  ListInfo,
  Status,
  AnalyticsStatus,
} from "./styles";

const statusCheck = (statusName: string) => {
  if (statusName == "ارتفاع") {
    return <UpArrow />;
  } else {
    return <DownArrow />;
  }
};

const DriversList = (props: any) => {
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
            .filter((info) => info != "التاريخ" && info != "الحالة")
            .map((item, idx) => (
              <Item key={`${idx}-${item}`} length={driversInfos.length}>
                <span>{item}</span>
              </Item>
            ))}
          {/* <Item key={0} length={6}>
            <span>تحميل</span>
          </Item> */}
        </ListInfo>
        <ListActions></ListActions>
      </ListContainer>
      {props.driversData.map((driver: any, idx: number) => (
        <ListContainer key={`${idx}-${driver.full_name}`} type="body">
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
            {/* <Item length={driversInfos.length}>
              <Button>Excel</Button>
            </Item> */}
          </ListInfo>
          <ListActions></ListActions>
        </ListContainer>
      ))}
    </Fragment>
  );
};

export default DriversList;
