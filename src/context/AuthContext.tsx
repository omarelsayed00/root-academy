import { createContext, useState, useEffect, useMemo, useRef } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});
export default AuthContext;

export const AuthProvider = ({ children }: any) => {
  const router = useRouter();

  const baseURL = "https://logist8768.herokuapp.com";

  const [senderUser, setsenderUser] = useState();
  const [authTokens, setAuthTokens] = useState({});
  const [user, setUser] = useState({ first_name: "" });
  const [currentToken, setCurrentToken] = useState();
  const [users, setUsers] = useState([]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedImageGallery, setSelectedImageGallery] = useState(null);

  let loginUser = async (e: any) => {
    e.preventDefault();
    console.log("Loggedddd");
    console.log(e.target.email.value);
    axios
      .post("https://logist8768.herokuapp.com/api/v1/employee/login", {
        email: e.target.email.value,
        password: e.target.password.value,
      })
      .then((response) => {
        console.log(response.data);
        //setUser(response.data.toString());
        console.log(response.data.RefreshToken);
        localStorage.setItem("accesToken", response.data.accesToken);
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchUsers = async () => {
    let config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accesToken"),
      },
    };
    await axios
      .get("https://logist8768.herokuapp.com/api/v1/user/users", config)
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response);
      });
  };

  let contextData = {
    loginUser: loginUser,
    fetchUsers: fetchUsers,
    users: users,
    user: user,
    setUser: setUser,
    senderUser: senderUser,
    setsenderUser: setsenderUser,
    baseURL: baseURL,
    currentImageIndex: currentImageIndex,
    setCurrentImageIndex: setCurrentImageIndex,
    selectedImageGallery: selectedImageGallery,
    setSelectedImageGallery: setSelectedImageGallery,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
