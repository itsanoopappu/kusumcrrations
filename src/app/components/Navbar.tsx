'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <Link href="/" className="nav-logo">
          <Image
            src="/kusum-logo.jpg"
            alt="Kusum Creations"
            width={50}
            height={50}
            className="nav-logo-image"
          />
          <span className="nav-logo-text">KUSUM CREATIONS</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="nav-menu">
          <li className="nav-item">
            <Link href="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/our-story" className="nav-link">
              Our Story
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/shop" className="nav-link">
              Shop
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="nav-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <ul className={`nav-menu-mobile ${isMenuOpen ? 'active' : ''}`}>
        <li className="nav-item-mobile">
          <Link href="/" className="nav-link-mobile" onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li className="nav-item-mobile">
          <Link href="/our-story" className="nav-link-mobile" onClick={toggleMenu}>
            Our Story
          </Link>
        </li>
        <li className="nav-item-mobile">
          <Link href="/shop" className="nav-link-mobile" onClick={toggleMenu}>
            Shop
          </Link>
        </li>
        <li className="nav-item-mobile">
          <Link href="/contact" className="nav-link-mobile" onClick={toggleMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}