import React from "react";

//componets
import Navbar from "components/Navbar/Navbar";

//util
import { removeToken, setToken } from "utils/token";

const Home = () => {
  function authLogin(data) {
    //this is dummy function to discuss structure
    setToken("token");
  }

  function authLogout() {
    removeToken();
  }

  return <Navbar data={{ authLogin, authLogout }} />;
};

export default Home;
