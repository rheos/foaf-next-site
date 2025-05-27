// src/app/roadmap/page.tsx
import Section from '@/components/Section';

export default function RoadmapPage() {
  return (
    <div className="px-6 max-w-3xl mx-auto text-foreground">
      <Section>
        <h1 className="text-4xl font-bold mb-2">Roadmap</h1>
        <p className="text-lg text-muted-foreground">
          FOAF evolves from a local food-sharing experiment into a fully decentralized infrastructure for mutual credit and trust-based cooperation.
        </p>
      </Section>

      <Section>
        <ul className="list-disc list-inside space-y-3">
          <li>
            <strong>2022–2023:</strong> GrowOperative MVP development and small-network beta testing
          </li>
          <li>
            <strong>2024:</strong> Expanded testing, token model refinement, and infrastructure planning for mobile
          </li>
          <li>
            <strong>2025:</strong> FOAF Foundation DAO setup, staking logic implementation, and onboarding aligned contributors
          </li>
          <li>
            <strong>May 2026 (planned):</strong> Launch of native iOS and Android apps to enhance accessibility, trustless routing, and mobile-first participation
          </li>
          <li>
            <strong>Late 2026 and beyond:</strong> Mutual credit system rollout, smart contract integration, and progressive decentralization into a protocol-governed dApp ecosystem
          </li>
        </ul>
      </Section>
    </div>
  );
}
