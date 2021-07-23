import { useCallback, useEffect, useState } from "react";
import { CartContext } from "./CartContext";

export const CartContextProvider = (props) => {
  const { children } = props;
  const [localCart, setLocalCart] = useState({});

  return (
    <CartContext.Provider value={{ localCart, setLocalCart }}>
      {children}
    </CartContext.Provider>
  );
};
