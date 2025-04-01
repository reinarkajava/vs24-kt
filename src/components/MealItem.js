import Button from "./UI/Button";
import { useContext } from "react";
import CartContext from "../store/CartContext";

const MealItem = (props) => {
  const { dispatch } = useContext(CartContext);

 
  const formattedPrice = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(Number(props.meal.price)); // Kindel, et tegu on numbriga

  const addToCartHandler = () => {
    const mealWithPrice = { ...props.meal, price: Number(props.meal.price) };
    console.log('Adding to cart:', mealWithPrice);
    dispatch({
      type: "ADD_ITEM",
      item: mealWithPrice,
    });
  };

  return (
    <li className="meal-item">
      <article>
        <img src={props.meal.image} alt={props.meal.name} />
        <div className="meal-item-description">
          <h3>{props.meal.name}</h3>
          <p className="meal-item-price">{formattedPrice}</p>
          <p>{props.meal.description}</p>
        </div>
        <div className="meal-item-actions">
          <Button onClick={addToCartHandler}>Add to Cart</Button>
        </div>
      </article>
    </li>
  );
};

export default MealItem;
