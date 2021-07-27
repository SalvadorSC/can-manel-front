import "./AdminForm.css";
import { FaTimes } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { string } from "prop-types";

export const AdminForm = (props) => {
  const {
    action,
    toggleForm,
    toggleFormEdit,
    productToEdit,
    tipoDeForm,
    loadProducts,
  } = props;
  const { token } = useContext(AuthContext);
  const [editedProduct, setEditedProduct] = useState(productToEdit);

  const urlAPI = process.env.REACT_APP_URL_API;

  const sendPreparedForm = async (e) => {
    e.preventDefault();
    await sendDataToApi(tipoDeForm);
    loadProducts();
  };
  const sendDataToApi = async (tipoDeForm) => {
    if (tipoDeForm === "editar") {
      console.log(tipoDeForm);
      if (typeof editedProduct.photoUrl === "string") {
        console.log(editedProduct);
        const id = editedProduct._id;
        delete editedProduct._id;
        const resp = await fetch(urlAPI + `products/product-no-image/${id}`, {
          method: "PUT",
          body: JSON.stringify(editedProduct),
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        });
        console.log(editedProduct);
      } else {
        const editedProductFormData = new FormData();
        editedProductFormData.append("photoUrl", editedProduct.photoUrl);
        editedProductFormData.append("name", editedProduct.name);
        editedProductFormData.append("category", editedProduct.category);
        editedProductFormData.append("description", editedProduct.description);
        editedProductFormData.append("priceUnit", editedProduct.priceUnit);
        editedProductFormData.append("unit", editedProduct.unit);
        editedProductFormData.append("discount", editedProduct.discount);
        editedProductFormData.append("date", editedProduct.date);
        editedProductFormData.append("stock", editedProduct.stock);
        const resp = await fetch(
          urlAPI + `products/product/${productToEdit._id}`,
          {
            method: "PUT",
            body: editedProductFormData,
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
      }
      toggleFormEdit();
    } else {
      const newProduct = new FormData();
      newProduct.append("photoUrl", editedProduct.photoUrl);
      newProduct.append("name", editedProduct.name);
      newProduct.append("category", editedProduct.category);
      newProduct.append("description", editedProduct.description);
      newProduct.append("priceUnit", editedProduct.priceUnit);
      newProduct.append("unit", editedProduct.unit);
      newProduct.append("discount", editedProduct.discount);
      newProduct.append("date", editedProduct.date);
      newProduct.append("stock", editedProduct.stock);

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
    }
  };

  const setData = (e) => {
    setEditedProduct({
      ...editedProduct,
      [e.target.id]:
        e.target.type === "file" ? e.target.files[0] : e.target.value,
    });
    console.log(editedProduct);
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
      <form onSubmit={(e) => sendPreparedForm(e)} autoComplete="off">
        <div className="row">
          <div className="select-image-create col-3">
            <label className="file-label" htmlFor="photoUrl">
              Imatge:
            </label>
            <input type="file" id="photoUrl" onChange={(e) => setData(e)} />
          </div>
          <div className="col form-group pt-4">
            <label htmlFor="name">Nom producte:</label>
            <input
              type="text"
              className="mb-4 d-block form-control"
              id="name"
              onChange={(e) => setData(e)}
              value={productToEdit ? editedProduct.name : null}
            />
            <label className="col-form-label mr-1" htmlFor="category">
              Categoria:
            </label>
            <select
              className="form-control"
              id="category"
              onChange={(e) => setData(e)}
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
              className="form-control"
              onChange={(e) => setData(e)}
              value={productToEdit ? editedProduct.description : null}
            ></textarea>
          </div>
        </div>
        <div className="item-price row mt-3">
          <div className="col-3 form-group">
            <label htmlFor="priceUnit">Preu per unitat:</label>
            <div className="d-flex align-items-center">
              <input
                type="text"
                id="priceUnit"
                className="form-control ml-0 mr-2"
                onChange={(e) => setData(e)}
                value={productToEdit ? editedProduct.priceUnit : null}
              />
              €
            </div>
          </div>
          <div className="col-3 form-group">
            <label htmlFor="unit">Unitat:</label>
            <select
              id="unit"
              className="form-control"
              onChange={(e) => setData(e)} /* value={adminProduct.unit} */
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
              className="form-control ml-0"
              onChange={(e) => setData(e)}
              value={productToEdit ? editedProduct.stock : null}
            />
          </div>
          <div className="col-3 form-group">
            <label htmlFor="discount">Descompte:</label>
            <div className="d-flex align-items-center">
              <input
                type="text"
                id="discount"
                className="form-control ml-0 mr-2"
                onChange={(e) => setData(e)}
                value={productToEdit ? editedProduct.discount : null}
              />
              %
            </div>
          </div>
        </div>
        <div className="text-right">
          <button type="submit" className="button">
            {tipoDeForm ? "Editar" : "Crear"}
          </button>
        </div>
      </form>
    </div>
  );
};

/* AdminForm.propTypes = {
  action: PropTypes.string.isRequired,
  productEdited: PropTypes.string.isRequired,
  toggleForm: PropTypes.func,
  toggleFormEdit: PropTypes.func.isRequired,
} */
