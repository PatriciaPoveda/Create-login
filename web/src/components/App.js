import React, { useState } from "react";
import Login from "./Login";
import api from "../services/api";
import Header from "./Header";
import Intranet from "./Intranet";

const App = () => {
  const [userData, setUserData] = useState("");
  const [userId, setUserId] = useState("");
  const [loginError, setLoginError] = useState("");

  const handlesignIn = (data) => {
    api.sendLogin(data).then((data) => {
      console.log(data);
      if (data.error) {
        // guardo el error en el estado para que se pinte
        setLoginError(data.message);
      } else {
        // limpio el error
        setLoginError("");
        setUserData(data.userName);
        setUserId(data.userId);
      }
    });
  };
  const renderLogin = () => {
    return (
      <>
        <Login handlesignIn={handlesignIn} loginError={loginError}></Login>
      </>
    );
  };
  const renderIntranet = () => {
    return (
      <>
        <Header userData={userData}></Header>
        <Intranet></Intranet>
      </>
    );
  };
  return userId === "" ? renderLogin() : renderIntranet();
};

export default App;
