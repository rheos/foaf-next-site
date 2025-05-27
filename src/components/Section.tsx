export default function Section({ children }: { children: React.ReactNode }) {
    return (
      <section className="mb-12 border-b border-[#333] pb-8">
        {children}
      </section>
    );
  }
  