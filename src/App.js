import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Offers from './components/Offers'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {
  return (
    <>
      <header>
      <img src= {`${process.env.PUBLIC_URL}/img/steptodown.com791276.jpg`} alt="Home image" style={{position: "absolute",height: "100vh",objectFit: "cover",width: "100%",zIndex: -3,}}/>
      <Nav />
      <Home />
      </header>
      <About/>
      <Offers/>
      <Contact/>
      <Footer/>

    </>
  )
}

export default App;