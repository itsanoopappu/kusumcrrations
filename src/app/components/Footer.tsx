import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">Kusum Creations</h3>
          <p className="footer-text">
            Nature's luxury, crafted with love. Handmade skincare products 
            using only the finest natural ingredients.
          </p>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-subtitle">Quick Links</h4>
          <ul className="footer-links">
            <li><Link href="/" className="footer-link">Home</Link></li>
            <li><Link href="/our-story" className="footer-link">Our Story</Link></li>
            <li><Link href="/shop" className="footer-link">Shop</Link></li>
            <li><Link href="/contact" className="footer-link">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-subtitle">Connect</h4>
          <div className="footer-contact">
            <p className="footer-contact-item">📱 +91-9916550296</p>
            <p className="footer-contact-item">📧 priyanka.s23@gmail.com</p>
            <p className="footer-contact-item">📸 @kusum.creation</p>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 Kusum Creations. All rights reserved.</p>
      </div>
    </footer>
  );
}