import "./AdminBasket.css";
import { useState } from "react";
import PropTypes from "prop-types";
import { FaEdit, FaImages, FaTimes } from "react-icons/fa";
import { AdminForm } from "../AdminForm/AdminForm";
const { DateTime } = require("luxon");

export const AdminBasket = (props) => {
  const {
    product: { name, date, category, photoUrl },
    product,
    setAction,
    deleteProduct,
    setProductEdited,
    toggleForm,
    loadProducts,
  } = props;
  const [open, setOpen] = useState(false);
  const [formEditOpen, setFormEditOpen] = useState(false);

  const onClickDelete = (e) => {
    e.preventDefault();
    deleteProduct(product);
  };

  const toggleFormEdit = () => {
    setFormEditOpen(!formEditOpen);
    setProductEdited(product);
  };
  const showImg = () => {
    setOpen(!open);
  };
  const formattedDate = `${DateTime.fromISO(date).c.day}/${
    DateTime.fromISO(date).c.month
  }/${DateTime.fromISO(date).c.year}`;

  return (
    <div className="col-12">
      <div className="table-products row">
        <div className="col-4">
          <p>{name}</p>
        </div>
        <div className="col-2">
          <FaImages className="icon-img" onClick={showImg} />
          {open && (
            <div className="mostrar-imagen" open={open}>
              <div className="d-flex align-items-start">
                <div className="image">
                  <img src={photoUrl} alt="" width="250" />
                </div>
                <FaTimes className="close-image-icon" onClick={showImg} />
              </div>
            </div>
          )}
        </div>
        <div className="col-2">
          <p>{category}</p>
        </div>
        <div className="col-1 d-flex justify-content-center">
          <p>{formattedDate}</p>
        </div>
        <div className="col-2 text-center">
          <FaEdit
            className="icon-edit"
            onClick={() => {
              toggleFormEdit();
              setAction("edit");
              setProductEdited(product);
            }}
          />
        </div>
        <div className="col-1">
          <FaTimes className="icon-delete" onClick={onClickDelete} />
        </div>
      </div>

      {formEditOpen && (
        <AdminForm
          productToEdit={product}
          toggleFormEdit={toggleFormEdit}
          tipoDeForm="editar"
          loadProducts={loadProducts}
        />
      )}
    </div>
  );
};

AdminBasket.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
  setAction: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired,
};
