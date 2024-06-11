import "./Menu.css";
import pizzabg from "../../images/menu-card1.jpg";
import pasta from "../../images/menu-card2.jpg";
import dessert from "../../images/menu-card3.jpg";
import { Link } from "react-router-dom";
import zigZag from "../../images/home_pizza3_pic3.png";
import { useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { pizzas } from "../PizzaDetails";
import Carousel from "../Carousal/Carousal";
import pageEffect from "../../images/home_pizza3_decoration1.png";
import pizzabg4 from "../../images/pizzaBg4.jpg";
import { useDispatch } from "react-redux";
import { addPizzaToCart } from "../../Redux/reducers/pizzaSlice";
import vegIcon from "../../images/veg.png";
import nonVegIcon from "../../images/nonveg.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Menu() {
  const [selectedSize, setSelectedSize] = useState({});
  const [selectedCrust, setSelectedCrust] = useState({});
  const [quantity, setQuantity] = useState({});

  const dispatch = useDispatch();

  const calculatePrice = (pizza) => {
    const size = selectedSize[pizza.name] || "Small"; // Ensure initial selection matches dropdown options
    const crust = selectedCrust[pizza.name] || "Neapolitan"; // Ensure initial selection matches dropdown options
    const qty = quantity[pizza.name] || 1;

    const sizePrice = pizza.sizePrices[size];
    const crustPrice = pizza.crustPrices[crust];
    return (pizza.basePrice + sizePrice + crustPrice) * qty;
  };

  const handleQuantityChange = (pizzaName, value) => {
    if (value >= 1) {
      setQuantity((prevQuantity) => ({ ...prevQuantity, [pizzaName]: value }));
    }
  };

  const incrementQuantity = (pizzaName) => {
    const currentQty = quantity[pizzaName] || 1;
    handleQuantityChange(pizzaName, currentQty + 1);
  };

  const decrementQuantity = (pizzaName) => {
    const currentQty = quantity[pizzaName] || 1;
    if (currentQty > 1) {
      handleQuantityChange(pizzaName, currentQty - 1);
    }
  };

  const handleAddToCart = (pizza) => {
    const size = selectedSize[pizza.name] || "Small";
    const crust = selectedCrust[pizza.name] || "Neapolitan";
    const qty = quantity[pizza.name] || 1;
    const finalPrice = calculatePrice(pizza);

    dispatch(
      addPizzaToCart({ ...pizza, size, crust, quantity: qty, finalPrice })
    );

    toast.success("Item added to cart");
  };

  return (
    <>
      <div className="menuFirst w-full">
        <div>
          <h1>Discover the menu of our restaurant</h1>
          <p>Savor the Flavors, Explore Our Authentic Menu</p>
        </div>
        <div className="menuOptionsCollection">
          <div className="menuOptionCard">
            <img src={pizzabg} alt="pizza" />
            <Link className="menu-options">Pizza</Link>
          </div>
          <div className="menuOptionCard">
            <img src={pasta} alt="pasta" />
            <Link className="menu-options">Pasta</Link>
          </div>
          <div className="menuOptionCard">
            <img src={dessert} alt="dessert" />
            <Link className="menu-options">Dessert</Link>
          </div>
        </div>
      </div>
      <div className="menuSecond w-full">
        <div className="mr-16">
          <h1>Our pizzas</h1>
          <img src={zigZag} alt="zig zag" />
        </div>
        <div className="pizzaCardCollection">
          {pizzas.map((pizza, index) => (
            <div key={index} className="pizzaMenuCard">
              <img
                src={pizza.cat === "veg" ? vegIcon : nonVegIcon}
                alt={pizza.cat}
                className="category-icon"
              />
              <img src={pizza.image} alt={pizza.name} />
              <div className="pizzaDetails">
                <h2>{pizza.name}</h2>
                <p>{pizza.ingredients}</p>
                <div className="dropDownSection">
                  <div className="sizeSelect">
                    <label>Size</label>
                    <select
                      value={selectedSize[pizza.name] || "Small"}
                      onChange={(e) =>
                        setSelectedSize((prevSize) => ({
                          ...prevSize,
                          [pizza.name]: e.target.value,
                        }))
                      }
                    >
                      {Object.keys(pizza.sizePrices).map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="crustSelect">
                    <label>Crust</label>
                    <select
                      value={selectedCrust[pizza.name] || "Neapolitan"}
                      onChange={(e) =>
                        setSelectedCrust((prevCrust) => ({
                          ...prevCrust,
                          [pizza.name]: e.target.value,
                        }))
                      }
                    >
                      {Object.keys(pizza.crustPrices).map((crust) => (
                        <option key={crust} value={crust}>
                          {crust}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="priceAndQty">
                  <div className="qty">
                    <label htmlFor={`quantity-${pizza.name}`}>Quantity</label>
                    <div className="qtyInputSection">
                      <p onClick={() => decrementQuantity(pizza.name)}>-</p>
                      <input
                        type="number"
                        id={`quantity-${pizza.name}`}
                        value={quantity[pizza.name] || 1}
                        onChange={(e) =>
                          handleQuantityChange(
                            pizza.name,
                            parseInt(e.target.value)
                          )
                        }
                        min="1"
                        contentEditable="false"
                      />
                      <p onClick={() => incrementQuantity(pizza.name)}>+</p>
                    </div>
                  </div>
                  <h1 className="price">₹{calculatePrice(pizza).toFixed(2)}</h1>
                </div>
              </div>
              <div className="pizzacardButton">
                <button
                  className="addToCart"
                  onClick={() => handleAddToCart(pizza)}
                >
                  Add to Cart
                  <MdOutlineShoppingCart className="ml-1 size-6" />
                </button>
                <ToastContainer
                  position="top-right"
                  autoClose={2000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss={false}
                  draggable={false}
                  pauseOnHover
                  theme="light"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="menuThree w-full">
        <div className="menuThreeHeading">
          <img src={pageEffect} alt="page-effect" />
          <h1>
            Opinions of satisfied guests are <br />
            <span>the most important for us</span>
          </h1>
          <Carousel />
        </div>
      </div>
      <div className="menuFour w-full">
        <h1>Our menu with delivery to your home</h1>
        <img src={pizzabg4} alt="bg" />
        <p>Delivery guarantee up to one hour</p>
      </div>
    </>
  );
}

export default Menu;
