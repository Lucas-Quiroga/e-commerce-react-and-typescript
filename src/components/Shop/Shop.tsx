import React, { useState, useEffect } from "react";

type Item = {
  id: number;
  name: string;
  price: number;
};

const Shop: React.FC = () => {
  const [items, setItems] = useState<Item[]>([
    { id: 1, name: "Item 1", price: 10 },
    { id: 2, name: "Item 2", price: 20 },
    { id: 3, name: "Item 3", price: 30 },
  ]);

  const [cart, setCart] = useState<{ [key: number]: number }>({});

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const handleAddToCart = (itemId: number) => {
    setCart((prevCart) => ({
      ...prevCart,
      [itemId]: (prevCart[itemId] || 0) + 1,
    }));
  };

  const handleRemoveFromCart = (itemId: number) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[itemId] === 1) {
        delete newCart[itemId];
      } else if (newCart[itemId]) {
        newCart[itemId] -= 1;
      }
      return newCart;
    });
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    for (const [itemId, quantity] of Object.entries(cart)) {
      const item = items.find((item) => item.id === Number(itemId));
      if (item) {
        totalPrice += item.price * quantity;
      }
    }
    return totalPrice;
  };

  return (
    <div>
      <h2>Items</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => handleAddToCart(item.id)}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
      <h2>Cart</h2>
      {Object.entries(cart).length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {Object.entries(cart).map(([itemId, quantity]) => {
            const item = items.find((item) => item.id === Number(itemId));
            return (
              <li key={itemId}>
                {item?.name} - ${item?.price} x {quantity}
                <button onClick={() => handleRemoveFromCart(Number(itemId))}>
                  -
                </button>
                <button onClick={() => handleAddToCart(Number(itemId))}>
                  +
                </button>
              </li>
            );
          })}
        </ul>
      )}
      <h3>Total Price: ${getTotalPrice()}</h3>
    </div>
  );
};

export default Shop;
