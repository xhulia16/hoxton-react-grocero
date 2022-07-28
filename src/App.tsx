import './App.css'

import { useState } from 'react'
import storeItems, { StoreItem } from "./data/data";

function getItemImagePath (item: StoreItem) {
  let id = String(item.id).padStart(3, '0')
  return `assets/icons/${id}-${item.name}.svg`
}

function App() {
  const[items, setItems]=useState(storeItems) 
  return (
    <div className="App">
      <body>
    <header id="store">

      <h1>Grocero</h1>
      <ul className="item-list store--item-list">

        {items.map((item)=> (<li>
      <div className=".store--item-icon">
      <img src={getItemImagePath(item)}/>
      </div>
    <button>Add to cart ({item.stock})</button>
    </li>)
        )}
      
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


