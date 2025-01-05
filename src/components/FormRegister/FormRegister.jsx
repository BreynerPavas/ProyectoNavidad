import React, { useState} from 'react'
import { useContext, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './FormRegister.scss'
import { UserContext } from '../../context/UserContext/UserState';

const FormRegister = () => {

    const {createUser,login} = useContext(UserContext)

    const [btnDisabled,setBtnDisabled] = useState(false)
    const [message,setMessage] = useState("")
    const [data, setData] = useState({
        name:"",
        email: "",
        password: "",
        password2: ""
    });

    let nameMessage = "Your name";
    let emailMessage = "Your email";
    let passwordMessage = "Your password";
    let password2Message = "Repeat your password";

    useEffect(() => {
        
      }, [data]);

      const handleInputChange = (e) => {
        
        if(e.target.value == ""){
            switch(e.target.id){
                case "defaultForm-email" : 
                    e.target.nextSibling.innerHTML = emailMessage
                    break;
                case "defaultForm-pass":
                    e.target.nextSibling.innerHTML = passwordMessage
                    break;
                case "defaultForm-pass2":
                    e.target.nextSibling.innerHTML = password2Message
                    break;
                case "defaultForm-name":
                    e.target.nextSibling.innerHTML = nameMessage
            }
        }else{
            e.target.nextSibling.innerHTML = ""
        }
        
        setData({
            ...data,
            [e.target.name]: e.target.value,
          });
      
    }
    const handleSubmit = async (e) => {
        e.preventDefault(); // Previene el comportamiento predeterminado del formulario.
    
        try {
            // Crear usuario y esperar a que termine.
            const userCreated = await createUser(data);
    
            
                // Prepara los datos para iniciar sesión.
                const logger = {
                    email: data.email,
                    password: data.password,
                };
                console.log("usuario creado: ", logger);
                const loggedIn = await login(logger);
    
           
        } catch (error) {
            console.error("Ocurrió un error:", error);
        }
    };
    

  return (
    <>
    <div class="col-md-6 my-4 container">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="text-center default-text py-3"><i class="fa fa-lock"></i> Sign-in:</h3>
                            <div class="md-form">
                                <i class="fa fa-user-circle-o prefix grey-text"></i>
                                <input onChange={handleInputChange} type="text" id="defaultForm-name" class="form-control" name='name'/>
                                <label for="defaultForm-email">Your name</label>
                            </div>
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
                            <div class="md-form">
                                <i class="fa fa-lock prefix grey-text"></i>
                                <input onChange={handleInputChange} type="password" id="defaultForm-pass2" class="form-control" name='password2'/>
                                <label for="defaultForm-pass2">Repeat your password</label>
                            </div>
                            <div class="text-center">
                                {message}
                                <button disabled={btnDisabled} onClick={handleSubmit} class="btn btn-default waves-effect waves-light">next</button>
                            </div>
                        </div>
                    </div>
                </div>
    </>
  )
}

export default FormRegister