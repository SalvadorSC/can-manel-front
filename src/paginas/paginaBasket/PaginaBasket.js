import "./PaginaBasket.css";
import productImage from "../../assets/product.jpeg";
import { useState } from "react";
import { FeaturedProducts } from "../../componentes/FeaturedProducts/FeaturedProducts";
import { Link, useHistory } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { AddedToCartMessage } from "../../componentes/AddedToCartMessage/AddedToCartMessage";

export const PaginaBasket = (props) => {
  const { setNProducts, nProducts, products } = props;
  const [quantity, setQuantity] = useState(1);
  const [showMessage, setShowMessage] = useState(false);
  const history = useHistory();
  const basket = {
    _id: "60f835ed548afb16387e83ff",
    photoUrl: "https://picsum.photos/400",
    name: "Cistella de temporada de 10kg de Can Mateu",
    description:
      "Gran cistella de 10 kg amb una alta varietat de verdures de temporada fresques i de qualitat.",
    basketProducts: [
      {
        _id: "60f83803ab26942eb816eb94",
        name: "Rave de Sant Jordi",
        description:
          "Raphanus sativus de molt bona qualitat i amb un gran sabor",
        amount: 4,
        unit: "kilo",
      },
      {
        _id: "60f8380fab26942eb816eb9a",
        name: "Pastanaga del hort d'en Mateu",
        description: "Daucus carota de molt bona qualitat i de gran tamany",
        amount: 4,
        unit: "kilo",
      },
      {
        _id: "60f838b43b802027a0585e02",
        name: "Nap de Sant Jordi",
        description: "Brassica rapa de molt bona qualitat i de gran tamany",
        amount: 2,
        unit: "kilo",
      },
    ],
    stock: 25,
    priceUnit: 20,
    unit: "kilo",
    category: "verdures",
    size: "mitjana",
    discount: 0,
    date: "2020-07-21T00:00:00.000Z",
  };
  return (
    <>
      <section className="product-section">
        <div className="product-name">
          <Link
            to=""
            onClick={() => history.goBack()}
            className="return-link d-flex align-items-center"
          >
            <FaArrowLeft className="mr-2" />
            Tornar
          </Link>

          <h3>{basket.name}</h3>
          <hr></hr>
        </div>
        <div className="row justify-content-center text-right">
          <div className="item-image col-12 col-md-6">
            <img
              src={productImage}
              alt="Cistella de fruites i verdures de l'hort"
            />
          </div>
          <div className="info-item-product col-12 col-md-6">
            <p className="text-left mb-3">{basket.description}</p>
            <p className="included-products-title text-left mb-2">
              Productes inclosos:
            </p>
            <ul className="included-products-list text-left pl-0">
              {basket.basketProducts.map((product) => (
                <li>- {product.name}</li>
              ))}
            </ul>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="d-flex justify-content-center flex-column"
            >
              <div className="d-flex justify-content-between align-items-end mb-4">
                <span>Nº Unitats:</span>
                <input
                  type="number"
                  defaultValue={1}
                  max={basket.stock}
                  min={1}
                  className="form-control w-auto text-right"
                />
              </div>
              <div>
                <span>
                  <span className="price-item-unit"> {basket.priceUnit}€</span>{" "}
                  / Unitat
                </span>
              </div>
              <div
                className={`message-added-to-cart ${
                  showMessage ? "show" : ""
                } d-flex justify-content-center mb-3`}
              >
                <AddedToCartMessage product={basket} />
              </div>

              <div className="button-add m-auto">
                <button
                  className="button btn-product-item"
                  onClick={() => {
                    setNProducts(nProducts + quantity);
                    setShowMessage(true);
                    setTimeout(() => setShowMessage(false), 1000);
                  }}
                >
                  Afegir al carro
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <FeaturedProducts
        setNProducts={setNProducts}
        products={products}
        nProducts={nProducts}
      />
    </>
  );
};
