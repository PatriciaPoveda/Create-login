import Delete from "./Delete";
import Update from "./Update";

const Intranet = (props) => {
  return (
    <main className="main">
      <Update
        handleUserUpdate={props.handleUserUpdate}
        updateMessage={props.updateMessage}
      ></Update>
      <Delete
        handleUserDelete={props.handleUserDelete}
        deleteMessage={props.deleteMessage}
      ></Delete>
    </main>
  );
};

export default Intranet;
