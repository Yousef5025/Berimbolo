import React from 'react'
import Data from '../data/products.json'

function About() {
    return (
        <section className="container py-5" id="about">
            <h1 className="text-center">Berimbolo company History</h1>
            <p className="text-muted text-center">More than 25+ years of experience</p>
            <div className="row align-items-center mt-4">
                <div className="col-md-6" id="about-content">
                    <p style={{ width: "100%" }}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab nisi
                        veritatis debitis magnam cum molestiae iste ea aut soluta dolorem,
                        facere accusamus qui labore obcaecati modi et rem aperiam quidem?
                    </p>
                    <div id="about-btn">
                        <a
                            href="#main"
                            className="btn btn-dark mt-3"
                            style={{ fontSize: "20px", padding: "10px 20px" }}
                        >
                            Learn More
                        </a>
                    </div>
                </div>
                <div className="col-md-6 mt-3 d-flex justify-content-center">
                    <img
                        src={Data[3].image}
                        id="about-img"
                        alt="About Image"
                        className="img-fluid rounded"
                        style={{width: "90%"}}
                        
                    />
                </div>
            </div>
        </section>
    );
};

export default About