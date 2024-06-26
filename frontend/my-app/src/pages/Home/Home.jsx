import React, { useEffect, useState } from "react";
import Navbar from "../../components/NavBar/Navbar";
import axiosInstance from "../../utils/axiosInstance";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const [userInfo, setUserInfo] = useState(null);

  const navigate = useNavigate();

  // Get User Info
  const getUserInfo = async () => {
    try {
      const response = await axiosInstance.get("/get-user");
      if (response.data && response.data.user) {
        setUserInfo(response.data.user);
      }
    } catch (error) {
      if (error.response.status === 401) {
        localStorage.clear();
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    getUserInfo();
    return () => {};
  }, []);

  return (
    <>
      <Navbar
        userInfo={userInfo}
      />
    </>
  );
};

export default Home;
