import "./shoppingBasket.css";
import productImage from "../../assets/lettuce-product.jpg";
import { ItemShoppingCart } from "../../componentes/ItemShoppingCart/ItemShoppingCart";
import { useState } from "react";

export const ShoppingBasket = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const products = [
    {
      name: "Enciam",
      price: 1.5,
      quantity: 9,
    },
    {
      name: "Tomaquet",
      price: 1.23,
      quantity: 20,
    },
    {
      name: "Pastanaga",
      price: 1.04,
      quantity: 50,
    },
    {
      name: "Enciam",
      price: 1.1,
      quantity: 3,
    },
  ];
  return (
    <section>
      <div className="header-section mb-6">
        <h2>Carro de la compra</h2>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th
              className="d-none d-lg-table-cell"
              scope="col"
              style={{ width: "10%" }}
            ></th>
            <th className="product-col" scope="col" style={{ width: "25%" }}>
              Producte
            </th>
            <th scope="col" style={{ width: "18,33%" }}>
              Preu
            </th>
            <th scope="col" style={{ width: "18,33%" }}>
              Quantitat
            </th>
            <th
              className="d-none d-md-table-cell"
              scope="col"
              style={{ width: "18,33%" }}
            >
              Total
            </th>
            <th scope="col" style={{ width: "10%" }}></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ItemShoppingCart
              product={product}
              productImage={productImage}
              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
            />
          ))}
        </tbody>
      </table>
      <div className="total">
        <div className="row">
          <div className="col-8">TOTAL</div>
          <div className="col-4 text-right">{totalPrice}€</div>
        </div>
      </div>
      <div className="order-button">
        <button className="button btn-order py-2">Passar per caixa</button>
      </div>
    </section>
  );
};
