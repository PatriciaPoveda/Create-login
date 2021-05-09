import { Link } from "react-router-dom";

const Intranet = (props) => {
  return (
    <main className="main">
      <nav>
        <ul>
          <li>
            <Link to={`/update/${props.userId}`}>Actualizar Usuario</Link>
          </li>
          <li>
            <Link to={`/delete/${props.userId}`}>Borrar Usuario</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
};

export default Intranet;
