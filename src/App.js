import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";
import './App.css';
import OrderForm from "./Order-Form";
import Home from "./Home";
import * as yup from 'yup';
import schema from './validation/formSchema';


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

// verify if initialOrder should be empty object vs. array
const initialOrder = {}
const initialDisabled = true

const App = () => {
// States
const [order, setOrder] = useState(initialOrder)
const [formValues, setFormValues] = useState(initialFormValues)
const [formErrors, setFormErrors] = useState(initialFormErrors)
const [disabled, setDisabled] = useState(initialDisabled)

// Helpers
const postNewOrder = newOrder => {
  axios.post('https://reqres.in/api/orders', newOrder)
    .then(res => {
      setOrder(res.data)
    })
    .catch(err => {
      alert("Please complete order")
    })
    .finally(() => {
      setFormValues(initialFormValues)
    })
}

// Validation
const validate = (name, value) => {
  yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({...formErrors, [name]: ''}))
    .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
}

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
