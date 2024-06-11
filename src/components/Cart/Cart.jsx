import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Cart.css";
import {
  removePizzaFromCart,
  updatePizzaOptions,
} from "../../Redux/reducers/pizzaSlice";
import zigzag from "../../images/home_pizza3_decoration1.png";
import { MdOutlineDelete } from "react-icons/md";
import { FiMinus, FiPlus } from "react-icons/fi";
import vegIcon from "../../images/veg.png";
import nonVegIcon from "../../images/nonveg.png";
import { FiArrowRight } from "react-icons/fi";

const Cart = () => {
  const cart = useSelector((state) => state.pizza.cart);
  const dispatch = useDispatch();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(cart);
  }, [cart]);

  const handleRemoveFromCart = (id) => {
    dispatch(removePizzaFromCart(id));
  };

  const handleUpdateCartItem = (id, newQuantity) => {
    if (newQuantity >= 1) {
      const updatedCartItems = cartItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: newQuantity,
              finalPrice:
                (item.basePrice +
                  item.sizePrices[item.size] +
                  item.crustPrices[item.crust]) *
                newQuantity,
            }
          : item
      );
      setCartItems(updatedCartItems);
      dispatch(updatePizzaOptions({ id, quantity: newQuantity }));
    }
  };

  return (
    <div className="cart">
      <div className="cartFirst">
        <img src={zigzag} alt="#" />
      </div>
      <div className="cartSecond">
        <h1>Your Cart</h1>
        <div className="cartItemCollection">
          {cartItems.length === 0 ? (
            <pre>Your cart is empty</pre>
          ) : (
            <div className="cartCollection">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-content">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-item-image"
                    />
                    <div className="cart-item-details">
                      <h3>{item.name}</h3>
                      <span className="crustAndSize">
                        <p>{item.crust}</p>
                        <p>|</p>
                        <p>{item.size}</p>
                      </span>
                      <div className="cart-item-quantity">
                        <button
                          onClick={() =>
                            handleUpdateCartItem(item.id, item.quantity - 1)
                          }
                          disabled={item.quantity <= 1}
                        >
                          <FiMinus />
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() =>
                            handleUpdateCartItem(item.id, item.quantity + 1)
                          }
                        >
                          <FiPlus />
                        </button>
                      </div>
                      <p className="final-price">
                        ₹{item.finalPrice.toFixed(2)}
                      </p>
                      <img
                        src={item.cat === "veg" ? vegIcon : nonVegIcon}
                        alt={item.cat}
                        className="cart-category-icon"
                      />
                      <button
                        className="delete"
                        onClick={() => handleRemoveFromCart(item.id)}
                      >
                        <MdOutlineDelete />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="checkOut">
            <button>
              Proceed to CheckOut
              <FiArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
