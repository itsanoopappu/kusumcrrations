import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero Section with Founder Story */}
      <Hero />
      
      {/* Featured Products Section */}
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Products</h2>
          <p className="section-subtitle">Handcrafted with love, made with nature&apos;s finest</p>
        </div>
        
        <div className="featured-products">
          <ProductCard
            number="NO. 001"
            name="Kesar Glycerin"
            description="A translucent masterpiece infused with pure saffron strands. Each bar is carefully crafted to provide gentle cleansing while maintaining skin's natural moisture balance."
            ingredients="Glycerin, Pure Kesar, Vitamin E Oil"
            price="₹120"
            icon="◈"
          />
          
          <ProductCard
            number="NO. 002"
            name="Rose Clay"
            description="French rose clay meets handpicked rose petals in this detoxifying blend. Designed to draw out impurities while leaving skin soft and radiant."
            ingredients="Rose Clay, Rose Petals, Rose Water, Shea Butter"
            price="₹140"
            icon="◉"
          />
          
          <ProductCard
            number="NO. 003"
            name="Charcoal Detox"
            description="Activated charcoal combined with tea tree oil creates a powerful yet gentle cleansing experience. Perfect for modern living in urban environments."
            ingredients="Activated Charcoal, Tea Tree Oil, Olive Oil"
            price="₹140"
            icon="◆"
          />
        </div>
        
        <div className="section-cta">
          <Link href="/shop" className="cta-button">View All Products</Link>
        </div>
      </div>
      
      {/* Philosophy Section */}
      <div className="philosophy-section">
        <h2 className="philosophy-title">Our Philosophy</h2>
        <p className="philosophy-text">
          At Kusum Creations, we believe in the power of simplicity. Each product is thoughtfully formulated using time-honored ingredients from nature, crafted by hand in small batches to ensure the highest quality and care.
        </p>
        
        <div className="values-grid">
          <div className="value-item">
            <div className="value-icon">🌿</div>
            <h3 className="value-title">Natural</h3>
            <p className="value-desc">100% natural ingredients sourced responsibly</p>
          </div>
          <div className="value-item">
            <div className="value-icon">✋</div>
            <h3 className="value-title">Handmade</h3>
            <p className="value-desc">Crafted with care in small batches</p>
          </div>
          <div className="value-item">
            <div className="value-icon">♻️</div>
            <h3 className="value-title">Sustainable</h3>
            <p className="value-desc">Eco-conscious packaging and practices</p>
          </div>
        </div>
        
        <div className="section-cta">
          <Link href="/our-story" className="cta-button">Read Our Story</Link>
        </div>
      </div>
    </div>
  );
}
