'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Nav() {
  const [isDay, setIsDay] = useState(false);

  // On mount, check localStorage for theme
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const theme = localStorage.getItem('theme');
      if (theme === 'day') {
        document.body.classList.add('theme-day');
        setIsDay(true);
      }
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    if (typeof window !== 'undefined') {
      if (isDay) {
        document.body.classList.remove('theme-day');
        localStorage.setItem('theme', 'night');
        setIsDay(false);
      } else {
        document.body.classList.add('theme-day');
        localStorage.setItem('theme', 'day');
        setIsDay(true);
      }
    }
  };

  useEffect(() => {
    const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    const toggleMenu = () => {
      if (menu) {
        menu.classList.toggle("open");
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

  // Close mobile menu when a menu item is clicked
  const handleMenuItemClick = () => {
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      const menu = document.getElementById("menu");
      if (menu && menu.classList.contains("open")) {
        menu.classList.remove("open");
      }
    }
  };

  return (
    <nav className="text-[hsl(var(--nav-header-foreground))]">
      <div className="nav-container relative">
        <button id="menu-toggle" aria-label="Toggle menu">&#9776;</button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl md:right-8 bg-transparent border-none cursor-pointer select-none"
          aria-label="Toggle theme"
          onClick={toggleTheme}
        >
          {isDay ? '🌙' : '☀️'}
        </button>
        <ul id="menu">
          <li><Link href="/" onClick={handleMenuItemClick}>Home</Link></li>
          <li><Link href="/growoperative/" onClick={handleMenuItemClick}>GrowOperative</Link></li>
          <li><Link href="/tokens/" onClick={handleMenuItemClick}>Token Model</Link></li>
          <li><Link href="/whitepaper/" onClick={handleMenuItemClick}>Whitepaper</Link></li>
          <li><Link href="/roadmap/" onClick={handleMenuItemClick}>Roadmap</Link></li>
          <li><Link href="/get-involved/" onClick={handleMenuItemClick}>Get Involved</Link></li>
        </ul>
      </div>
    </nav>
  );
}


