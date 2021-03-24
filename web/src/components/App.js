import React, { useState } from "react";
import Login from "./Login";
import api from "../services/api";
import Header from "./Header";
import Intranet from "./Intranet";

const App = () => {
  const [loginError, setLoginError] = useState("");
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");

  const handlesignIn = (data) => {
    api.sendLogin(data).then((data) => {
      console.log(data);
      if (data.error) {
        // guardo el error en el estado para que se pinte
        setLoginError(data.message);
      } else {
        // limpio el error
        setLoginError("");
        setUserId(data.userId);
        setUserName(data.userName);
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
        <Header userName={userName}></Header>
        <Intranet></Intranet>
      </>
    );
  };
  return userId === "" ? renderLogin() : renderIntranet();
};

export default App;
