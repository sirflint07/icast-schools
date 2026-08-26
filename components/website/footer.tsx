import { ArrowRight, Camera, Phone } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand">
            <a href="#top" className="brand brand-light">
              <span className="brand-mark">I</span>
              <span>
                <strong>ICAST</strong>
                <small>Schools</small>
              </span>
            </a>
            <p>
              Preparing students not only for school, but for the world beyond
              it.
            </p>
            <div className="socials">
              <a href="#contact" aria-label="Instagram">
                <Camera size={17} />
              </a>
              <a href="#contact" aria-label="WhatsApp">
                <Phone size={17} />
              </a>
            </div>
          </div>
          <div className="footer-links">
            <div>
              <strong>Explore</strong>
              <a href="#about">About ICAST</a>
              <a href="#academics">Academics</a>
              <a href="#gallery">Student Life</a>
              <a href="#admissions">Admissions</a>
            </div>
            <div>
              <strong>Discover</strong>
              <a href="#contact">Boarding</a>
              <a href="#gallery">Facilities</a>
              <a href="#gallery">Gallery</a>
              <a href="#contact">FAQs</a>
            </div>
            <div>
              <strong>Contact</strong>
              <span>
                123, Oyinloye Olawale Street,
                <br />
                Elebu, Ibadan.
              </span>
              <a href="tel:+2348024971023">+234 802 497 1023</a>
              <a href="#contact">
                Get in touch <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2024 ICAST Schools. All rights reserved.</span>
          <span>International College of Arts, Science & Technology</span>
        </div>
      </footer>
    </div>
  )
}

export default Footer
