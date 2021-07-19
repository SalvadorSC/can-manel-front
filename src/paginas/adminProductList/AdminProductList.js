import { useState } from "react";
import { FaEdit, FaImages, FaTimes } from "react-icons/fa";
import Popup from "reactjs-popup";
import "./AdminProductList.css";

export const AdminProductList = () => {
  const [open, setOpen] = useState(false);
  const showImg = () => {
    setOpen(!open);
  };

  return (
    <section className="admin">
      <table className="table">
        <thead>
          <tr>
            <th
              className="admin-product-col"
              scope="col"
              style={{ width: "30%" }}
            >
              Producte
            </th>
            <th scope="col" style={{ width: "11%" }}>
              Fotografia
            </th>
            <th scope="col" style={{ width: "19,33%" }}>
              Categoria
            </th>
            <th scope="col" style={{ width: "19,33%" }}>
              Data
            </th>
            <th scope="col" style={{ width: "19,33%" }}>
              Editar
            </th>
            <th scope="col" style={{ width: "11%" }}></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="items-table product-item">Llimona Verna ECO</td>
            <td className="">
              <FaImages className="icon-img" onClick={showImg} />
              {open && (
                <div className="mostrar-imagen" open={open}>
                  <div className="d-flex align-items-start">
                    <div className="image">
                      <img src="https://picsum.photos/250/250" alt="" />
                    </div>
                    <FaTimes
                      className="cerrar-imagen-icono"
                      onClick={showImg}
                    />
                  </div>
                </div>
              )}
            </td>
            <td className="items-table">Fruita</td>
            <td className="items-table">28/07/2021</td>
            <td>
              <FaEdit className="icon-edit" />
            </td>
            <td className="items-table">
              <FaTimes className="icon-delete" />
            </td>
          </tr>
          <tr>
            <td className="items-table product-item">Llimona Verna ECO</td>
            <td className="">
              <FaImages className="icon-img" onClick={showImg} />
              {open && (
                <div className="mostrar-imagen" open={open}>
                  <div className="d-flex align-items-start">
                    <div className="image">
                      <img src="https://picsum.photos/250/250" alt="" />
                    </div>
                    <FaTimes
                      className="cerrar-imagen-icono"
                      onClick={showImg}
                    />
                  </div>
                </div>
              )}
            </td>
            <td className="items-table">Fruita</td>
            <td className="items-table">28/07/2021</td>
            <td>
              <FaEdit className="icon-edit" />
            </td>
            <td className="items-table">
              <FaTimes className="icon-delete" />
            </td>
          </tr>
          <tr>
            <td className="items-table product-item">Llimona Verna ECO</td>
            <td className="">
              <FaImages className="icon-img" onClick={showImg} />
              {open && (
                <div className="mostrar-imagen" open={open}>
                  <div className="d-flex align-items-start">
                    <div className="image">
                      <img src="https://picsum.photos/250/250" alt="" />
                    </div>
                    <FaTimes
                      className="cerrar-imagen-icono"
                      onClick={showImg}
                    />
                  </div>
                </div>
              )}
            </td>
            <td className="items-table">Fruita</td>
            <td className="items-table">28/07/2021</td>
            <td>
              <FaEdit className="icon-edit" />
            </td>
            <td className="items-table">
              <FaTimes className="icon-delete" />
            </td>
          </tr>
          <tr>
            <td className="items-table product-item">Llimona Verna ECO</td>
            <td className="">
              <FaImages className="icon-img" onClick={showImg} />
              {open && (
                <div className="mostrar-imagen" open={open}>
                  <div className="d-flex align-items-start">
                    <div className="image">
                      <img src="https://picsum.photos/250/250" alt="" />
                    </div>
                    <FaTimes
                      className="cerrar-imagen-icono"
                      onClick={showImg}
                    />
                  </div>
                </div>
              )}
            </td>
            <td className="items-table">Fruita</td>
            <td className="items-table">28/07/2021</td>
            <td>
              <FaEdit className="icon-edit" />
            </td>
            <td className="items-table">
              <FaTimes className="icon-delete" />
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};
