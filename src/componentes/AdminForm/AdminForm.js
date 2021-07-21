import "./AdminForm.css";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";

export const AdminForm = (props) => {
  const { action, toggleForm, toggleFormEdit } = props;
  const [productForm, setProductForm] = useState({
    name: "",
    description: "",
    category: "",
    priceUnit: "",
    unit: "",
    photoUrl: "",
    discount: "",
    stock: "",
    date: Date.now(),
  });

  const sendForm = async (e) => {
    e.preventDefault();
    const product = new FormData();
    product.append("photoUrl", productForm.photoUrl);
    product.append("name", productForm.name);
    product.append("category", productForm.category);
    product.append("description", productForm.description);
    product.append("priceUnit", productForm.priceUnit);
    product.append("unit", productForm.unit);
    product.append("discount", productForm.discount);
    product.append("date", productForm.date);
    product.append("stock", productForm.stock);
    const resp = await fetch(
      "https://can-mateu.herokuapp.com/products/new-product/",
      {
        method: "POST",
        body: product,
      }
    );
    if (resp.ok) {
      return toggleForm();
    }
    console.log("Something went wrong");
  };

  const setData = (e) => {
    console.log(e.target.files);
    console.log(e.target.value);
    setProductForm({
      ...productForm,
      [e.target.id]:
        e.target.type === "file" ? e.target.files[0] : e.target.value,
    });
  };
  return (
    <div className="container-create">
      <FaTimes
        className="icon-close-form"
        onClick={() => {
          if (action === "create") {
            toggleForm();
          } else {
            toggleFormEdit();
          }
        }}
      />
      <form onSubmit={sendForm}>
        <div className="row">
          {action === "create" ? (
            <div className="select-image-create col-3">
              <label className="file-label" htmlFor="photoUrl">
                Imatge:
              </label>
              <input
                type="file"
                id="photoUrl"
                name="attachment[]"
                multiple="multiple"
                onChange={setData}
              />
            </div>
          ) : (
            <div className="content col-3">
              <label htmlFor="photoUrl">
                <img
                  className="content-image"
                  src="https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362"
                  alt=""
                />
                <div className="content-details fadeIn-top">
                  <p>Seleccionar imatge</p>
                </div>
                <input id="photoUrl" type="file" onChange={setData} />
              </label>
            </div>
          )}
          <div className="col form-group pt-4">
            <label htmlFor="name">Nom producte:</label>
            <input
              type="text"
              className="mb-4 d-block"
              id="name"
              onChange={setData}
            />
            <label className="col-form-label mr-1" htmlFor="category">
              Categoria:
            </label>
            <select className="" id="category" onChange={setData}>
              <option value="all" defaultValue>
                Totes les categories
              </option>
              <option value="fruits">Fruites</option>
              <option value="vegetables">Verdures</option>
              <option value="hortalisses">Hortalisses</option>
            </select>
          </div>
          <div className="col form-group pt-4">
            <label htmlFor="description">Descripció:</label>
            <textarea
              id="description"
              rows="3"
              cols="25"
              onChange={setData}
            ></textarea>
          </div>
        </div>
        <div className="item-price row text-center mt-3">
          <div className="col-3 form-group">
            <label htmlFor="priceUnit">Preu per unitat:</label>
            <input type="text" id="priceUnit" onChange={setData} />€
          </div>
          <div className="col-3 form-group">
            <label htmlFor="unit">Unitat:</label>
            <input type="text" id="unit" onChange={setData} />
          </div>
          <div className="col-3 form-group">
            <label htmlFor="stock">Stock:</label>
            <input type="text" id="stock" onChange={setData} />
          </div>
          <div className="col-3 form-group">
            <label htmlFor="discount">Descompte:</label>
            <input type="text" id="discount" onChange={setData} />%
          </div>
        </div>
        <div className="text-right">
          <button type="submit" className="button" onSubmit={sendForm}>
            {action === "create" ? "Crear" : "Editar"}
          </button>
        </div>
      </form>
    </div>
  );
};

AdminForm.propTypes = {
  action: PropTypes.string.isRequired,
  toggleForm: PropTypes.func.isRequired,
  toggleFormEdit: PropTypes.func.isRequired,
};
