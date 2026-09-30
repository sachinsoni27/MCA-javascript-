import { useEffect, useState } from "react";
import Card from "./fakeAPI/Card.jsx";

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    fetch("https://dummyjson.com/products", { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Could not load products.");
        }
        return response.json();
      })
      .then((result) => setProducts(result.products))
      .catch((fetchError) => {
        if (fetchError.name !== "AbortError") {
          setError(fetchError.message || "Could not load products.");
        }
      });

    return () => controller.abort();
  }, []);

  return (
    <main className="product-page">
      <header className="product-page__header">
        <p>CURATED GOODS <span> / </span> DUMMYJSON CATALOG</p>
        <h2>Products <span className="product-page__count">{products.length || ""}</span></h2>
      </header>
      {error ? (
        <p className="product-page__status" role="alert">{error}</p>
      ) : products.length === 0 ? (
        <p className="product-page__status" role="status">Loading products...</p>
      ) : (
        <section className="product-grid" aria-label="Products">
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </section>
      )}
    </main>
  );
}

export default App;