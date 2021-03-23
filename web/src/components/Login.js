import React, { useState } from "react";

const Login = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleUserName = (ev) => {
    setUserName(ev.target.value);
  };

  const handlePassword = (ev) => {
    setPassword(ev.target.value);
  };

  const handleFormsignIn = (ev) => {
    ev.preventDefault();
    props.handlesignIn({
      userName: userName,
      password: password,
    });
  };
  return (
    <>
      <main className="main">
        <h2 className="main__title">Sign in</h2>
        <form
          action=""
          className="main__form js-signIn"
          onSubmit={handleFormsignIn}
        >
          <label htmlFor="name" className="main__form--label">
            Introduce tu nombre
          </label>
          <input
            type="text"
            id="name"
            placeholder="Ej: Laura"
            className="main__form--input js-username"
            onChange={handleUserName}
          />
          <label htmlFor="password" className="main__form--label">
            Introduce tu contraseña
          </label>
          <input
            type="text"
            id="password"
            className="main__form--input js-password"
            onChange={handlePassword}
          />
          <input type="submit" value="Regístrate" className="js-SignIn" />
        </form>
      </main>
    </>
  );
};

export default Login;
