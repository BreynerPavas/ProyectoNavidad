import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext/ProductState";
import { useParams } from "react-router-dom";

const ProductByID = () => {
  const { getProductByID } = useContext(ProductContext); // Obtener solo la función
  const { id } = useParams();
  const [product, setProduct] = useState(null); // Estado local para el producto

  useEffect(() => {
    const fetchProduct = async () => {
      const fetchedProduct = await getProductByID(id); // Llamada a la función de contexto
      setProduct(fetchedProduct); // Guardar el producto en el estado local
    };

    fetchProduct();
  }, [id, getProductByID]);

  if (!product) {
    return <div className="container d-flex justify-content-center py-3">Loading...</div>; // Muestra un mensaje mientras carga
  }

  return (
    <div className="container d-flex justify-content-center py-3">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://png.pngtree.com/png-clipart/20230913/original/pngtree-purchase-clipart-shopping-cart-scene-with-bundles-of-gift-items-and-png-image_11058231.png"
          className="card-img-top"
          alt="Product"
        />
        <div className="card-body">
          <h5 className="card-title">{product.name_product}</h5>
          <p className="card-text">{product.price}€</p>
        </div>
      </div>
    </div>
  );
};

export default ProductByID;
