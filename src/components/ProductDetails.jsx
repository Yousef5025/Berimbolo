import React, { createContext } from "react";
import { Link } from "react-router-dom";


const ProductList = ({Product}) => {
  return (
    <div className="container">
      <div className="row">
          <div className="card" style="width: 18rem">
            <img src={Product.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to={`products/${Product.id}`} className="btn btn-danger">
                Explore more
              </Link>
            </div>
          </div>;
      </div>
    </div>
  );
};

export default ProductList;
