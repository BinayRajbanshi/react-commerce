import React from "react";
import { Routes , Route } from "react-router-dom";

// components import
import Nav from "./components/Nav";
import Footer from "./components/footer/Footer";

// pages import
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import Details from "./pages/Details";

function App() {
  return (<React.Fragment>
    <Nav/>
    
    <Routes>
      <Route path="/" element={  <Home/>}/>
      <Route path="/cart" element = {<Cart/>}/>
      <Route path='/products' element = {<Products/>}/>
      <Route path="/details/:id" element = {<Details/>}/>
    </Routes>
  

    <Footer/>
    
  </React.Fragment>
  );
}

export default App;
