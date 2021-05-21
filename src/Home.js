import React from "react";
import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory()

  const routeToOrderForm = () => {
    console.log('Submitting something to go to next page')
    history.push('/pizza')
  }

  return (
    <div className="home-wrapper">
      <button
        onClick={routeToOrderForm}
        className='md-button shop-button'
      >
        Order PIZZA!
      </button>
      <img
        className="home-image"
        src="https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
        alt="Pizza Pie!"
      />
    </div>
  );
}