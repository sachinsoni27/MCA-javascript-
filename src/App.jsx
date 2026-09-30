import { useEffect, useState } from "react";
import Card from "./fakeAPI/Card.jsx";

function App() {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const showPreviousProduct = () => {
    setCurrentIndex((index) => (index - 1 + products.length) % products.length);
  };

  const showNextProduct = () => {
    setCurrentIndex((index) => (index + 1) % products.length);
  };

  return (
    <main className="product-page">
      <header className="product-page__header">
        <p>CURATED GOODS <span> / </span> PRODUCT {products.length ? String(currentIndex + 1).padStart(2, "0") : "--"}</p>
        <h2>Object of the day</h2>
      </header>
      {error ? (
        <p className="product-page__status" role="alert">{error}</p>
      ) : products.length === 0 ? (
        <p className="product-page__status" role="status">Loading products...</p>
      ) : (
        <Card
          product={products[currentIndex]}
          index={currentIndex}
          total={products.length}
          onPrevious={showPreviousProduct}
          onNext={showNextProduct}
        />
      )}
    </main>
  );
}

export default App;