import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
  .then(res => res.json())
  .then(result => setData(result.quotes));
  }, []);

  return (
    <div>
   <h1>Quotes</h1>
  <table border="1">
    <tr>
      <th>ID</th>
      <th>Quote</th>
     <th>Author</th>
      </tr>

  {data.map((item) => (
     <tr>
    <td>{item.id}</td>
     <td>{item.quote}</td>
     <td>{item.author}</td>
     </tr>
        ))}
   </table>
    </div>
  );
}

export default App;