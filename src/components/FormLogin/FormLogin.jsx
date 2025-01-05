
import React, { useState} from 'react'
import { useContext, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './FormLogin.scss'
import { UserContext } from '../../context/UserContext/UserState';
const FormLogin = () => {
    const [data, setData] = useState({
            email: "",
            password: "",
        });
        const {login} = useContext(UserContext)
        
            const [btnDisabled,setBtnDisabled] = useState(false)
            const [message,setMessage] = useState("")
    

        let emailMessage = "Your email";
        let passwordMessage = "Your password";

        const handleInputChange = (e) => {
        
            if(e.target.value == ""){
                switch(e.target.id){
                    case "defaultForm-email" : 
                        e.target.nextSibling.innerHTML = emailMessage
                        break;
                    case "defaultForm-pass":
                        e.target.nextSibling.innerHTML = passwordMessage
                        break;
                    
                }
            }else{
                e.target.nextSibling.innerHTML = ""
            }
            
            setData({
                ...data,
                [e.target.name]: e.target.value,
              });
          
        }
        const handleSubmit = (e) => {
            e.preventDefault()
            console.log(data);
            login(data)
            
        }
  return (
    <>
    <div class="col-md-6 my-4 container">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="text-center default-text py-3"><i class="fa fa-lock"></i> Login:</h3>
                            <div class="md-form">
                                <i class="fa fa-envelope prefix grey-text"></i>
                                <input onChange={handleInputChange} type="text" id="defaultForm-email" class="form-control" name='email'/>
                                <label for="defaultForm-email">Your email</label>
                            </div>
                            <div class="md-form">
                                <i class="fa fa-lock prefix grey-text"></i>
                                <input onChange={handleInputChange} type="password" id="defaultForm-pass" class="form-control" name='password'/>
                                <label for="defaultForm-pass">Your password</label>
                            </div>
                            <div class="text-center">
                                <button onClick={handleSubmit} class="btn btn-default waves-effect waves-light">next</button>
                            </div>
                        </div>
                    </div>
                </div>
    </>
  )
}

export default FormLogin