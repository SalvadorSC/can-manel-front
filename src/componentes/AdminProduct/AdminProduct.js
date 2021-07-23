import "./AdminProduct.css";
import { useState } from "react";
import PropTypes from "prop-types";
import { FaEdit, FaImages, FaTimes } from "react-icons/fa";
import { AdminForm } from "../AdminForm/AdminForm";
const { DateTime } = require("luxon");

export const AdminProduct = (props) => {
  const {
    product: { name, date, category, _id: id },
    setAction,
    deleteProduct,
  } = props;
  const [open, setOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  const toggleFormEdit = () => {
    setFormOpen(!formOpen);
  };
  const showImg = () => {
    setOpen(!open);
  };
  /* console.log(date); */
  const formattedDate = `${DateTime.fromISO(date).c.day}/${
    DateTime.fromISO(date).c.month
  }/${DateTime.fromISO(date).c.year}`;

  console.log(formattedDate);
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
                  <img src="https://picsum.photos/250/250" alt="" />
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
            }}
          />
        </div>
        <div className="col-1">
          <FaTimes className="icon-delete" onClick={() => deleteProduct(id)} />
        </div>
      </div>

      {formOpen && <AdminForm toggleFormEdit={toggleFormEdit} />}
    </div>
  );
};

AdminProduct.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
  setAction: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired,
};
