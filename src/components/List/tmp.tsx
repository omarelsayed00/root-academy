import { TabName } from "@components/Tabs/LastUsers";
import { lastUsersData, lastUsersInfos } from "@mocks/lastUsersList";

import React, { Fragment, useState } from "react";
import {
  ArrowButton,
  Item,
  ListActions,
  ListContainer,
  ListInfo,
  Status,
} from "./styles";

const LastUsersList = ({ selectedTab }: { selectedTab: TabName }) => {
  const [openPopup, setOpenPopup] = useState<boolean>(false);
  return (
    <Fragment>
      <ListContainer type="head">
        <ListInfo>
          {lastUsersInfos.map((item, idx) => (
            <Item key={`${idx}-${item}`} length={lastUsersInfos.length}>
              <span>{item}</span>
            </Item>
          ))}
        </ListInfo>
        <ListActions></ListActions>
      </ListContainer>
      {lastUsersData.map((lastUser, idx) => (
        <ListContainer key={`${idx}-${lastUser.name}`} type="body">
          <ListInfo>
            <Item length={lastUsersInfos.length} color="#111">
              <span>{lastUser.name}</span>
            </Item>
            <Item length={lastUsersInfos.length}>
              <span>{lastUser.sdate}</span>
            </Item>
          </ListInfo>
          <ListActions></ListActions>
        </ListContainer>
      ))}
    </Fragment>
  );
};

export default LastUsersList;
