/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { AddBtn, Container, Header, Input } from "./styles";
import axios from "axios";

import Modal from "@components/Modal";

import SelectTableComponent from "./table";
import MemberModal from "@components/Modal/UserModal";
import NewUserModal from "@components/Modal/UserModal";
import { usersData } from "@mocks/usersList";
import Image from "next/image";
import { useRouter } from "next/router";
import { Backdrop } from "@mui/material";
import Cookies from "js-cookie";

const LoginHistory = () => {
  const [openPopup, setOpenPopup] = useState<boolean>(false);
  const [players, setPlayers] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [filteredList, setFilteredList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const { BASE_URL } = process.env;

  useEffect(() => {
    fetchPlayers();
  }, [page, searchText]);

  const fetchPlayers = async () => {
    setIsLoading(true);
    let config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    };
    await axios
      .get(`${BASE_URL}/admins/players?page=${page}&q=${searchText}`, config)
      .then((response) => {
        console.log(response.data);
        setLastPage(response.data.meta.last_page);
        setPlayers(response.data.data.date);
        setFilteredList(response.data.data.date);
        //setSelectedBus(response.data.results[0].bus_name);
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
    //filterData(value);
  };

  const filterData = (value: any) => {
    const lowerCaseValue = value.toLowerCase().trim();
    if (!lowerCaseValue) {
      setFilteredList(players);
    } else {
      const filteredData: any = players.filter((item: any) => {
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

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page != lastPage) {
      setPage(page + 1);
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
        <AddBtn onClick={() => router.push("new-player")}>+ إنشاء لاعب</AddBtn>
      </Header>
      <SelectTableComponent
        users={filteredList}
        fetchPlayers={fetchPlayers}
        setIsLoading={setIsLoading}
        page={page}
        lastPage={lastPage}
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
      />
      {openPopup && (
        <Modal onClose={() => setOpenPopup(false)}>
          <NewUserModal
            onClose={() => setOpenPopup(false)}
            users={players}
            fetchPlayers={fetchPlayers}
          />
        </Modal>
      )}
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
