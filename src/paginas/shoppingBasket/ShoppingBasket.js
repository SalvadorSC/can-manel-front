import "./shoppingBasket.css";
import { FaPlus, FaMinus, FaTimes } from "react-icons/fa";
import product from "../../assets/lettuce-product.jpg";

export const ShoppingBasket = () => {
  return (
    <div>
      <section className="section">
        <div className="header-section mb-6">
          <h2>Carro de la compra</h2>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th className="d-none d-lg-table-cell" scope="col"></th>
              <th scope="col">Producte</th>
              <th scope="col">Preu</th>
              <th scope="col">Quantitat</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="d-none d-lg-block">
                <img
                  className="product-img"
                  src={product}
                  alt="fruites i verdures de l'hort"
                />
              </td>
              <td className="items-table">Enciam</td>
              <td className="items-table">1.3€</td>
              <td className="items-table">
                <div className="number">
                  <FaMinus className="icon-counter" />
                  <input type="text" value="1" readOnly />
                  <FaPlus className="icon-counter" />
                </div>
              </td>
              <td className="items-table">
                <FaTimes className="icon-delete" />
              </td>
            </tr>
            <tr>
              <td className="d-none d-lg-block">
                <img
                  className="product-img"
                  src={product}
                  alt="fruites i verdures de l'hort"
                />
              </td>
              <td className="items-table">Enciam</td>
              <td className="items-table">1.3€</td>
              <td className="items-table">
                <div className="number">
                  <FaMinus className="icon-counter" />
                  <input type="text" value="1" readOnly />
                  <FaPlus className="icon-counter" />
                </div>
              </td>
              <td className="items-table">
                <FaTimes className="icon-delete" />
              </td>
            </tr>
            <tr>
              <td className="d-none d-lg-block">
                <img
                  className="product-img"
                  src={product}
                  alt="fruites i verdures de l'hort"
                />
              </td>
              <td className="items-table">Enciam</td>
              <td className="items-table">1.3€</td>
              <td className="items-table">
                <div className="number">
                  <FaMinus className="icon-counter" />
                  <input type="text" value="1" readOnly />
                  <FaPlus className="icon-counter" />
                </div>
              </td>
              <td className="items-table">
                <FaTimes className="icon-delete" />
              </td>
            </tr>
            <tr>
              <td className="d-none d-lg-block">
                <img
                  className="product-img"
                  src={product}
                  alt="fruites i verdures de l'hort"
                />
              </td>
              <td className="items-table">Enciam</td>
              <td className="items-table">1.3€</td>
              <td className="items-table">
                <div className="number">
                  <FaMinus className="icon-counter" />
                  <input type="text" value="1" readOnly />
                  <FaPlus className="icon-counter" />
                </div>
              </td>
              <td className="items-table">
                <FaTimes className="icon-delete" />
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};
