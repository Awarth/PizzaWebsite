import margherita from "../images/margarita.png";
import pepperoni from "../images/pepperoni.png";
import spinach from "../images/spinach.png";
import fourCheese from "../images/fourCheese.png";
import chicken from "../images/chicken.png";
import vegetarian from "../images/vegetarian.png";
import fourSeason from "../images/fourSeasons.png";
import marinara from "../images/marinara.png";
import whitePizza from "../images/whitePizza.png";
import garden from "../images/garden.png";

export const pizzas = [
  {
    name: "Margherita",
    cat : 'veg',
    image: margherita,
    basePrice: 349,
    sizePrices: { Small: 0, Medium: 100, Large: 150 },
    crustPrices: { Neapolitan: 0, Roman: 50, Sicilian: 80 },
    ingredients:
      "Italian flour, whole tomato sauce, mozzarella, tomato, pesto sauce, oregano",
  },
  {
    name: "Pepperoni",
    cat: 'non-veg',
    image: pepperoni,
    basePrice: 429,
    sizePrices: { Small: 0, Medium: 100, Large: 150 },
    crustPrices: { Neapolitan: 0, Roman: 50, Sicilian: 80 },
    ingredients:
      "Italian flour, Mozzarella, whole tomato sauce, real Italian pepperoni, hot pepper, capers, oregano",
  },
  {
    name: "Salmon and Spinach",
    cat: 'non-veg',
    image: spinach,
    basePrice: 429,
    sizePrices: { Small: 0, Medium: 100, Large: 150 },
    crustPrices: { Neapolitan: 0, Roman: 50, Sicilian: 80 },
    ingredients:
      "Italian flour, whole tomato sauce, mozzarella, salmon, tomatoes, spinach, Dormula, garlic, lemon, pine nut, olives, oregano",
  },
  {
    name: "Four cheese",
    cat : 'veg',
    image: fourCheese,
    basePrice: 409,
    sizePrices: { Small: 0, Medium: 100, Large: 150 },
    crustPrices: { Neapolitan: 0, Roman: 50, Sicilian: 80 },
    ingredients:
      "Italian flour, mozzarella, gorgonzola, fontina, parmigiano reggiano, extra virgin olive oil, tomato sauce",
  },
  {
    name: "Chicken & Mushroom",
    cat: 'non-veg',
    image: chicken,
    basePrice: 429,
    sizePrices: { Small: 0, Medium: 100, Large: 150 },
    crustPrices: { Neapolitan: 0, Roman: 50, Sicilian: 80 },
    ingredients:
      "Italian flour, sauce based on parmesan and cream, mozzarella, Dormula, chicken baked, mushrooms, bell peppers, oregano",
  },
  {
    name: "Vegetarian",
    cat : 'veg',
    image: vegetarian,
    basePrice: 399,
    sizePrices: { Small: 0, Medium: 100, Large: 150 },
    crustPrices: { Neapolitan: 0, Roman: 50, Sicilian: 80 },
    ingredients:
      "Italian flour, tomato sauce, mozzarella, capsicum, zucchini, onions, extra-virgin olive oil, oregano, basil",
  },
  {
    name: "Four seasons",
    cat : 'veg',
    image: fourSeason,
    basePrice: 499,
    sizePrices: { Small: 0, Medium: 100, Large: 150 },
    crustPrices: { Neapolitan: 0, Roman: 50, Sicilian: 80 },
    ingredients:
      "Italian flour, tomato sauce, mozzarella, artichokes, mushrooms, black olives, cherry tomatoes, extra-virgin olive oil, oregano",
  },
  {
    name: "Marinara",
    cat : 'veg',
    image: marinara,
    basePrice: 399,
    sizePrices: { Small: 0, Medium: 100, Large: 150 },
    crustPrices: { Neapolitan: 0, Roman: 50, Sicilian: 80 },
    ingredients:
      "Italian flour, tomato sauce, garlic, extra-virgin olive oil, oregano, basil",
  },
  {
    name: "White Pizza",
    cat : 'veg',
    image: whitePizza,
    basePrice: 389,
    sizePrices: { Small: 0, Medium: 100, Large: 150 },
    crustPrices: { Neapolitan: 0, Roman: 50, Sicilian: 80 },
    ingredients:
      "Italian flour, mozzarella, ricotta, parmigiano reggiano, garlic, rosemary, extra-virgin olive oil",
  },
  {
    name: "Garden",
    cat : 'veg',
    image: garden,
    basePrice: 419,
    sizePrices: { Small: 0, Medium: 100, Large: 150 },
    crustPrices: { Neapolitan: 0, Roman: 50, Sicilian: 80 },
    ingredients:
      "Italian flour, mozzarella, zucchini, capsicum, cherry tomatoes, extra-virgin olive oil, basil",
  },
];
