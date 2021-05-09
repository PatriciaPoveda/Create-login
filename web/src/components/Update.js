import React, { useState } from "react";
import { Link } from "react-router-dom";

const Update = (props) => {
  //Update user
  const [userNameUpdate, setUserNameUpdate] = useState("");
  const [passwordUpdate, setPasswordUpdate] = useState("");

  const handleUserNameUpdate = (ev) => {
    setUserNameUpdate(ev.target.value);
  };

  const handlePasswordUpdate = (ev) => {
    setPasswordUpdate(ev.target.value);
  };

  const handleFormUpdate = (ev) => {
    ev.preventDefault();

    props.handleUserUpdate({
      userNameUpdate: userNameUpdate,
      passwordUpdate: passwordUpdate,
    });
  };
  return (
    <>
      <main className="main">
        <form action="" className="main__form " onSubmit={handleFormUpdate}>
          <h2 className="main__title">Update</h2>
          <label htmlFor="name" className="main__form--label">
            Introduce tu usuario
          </label>
          <input
            type="text"
            id="name"
            placeholder="Ej: Laura"
            className="main__form--input "
            onChange={handleUserNameUpdate}
          />
          <label htmlFor="password" className="main__form--label">
            Introduce tu contraseña
          </label>
          <input
            type="text"
            id="password"
            className="main__form--input js-password"
            onChange={handlePasswordUpdate}
          />
          <input
            type="submit"
            value="Actualizar Usuario"
            className="js-SignIn"
          />
          <p>{props.updateMessage}</p>
        </form>
        <Link to="/">Volver</Link>
      </main>
    </>
  );
};

export default Update;
