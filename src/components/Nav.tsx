'use client';

import { useEffect } from 'react';
import Link from 'next/link';

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
          <li><Link href="/">Home</Link></li>
          <li><Link href="/growoperative/">GrowOperative</Link></li>
          <li><Link href="/tokens/">Token Model</Link></li>
          <li><Link href="/whitepaper/">Whitepaper</Link></li>
          <li><Link href="/roadmap/">Roadmap</Link></li>
          <li><Link href="/get-involved/">Get Involved</Link></li>
        </ul>
      </div>
    </nav>
  );
}


