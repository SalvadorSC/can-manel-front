import "./shoppingBasket.css";
import { FaPlus, FaMinus, FaTimes } from "react-icons/fa";
import product from "../../assets/lettuce-product.jpg";

export const ShoppingBasket = () => {
  return (
    <section>
      <div className="header-section mb-6">
        <h2>Carro de la compra</h2>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col" style={{ width: "10%" }}></th>
            <th className="product-col" scope="col" style={{ width: "25%" }}>
              Producte
            </th>
            <th scope="col" style={{ width: "18,33%" }}>
              Preu
            </th>
            <th scope="col" style={{ width: "18,33%" }}>
              Quantitat
            </th>
            <th scope="col" style={{ width: "18,33%" }}>
              Total
            </th>
            <th scope="col" style={{ width: "10%" }}></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="">
              <img
                className="product-img"
                src={product}
                alt="fruites i verdures de l'hort"
              />
            </td>
            <td className="items-table product-item">Enciam</td>
            <td className="items-table">1.3€</td>
            <td className="items-table">
              <div className="number">
                <FaMinus className="icon-counter" />
                <input type="text" value="1" readOnly />
                <FaPlus className="icon-counter" />
              </div>
            </td>
            <td>4€</td>
            <td className="items-table">
              <FaTimes className="icon-delete" />
            </td>
          </tr>
          <tr>
            <td className="">
              <img
                className="product-img"
                src={product}
                alt="fruites i verdures de l'hort"
              />
            </td>
            <td className="items-table product-item">Enciam</td>
            <td className="items-table">1.3€</td>
            <td className="items-table">
              <div className="number">
                <FaMinus className="icon-counter" />
                <input type="text" value="1" readOnly />
                <FaPlus className="icon-counter" />
              </div>
            </td>
            <td>4€</td>
            <td className="items-table">
              <FaTimes className="icon-delete" />
            </td>
          </tr>
          <tr>
            <td className="">
              <img
                className="product-img"
                src={product}
                alt="fruites i verdures de l'hort"
              />
            </td>
            <td className="items-table product-item">Enciam</td>
            <td className="items-table">1.3€</td>
            <td className="items-table">
              <div className="number">
                <FaMinus className="icon-counter" />
                <input type="text" value="1" readOnly />
                <FaPlus className="icon-counter" />
              </div>
            </td>
            <td>4€</td>
            <td className="items-table">
              <FaTimes className="icon-delete" />
            </td>
          </tr>
          <tr>
            <td className="">
              <img
                className="product-img"
                src={product}
                alt="fruites i verdures de l'hort"
              />
            </td>
            <td className="items-table product-item">Enciam</td>
            <td className="items-table">1.3€</td>
            <td className="items-table">
              <div className="number">
                <FaMinus className="icon-counter" />
                <input type="text" value="1" readOnly />
                <FaPlus className="icon-counter" />
              </div>
            </td>
            <td>4€</td>
            <td className="items-table">
              <FaTimes className="icon-delete" />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="total">
        <div className="row">
          <div className="col-8">TOTAL</div>
          <div className="col-4 text-right">22,40€</div>
        </div>
      </div>
      <div className="order-button">
        <button className="button btn-order py-2">Passar per caixa</button>
      </div>
    </section>
  );
};
