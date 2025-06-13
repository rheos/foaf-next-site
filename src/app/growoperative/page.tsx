// src/app/growoperative/page.tsx
import Section from '@/components/Section';
import AnimatedSection from '@/components/AnimatedSection';

export default function GrowOperativePage() {
  return (
    <>
      <AnimatedSection>
        <Section>
          <h1 className="text-4xl font-bold mb-2">GrowOperative</h1>
          <p className="text-lg text-muted-foreground">
            The first FOAF-powered application for food exchange
          </p>
        </Section>
      </AnimatedSection>

      <AnimatedSection>
        <Section>
          <h2 className="section-heading">What Is GrowOperative?</h2>
          <p>
            GrowOperative is the first application built on the FOAF protocol. It helps gardeners and neighbors
            coordinate food sharing through a distributed request and fulfillment system. It is designed to
            demonstrate trust-based mutual credit and social routing in a real-world, peer-to-peer context.
          </p>
        </Section>
      </AnimatedSection>

      <AnimatedSection>
        <Section>
          <h2 className="section-heading">How GrowOperative Works</h2>
          <ol className="badge-list">
            <li>
              <p className="font-semibold text-lg mb-1">List What You're Offering</p>
              <p>
                Have too many tomatoes or fresh herbs? Post them in the app. Your listing begins within your contact
                circle but can ripple outward as others share it through the network.
              </p>
            </li>
            <li>
              <p className="font-semibold text-lg mb-1">Your Listing Travels Through the Network</p>
              <p>
                Anyone connected by trust can see your listing if it's passed along. That includes friends of friends
                and beyond, depending on how far it travels. You stay connected to the chain of trust the whole way.
              </p>
            </li>
            <li>
              <p className="font-semibold text-lg mb-1">Transactions Are Logged as Credit</p>
              <p>
                When someone places a request and you accept, the transaction is recorded as a line of credit.
                No cash is exchanged in the app. It isn't a direct trade either. The system just tracks the value that's owed.
              </p>
            </li>
            <li>
              <p className="font-semibold text-lg mb-1">You Decide How to Settle It</p>
              <p>
                You and the other person agree on how and when to settle the credit. It could be cash, something they offer later,
                or any form of value you both accept. The app doesn't handle payment or enforce terms. It simply records the agreement.
              </p>
            </li>
            <li>
              <p className="font-semibold text-lg mb-1">A Community Marketplace Built on Trust</p>
              <p>
                GrowOperative is a marketplace, but one where relationships and accountability matter more than speed or volume.
                It helps communities keep value flowing, even when money is scarce.
              </p>
            </li>
          </ol>
        </Section>
      </AnimatedSection>

      <AnimatedSection>
        <Section>
          <h2 className="section-heading">Example Use Case</h2>
          <p>
            Mia has five pounds of extra tomatoes. She posts them on GrowOperative, visible to her trusted contacts.
            Chris, who is connected to Mia and also trusted by others, sees the post.
          </p>
          <p>
            Chris's friends Ana and Jordan view the tomatoes in their app. They know the tomatoes originated with Mia
            but see that the requisition will flow through Chris. Ana requests one pound, Jordan requests two.
            Chris adds two pounds for himself and submits a five-pound requisition to Mia on behalf of the group.
          </p>
          <p>
            Mia accepts. Chris picks up the tomatoes and distributes them to Ana, Jordan, and himself. Ana and Jordan
            do not see each other's participation or pricing. They only see that they are receiving tomatoes from Chris
            and that the source was Mia.
          </p>
          <p>
            The FOAF ledger records that Ana owes Chris the agreed value for one pound of tomatoes, Jordan owes him for
            two, and Chris owes Mia for the total value of all five. These obligations are denominated in local terms
            such as currency, informal credit, or other agreed forms of settlement. The system enables trust-based
            cooperation and multilateral flow of value without requiring participants to exchange money through the
            platform itself.
          </p>
        </Section>
      </AnimatedSection>

      <AnimatedSection>
        <Section>
          <h2 className="section-heading">RHEO Access and Network Borrowing</h2>
          <p>
            GrowOperative does not require users to hold RHEO tokens directly. Instead, RHEO can be temporarily borrowed
            from others in their network at the time of transaction. The value owed flows back to the origin of the token,
            creating an invisible but trackable credit path.
          </p>
          <p>
            This allows anyone to participate without crypto knowledge or wallet setup. It also encourages aligned
            contributors to stake FOAF, generate RHEO, and onboard others. By circulating RHEO and enabling others to act,
            stakers increase their influence and exposure across the network.
          </p>
        </Section>
      </AnimatedSection>

      <AnimatedSection>
        <Section>
          <h2 className="section-heading">Core Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Decentralized requisition flow across trust networks</li>
            <li>Privacy-aware fulfillment tracking</li>
            <li>Out-of-app settlement (cash, barter, informal credit)</li>
            <li>Contact-based visibility and limited disclosure</li>
            <li>Optional RHEO incentives and token utility paths</li>
          </ul>
        </Section>
      </AnimatedSection>

      <AnimatedSection>
        <Section>
          <h2 className="section-heading">How It Is Different</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Unlike farmer's markets:</strong> GrowOperative works digitally through social networks. No stalls, vendors, or fixed locations</li>
            <li><strong>Unlike food banks:</strong> It is not charity. It supports value exchange and mutual accountability</li>
            <li><strong>Unlike barter groups:</strong> No need for direct matches. Value flows through trust paths and is logged transparently</li>
            <li><strong>Unlike selling apps:</strong> Listings are private and scoped to your network</li>
            <li><strong>Unlike delivery platforms:</strong> There are no middlemen. Fulfillment is peer to peer, and reputation builds from usage</li>
          </ul>
        </Section>
      </AnimatedSection>
    </>
  );
}
