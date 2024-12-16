const products = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload, //res.data.results
      };
    case "GET_PRODUCTBYID":
      return {
        ...state,
        product: action.payload,
      };
    default:
      return state;
  }
};
export default products;
