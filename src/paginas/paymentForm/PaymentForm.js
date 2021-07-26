import { useContext } from "react";
import { FaQuestionCircle } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";
import "./PaymentForm.css";

export const PaymentForm = () => {
  const { totalPrice } = useContext(AuthContext);

  return (
    <div id="Checkout" className="inline">
      <h1>Pagament amb targeta</h1>
      <div className="card-row">
        <span className="visa"></span>
        <span className="mastercard"></span>
        <span className="amex"></span>
        <span className="discover"></span>
      </div>
      <form>
        <div className="form-group">
          <label htmlFor="PaymentAmount">Suma total de la compra</label>
          <div className="amount-placeholder">
            <span>{Math.round(totalPrice * 100) / 100}</span>
            <span>€</span>
          </div>
        </div>
        <div className="form-group">
          <label or="NameOnCard">Titular de la targeta</label>
          <input
            id="NameOnCard"
            className="form-control"
            type="text"
            maxLength="255"
          />
        </div>
        <div className="form-group">
          <label htmlFor="CreditCardNumber">Número de la targeta</label>
          <input
            id="CreditCardNumber"
            className="null form-control"
            type="text"
          />
        </div>
        <div className="expiry-date-group form-group">
          <label htmlFor="ExpiryDate">Data d'expiració</label>
          <input
            id="ExpiryDate"
            className="form-control"
            type="text"
            placeholder="MM / YY"
            maxLength="7"
          />
        </div>
        <div className="security-code-group form-group">
          <label htmlFor="SecurityCode">Codi de seguretat</label>
          <div className="input-container">
            <input id="SecurityCode" className="form-control" type="text" />
            <FaQuestionCircle className="icon-payment-form" />
          </div>
        </div>
        <div className="zip-code-group form-group">
          <label htmlFor="ZIPCode">Codi postal</label>
          <div className="input-container">
            <input
              id="ZIPCode"
              className="form-control"
              type="text"
              maxLength="10"
            />
            <a role="button" href="info">
              <FaQuestionCircle className="icon-payment-form" />
            </a>
          </div>
        </div>
        <button
          id="PayButton"
          className="btn btn-block btn-success submit-button"
          type="submit"
        >
          <span className="submit-button-lock"></span>
          <span className="align-middle">
            Pagar <span>{Math.round(totalPrice * 100) / 100}</span>€
          </span>
        </button>
      </form>
    </div>
  );
};
