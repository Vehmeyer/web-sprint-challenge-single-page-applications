import React, { useState, useEffect } from "react";
// import { Route, Link } from "react-router-dom";
// import axios from "axios";

const OrderForm = (props) => {

    // 1. inject state from props
    const {
        values,
        change,
        submit, 
        disabled, 
        errors,
    } = props

    // 2. onSubmit function
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
    // 3. onChange function
    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valuesToUse = type === 'checkbox' ? checked : value
        change(name, valuesToUse)
    }

  return (
    <form id="pizza-form">

        <h2>Order Pizza</h2>
        <button disabled={disabled}>SUBMIT for PIZZA!!</button>

        <div>
            <div>{errors.name}</div>
            <div>{errors.size}</div>
        </div>

        {/* Text Input */}
        <label>Name: 
            <input id="name-input"
                type='text'
                name='name'
                value={values.name}
                onChange={onChange}
            />
        </label>

        {/* Dropdown */}
        <label>Size: 
            <select id="size-dropdown"
                name='size'
                value={values.size}
                onChange={onChange}
            >
                <option value=''>--Select Size--</option>
                <option value='small'>Small</option>
                <option value='medium'>Medium</option>
                <option value='large'>Large</option>
            </select>    
        </label>

        {/* Checkboxes */}
        <label>Toppings: </label>
        <label>Sausage
            <input
                type='checkbox'
                name='sausage'
                checked={values.sausage}
                onChange={onChange}
            />
        </label>
        <label>Pepperoni
            <input
                type='checkbox'
                name='pepperoni'
                checked={values.pepperoni}
                onChange={onChange}
            />
        </label>
        <label>Bacon
            <input
                type='checkbox'
                name='bacon'
                checked={values.bacon}
                onChange={onChange}
            />
        </label>
        <label>Ham
            <input
                type='checkbox'
                name='ham'
                checked={values.ham}
                onChange={onChange}
            />
        </label>

        {/* Text Input */}
        <label>Special Instructions: 
            <input id="special-text"
                type='text'
                name='specialText'
                value={values.specialText}
                onChange={onChange}
            />
        </label>
    </form>
  );
};
export default OrderForm;
