interface ProductCardProps {
  number: string;
  name: string;
  description: string;
  ingredients: string;
  price: string;
  icon: string;
}

export default function ProductCard({ 
  number, 
  name, 
  description, 
  ingredients, 
  price, 
  icon 
}: ProductCardProps) {
  return (
    <div className="product-card">
      <div className="product-image">
        <div className="product-image-content">{icon}</div>
      </div>
      <div className="product-details">
        <p className="product-number">{number}</p>
        <h2 className="product-name">{name}</h2>
        <p className="product-description">{description}</p>
        <p className="product-ingredients">{ingredients}</p>
        <p className="product-price">{price}</p>
        <button className="product-cta">Add to Cart</button>
      </div>
    </div>
  );
}