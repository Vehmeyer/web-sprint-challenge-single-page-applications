import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";
import './App.css';
import OrderForm from "./Order-Form";
import Home from "./Home";

const App = () => {



  return (
    <div>
      <nav>
        <h1 className="store-header">Lambda Eats</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to='/pizza' id="order-pizza">Order</Link>
        </div>
      </nav>
          {/* <Route path='/'>
            <Home />
          </Route> */}
          <Route path='/pizza'>
            <OrderForm />
          </Route>

    </div>
  );
};
export default App;
