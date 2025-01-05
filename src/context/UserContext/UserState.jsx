import React, { createContext, useReducer } from "react";
import axios from "axios";
import UserReducer from "./UserReducer";
import { useNavigate } from "react-router-dom";

const initialState = {
  users: [],
  user:{}
};

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(UserReducer, initialState);

  const createUser =async(user)=>{

    console.log("bebeb",user);
    
   const res = await axios.post("http://localhost:3000/users/create",user)
   
    dispatch({
        type:"POST_ADDUSER",
        payload:res.data
    })
  }
  const login = async (user) => {
    const res = await axios.post("http://localhost:3000/users/login", user);
    console.log("logeado correctamente");
    
    dispatch({
      type: "LOGIN",
      payload: res.data,
    });
    if (res.data) {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
    }
    navigate("/Profile")
  };


  return (
    <UserContext.Provider
      value={{
        users:state.users,
        user:state.user,
        createUser,
        login

      }}
    >
      {children}
    </UserContext.Provider>
  );
};
