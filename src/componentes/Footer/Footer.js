import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="section-footer bg-footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <div className="">
              <h6 className="footer-heading text-uppercase text-white">
                Informació
              </h6>
              <ul className="list-unstyled footer-link mt-4">
                <li>
                  <a href="link">Pàgines</a>
                </li>
                <li>
                  <a href="link">El nostre equip</a>
                </li>
                <li>
                  <a href="link">Activitats</a>
                </li>
                <li>
                  <a href="link">Projectes</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="">
              <h6 className="footer-heading text-uppercase text-white">
                Ajuda
              </h6>
              <ul className="list-unstyled footer-link mt-4">
                <li>
                  <a href="link">Registra't</a>
                </li>
                <li>
                  <a href="link">Inicia sessió</a>
                </li>
                <li>
                  <a href="link">Condiciones de l'acuerd</a>
                </li>
                <li>
                  <a href="link">Política de privacitat</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="">
              <h6 className="footer-heading text-uppercase text-white">
                Contacta'ns
              </h6>
              <ul className="list-unstyled footer-link mt-4">
                <li>
                  <p>Can Mateu</p>
                </li>
                <li>
                  <p>
                    <FaMapMarkerAlt /> Carrer Sant Pere 3, 08341, Mura
                    (Barcelona)
                  </p>
                </li>
                <li>
                  <p>
                    <FaPhoneAlt />
                    +34 662 21 62
                  </p>
                </li>
                <li>
                  <p>
                    <FaEnvelope />
                    info@canmateu.com
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <p className="footer-alt mb-0 f-14">
          2021 © Can Mateu, All Rights Reserved
        </p>
      </div>
    </footer>
  );
};
