import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Cart from './Pages/Cart';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Home from './Pages/Home';
import ProductList from './Pages/ProductList';
import Product from './Pages/Product'
const App = () => {
  return (
    <> 
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/productlist" element={<ProductList/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App;
