import "./AdminForm.css";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";

export const AdminForm = (props) => {
  const { action, toggleForm, toggleFormEdit, setFormOpen } = props;
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
      <form>
        <div className="row">
          <div className="content col-3">
            <label htmlFor="file-input">
              <img
                className="content-image"
                src="https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362"
                alt=""
              />
              <div className="content-details fadeIn-top">
                <p>Seleccionar imatge</p>
              </div>
              <input id="file-input" type="file" />
            </label>
          </div>
          <div className="col form-group pt-4">
            <label htmlFor="productName">Nom producte:</label>
            <input type="text" className="mb-4 d-block" id="productName" />
            <label className="col-form-label mr-1" htmlFor="categoryEdit">
              Categoria:
            </label>
            <select className="" id="categoryEdit">
              <option value="all" defaultValue>
                Totes les categories
              </option>
              <option value="fruits">Fruites</option>
              <option value="vegetables">Verdures</option>
              <option value="hortalisses">Hortalisses</option>
            </select>
          </div>
          <div className="col form-group pt-4">
            <label htmlFor="descriptionProduct">Descripció:</label>
            <textarea id="descriptionProduct" rows="3" cols="25"></textarea>
          </div>
        </div>
        <div className="item-price row text-center mt-3">
          <div className="col-3 form-group">
            <label htmlFor="itemPrice">Preu per unitat:</label>
            <input type="text" className="" id="itemPrice" />€
          </div>
          <div className="col-3 form-group">
            <label htmlFor="itemQuantity">Unitat:</label>
            <input type="text" className="" id="itemQuantity" />€
          </div>
          <div className="col-3 form-group">
            <label htmlFor="discount">Descompte:</label>
            <input type="text" className="" id="discount" />%
          </div>
        </div>
      </form>
      <div className="text-right">
        <button type="submit" className="button">
          {action === "create" ? "Crear" : "Editar"}
        </button>
      </div>
    </div>
  );
};

AdminForm.propTypes = {
  action: PropTypes.string.isRequired,
  toggleForm: PropTypes.func.isRequired,
};
