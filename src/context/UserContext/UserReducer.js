const users = (state, action) => {
    switch (action.type) {
      case "POST_ADDUSER":
        return {
          ...state,
          user: [action.payload]
          
        };
        case "LOGIN":
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };
      default:
        return state;
    }
  };
  export default users;
  