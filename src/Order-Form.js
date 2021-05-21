import React from "react";

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
    <form className="form container" id="pizza-form" onSubmit={onSubmit}>
      <div className="form-group submit">
        <h2>Order Pizza</h2>
        <button id="order-button" disabled={disabled}>
          SUBMIT for PIZZA!!
        </button>
        <div>
          <div>{errors.name}</div>
          <div>{errors.size}</div>
        </div>
        <br></br>
        <div className="form-group inputs">
          {/* Text Input */}
          <label>
           <b>Name: </b>
            <input
              id="name-input"
              type="text"
              name="name"
              value={values.name}
              onChange={onChange}
            />
          </label>
        </div>
        <br></br>

        {/* Dropdown */}
        <label>
          <b>Size: </b> 
          <select
            id="size-dropdown"
            name="size"
            value={values.size}
            onChange={onChange}
          >
            <option value="">--Select Size--</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>
        <br></br>

        {/* Checkboxes */}
        <br></br>
        <div className="form-group checkboxes">
          <label><b>Toppings: </b></label>
          <br></br>
          <label>
            Sausage
            <input
              type="checkbox"
              name="sausage"
              checked={values.sausage}
              onChange={onChange}
            />
          </label>
          <br></br>
          <label>
            Pepperoni
            <input
              type="checkbox"
              name="pepperoni"
              checked={values.pepperoni}
              onChange={onChange}
            />
          </label>
          <br></br>
          <label>
            Bacon
            <input
              type="checkbox"
              name="bacon"
              checked={values.bacon}
              onChange={onChange}
            />
          </label>
          <br></br>
          <label>
            Ham
            <input
              type="checkbox"
              name="ham"
              checked={values.ham}
              onChange={onChange}
            />
          </label>
        </div>
        <br></br>

        {/* Text Input */}
        <div className="form-group inputs">
          <label>
            <b>Special Instructions: </b>
            <input
              id="special-text"
              type="text"
              name="special"
              value={values.special}
              onChange={onChange}
            />
          </label>
        </div>
      </div>
    </form>
  );
}; 
export default OrderForm;
