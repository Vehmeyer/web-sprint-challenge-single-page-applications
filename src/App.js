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
  special: '',
}
const initialFormErrors = {
  name: '',
  size: '',
}

const initialOrder = []
const initialDisabled = true

const App = () => {
// State Slices
const [order, setOrder] = useState(initialOrder)
const [formValues, setFormValues] = useState(initialFormValues)
const [formErrors, setFormErrors] = useState(initialFormErrors)
const [disabled, setDisabled] = useState(initialDisabled)

// Helpers
const postNewOrder = newOrder => {
  axios.post("https://reqres.in/api/orders", newOrder)
    .then(res => {
      setOrder([res.data, ...order])
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
const inputChange = (name, value) => {
  validate(name, value)
  setFormValues({
    ...formValues,
    [name]: value
  })
}

const formSubmit = () => {
  const newOrder = {
    name: formValues.name.trim(),
    size: formValues.size.trim(),
    sausage: formValues.sausage,
    pepperoni: formValues.pepperoni,
    bacon: formValues.bacon,
    ham: formValues.ham,
    special: formValues.special.trim()
  }
  postNewOrder(newOrder)
}

// Side Effects
useEffect(() => {
  schema.isValid(formValues).then(valid => setDisabled(!valid))
}, [formValues])

  return (
    <div>
      <nav>
        <h1 className="store-header">Lambda Eats</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to='/pizza' id="order-pizza">Order</Link>
        </div>
      </nav>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/pizza'>
            <OrderForm 
              values={formValues}
              change={inputChange}
              submit={formSubmit}
              disabled={disabled}
              errors={formErrors}
            />
          </Route>
    </div>
  );
};
export default App;
