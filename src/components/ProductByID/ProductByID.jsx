import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useEffect } from "react";
import { ProductContext } from '../../context/ProductContext/ProductState';
import { useParams } from 'react-router-dom';

const ProductByID = () => {

    const {product,getProductByID} = useContext(ProductContext)
    const {id}= useParams();
    useEffect(()=>{
        getProductByID(id)
        
    },[]);
    
    
  return (
      <div className='container d-flex justify-content-center py-3'>
        {console.log("objetoID",product)}
    <div className="card" style={{width: 18+'rem'}}>
  <img src="https://png.pngtree.com/png-clipart/20230913/original/pngtree-purchase-clipart-shopping-cart-scene-with-bundles-of-gift-items-and-png-image_11058231.png" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{product.name_product}</h5>
    <p className="card-text">{product.price}€</p>
  </div>
  
</div>
    </div>
  )
}

export default ProductByID