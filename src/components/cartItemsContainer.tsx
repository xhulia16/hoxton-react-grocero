//@ts-ignore
function CartItemsContainer({getCartItems, items, getItemImagePath, decreaseQuantity, increaseQuantity}){
    return(
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {getCartItems(items).map((item) => (
              <li key={item.id}>
                <img
                  className="cart--item-icon"
                  src={getItemImagePath(item)}
                  alt="carrot"
                />
                <p>{item.name}</p>
                <button
                  className="quantity-btn remove-btn center"
                  onClick={() => {
                    decreaseQuantity(item);
                  }}
                >
                  -
                </button>
                <span className="quantity-text center">{item.inCart}</span>
                <button
                  className="quantity-btn add-btn center"
                  onClick={() => {
                    increaseQuantity(item);
                  }}
                >
                  +
                </button>
              </li>
            ))}
          </ul>
        </div>
    )
}

export default CartItemsContainer