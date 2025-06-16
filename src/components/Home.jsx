import React from 'react'

function Home() {
  return (
    <div
      className="text-center position-relative"
      id="main"
      style={{ height: "70vh", width: "100%" }}
    >
      <div
        className="position-absolute top-50 start-50 translate-middle text-center text-white"
      >
        <h1
          style={{ width: "max-content" }}
          className="fs-xsm-1"
        >
          Welcome To <span style={{ color: "#FF6500" }}>Berimbolo company</span>{" "}
        </h1>
        <p className="mt-2">
          Here you can find the best quality in security products
        </p>
        <a href="#contact" className="btn">
          Book a Table
        </a>
      </div>
    </div>
  )
}

export default Home