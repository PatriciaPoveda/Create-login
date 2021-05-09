import React, { useState } from "react";
import Login from "./Login";
import api from "../services/api";
import Header from "./Header";
import Intranet from "./Intranet";

const App = () => {
  //State
  const [loginError, setLoginError] = useState("");
  const [deleteMessage, setDeleteMessage] = useState("");
  const [updateMessage, setUpdateMessage] = useState("");
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");

  //Sign In
  const handlesignIn = (data) => {
    api.sendLogin(data).then((data) => {
      if (data.error) {
        setLoginError(data.message);
      } else {
        setLoginError("");
        setUserId(data.userId);
        setUserName(data.userName);
      }
    });
  };

  //UpdateUser
  const handleUserUpdate = (data) => {
    data.id = userId;
    api.sendUserUpdate(data).then((data) => {
      console.log(data);
      if (data.error) {
        // setDeleteMessage("");
        setUpdateMessage(data.message);
      } else {
        // setUpdateMessage("");
        setUpdateMessage(data.message);
      }
    });
  };

  //Delete User
  const handleUserDelete = () => {
    api.sendUserDelete(userId).then((data) => {
      console.log(data);
      if (data.error) {
        // setDeleteMessage("");
        setDeleteMessage(data.message);
      } else {
        // setDeleteMessage("");
        setDeleteMessage(data.message);
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
        <Intranet
          handleUserUpdate={handleUserUpdate}
          handleUserDelete={handleUserDelete}
          deleteMessage={deleteMessage}
          updateMessage={updateMessage}
        ></Intranet>
      </>
    );
  };
  return userId === "" ? renderLogin() : renderIntranet();
};

export default App;
