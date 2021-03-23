import React from "react";
import Login from "./Login";

const App = () => {
  const handlesignIn = (data) => {
    console.log(data);
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
