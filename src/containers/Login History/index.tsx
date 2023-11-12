/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { AddBtn, Container, Header, Input, TableContainer } from "./styles";
import axios from "axios";

import Modal from "@components/Modal";

import SelectTableComponent from "./table";
import MemberModal from "@components/Modal/UserModal";
import NewUserModal from "@components/Modal/UserModal";
import { usersData } from "@mocks/usersList";
import Image from "next/image";

const LoginHistory = () => {
  const [openPopup, setOpenPopup] = useState<boolean>(false);
  const [users, setUsers] = useState(usersData);
  const [searchText, setSearchText] = useState("");

  const handleChange = (value: any) => {
    setSearchText(value);
    filterData(value);
  };

  const filterData = (value: any) => {
    const lowerCaseValue = value.toLowerCase().trim();
    if (!lowerCaseValue) {
      setUsers(usersData);
    } else {
      const filteredData: any = usersData.filter((item: any) => {
        return Object.keys(item).some((key) => {
          return /* excludeColumns.includes(key) ? false : */ item[key]
            .toString()
            .toLowerCase()
            .includes(lowerCaseValue);
        });
      });
      setUsers(filteredData);
    }
  };

  return (
    <Container>
      <Header>
        <Input>
          <Image src={"/images/search.svg"} alt="sa" width={18} height={18} />
          <input
            type="text"
            placeholder="ابحث عن طريق البريد الالكترونى او اسم المستخدم ..."
            value={searchText}
            onChange={(e: { target: { value: any } }) =>
              handleChange(e.target.value)
            }
          />
        </Input>
      </Header>
      <SelectTableComponent users={users} setUsers={setUsers} />
      {openPopup && (
        <Modal onClose={() => setOpenPopup(false)}>
          <NewUserModal
            onClose={() => setOpenPopup(false)}
            users={users}
            setUsers={setUsers}
          />
        </Modal>
      )}
    </Container>
  );
};

export default LoginHistory;
