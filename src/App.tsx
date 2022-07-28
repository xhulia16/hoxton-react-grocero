import "./App.css";

import { useState } from "react";
import storeItems, { StoreItem } from "./data/data";
import Header from "./components/storeItem";
import Main from "./components/main";

function getItemImagePath(item: StoreItem) {
  let id = String(item.id).padStart(3, "0");
  return `assets/icons/${id}-${item.name}.svg`;
}

function getCartItems(items: StoreItem[]) {
  return items.filter((item) => item.inCart > 0);
}

function App() {
  const [items, setItems] = useState(storeItems);

  function increaseQuantity(item: StoreItem) {
    if (item.stock === 0) return;
    const newItems = structuredClone(items);
    const match = newItems.find((target) => target.id === item.id);
    match.inCart++;
    match.stock--;
    setItems(newItems);
  }

  function decreaseQuantity(item: StoreItem) {
    if (item.inCart > 0) {
      const newItems = structuredClone(items);
      const match = newItems.find((target) => target.id === item.id);
      match.inCart--;
      match.stock++;
      setItems(newItems);
    }
  }

  function calculateTotal() {
    let totalPrice = 0;
    {
      getCartItems(items).map(
        (item) => (totalPrice = totalPrice + item.price * item.inCart)
      );
    }
    return totalPrice.toFixed(2);
  }

  return (
    <div className="App">
      <Header
        items={items}
        getItemImagePath={getItemImagePath}
        increaseQuantity={increaseQuantity}
      />
      <Main
        getCartItems={getCartItems}
        items={items}
        getItemImagePath={getItemImagePath}
        decreaseQuantity={decreaseQuantity}
        increaseQuantity={increaseQuantity}
        calculateTotal={calculateTotal}
      />
    </div>
  );
}

export default App;
