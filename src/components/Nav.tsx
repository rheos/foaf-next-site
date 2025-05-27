'use client';

import { useEffect } from 'react';

export default function Nav() {
  useEffect(() => {
    const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    const toggleMenu = () => {
      if (menu) {
        menu.style.display = menu.style.display === "block" ? "none" : "block";
      }
    };

    if (toggle) {
      toggle.addEventListener("click", toggleMenu);
    }

    return () => {
      if (toggle) {
        toggle.removeEventListener("click", toggleMenu);
      }
    };
  }, []);

  return (
    <nav>
      <div className="nav-container">
        <button id="menu-toggle" aria-label="Toggle menu">&#9776;</button>
        <ul id="menu">
          <li><a href="/">Home</a></li>
          <li><a href="/growoperative/">GrowOperative</a></li>
          <li><a href="/tokens/">Token Model</a></li>
          <li><a href="/whitepaper/">Whitepaper</a></li>
          <li><a href="/roadmap/">Roadmap</a></li>
          <li><a href="/get-involved/">Get Involved</a></li>
        </ul>
      </div>
    </nav>
  );
}
