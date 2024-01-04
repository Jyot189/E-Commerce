import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Cart from './Pages/Cart';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Home from './Pages/Home';
import ProductList from './Pages/ProductList';
import Product from './Pages/Product'
import ItemState from './context/items/ItemState'
import SendMail from '../../E-commerceAPI/sendMail'
// import itemContext from './context/items/itemContext'

const App = () => {
  // const context = useContext(itemContext);
    // const { cartItem } = context;
  return (
    <ItemState> 
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/productlist" element={<ProductList/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/SendMail" element={<SendMail/>}/>
      </Routes>
    </Router>
    </ItemState>
  )
}

export default App;
