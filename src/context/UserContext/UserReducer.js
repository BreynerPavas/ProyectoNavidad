const users = (state, action) => {
    switch (action.type) {
      case "POST_ADDUSER":
        return {
          ...state,
          products: action.payload,
        };
      default:
        return state;
    }
  };
  export default users;
  