import "./AddedToCartMessage.css";

export const AddedToCartMessage = (props) => {
  const { message } = props;
  return (
    <>
      <p>Has afegit "{message.name}" al carro de la compra!</p>
    </>
  );
};
