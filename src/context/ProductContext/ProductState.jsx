import { createContext, useReducer } from "react";
import ProductReducer from "./ProductReducer";
import axios from "axios";

const initialState = {
  products: [],
  product:{}
};

export const ProductContext = createContext(initialState);

export const ProductProvider = ({children}) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState);

  const getProducts = async () => {
    const res = await axios.get("http://localhost:3000/products/getCategoriesAndReviews");
    console.log("peticion:",res.data);
    
    dispatch({
      type: "GET_PRODUCTS",
      payload: res.data,
    });
  };
//   

  const getProductByID = async (id) => {
    const res = await axios.get("http://localhost:3000/products/getByIdCategoriesAndReviews/id/"+id);
    console.log("peticion:",res.data);
    
    dispatch({
      type: "GET_PRODUCTBYID",
      payload: res.data,
    });
  };
  

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        getProducts,
        product:state.product,getProductByID
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
