import { useState } from "react";
import PropTypes from "prop-types";
import { FaEdit, FaImages, FaTimes } from "react-icons/fa";

export const AdminProduct = (props) => {
  const {
    toggleForm,
    setAction,
    product: { name, date, category },
  } = props;
  const [open, setOpen] = useState(false);

  const showImg = () => {
    setOpen(!open);
  };
  return (
    <tr>
      <td className="items-table product-item">{name}</td>
      <td className="">
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
      </td>
      <td className="items-table">{category}</td>
      <td className="items-table">{date}</td>
      <td>
        <FaEdit
          className="icon-edit"
          onClick={() => {
            setAction("edit");
            toggleForm();
          }}
        />
      </td>
      <td className="items-table">
        <FaTimes className="icon-delete" />
      </td>
    </tr>
  );
};

AdminProduct.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
  toggleForm: PropTypes.func.isRequired,
  setAction: PropTypes.func.isRequired,
};
