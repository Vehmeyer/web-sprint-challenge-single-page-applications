import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";
import './App.css';
import OrderForm from "./Order-Form";
import Home from "./Home";


// Initial States
const initialFormValues = {
  name: '',
  size: '',
  sausage: false,
  pepperoni: false,
  bacon: false,
  ham: false,
  specialText: '',
}
const initialFormErrors = {
  name: '',
  size: '',
}
// const initialOrder = []
const initialDisabled = true





const App = () => {
// States

// Helpers

// Event Handlers

// Side Effects


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
