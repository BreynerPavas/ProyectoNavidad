import React, { createContext, useReducer } from "react";
import axios from "axios";
import UserReducer from "./UserReducer";

const initialState = {
  tasks: [],
  taskById:{}
};

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  const createUser =async(user)=>{
   const res = await axios.post("http://localhost:8080/tasks/",{user})
    dispatch({
        type:"POST_ADDUSER",
        payload:res.data
    })
  }


  return (
    <UserContext.Provider
      value={{
        users:state.users,
        user:state.user,

      }}
    >
      {children}
    </UserContext.Provider>
  );
};
