import "./AdminForm.css";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

export const AdminForm = (props) => {
  const { action, toggleForm, toggleFormEdit, productEdited, urlAPI } = props;
  const { token } = useContext(AuthContext);

  const [productForm, setProductForm] = useState({
    id: null,
    name: "",
    description: "",
    category: "",
    priceUnit: "",
    unit: "",
    photoUrl: "",
    discount: "",
    stock: "",
  });
  /* const inicialData = productEdited
    ? {
        id: productEdited._id,
        name: productEdited.name,
        description: productEdited.description,
        category: productEdited.category,
        priceUnit: productEdited.priceUnit,
        unit: productEdited.unit,
        photoUrl: productEdited.photoUrl,
        discount: productEdited.discount,
        stock: productEdited.stock,
        date: productEdited.date,
      }
    : {
        id: null,
        name: "",
        description: "",
        category: "",
        priceUnit: "",
        unit: "",
        photoUrl: "",
        discount: "",
        stock: "",
      };
  const [adminProduct, setAdminProduct] = useState(inicialData); */

  const createProduct = async (product) => {
    const newProduct = new FormData(product);
    newProduct.append("photoUrl", productForm.photoUrl);
    newProduct.append("name", productForm.name);
    newProduct.append("category", productForm.category);
    newProduct.append("description", productForm.description);
    newProduct.append("priceUnit", productForm.priceUnit);
    newProduct.append("unit", productForm.unit);
    newProduct.append("discount", productForm.discount);
    newProduct.append("date", productForm.date);
    newProduct.append("stock", productForm.stock);
    const resp = await fetch(urlAPI + "products/new-product/", {
      method: "POST",
      body: productForm,
    });
    if (resp.ok) {
      toggleForm();
      return product;
    }
    console.log("Something went wrong");
  };

  /* const editProduct = async (editedProduct) => {
    editedProduct.set(adminProduct);
    const resp = await fetch(urlAPI + "products/product/" + editedProduct._id, {
      method: "PUT",
      body: adminProduct,
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (resp.ok) {
      return toggleForm();
    }
  }; */

  const sendForm = async (e) => {
    e.preventDefault();
    toggleForm();
    const newProduct = new FormData();
    newProduct.append("photoUrl", productForm.photoUrl);
    newProduct.append("name", productForm.name);
    newProduct.append("category", productForm.category);
    newProduct.append("description", productForm.description);
    newProduct.append("priceUnit", productForm.priceUnit);
    newProduct.append("unit", productForm.unit);
    newProduct.append("discount", productForm.discount);
    newProduct.append("date", productForm.date);
    newProduct.append("stock", productForm.stock);
    const resp = await fetch(urlAPI + "products/new-product/", {
      method: "POST",
      body: newProduct,
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (resp.ok) {
      return toggleForm();
    }
    console.log("Something went wrong");
  };

  const setData = (e) => {
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
                // value={adminProduct.photoUrl}
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
                <input
                  id="photoUrl"
                  type="file"
                  onChange={setData}
                  // value={adminProduct.photoUrl}
                />
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
              // value={adminProduct.name}
            />
            <label className="col-form-label mr-1" htmlFor="category">
              Categoria:
            </label>
            <select
              className=""
              id="category"
              onChange={setData}
              // value={adminProduct.category}
            >
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
              // value={adminProduct.description}
            ></textarea>
          </div>
        </div>
        <div className="item-price row text-center mt-3">
          <div className="col-3 form-group">
            <label htmlFor="priceUnit">Preu per unitat:</label>
            <input
              type="text"
              id="priceUnit"
              onChange={setData}
              // value={adminProduct.priceUnit}
            />
            €
          </div>
          <div className="col-3 form-group">
            <label htmlFor="unit">Unitat:</label>
            <select
              id="unit"
              onChange={setData} /* value={adminProduct.unit} */
            >
              <option value="all" defaultValue>
                Totes les Unitats
              </option>
              <option value="kilo">Quilo</option>
              <option value="grams">Grams</option>
              <option value="units">Unitat</option>
            </select>
          </div>
          <div className="col-3 form-group">
            <label htmlFor="stock">Stock:</label>
            <input
              type="text"
              id="stock"
              onChange={setData}
              // value={adminProduct.stock}
            />
          </div>
          <div className="col-3 form-group">
            <label htmlFor="discount">Descompte:</label>
            <input
              type="text"
              id="discount"
              onChange={setData}
              // value={adminProduct.discount}
            />
            %
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
  productEdited: PropTypes.string.isRequired,
  toggleForm: PropTypes.func,
  toggleFormEdit: PropTypes.func.isRequired,
};
