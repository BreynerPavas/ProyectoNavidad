import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProductContext } from "../../context/ProductContext/ProductState";
import { Link } from "react-router-dom";
import './Cart.scss'

const Cart = () => {
    const { getProductByID } = useContext(ProductContext);
    const [fullCart, setFullCart] = useState([]);

    useEffect(() => {
        const car = JSON.parse(localStorage.getItem("car")) || [];
        const fetchProducts = async () => {
            const products = [];
            for (const item of car) {
                const product = await getProductByID(item); // Asume que getProductByID es una función asincrónica.
                products.push(product);
            }
            setFullCart(products); // Actualiza el estado con los productos obtenidos.
        };
        fetchProducts();
    }, [getProductByID]);

    return (
        <section className="our-webcoderskull padding-lg">
            <div><i onClick={()=>{alert("Compra realizada correctamente")}}class="fa fa-shopping-basket" aria-hidden="true"></i>
            </div>
            

            <div className="container">
                <ul className="row">
                    {fullCart.map((product, index) => (
                        <li className="col-12 col-md-6 col-lg-3" key={product.id}>
                            <div className="cnt-block equal-hight altura">

                                <Link to={"/ProductByID/id/" + product.id}> <img src={'./src/assets/imgProducts.webp'} className="img-responsive" alt="" /></Link>
                                <h3><Link to={"/ProductByID/id/" + product.id}>{product.name_product}</Link></h3>

                                {/* aqui ira el link a buscar un producto por id */}
                                <p>{product.price}€</p>

                            </div>
                        </li>


                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Cart;
