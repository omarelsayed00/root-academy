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
import { Backdrop } from "@mui/material";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const LoginHistory = () => {
  const [openPopup, setOpenPopup] = useState<boolean>(false);
  const [users, setUsers] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { BASE_URL } = process.env;

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setIsLoading(true);
    let config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    };
    await axios
      .get(`${BASE_URL}/admins/users`, config)
      .then((response) => {
        console.log(response.data);
        setUsers(response.data.data.date);
        setFilteredList(response.data.data.date);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          router.push("/login");
          Cookies.remove("loggedIn");
        } else {
          console.log(error.response);
        }
      });
    setIsLoading(false);
  };
  const handleChange = (value: any) => {
    setSearchText(value);
    filterData(value);
  };

  const filterData = (value: any) => {
    const lowerCaseValue = value.toLowerCase().trim();
    if (!lowerCaseValue) {
      setFilteredList(users);
    } else {
      const filteredData: any = users.filter((item: any) => {
        return Object.keys(item).some((key) => {
          return /* excludeColumns.includes(key) ? false : */ item[key]
            .toString()
            .toLowerCase()
            .includes(lowerCaseValue);
        });
      });
      setFilteredList(filteredData);
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
      <SelectTableComponent users={filteredList} fetchUsers={fetchUsers} />

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
        onClick={() => setIsLoading(true)}
      >
        <div className="loading"></div>
      </Backdrop>
    </Container>
  );
};

export default LoginHistory;
