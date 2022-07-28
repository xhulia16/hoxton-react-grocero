import "./main.css";

import CartItemsContainer from "./cartItemsContainer";
import TotalPrice from "./totalPrice";

//@ts-ignore
function Main({getCartItems,items,getItemImagePath,decreaseQuantity,increaseQuantity,calculateTotal,}) {
  return (
    <main id="cart">
      <h2>Your Cart</h2>
      <CartItemsContainer
          getCartItems={getCartItems}
          items={items}
          getItemImagePath={getItemImagePath}
          decreaseQuantity={decreaseQuantity}
          increaseQuantity={increaseQuantity}
        />
      <div className="total-section">
        <div>
          <h3>Total</h3>
        </div>
        <TotalPrice
        calculateTotal={calculateTotal}
        />
      </div>
    </main>
  );
}

export default Main;
