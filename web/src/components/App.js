import React, { useState } from "react";
import Login from "./Login";
import api from "../services/api";
import Header from "./Header";
import Intranet from "./Intranet";
import { Route, Switch } from "react-router-dom";
import Delete from "./Delete";
import Update from "./Update";

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
    api.sendUserUpdate(data, userId).then((data) => {
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
        <Switch>
          <Route exact path="/">
            <Header userName={userName}></Header>
            <Intranet userId={userId}></Intranet>
          </Route>
          <Route path="/update/:userId">
            <Header userName={userName}></Header>
            <Update
              handleUserUpdate={handleUserUpdate}
              updateMessage={updateMessage}
            ></Update>
          </Route>
          <Route path="/delete/:userId">
            <Header userName={userName}></Header>
            <Delete
              userId={userId}
              handleUserDelete={handleUserDelete}
              deleteMessage={deleteMessage}
            ></Delete>
          </Route>
        </Switch>
      </>
    );
  };
  return userId === "" ? renderLogin() : renderIntranet();
};

export default App;
