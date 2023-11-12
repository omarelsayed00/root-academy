import { TabName } from "@components/Tabs/AnalyticsTabs";
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

export const analyticsInfos: Array<string> = [
  "التاريخ",
  "الأرباح",
  "الحالة",
  /* "تحميل", */
];

const AnalyticsList = (props: any) => {
  const statusCheck = (id: number) => {
    if (id == 0) {
      return (
        <div>
          <UpArrow />

          <label style={{ paddingBottom: "5px" }}> ارتفاع</label>
        </div>
      );
    } else if (
      props.analyticsData[id].amount < props.analyticsData[id - 1].amount
    ) {
      return (
        <div>
          <DownArrow />

          <label style={{ paddingBottom: "5px" }}> انخفاض</label>
        </div>
      );
    } else if (
      props.analyticsData[id].amount == props.analyticsData[id - 1].amount
    ) {
      return <label>--------------</label>;
    } else {
      {
        return (
          <div>
            <UpArrow />

            <label style={{ paddingBottom: "5px" }}> ارتفاع</label>
          </div>
        );
      }
    }
    console.log("id is " + id);
  };

  return (
    <Fragment>
      <ListContainer type="head">
        <ListInfo>
          {analyticsInfos.map((item, idx) => (
            <Item key={`${idx}-${item}`} length={analyticsInfos.length}>
              <span>{item}</span>
            </Item>
          ))}
        </ListInfo>
        <ListActions></ListActions>
      </ListContainer>
      {props.analyticsData.map((analytics: any, idx: number) => (
        <ListContainer key={`${idx}-${analytics.name}`} type="body">
          <ListInfo>
            <Item length={analyticsInfos.length} color="#111">
              <span>{analytics.date.substring(0, 10)}</span>
            </Item>
            <Item length={analyticsInfos.length}>
              <span>{analytics.amount} ريال</span>
            </Item>

            <Item length={analyticsInfos.length}>
              <span>
                {statusCheck(idx)} {analytics.status}
              </span>
            </Item>
            {/* <Item length={analyticsInfos.length}>
              <Button>{analytics.download}</Button>
            </Item> */}
          </ListInfo>
          <ListActions></ListActions>
        </ListContainer>
      ))}
    </Fragment>
  );
};

export default AnalyticsList;
