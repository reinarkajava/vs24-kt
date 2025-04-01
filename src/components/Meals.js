import { useEffect, useState } from "react";
import MealItem from "./MealItem"

 const Meals = () => {
   const [meals, setMeals] = useState([]);
 
   useEffect(() => {
     const fetchMeals = async () => {
       const response = await fetch("http://localhost:3001/meals.json");
       const data = await response.json();
       console.log(data);
       setMeals(data);
     };
     fetchMeals();
   }, []);
 
   return (
     <ul id="meals">
       {meals.map((meal) => (
         <MealItem key={meal.id} meal={meal} />
       ))}
     </ul>
   );
 };
 
 export default Meals;