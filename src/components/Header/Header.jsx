import React from 'react'
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import './Header.scss';


const Header = () => {
  return (
    <>

 {/*  */}
 <header class="p-3 text-bg-dark">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"/></svg>
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><Link to="/"className="nav-link px-2 text-white">Home</Link></li>
          <li><Link to="/Products" className="nav-link px-2 text-white  ">Products</Link></li>
          <li><Link to="/Profile" className="nav-link px-2 text-white  ">Profile</Link></li>
          
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          
          <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search"/>
        </form>

        <div class="text-end">
          <button type="button" class="btn btn-success me-2 login">
            <Link to="/LoginUser" style={{color:"white"}}>Login</Link>
          </button>
          <button type="button" class="btn btn-warning" >
            <Link to="/RegisterUser" style={{color:"white"}} >Sign-in</Link>
          </button>
        </div>
      </div>
    </div>
  </header>
    </>
    
  )
}

export default Header