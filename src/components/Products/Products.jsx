import React from 'react'
import { useContext, useEffect } from "react";
import { ProductContext } from '../../context/ProductContext/ProductState';
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import './Products.scss';

const Products = () => {
    const {products,getProducts} = useContext(ProductContext)
    const car = []
    
    
    useEffect(()=>{
      
        getProducts()
        
    },[]);
    
    const addProductHandler = (e) => {
      console.log(e.target);
      car.push(e.target.id);
      localStorage.setItem("car", JSON.stringify(car));
    }
    
    console.log("carga componente:",products)
  return (
<div>
<section className="our-webcoderskull padding-lg">
  <div className="container">
    <ul className="row">
        {
            
            products.map((product)=>{
              return (
                

                  <li className="col-12 col-md-6 col-lg-3" key={product.id}>
                    <div className="cnt-block equal-hight altura">
                      
                      <Link to={"/ProductByID/id/" + product.id}> <img src={'./src/assets/imgProducts.webp'} className="img-responsive" alt="" /></Link>
                      <h3><Link to={"/ProductByID/id/" + product.id}>{product.name_product}</Link></h3>

                      {/* aqui ira el link a buscar un producto por id */}
                      <p>{product.price}€</p>
                      <i onClick={addProductHandler} class="fa fa-plus-circle" aria-hidden="true" id={product.id}></i>

                    </div>
                  </li>

                
              )

            })
            
        }
        
        {/*  */}
     
      
    </ul>
  </div>
</section>
</div>
  )
}

export default Products