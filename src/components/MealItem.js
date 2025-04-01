const MealItem = (props) => {
    return (
      <li className="meal-item">
        <article>
          <img src={props.meal.image} alt={props.meal.name} />
          <div className="meal-item-description">
            <h3>{props.meal.name}</h3>
            <p className="meal-item-price">${props.meal.price}</p>
            <p>{props.meal.description}</p>
          </div>
          <div className="meal-item-actions">
            <button>Add to Cart</button>
          </div>
        </article>
      </li>
    );
  };
  
  export default MealItem;