import "./storeItem.css";
//@ts-ignore
function Header({ items, getItemImagePath, increaseQuantity }) {
  return (
    <header id="store">
      <h1>Grocero</h1>
      <ul className="item-list store--item-list">
        {items.map((item) => (
          <li key={item.id}>
            <div className=".store--item-icon">
              <img src={getItemImagePath(item)} />
            </div>
            <button
              onClick={() => {
                increaseQuantity(item);
              }}
            >
              Add to cart ({item.stock})
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
