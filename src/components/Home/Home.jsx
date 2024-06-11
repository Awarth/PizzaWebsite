import "./Home.css";
import { FaArrowCircleRight, FaPhoneAlt } from "react-icons/fa";
import dualPic from "../../images/home_pizza3_pic2.png";
import zigZag from "../../images/home_pizza3_pic3.png";
import pageEffect from "../../images/home_pizza3_decoration1.png";
import pizza1 from "../../images/pepperoni.png";
import pizza2 from "../../images/spinach.png";
import pizza3 from "../../images/margarita.png";
import { Link } from "react-router-dom";

function Home() {
  
  const scrollToTheTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  return (
    <>
      <div className="pizzaHome">
        <div className="pizzaHomeContent">
          <h1>
            Real Italian pizza <br /> with real ingredients
          </h1>
          <p>THE BEST ITALIAN PIZZA</p>
          <Link to="/menu">
          <button>
            See the menu
            <FaArrowCircleRight className="arrow" />
          </button>
          </Link>
        </div>
      </div>
      <div className="homeAbout w-full">
        <div className="homeRecipe">
          <div className="homeRecipeImg">
            <img src={dualPic} alt="recipeSection" />
          </div>
          <div className="homeRecipeAbout">
            <h1>We use proven recipes and fresh ingredients</h1>
            <img src={zigZag} alt="#" />
            <p>
              Step into the heart of Italy as we bring to life the essence of
              authentic Italian cuisine. With unwavering dedication to proven
              recipes and the freshest ingredients, our culinary artisans craft
              each dish, from the sun-kissed tomatoes of Napoli to the creamy
              mozzarella of Campania, ensuring a gastronomic adventure that
              celebrates tradition and taste.
            </p>
          </div>
        </div>
        <div className="aboutPart2">
          <div className="homeAboutContent">
            <h1>
              A True Taste of Italy: <br /> Artisan Pizzas Made with Passion
            </h1>
            <img src={zigZag} alt="" />
            <p>
              Welcome to Pizzeria , your gateway to the authentic Italian pizza
              experience!
              <br /> <br /> We use only the finest ingredients imported from
              Italy, like stone-ground "00" flour and DOP San Marzano tomatoes,
              to create pizzas that will tantalize your taste buds. Our skilled
              pizzaiolos (pizza makers), devoted to the ancient art of
              Neapolitan pizza, handcraft each pizza in our high-temperature
              wood-fired oven, resulting in a crispy crust and an unparalleled
              flavor. <br /> <br />
              Whether you choose a classic Margherita or a more elaborate
              gourmet creation, you're sure to find the perfect pizza to satisfy
              your cravings. <br /> <br /> Come experience real Italian pizza at
              Pizzeria!
            </p>
          </div>
          <div className="homeAboutImage"></div>
        </div>
      </div>
      <div className="homeMenuSection w-full flex justify-center align-middle">
        <div className="menuCard">
          <Link to="/menu" onClick={scrollToTheTop}>
            <div className="menuCardContent">
              <h2>
                See the <br /> menu card
              </h2>
              <p>Italian Specialties</p>
            </div>
          </Link>
        </div>
        <img src={pageEffect} alt="#" />
      </div>
      <div className="sampleSection">
        <div className="sampleContent">
          <h1>Get to know our tastiest proposals</h1>
          <p>Discover the essence of authentic Italian pizza</p>
          <div className="pizzaCardCollection">
            <div className="pizzaCard">
              <img src={pizza1} alt="pizza1" />
              <h2>Pepperoni</h2>
              <p>
                Pepperoni
                <br />
                Mozzarella
                <br />
                Tomato sauce
              </p>
            </div>
            <div className="pizzaCard">
              <img src={pizza2} alt="pizza1" />
              <h2>Salmon</h2>
              <p>
                Salmon fillets
                <br />
                Fresh spinach
                <br />
                Garlic
              </p>
            </div>
            <div className="pizzaCard">
              <img src={pizza3} alt="pizza1" />
              <h2>Margherita</h2>
              <p>
                Fresh Tomatoes
                <br />
                Mozzarella
                <br />
                Basil
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="homeOrderSection">
        <img src={pageEffect} alt="pageEffect" />
        <div className="phoneEncircle">
          <FaPhoneAlt />
        </div>
        <div className="orderingDetails">
          <h1>Order online</h1>
          <a href="tel:+91 95553 50284">
            <span>+91 </span>
            95553 50284
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;