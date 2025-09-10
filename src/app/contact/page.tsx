'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1 className="contact-title">Get In Touch</h1>
            <p className="contact-subtitle">
              We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form-section">
            <h2 className="form-title">Send us a Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="product-inquiry">Product Inquiry</option>
                  <option value="custom-order">Custom Order</option>
                  <option value="bulk-order">Bulk Order</option>
                  <option value="general">General Question</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="form-textarea"
                  placeholder="Tell us more about your inquiry..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className={`form-submit ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact-info-section">
            <h2 className="info-title">Contact Information</h2>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">📱</div>
                <div className="method-content">
                  <h3 className="method-title">WhatsApp</h3>
                  <p className="method-detail">+91-9916550296</p>
                  <a 
                    href="https://wa.me/919916550296" 
                    className="method-link"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Chat with us
                  </a>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">📧</div>
                <div className="method-content">
                  <h3 className="method-title">Email</h3>
                  <p className="method-detail">priyanka.s23@gmail.com</p>
                  <a 
                    href="mailto:priyanka.s23@gmail.com" 
                    className="method-link"
                  >
                    Send email
                  </a>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">📸</div>
                <div className="method-content">
                  <h3 className="method-title">Instagram</h3>
                  <p className="method-detail">@kusum.creation</p>
                  <a 
                    href="https://instagram.com/kusum.creation" 
                    className="method-link"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Follow us
                  </a>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="business-hours">
              <h3 className="hours-title">Business Hours</h3>
              <div className="hours-list">
                <div className="hours-item">
                  <span className="hours-day">Monday - Friday</span>
                  <span className="hours-time">9:00 AM - 6:00 PM</span>
                </div>
                <div className="hours-item">
                  <span className="hours-day">Saturday</span>
                  <span className="hours-time">10:00 AM - 4:00 PM</span>
                </div>
                <div className="hours-item">
                  <span className="hours-day">Sunday</span>
                  <span className="hours-time">Closed</span>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="response-info">
              <h3 className="response-title">Response Time</h3>
              <p className="response-text">
                We typically respond to all inquiries within 24 hours during business days. 
                For urgent matters, please contact us via WhatsApp for faster response.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="faq-section">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3 className="faq-question">Do you offer custom orders?</h3>
              <p className="faq-answer">
                Yes! We love creating custom products. Contact us with your specific requirements, 
                and we&apos;ll work with you to create something special.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">What&apos;s your minimum order quantity?</h3>
              <p className="faq-answer">
                There&apos;s no minimum order quantity for our regular products. For custom orders, 
                we typically require a minimum of 5 pieces.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">How long do your products last?</h3>
              <p className="faq-answer">
                Our handmade soaps have a shelf life of 12-18 months when stored properly in a 
                cool, dry place away from direct sunlight.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Do you ship nationwide?</h3>
              <p className="faq-answer">
                Currently, we offer local delivery and are working on expanding our shipping 
                capabilities. Contact us to check if we deliver to your area.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}