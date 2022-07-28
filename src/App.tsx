import './App.css'

import { useState } from 'react'
//import storeItems, { StoreItem } from "./data/data";

function App() {
  return (
    <div className="App">
      <body>
    <header id="store">
      <h1>Grocero</h1>
      <ul className="item-list store--item-list">
      <li>
      <div className=".store--item-icon">
      <img src="./assets/icons/001-beetroot.svg"/>
      </div>
    <button>Add to cart (10)</button>
    </li>
    <li>
    <div className=".store--item-icon">
      <img src="assets/icons/002-carrot.svg"/>
      </div>
      <button>Add to cart (2)</button>
      </li>
      <li>
      <div className=".store--item-icon">
      <img src="assets/icons/003-apple.svg"/>
      </div>
      <button>Add to cart (1)</button>
      </li>
      <li>
      <div className=".store--item-icon">
      <img src="assets/icons/004-apricot.svg"/>
      </div>
      <button>Add to cart (1)</button>
      </li>
      <li>
      <div className=".store--item-icon">
      <img src="assets/icons/005-avocado.svg"/>
      </div>
      <button>Add to cart (1)</button>
      </li>
      <li>
      <div className=".store--item-icon">
      <img src="assets/icons/006-bananas.svg"/>
      </div>
      <button>Add to cart (1)</button>
      </li>
      <li>
      <div className=".store--item-icon">
      <img src="assets/icons/007-bell-pepper.svg"/>
      </div>
      <button>Add to cart (1)</button>
      </li>
      <li>
      <div className=".store--item-icon">
      <img src="assets/icons/008-berry.svg"/>
      </div>
      <button>Add to cart (1)</button>
      </li>
      <li>
      <div className=".store--item-icon">
      <img src="assets/icons/009-blueberry.svg"/>
      </div>
      <button>Add to cart (1)</button>
      </li>
      <li>
      <div className=".store--item-icon">
      <img src="assets/icons/010-eggplant.svg"/>
      </div>
      <button>Add to cart (1)</button>
      </li>
      </ul>
    </header>

    <main id="cart">
      <h2>Your Cart</h2>

      <div className="cart--item-list-container">
        <ul className="item-list cart--item-list">
          <li>
        <img className="cart--item-icon" src="assets/icons/002-carrot.svg" alt="carrot"/>
        <p>carrot</p>
        <button className="quantity-btn remove-btn center">-</button>
        <span className="quantity-text center">5</span>
        <button className="quantity-btn add-btn center">+</button>
        </li>
        </ul>
      </div>

      <div className="total-section">
        <div>
          <h3>Total</h3>
        </div>

        <div>
          <span className="total-number">£0.00</span>
        </div>
      </div>
    </main>
    </body>
    </div>
  )
}

export default App


