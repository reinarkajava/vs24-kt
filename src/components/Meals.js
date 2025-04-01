import { useEffect, useState } from "react";

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
         <li key={meal.id}>{meal.name}</li>
       ))}
     </ul>
   );
 };
 
 export default Meals;