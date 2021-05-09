import React from "react";
import { Link } from "react-router-dom";

const Delete = (props) => {
  const clickBtnDelete = () => {
    props.handleUserDelete();
  };
  return (
    <main className="main">
      <div className="Container__delete">
        <h2 className="main__title">Delete</h2>
        <button onClick={clickBtnDelete}>Borrar usuario</button>
        <p>{props.deleteMessage}</p>
      </div>
      <Link to="/">Volver</Link>
    </main>
  );
};

export default Delete;
