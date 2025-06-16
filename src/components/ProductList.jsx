import React, { createContext,useContext } from 'react';
import ProductProvider,{ ProductContext } from '../Context/ProductProviders';
import { Link } from 'react-router-dom';



const ProductList = () => {
  const {Product}=useContext(ProductContext)
    return (
      <div className="container">
        <div className='row'>
            {Product.map((product)=>{
                <div className="card" style="width: 18rem;">
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <Link to={`/product/${product.id}`} className='btnbtn '>Explore more</Link>
                </div>
              </div>
            })}
        </div>
      </div>
    );
}

export default ProductList;
