// src/app/whitepaper/page.tsx
export default function WhitepaperPage() {
    return (
        <div className="flex justify-center px-4 py-12 bg-background text-foreground">

       <article className="bg-white text-black shadow-xl max-w-4xl w-full p-10 rounded-lg font-serif leading-relaxed text-[1.05rem]">

          <h1 className="text-3xl font-sans font-bold border-b border-gray-300 pb-2">FOAF Whitepaper</h1>
  
          <h2 className="text-2xl font-sans mt-10 mb-4">Introduction</h2>
          <p>
            The FOAF Foundation is building a trust-based trading network that helps communities meet their needs
            without relying on cash or centralized systems. Using mutual credit, social trust paths, and transparent
            value routing, FOAF empowers people to exchange goods and services directly. This paper outlines the
            philosophy, architecture, token model, and roadmap behind the project.
          </p>
  
          <h2 className="text-2xl font-sans mt-10 mb-4">Vision</h2>
          <p>
            Most people have something to offer, but lack easy ways to trade what they have for what they need.
            FOAF bridges that gap by replacing the need for cash with social credit and trust. Participants can grow food,
            fix tools, share skills, and support each other, even when money is tight.
          </p>
          <p>
            Many past projects have explored similar ideas — systems like Local Exchange Trading Systems (LETS),
            Community Exchange Systems (CES), and more recently, blockchain-based attempts at peer-to-peer credit and trust.
            These efforts helped define the space but often failed to scale because of complex interfaces, lack of incentives,
            or a missing social fabric. FOAF builds on what they introduced, grounding it in real-world relationships and a
            model where value flows automatically through trust paths.
          </p>
          <p>
            We are not inventing these ideas from scratch. Mutual credit, community exchange, and reputation-based trust
            have been explored before. FOAF builds on these insights with tools that are simple, scalable, and rooted in
            everyday relationships.
          </p>
  
          <h2 className="text-2xl font-sans mt-10 mb-4">GrowOperative and the First Use Case</h2>
          <p>
            GrowOperative is the first application built on the FOAF protocol. It helps neighbors share surplus food
            using the same trust-based credit system that will eventually power a much broader range of local economies.
          </p>
          <p>
            The app allows users to list garden produce, request what they need, and fulfill orders through personal
            contact networks. While the MVP supports listing and delivery, upcoming releases will integrate mutual credit
            tracking and allow participants to earn and spend credit directly inside the app.
          </p>
          <p>
            This first use case was chosen intentionally. Food is immediate, tangible, and deeply local. By starting with
            a need that is universal and recurring, FOAF can demonstrate real utility while building the social graph that
            will later support tools, services, and more complex exchanges.
          </p>
          <p>
            GrowOperative is not the end goal. It is the on-ramp to a larger system that empowers communities to trade across
            every area of life, without depending on fiat currency or centralized platforms.
          </p>
  
          <h2 className="text-2xl font-sans mt-10 mb-4">How FOAF Works</h2>
          <p>FOAF is designed to make trust-based trade as seamless as possible, even in the absence of money. The system follows a simple flow:</p>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li><strong>Post</strong> – A user lists something they need or want to offer.</li>
            <li><strong>Propagate</strong> – The listing spreads through the user's contact network, appearing as if shared directly by each contact.</li>
            <li><strong>Settle</strong> – The system routes value through trust paths. Settlement can be in mutual credit, cash, or in-kind and is transparently recorded.</li>
          </ul>
          <p>
            This model depends on <strong>trust paths</strong>: chains of verified relationships where credit and obligations can flow.
            These paths allow users to transact confidently even without direct personal connection.
          </p>
  
          <h2 className="text-2xl font-sans mt-10 mb-4">Token Architecture</h2>
          <p>FOAF uses a two-token model:</p>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li><strong>FOAF:</strong> A fixed-supply governance and staking token, not used for payments but for RHEO minting and DAO participation.</li>
            <li><strong>RHEO:</strong> A flexible-use utility token for transaction routing. Most users never hold it directly; it’s routed behind the scenes.</li>
            <li>Trades can happen without cash or wallets</li>
            <li>Contributors are rewarded automatically</li>
            <li>FOAF remains accessible while being economically self-sustaining</li>
          </ul>
  
          <h2 className="text-2xl font-sans mt-10 mb-4">Governance and DAO Transition</h2>
          <p>FOAF will move toward DAO-based governance over time:</p>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>Staked FOAF grants voting rights</li>
            <li>Proposals define upgrades, rules, or funding decisions</li>
            <li>Votes are weighted and recorded on-chain</li>
            <li>DAO tooling will evolve with the ecosystem</li>
          </ul>
  
          <h2 className="text-2xl font-sans mt-10 mb-4">Roadmap</h2>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>MVP deployed with listing + propagation logic</li>
            <li>Smart contracts drafted for FOAF and RHEO</li>
            <li>DAO and staking framework in design</li>
            <li>Implement credit tracking and settlement</li>
            <li>Launch native iOS + Android apps</li>
            <li>Expand pilots with early adopters</li>
            <li>Launch decentralized governance</li>
          </ul>
  
          <h2 className="text-2xl font-sans mt-10 mb-4">Why It Matters</h2>
          <p>
            Traditional systems — from barter to fiat-based platforms — often fail to scale or include everyone.
            FOAF replaces dependence on central systems with a trust-based, resilient alternative that flows through existing social fabric.
          </p>
          <p>
            It’s not just a platform — it’s infrastructure for a post-capitalist future.
          </p>
        </article>
      </div>
    );
  }
  