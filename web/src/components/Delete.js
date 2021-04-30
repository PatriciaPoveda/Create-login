import React from "react";

const Delete = (props) => {
  const clickBtnDelete = () => {
    props.handleUserDelete();
  };
  return (
    <div className="Container__delete">
      <h2 className="main__title">Delete</h2>
      <button onClick={clickBtnDelete}>Borrar usuario</button>
      <p>{props.deleteMessage}</p>
    </div>
  );
};

export default Delete;
