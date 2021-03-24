import React from "react";
import Login from "./Login";
import api from "../services/api";

const App = () => {
  const handlesignIn = (data) => {
    api.sendLogin(data).then((data) => {
      console.log(data);
      //   if (data.error) {
      //     // guardo el error en el estado para que se pinte
      //     setLoginError(data.message);
      //   } else {
      //     // limpio el error
      //     setLoginError("");
      //     // guardo el usuario en el estado y en localStorage
      //     setUserId(data.userId);
      //     localStorage.set("user", data);
      //   }
      // });
    });
  };
  const renderLogin = () => {
    return (
      <>
        <Login handlesignIn={handlesignIn}></Login>
      </>
    );
  };
  return renderLogin();
};

export default App;

// import React, { useState } from "react";
// import Header from "./Header";
// import Intranet from "./Intranet";
// const [userData, setUserData] = useState("");
// setUserData(data.userName);
// const renderIntranet = () => {
//   return (
//     <>
//       <Header userData={userData}></Header>
//       <Intranet></Intranet>
//     </>
//   );
// };
// return userData === "" ? renderLogin() : renderIntranet();
