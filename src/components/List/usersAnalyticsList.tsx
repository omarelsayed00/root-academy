import { TabName } from "@components/Tabs/AnalyticsTabs";
import { usersData, usersInfos } from "@mocks/usersList";
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
  return <DownArrow />;
};

const UsersList = (props: any) => {
  return (
    <Fragment>
      <ListContainer type="head">
        <ListInfo>
          {usersInfos.map((item, idx) => (
            <Item key={`${idx}-${item}`} length={usersInfos.length}>
              <span>{item}</span>
            </Item>
          ))}
          {/* <Item key={0} length={4}>
            <span>تحميل</span>
          </Item> */}
        </ListInfo>
        <ListActions></ListActions>
      </ListContainer>
      {props.usersData.map((user: any, idx: number) => (
        <ListContainer key={`${idx}-${user.name}`} type="body">
          <ListInfo>
            <Item length={usersInfos.length} color="#111">
              <span>{user.full_name}</span>
            </Item>
            <Item length={usersInfos.length}>
              <span>{user.email}</span>
            </Item>

            <Item length={usersInfos.length}>
              <span>{user.phone_number}</span>
            </Item>

            <Item length={usersInfos.length}>
              <span>{user.adrress}</span>
            </Item>

            {/* <Item length={usersInfos.length}>
              <Button>Excel</Button>
            </Item> */}
          </ListInfo>
          <ListActions></ListActions>
        </ListContainer>
      ))}
    </Fragment>
  );
};

export default UsersList;
