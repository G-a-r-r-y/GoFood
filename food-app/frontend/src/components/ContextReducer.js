import React, { createContext, useContext, useReducer } from "react";

const CartDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          qty: action.qty,
          size: action.size,
          price: action.price,
        },
      ];
    case "REMOVE":
      let newArr = [...state];
      newArr.splice(action.index, 1);
      return newArr;

    case "DROP":
      return (state = []);
    default:
      console.log("Error is Reducer");
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <CartDispatchContext.Provider value={{ dispatch: dispatch, state: state }}>
      {children}
    </CartDispatchContext.Provider>
  );
};

export default CartProvider;
export const useDispatchCart = () => useContext(CartDispatchContext);
