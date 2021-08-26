import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPagelines,
  FaPhoneAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
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
              <ul className="footer-link list-unstyled mt-4">
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
              <ul className="footer-link list-unstyled mt-4">
                <li>
                  <Link to="/registre">Registra't</Link>
                </li>
                <li>
                  <Link to="/iniciar-sessio">Inicia sessió</Link>
                </li>
                <li>
                  <a href="link">Condicions de l'acord</a>
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
              <ul className="footer-link list-unstyled mt-4">
                <li>
                  <p>
                    <FaPagelines className="icons-footer" />
                    Can Mateu
                  </p>
                </li>
                <li>
                  <p>
                    <FaMapMarkerAlt className="icons-footer" />
                    Carrer Sant Pere 3, 08341, Mura (Barcelona)
                  </p>
                </li>
                <li>
                  <p>
                    <FaPhoneAlt className="icons-footer" />
                    +34 662 21 62
                  </p>
                </li>
                <li>
                  <p>
                    <FaEnvelope className="icons-footer" />
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
