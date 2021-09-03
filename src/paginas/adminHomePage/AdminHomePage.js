import "./AdminHomePage.css";
import {
  FaShoppingBasket,
  FaCrow,
  FaWarehouse,
  FaAddressBook,
  FaCarrot,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export const AdminHomePage = () => {
  const iconsSize = 60;
  const iconsColor = "var(--color-primary-dark)";

  return (
    <>
      <section className="admin mt-5">
        <ul className="admin-tasks list-unstyled">
          <li className="task">
            <Link
              to="/administracio-productes"
              className="d-flex flex-column align-items-center"
            >
              <FaCarrot size={iconsSize} color={iconsColor} />
              <span>Productes</span>
            </Link>
          </li>
          <li className="task">
            <Link
              to="/administracio-cistelles"
              className="d-flex flex-column align-items-center"
            >
              <FaShoppingBasket size={iconsSize} color={iconsColor} />
              <span>Cistelles</span>
            </Link>
          </li>
          <li className="task">
            <Link
              to="/administracio-usuaris"
              className="d-flex flex-column align-items-center"
            >
              <FaAddressBook size={iconsSize} color={iconsColor} />
              <span>Usuaris</span>
            </Link>
          </li>
          <li className="task">
            <Link
              to="/nowhere"
              className="d-flex flex-column align-items-center"
            >
              <FaCrow size={iconsSize} color={iconsColor} />
              <span>Activitats</span>
            </Link>
          </li>
          <li className="task">
            <Link
              to="/nowhere"
              className="d-flex flex-column align-items-center"
            >
              <FaWarehouse size={iconsSize} color={iconsColor} />
              <span>Descomptes</span>
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
};
