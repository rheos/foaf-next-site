'use client';

import Nav from '../components/Nav';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect } from 'react';

export default function Home() {
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
    <main>
      <Nav />
      <Header />

      <div className="content-container">
      
      <section>
        <h2>A New Infrastructure for Trust-Based Trade</h2>
        <p className="subheader">
          As centralized systems falter, FOAF helps communities exchange value directly. No banks. No middlemen. No cash required.
        </p>
      </section>

      <section>
        <h2>What Is FOAF?</h2>
        <p>
          FOAF (Friend of a Friend) is a decentralized protocol for value exchange rooted in trust.
          It is not a marketplace or an app—it is the infrastructure that powers them.
          FOAF enables people to trade goods, services, and credit through personal networks, using social trust instead of money.
        </p>
      </section>

      <section>
        <h2>How FOAF Works</h2>
        <ul>
          <li>Post something you offer or need</li>
          <li>It spreads through your contact network</li>
          <li>Credit flows across trust paths, and the app keeps track</li>
        </ul>
        <p>
          No public listings. No wallet setup. Most users never touch tokens.
          FOAF works quietly in the background, making trusted trade possible.
        </p>
      </section>

      <section>
        <h2>Why Now?</h2>
        <ul>
          <li>Rising costs and economic instability are pushing people to find alternatives</li>
          <li>Trust in institutions is eroding</li>
          <li>Volunteer-run exchange networks burn out and fade</li>
          <li>Communities need tools built for real-world resilience</li>
        </ul>
      </section>

      <section>
        <h2>Why It Matters</h2>
        <p>
          FOAF turns goodwill and social capital into a usable economic layer.
          It lets us grow, share, and trade directly—without depending on fragile supply chains or extractive systems.
        </p>
      </section>

      <section>
        <h2>Our Mission</h2>
        <p>
          To build an infrastructure of trust that empowers people to trade, thrive, and adapt—together.
        </p>
      </section>

      <section>
        <h2>Who It’s For</h2>
        <ul>
          <li>Gardeners, makers, fixers, and doers</li>
          <li>People who want to help their communities stay resilient</li>
          <li>Anyone looking for ways to trade fairly and build lasting connections</li>
        </ul>
      </section>

      <section>
        <h2>First Use Case: GrowOperative</h2>
        <p>
          GrowOperative is our first live deployment of the FOAF protocol.
          It helps gardeners and communities share surplus food through trust-based networks—no cash required.
        </p>
        <p>
          This is just the beginning. FOAF can support any kind of trade—tools, skills, services, and more.
        </p>
        <p>
          <a href="/growoperative/">Explore GrowOperative →</a>
        </p>
      </section>

      <section>
        <h2>Core Principles</h2>
        <ul>
          <li><strong>Local-first:</strong> Built for neighborhoods and bioregions</li>
          <li><strong>Consent-based visibility:</strong> Listings are visible only through direct or second-degree contacts</li>
          <li><strong>Credible neutrality:</strong> FOAF is infrastructure, not a brand or marketplace</li>
          <li><strong>Forward-compatible:</strong> Starts with food, expands to services, logistics, and credit</li>
        </ul>
      </section>

      <section>
        <h2>Get Started</h2>
        <p><a href="/growoperative/">Explore GrowOperative</a> — our first live application</p>
        <p><a href="/tokens/">Learn about FOAF and RHEO tokens</a> — governance and utility layers</p>
        <p><a href="/whitepaper/">Read the FOAF Whitepaper</a></p>
      </section>
      
      </div>

      <Footer />
    
    </main>
  );
}
