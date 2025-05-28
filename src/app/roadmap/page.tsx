// src/app/roadmap/page.tsx
import Section from '@/components/Section';

export default function RoadmapPage() {
  return (
    <>
<Section>
  <h2 className="section-heading">Roadmap</h2>

  <p className="mb-12 text-foreground max-w-3xl leading-relaxed">
    FOAF evolves from a local food-sharing experiment into a fully decentralized infrastructure for mutual credit and trust-based cooperation.
  </p>

  <div className="relative border-l-2 border-gray-600 pl-4 space-y-16">
    {/* Phase 1 */}
    <div className="relative mb-16 last:mb-0 group">
      {/* Dot */}
      <div
        className="
          absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2
          w-5 h-5 rounded-full bg-blue-400 border-4 border-background z-10 shadow-md
          transition-transform duration-300
          group-hover:scale-150
        "
      ></div>
      {/* Card */}
      <div className="bg-nav-header-bg p-6 rounded-lg border border-gray-700 shadow-md max-w-3xl w-full ml-7">
        <h3 className="text-lg font-semibold text-nav-header-foreground mb-4">
          Phase 1: Foundation and MVP (2020–2025)
        </h3>
        <ul className="list-disc list-inside text-foreground space-y-1">
          <li>2020 to 2022: Initial concept development and MVP built over 2 years</li>
          <li>2022 to 2023: MVP testing and early user feedback</li>
          <li>2023 to 2024: PWA launch with off-platform payment support</li>
          <li>Q3 to Q4 2025: Mutual credit and RHEO routing integration</li>
        </ul>
      </div>
    </div>

    {/* Phase 2 */}
    <div className="relative mb-16 last:mb-0 group">
      {/* Dot */}
      <div
        className="
          absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2
          w-5 h-5 rounded-full bg-cyan-400 border-4 border-background z-10 shadow-md
          transition-transform duration-300
          group-hover:scale-150
        "
      ></div>
      {/* Card */}
      <div className="bg-nav-header-bg p-6 rounded-lg border border-gray-700 shadow-md max-w-3xl w-full ml-7">
        <h3 className="text-lg font-semibold text-nav-header-foreground mb-4">
          Phase 2: Mobile and Alpha Launch (2026)
        </h3>
        <ul className="list-disc list-inside text-foreground space-y-1">
          <li>Q2 2026: Native iOS and Android app development</li>
          <li>Q3 2026: Alpha launch in Crawford Bay</li>
          <li>Q4 2026: Expansion to Kaslo, Nelson, Boulder, Asheville, and more</li>
          <li>Late 2026: DAO governance pilot begins</li>
        </ul>
      </div>
    </div>

    {/* Phase 3 */}
    <div className="relative mb-16 last:mb-0 group">
      {/* Dot */}
      <div
        className="
          absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2
          w-5 h-5 rounded-full bg-teal-400 border-4 border-background z-10 shadow-md
          transition-transform duration-300
          group-hover:scale-150
        "
      ></div>
      {/* Card */}
      <div className="bg-nav-header-bg p-6 rounded-lg border border-gray-700 shadow-md max-w-3xl w-full ml-7">
        <h3 className="text-lg font-semibold text-nav-header-foreground mb-4">
          Phase 3: DAO and Regional Expansion (2027)
        </h3>
        <ul className="list-disc list-inside text-foreground space-y-1">
          <li>Q1 2027: Full DAO governance goes live</li>
          <li>Q2 to Q3 2027: FOAF protocol opens to third-party apps and uses</li>
          <li>Q4 2027: Expansion into additional resilience-focused communities</li>
        </ul>
      </div>
    </div>

    {/* Phase 4 */}
    <div className="relative mb-16 last:mb-0 group">
      {/* Dot */}
      <div
        className="
          absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2
          w-5 h-5 rounded-full bg-indigo-400 border-4 border-background z-10 shadow-md
          transition-transform duration-300
          group-hover:scale-150
        "
      ></div>
      {/* Card */}
      <div className="bg-nav-header-bg p-6 rounded-lg border border-gray-700 shadow-md max-w-3xl w-full ml-7">
        <h3 className="text-lg font-semibold text-nav-header-foreground mb-4">
          Phase 4: FOAF Ecosystem Growth (2028 and beyond)
        </h3>
        <ul className="list-disc list-inside text-foreground space-y-1">
          <li>Launch new apps on the FOAF protocol (e.g. services, general-purpose exchange)</li>
          <li>Enable cross-app credit clearing and shared user profiles</li>
          <li>Expand FOAF Foundation treasury and governance tooling</li>
          <li>Introduce RHEO-backed liquidity mechanisms to deepen market support</li>
        </ul>
      </div>
    </div>
  </div>
</Section>


    </>
  );
}
