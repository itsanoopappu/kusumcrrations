import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story - Kusum Creations",
  description: "Learn about Priyanka, the founder of Kusum Creations, and her journey from kitchen experiments to creating luxury natural skincare products.",
};

export default function OurStory() {
  return (
    <div className="our-story-page">
      {/* Hero Section */}
      <div className="story-hero">
        <div className="container">
          <div className="story-hero-content">
            <h1 className="story-title">Our Story</h1>
            <p className="story-subtitle">From Kitchen Dreams to Natural Beauty</p>
          </div>
        </div>
      </div>

      {/* Founder Story */}
      <div className="container">
        <div className="founder-section">
          <div className="founder-content">
            <div className="founder-image">
              <div className="founder-image-placeholder">
                <p>Priyanka&apos;s Photo<br/>Coming Soon</p>
              </div>
            </div>
            <div className="founder-text">
              <h2 className="founder-name">Meet Priyanka Sharma</h2>
              <p className="founder-role">Founder & Chief Artisan</p>
              <p className="founder-story">
                What started as weekend experiments in my grandmother&apos;s kitchen has grown into a 
                mission to bring you nature&apos;s purest gifts. Armed with her century-old recipes 
                and a passion for natural beauty, I began Kusum Creations in 2020.
              </p>
              <p className="founder-story">
                Every bar of soap, every blend of oils, every ingredient is carefully chosen and 
                lovingly crafted by hand. I believe that skincare should be simple, pure, and 
                effective - just like the remedies our grandmothers trusted.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="values-section">
          <h2 className="values-title">What Drives Us</h2>
          <div className="values-content">
            <div className="value-card">
              <h3 className="value-card-title">🌿 Pure Ingredients</h3>
              <p className="value-card-text">
                We source only the finest natural ingredients, from saffron strands to rose petals, 
                ensuring every product is free from harmful chemicals and synthetic additives.
              </p>
            </div>
            <div className="value-card">
              <h3 className="value-card-title">✋ Handcrafted Process</h3>
              <p className="value-card-text">
                Each product is made in small batches with careful attention to detail. No mass 
                production - just pure artisanal craftsmanship that you can feel in every use.
              </p>
            </div>
            <div className="value-card">
              <h3 className="value-card-title">💚 Sustainable Practices</h3>
              <p className="value-card-text">
                From eco-friendly packaging to responsible sourcing, we&apos;re committed to protecting 
                the planet that provides us with these beautiful natural ingredients.
              </p>
            </div>
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="journey-section">
          <h2 className="journey-title">Our Journey</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">2018</div>
              <div className="timeline-content">
                <h3 className="timeline-event">The Beginning</h3>
                <p className="timeline-description">
                  Started experimenting with grandmother&apos;s traditional recipes in my kitchen, 
                  driven by a desire for chemical-free skincare.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2020</div>
              <div className="timeline-content">
                <h3 className="timeline-event">First Products</h3>
                <p className="timeline-description">
                  Launched our signature Kesar Glycerin soap after months of perfecting 
                  the formula. Friends and family became our first customers.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2023</div>
              <div className="timeline-content">
                <h3 className="timeline-event">Growing Community</h3>
                <p className="timeline-description">
                  Expanded our collection to include Rose Clay and Charcoal Detox soaps, 
                  serving over 500 satisfied customers.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2025</div>
              <div className="timeline-content">
                <h3 className="timeline-event">New Horizons</h3>
                <p className="timeline-description">
                  Launching our online presence and preparing to share our natural 
                  luxury with customers across the country.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mission-section">
          <div className="mission-content">
            <h2 className="mission-title">Our Mission</h2>
            <p className="mission-text">
              To revive the art of traditional skincare by creating products that honor both 
              ancient wisdom and modern needs. We believe that true beauty comes from nature, 
              and every person deserves access to pure, effective, and lovingly crafted skincare.
            </p>
            <p className="mission-quote">
              &quot;When you choose Kusum Creations, you&apos;re not just buying a product - 
              you&apos;re supporting a dream, a tradition, and a commitment to natural beauty.&quot;
            </p>
            <p className="mission-signature">- Priyanka Sharma, Founder</p>
          </div>
        </div>
      </div>
    </div>
  );
}