import React from 'react'

function Nav() {
    return (
        <nav
      className="navbar navbar-expand-lg container"
      style={{ backgroundColor: "transparent" }}
    >
      <a
        className="navbar-brand"
        style={{
          color: "#FF6500",
          fontSize: "36px",
          alignSelf: "flex-end",
        }}
        href="#"
      >
        Berimbolo
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto fs-5">
          <li className="nav-item mt-sm-5 me-4">
            <a className="nav-link" href="#main">
              Home
            </a>
          </li>
          <li className="nav-item mt-sm-5 me-4">
            <a className="nav-link" href="#about">
              About
            </a>
          </li>
          <li className="nav-item mt-sm-5 me-4">
            <a className="nav-link" href="#">
              Products
            </a>
          </li>
          <li className="nav-item mt-sm-5 me-4">
            <a className="nav-link" href="#offers">
              offers
            </a>
          </li>
          <li className="nav-item mt-sm-5 me-4">
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
    )
}

export default Nav;