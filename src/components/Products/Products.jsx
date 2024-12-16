import React from 'react'
import { useContext, useEffect } from "react";
import { ProductContext } from '../../context/ProductContext/ProductState';
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import './Products.scss';

const Products = () => {
    const {products,getProducts} = useContext(ProductContext)
    
    useEffect(()=>{
        getProducts()
        
    },[]);
    
    console.log("carga componente:",products)
  return (
    <div>
<section className="our-webcoderskull padding-lg">
  <div className="container">
    <ul className="row">
        {
            
            products.map((product)=>{
                return(
                    <>
                    <li className="col-12 col-md-6 col-lg-3">
              <div className="cnt-block equal-hight altura">
                <img src={'./src/assets/imgProducts.webp'} className="img-responsive" alt=""/>
                
                <h3><Link to={"/ProductByID/id/"+product.id}>{product.name_product}</Link></h3>
                
                {/* aqui ira el link a buscar un producto por id */}
                <p>{product.price}</p>
              </div>
          </li>
                    </>
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