import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
  .then(res => res.json())
  .then(result => setData(result.recipes));
  
  }, []);

  return (
    <div>
   <h1>Recipes</h1>
  <table border="1">
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>image</th>
     <th>ingredients</th>
     <th>instructions</th>
        <th>prepTimeMinutes</th>
           <th>cookTimeMinutes</th>
              <th>servings</th>   
              <th>difficulty</th>
              <th>cuisine</th>
              <th>caloriesPerServing</th>

      </tr>

  {data.map((item) => (
     <tr key={item.id}>
    <td>{item.id}</td>
     <td>{item.name}</td>
      <td><img src={item.image} alt={item.name} width="100" /></td>
     <td>
       <ul>
         {item.ingredients.map((ingredient, index) => (
           <li key={index}>{ingredient}</li>
         ))}
       </ul>
      </td>
        <td>
          <ul>
            {item.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ul>
        </td>
           <td>{item.prepTimeMinutes}</td>
              <td>{item.cookTimeMinutes}</td>
                 <td>{item.servings}</td>
                    <td>{item.difficulty}</td>
                    <td>{item.cuisine}</td> 
                    <td>{item.caloriesPerServing}</td>  
     </tr>
        ))}
   </table>
    </div>
  );
}

export default App;