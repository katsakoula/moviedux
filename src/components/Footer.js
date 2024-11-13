import React from "react";
import "../styles.css";

export default function Footer() {
  const footerText = `© ${new Date().getFullYear()} Moviedux`;

  return (
    <footer className="footer">
      <p className="footer-text">{footerText}</p>
    </footer>
  );
}
