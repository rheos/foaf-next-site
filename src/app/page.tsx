'use client';

import Section from '../components/Section';
import AnimatedSection from '../components/AnimatedSection';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <AnimatedSection>
        <Section>
          <h2 className="section-heading">A New Infrastructure for Trust-Based Trade</h2>
          <p>
            As centralized systems falter, FOAF helps communities exchange value directly. No banks. No middlemen. No cash required.
          </p>
        </Section>
      </AnimatedSection>

      <AnimatedSection>
        <Section>
          <h2 className="section-heading">What Is FOAF?</h2>
          <p>
            FOAF (Friend of a Friend) is a decentralized protocol for value exchange rooted in trust.
            It is not a marketplace or an app—it is the infrastructure that powers them.
            FOAF enables people to trade goods, services, and credit through personal networks, using social trust instead of money.
          </p>
        </Section>
      </AnimatedSection>

      <AnimatedSection>
        <Section>
          <h2 className="section-heading">How FOAF Works</h2>
          <ul className="content-list">
            <li>Post something you offer or need</li>
            <li>It spreads through your contact network</li>
            <li>Credit flows across trust paths, and the app keeps track</li>
          </ul>
          <p className="mt-2">
            No public listings. No wallet setup. Most users never touch tokens. FOAF works quietly in the background, making trusted trade possible.
          </p>
        </Section>
      </AnimatedSection>

      <AnimatedSection>
        <Section>
          <h2 className="section-heading">Why Now?</h2>
          <ul className="content-list">
            <li>Rising costs and economic instability are pushing people to find alternatives</li>
            <li>Trust in institutions is eroding</li>
            <li>Volunteer-run exchange networks burn out and fade</li>
            <li>Communities need tools built for real-world resilience</li>
          </ul>
        </Section>
      </AnimatedSection>

      <AnimatedSection>
        <Section>
          <h2 className="section-heading">Why It Matters</h2>
          <p>
            FOAF turns goodwill and social capital into a usable economic layer.
            It lets us grow, share, and trade directly—without depending on fragile supply chains or extractive systems.
          </p>
        </Section>
      </AnimatedSection>

      <AnimatedSection>
        <Section>
          <h2 className="section-heading">Our Mission</h2>
          <p>
            To build an infrastructure of trust that empowers people to trade, thrive, and adapt—together.
          </p>
        </Section>
      </AnimatedSection>

      <AnimatedSection>
        <Section>
          <h2 className="section-heading">Who It's For</h2>
          <ul className="content-list">
            <li>Gardeners, makers, fixers, and doers</li>
            <li>People who want to help their communities stay resilient</li>
            <li>Anyone looking for ways to trade fairly and build lasting connections</li>
          </ul>
        </Section>
      </AnimatedSection>

      <AnimatedSection>
        <Section>
          <h2 className="section-heading">First Use Case: GrowOperative</h2>
          <p>
            GrowOperative is our first live deployment of the FOAF protocol.
            It helps gardeners and communities share surplus food through trust-based networks—no cash required.
          </p>
          <p className="mt-2">
            This is just the beginning. FOAF can support any kind of trade—tools, skills, services, and more.
          </p>
          <p className="mt-2">
            <a href="/growoperative/" className="content-link">Explore GrowOperative →</a>
          </p>
        </Section>
      </AnimatedSection>

      <AnimatedSection>
        <Section>
          <h2 className="section-heading">Core Principles</h2>
          <ul className="content-list">
            <li><strong>Local-first:</strong> Built for neighborhoods and bioregions</li>
            <li><strong>Consent-based visibility:</strong> Listings are visible only through direct or second-degree contacts</li>
            <li><strong>Credible neutrality:</strong> FOAF is infrastructure, not a brand or marketplace</li>
            <li><strong>Forward-compatible:</strong> Starts with food, expands to services, logistics, and credit</li>
          </ul>
        </Section>
      </AnimatedSection>

      <AnimatedSection>
        <Section>
          <h2 className="section-heading">Get Started</h2>
          <p><a href="/growoperative/" className="content-link">Explore GrowOperative</a> — our first live application</p>
          <p><a href="/tokens/" className="content-link">Learn about FOAF and RHEO tokens</a> — governance and utility layers</p>
          <p><a href="/whitepaper/" className="content-link">Read the FOAF Whitepaper</a></p>
        </Section>
      </AnimatedSection>
    </>
  );
}
