import './App.css'

import { useState } from 'react'
import storeItems, { StoreItem } from "./data/data";

function getItemImagePath (item: StoreItem) {
  let id = String(item.id).padStart(3, '0')
  return `assets/icons/${id}-${item.name}.svg`
 
}

function getCartItems (items:StoreItem[]) {
  return items.filter((item) => item.inCart>0)
}

function increaseQuantity (item: StoreItem) {
  if (item.stock === 0) return
  item.inCart++
  item.stock--
}

function decreaseQuantity (item: StoreItem) {
  if (item.inCart > 0) {
    item.inCart--
    item.stock++
  }
}

function App() {
  const[items, setItems]=useState(storeItems) 

  return (
    <div className="App">
    <header id="store">

      <h1>Grocero</h1>
      <ul className="item-list store--item-list">

        {items.map((item)=> (<li key={item.id}>
      <div className=".store--item-icon">
      <img src={getItemImagePath(item)}/>
      </div>
    <button onClick={()=>{increaseQuantity(item)}}>
      Add to cart ({item.stock}) 
    </button>
    </li>)
        )}
      </ul>
    </header>

    <main id="cart">
      <h2>Your Cart</h2>
      <div className="cart--item-list-container">
        <ul className="item-list cart--item-list">

        {getCartItems(items).map((item)=>(
           <li key={item.id}>
           <img className="cart--item-icon" src={getItemImagePath(item)} alt="carrot"/>
           <p>{item.name}</p>
           <button className="quantity-btn remove-btn center">-</button>
           <span className="quantity-text center">{item.inCart}</span>
           <button className="quantity-btn add-btn center">+</button>
           </li>
        )
        )}
         
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

    </div>
  )
}

export default App


