import "./AddedToCartMessage.css";

export const AddedToCartMessage = (props) => {
  const { product } = props;
  return (
    <>
      <span /* className="text-center" */>Has afegit "{product.name}"!</span>
    </>
  );
};
