
  import "./Card.css";

  function Card({ product, index, total, onPrevious, onNext }) {
    const originalPrice = product.price / (1 - product.discountPercentage / 100);

    return (
      <article className="product-card">
        <section className="product-card__visual" aria-label="Product image">
          <span className="product-card__counter">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <img src={product.thumbnail} alt={product.title} />
          <div className="product-card__navigation">
            <button type="button" onClick={onPrevious} aria-label="Previous product">
              &larr;
            </button>
            <button type="button" onClick={onNext} aria-label="Next product">
              &rarr;
            </button>
          </div>
        </section>

        <section className="product-card__details">
          <div className="product-card__eyebrow">
            <span>{product.category}</span>
            {product.brand && <span>{product.brand}</span>}
          </div>
          <h1>{product.title}</h1>
          <p className="product-card__description">{product.description}</p>

          <div className="product-card__rating" aria-label={`Rated ${product.rating} out of 5`}>
            <span aria-hidden="true">★</span> {product.rating} / 5
            <span className="product-card__stock">{product.availabilityStatus}</span>
          </div>

          <div className="product-card__price">
            <strong>${product.price.toFixed(2)}</strong>
            <del>${originalPrice.toFixed(2)}</del>
            <span>{Math.round(product.discountPercentage)}% off</span>
          </div>
          <p className="product-card__shipping">{product.shippingInformation}</p>
        </section>
      </article>
    );
  }

  export default Card;
