import React from 'react'
import Data from '../data/products.json'

function Offers() {
    return (
        <section className="bg-dark text-white py-5" id='offers'>
            <div className="container text-center">
                <h1 style={{color: "#FF6500"}}>Our Special Offers</h1>
                <p>Value For Price</p>
                <div className="row mt-4">
                    <div className="col-md-4 mt-3 mt-md-0">
                        <img src= {Data[5].image} alt= {Data[5].title} className="img-fluid rounded" />
                        <p>{Data[5].description}</p>
                        <p></p>
                        <p>
                            <span style={{ textDecoration: "dashed" }}>$55.00</span>{" "}
                            <span className="text-warning">{Data[5].price} $</span>
                        </p>
                    </div>
                    <div className="col-md-4 mt-3 mt-md-0">
                        <img src= {Data[4].image} alt= {Data[4].title} className="img-fluid rounded" />
                        <p>{Data[4].description}</p>
                        <p></p>
                        <p>
                            <span style={{ textDecoration: "dashed" }}>$55.00</span>{" "}
                            <span className="text-warning">{Data[4].price} $</span>
                        </p>
                    </div>
                    <div className="col-md-4 mt-3 mt-md-0">
                        <img src= {Data[4].image} alt= {Data[5].title} className="img-fluid rounded" />
                        <p>{Data[5].description}</p>
                        <p></p>
                        <p>
                            <span style={{ textDecoration: "dashed" }}>$55.00</span>{" "}
                            <span className="text-warning">{Data[5].price} $</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Offers;