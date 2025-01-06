import { createContext, useReducer } from "react";
import ProductReducer from "./ProductReducer";
import axios from "axios";

const initialState = {
  products: [],
  product: {},
};

export const ProductContext = createContext(initialState);

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState);

  const getProducts = async () => {
    const res = await axios.get("http://localhost:3000/products/getCategoriesAndReviews");
    console.log("peticion:", res.data);

    dispatch({
      type: "GET_PRODUCTS",
      payload: res.data,
    });
  };

  const getProductByID = async (id) => {
    // No actualizamos el estado global `product` aquí.
    const res = await axios.get(
      `http://localhost:3000/products/getByIdCategoriesAndReviews/id/${id}`
    );
    console.log("peticion:", res.data);

    // Retornamos los datos directamente para evitar actualizaciones en el estado global.
    return res.data;
  };

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        getProducts,
        getProductByID, // Retorna los datos pero no actualiza el estado global.
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
