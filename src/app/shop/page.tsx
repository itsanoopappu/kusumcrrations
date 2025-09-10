import type { Metadata } from "next";
import ProductCard from '../components/ProductCard';

export const metadata: Metadata = {
  title: "Shop - Kusum Creations",
  description: "Browse our complete collection of handcrafted natural skincare products. Kesar Glycerin, Rose Clay, and Charcoal Detox soaps made with love.",
};

export default function Shop() {
  return (
    <div className="shop-page">
      {/* Hero Section */}
      <div className="shop-hero">
        <div className="container">
          <div className="shop-hero-content">
            <h1 className="shop-title">Our Products</h1>
            <p className="shop-subtitle">
              Handcrafted natural skincare products made with the finest ingredients
            </p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container">
        <div className="products-section">
          <div className="products-filter">
            <h2 className="filter-title">All Products</h2>
            <p className="filter-subtitle">3 handcrafted essentials for your daily routine</p>
          </div>

          <div className="products-grid">
            <div className="product-grid-item">
              <ProductCard
                number="NO. 001"
                name="Kesar Glycerin"
                description="A translucent masterpiece infused with pure saffron strands. Each bar is carefully crafted to provide gentle cleansing while maintaining skin's natural moisture balance. Perfect for daily use and suitable for all skin types."
                ingredients="Glycerin, Pure Kesar (Saffron), Vitamin E Oil, Natural Fragrance"
                price="₹120"
                icon="◈"
              />
            </div>

            <div className="product-grid-item">
              <ProductCard
                number="NO. 002"
                name="Rose Clay"
                description="French rose clay meets handpicked rose petals in this detoxifying blend. Designed to draw out impurities while leaving skin soft and radiant. Ideal for sensitive and combination skin types."
                ingredients="French Rose Clay, Rose Petals, Rose Water, Shea Butter, Sweet Almond Oil"
                price="₹140"
                icon="◉"
              />
            </div>

            <div className="product-grid-item">
              <ProductCard
                number="NO. 003"
                name="Charcoal Detox"
                description="Activated charcoal combined with tea tree oil creates a powerful yet gentle cleansing experience. Perfect for modern living in urban environments and excellent for oily and acne-prone skin."
                ingredients="Activated Charcoal, Tea Tree Oil, Olive Oil, Coconut Oil, Eucalyptus"
                price="₹140"
                icon="◆"
              />
            </div>
          </div>
        </div>

        {/* Product Benefits */}
        <div className="benefits-section">
          <h2 className="benefits-title">Why Choose Kusum Creations?</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">🌿</div>
              <h3 className="benefit-title">100% Natural</h3>
              <p className="benefit-description">
                No harsh chemicals, sulfates, or artificial preservatives. 
                Only pure, natural ingredients that your skin will love.
              </p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">✋</div>
              <h3 className="benefit-title">Handcrafted</h3>
              <p className="benefit-description">
                Each bar is made by hand in small batches, ensuring quality 
                and attention to detail in every single product.
              </p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🧴</div>
              <h3 className="benefit-title">Long Lasting</h3>
              <p className="benefit-description">
                Our concentrated formulas mean each bar lasts longer than 
                commercial soaps, giving you better value for money.
              </p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">💚</div>
              <h3 className="benefit-title">Eco-Friendly</h3>
              <p className="benefit-description">
                Minimal packaging, biodegradable ingredients, and sustainable 
                practices that are kind to your skin and the environment.
              </p>
            </div>
          </div>
        </div>

        {/* How to Use */}
        <div className="usage-section">
          <h2 className="usage-title">How to Use</h2>
          <div className="usage-steps">
            <div className="usage-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3 className="step-title">Wet Your Skin</h3>
                <p className="step-description">
                  Start with warm water to open pores and prepare your skin for cleansing.
                </p>
              </div>
            </div>
            <div className="usage-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3 className="step-title">Lather Gently</h3>
                <p className="step-description">
                  Work the soap into a rich lather in your hands or use a soft cloth.
                </p>
              </div>
            </div>
            <div className="usage-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3 className="step-title">Massage & Rinse</h3>
                <p className="step-description">
                  Gently massage onto skin in circular motions, then rinse thoroughly with cool water.
                </p>
              </div>
            </div>
            <div className="usage-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3 className="step-title">Pat Dry</h3>
                <p className="step-description">
                  Pat skin dry with a soft towel and follow with your favorite moisturizer.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="shop-cta-section">
          <div className="shop-cta-content">
            <h2 className="cta-title">Ready to Transform Your Skincare Routine?</h2>
            <p className="cta-description">
              Contact us today to place your order or ask any questions about our products.
            </p>
            <div className="cta-buttons">
              <a href="https://wa.me/919916550296" className="cta-button whatsapp-btn" target="_blank" rel="noopener noreferrer">
                📱 WhatsApp Us
              </a>
              <a href="mailto:priyanka.s23@gmail.com" className="cta-button email-btn">
                📧 Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}