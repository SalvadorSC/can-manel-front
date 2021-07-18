import "./AdminHomePage.css";
import { FaShoppingBasket, FaCrow, FaWarehouse } from "react-icons/fa";

export const AdminHomePage = () => {
  const iconsSize = 60;
  const iconsColor = "var(--color-primary-dark)";

  return (
    <>
      <section className="admin">
        <ul className="admin-tasks list-unstyled">
          <li className="task">
            <FaShoppingBasket size={iconsSize} color={iconsColor} />
            <span>Productes</span>
          </li>
          <li className="task">
            <FaCrow size={iconsSize} color={iconsColor} />
            <span>Activitats</span>
          </li>
          <li className="task">
            <FaWarehouse size={iconsSize} color={iconsColor} />
            <span>Productes</span>
          </li>
          <li className="task">
            <FaShoppingBasket size={iconsSize} color={iconsColor} />
            <span>Productes</span>
          </li>
          <li className="task">
            <FaCrow size={iconsSize} color={iconsColor} />
            <span>Activitats</span>
          </li>
          <li className="task">
            <FaWarehouse size={iconsSize} color={iconsColor} />
            <span>Productes</span>
          </li>
        </ul>
      </section>
    </>
  );
};
