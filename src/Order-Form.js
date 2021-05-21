import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";

const OrderForm = () => {

    // 1. inject state from props

    // 2. onSubmit function

    // 3. onChange function

// add value and onChange to each label child
  return (
    <form id="pizza-form">

        <h2>Order Pizza</h2>

        {/* 4. submit button - disabled */}

        {/* Text Input */}
        <label>Name
            <input id="name-input"
                type='text'
                name='name'
            />
        </label>

        {/* Dropdown */}
        <label>Size
            <select id="size-dropdown"
                name='size'
            >
                <option value=''>--Select Size--</option>
                <option value='small'>Small</option>
                <option value='medium'>Medium</option>
                <option value='large'>Large</option>
            </select>    
        </label>

        {/* Checkboxes */}
        <label>Sausage
            <input
                type='checkbox'
                name='sausage'
            />
        </label>
        <label>Pepperoni
            <input
                type='checkbox'
                name='pepperoni'
            />
        </label>
        <label>Bacon
            <input
                type='checkbox'
                name='bacon'
            />
        </label>
        <label>Ham
            <input
                type='checkbox'
                name='ham'
            />
        </label>

        {/* Text Input */}
        <label>Special Instructions
            <input id="special-text"
                type='text'
                name='special-text'
            />
        </label>
    </form>
  );
};
export default OrderForm;
