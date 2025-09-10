import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Meet Priyanka</h1>
          <h2 className="hero-subtitle">Founder & Artisan</h2>
          <p className="hero-description">
            From a small kitchen to your home, every Kusum Creations product tells a story 
            of passion, tradition, and love for natural beauty. What started as experiments 
            with grandmother's recipes has blossomed into a mission to bring you nature's 
            purest gifts.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Happy Customers</span>
            </div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Natural Ingredients</span>
            </div>
            <div className="stat">
              <span className="stat-number">3</span>
              <span className="stat-label">Signature Products</span>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-image-placeholder">
            <p>Founder Photo Coming Soon</p>
          </div>
        </div>
      </div>
    </section>
  );
}