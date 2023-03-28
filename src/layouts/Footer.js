import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <nav>
        <h3>Contact Us</h3>
        <ul>
          <li>Address: 123 Test Street</li>
          <li>Email: order@littlelemon.com</li>
          <li>Phone: 032 329 5733</li>
        </ul>
      </nav>
      <nav>
        <h3>Opening times</h3>
        <ul>
          <li>Monday - Friday: 9:00 - 22:00</li>
          <li>Saturday - Sunday: 10:00 - 24:00</li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;