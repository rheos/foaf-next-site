// src/app/tokens/page.tsx
import Section from '@/components/Section';

export default function TokenModelPage() {
  return (
    <div className="px-6 max-w-3xl mx-auto text-foreground">
      <Section>
        <h1 className="text-4xl font-bold mb-2">Token Model</h1>
        <p className="text-lg text-muted-foreground">
          FOAF and RHEO work together to govern and power the trust layer for peer-to-peer value exchange.
        </p>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-2">FOAF Token</h2>
        <p className="mb-4">
          FOAF is a fixed-supply, indivisible token that anchors long-term participation and governance.
          It is not used for direct payments, but must be staked to mint RHEO. Holding FOAF gives
          participants a say in protocol direction and access to DAO-driven funding.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Fixed supply:</strong> 25,000,000 FOAF</li>
          <li><strong>Indivisible:</strong> FOAF has no decimal places</li>
          <li><strong>Use cases:</strong> Governance, staking, alignment, DAO funding</li>
          <li><strong>Not for microtransactions:</strong> FOAF is strategic, not transactional</li>
        </ul>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-2">RHEO Token</h2>
        <p className="mb-4">
          RHEO is a divisible utility token minted by staking FOAF. It is used for transaction fees,
          routing incentives, and credit signaling. Most users will never need to hold RHEO directly — it
          can be borrowed at the point of use, with value flowing back to the original staker. The system
          prices all goods and services in fiat currency, but RHEO facilitates credit settlement and
          rewards contributors.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Divisible utility token:</strong> Used for transactional flow</li>
          <li><strong>Minted by staking FOAF:</strong> Active alignment enables circulation</li>
          <li><strong>Borrowable:</strong> Users can use RHEO from their network temporarily and inherit the obligation</li>
          <li><strong>Value path:</strong> Credit flows backward to RHEO origin, incentivizing staking</li>
          <li><strong>Illustrative valuation:</strong> 1 RHEO ≈ $1 used as onboarding baseline</li>
          <li><strong>Listings priced in fiat:</strong> All goods and services are priced in local currency (e.g., CAD)</li>
        </ul>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-2">Transaction Fees and Routing</h2>
        <p className="mb-4">
          Fees are paid in RHEO at the time of transaction. These include:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>3% base fee:</strong> Paid to the protocol (can be included in price or added separately)</li>
          <li><strong>Up to 3% markup:</strong> Optional margin for the conduit node who forwards or fulfills the request</li>
          <li><strong>1% per-hop routing incentive:</strong> Paid to each contact who passes the requisition forward</li>
        </ul>
        <p className="mt-4">
          This structure rewards people who facilitate trade across the network while ensuring that protocol contributors and stakers are compensated for enabling activity.
        </p>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-2">Token Allocation</h2>
        <p className="mb-4">The 25 million FOAF tokens are pre-allocated as follows:</p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Seed Round:</strong> 5,000,000 FOAF (20%)</li>
          <li><strong>Strategic Round (TBD):</strong> 1.25M–2.5M FOAF (5–10%)</li>
          <li><strong>Team & Advisors:</strong> 5,000,000 FOAF (20%) — 3-year vesting</li>
          <li><strong>Community Airdrops:</strong> 2.5M–3M FOAF (10–12%) — regional onboarding and adoption</li>
          <li><strong>Node Operators:</strong> 2.5M–3M FOAF (10–12%) — allocated to support active routing and network formation</li>
          <li><strong>Treasury & DAO Grants:</strong> 5M–6.25M FOAF (20–25%) — funding for governance proposals, growth, and infrastructure</li>
          <li><strong>Liquidity / Listings:</strong> 1.25M–2M FOAF (5–8%) — exchange and on-ramp access</li>
        </ul>
      </Section>

      <Section>
        <h2 className="text-2xl font-semibold mb-2">Onboarding and Adoption</h2>
        <p>
          FOAF and RHEO are introduced gradually, starting with regional airdrops and explainer content.
          Most early users will not need wallets or technical knowledge. Token logic flows behind the
          scenes, with trust and credit obligations tracked transparently. As users grow into the system,
          incentives will align them toward staking, contribution, and DAO participation.
        </p>
      </Section>
    </div>
  );
}
