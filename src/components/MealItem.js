//pildid toidust liigutati public kausta, et veebileht saaks neid kuvada. Ilma selleta töötas leht küll aga pilte ette ei kuvatid...



const MealItem = (props) => {
    

    const formattedPrice = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
      }).format(Number(props.meal.price)); // Ensure it's a number



    return (
      <li className="meal-item">
        <article>
          <img src={props.meal.image} alt={props.meal.name} />
          <div className="meal-item-description">
            <h3>{props.meal.name}</h3>
            <p className="meal-item-price">${formattedPrice}</p>
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