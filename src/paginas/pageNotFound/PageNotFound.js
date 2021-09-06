import { Link } from "react-router-dom";
import "./PageNotFound.css";

export const PageNotFound = () => {
  return (
    <div className="page-not-found row align-items-center justify-content-center mt-5 text-center">
      <p className="col-12">La pàgina no s'ha trobat</p>
      <Link to="/principal" className="link-to-home col-12">
        Tornar a la pàgina d'inici
      </Link>
    </div>
  );
};
