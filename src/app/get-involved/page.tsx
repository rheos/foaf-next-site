// src/app/get-involved/page.tsx
import Section from '@/components/Section';

export default function GetInvolvedPage() {
  return (
    <div className="px-6 max-w-3xl mx-auto text-foreground">
      <Section>
        <h1 className="text-4xl font-bold mb-2">Get Involved</h1>
        <p className="text-lg text-muted-foreground">
          Join us in building the infrastructure for post-fiat cooperation.
        </p>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-2">Support the Mission</h2>
        <p className="mb-4">
          FOAF Foundation is seeking aligned partners and early-stage funders who share our belief
          that local resilience, peer-to-peer infrastructure, and mutual credit systems are essential
          for the next generation of economic coordination. We are not just launching an app—we are
          building the protocol layer for cooperation itself.
        </p>
        <p>
          We are especially interested in connecting with funders and partners at the intersection of
          regenerative agriculture, decentralized infrastructure, food justice, and crypto-for-good.
          Our goal is to prove this system works through a focused launch of GrowOperative, and evolve
          it into a robust, DAO-governed mutual credit network.
        </p>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-2">Contact & Collaboration</h2>
        <p className="mb-2">
          If you're interested in supporting our work, piloting a local implementation, or collaborating
          in any capacity, please reach out:
        </p>
        <p>
          <a href="mailto:info@foaf.ai" className="text-blue-400 underline">
            info@foaf.ai
          </a>
        </p>
      </Section>
    </div>
  );
}
