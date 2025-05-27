import Image from 'next/image';

export default function Header() {
  return (
    <header className="text-[hsl(var(--nav-header-foreground))] mb-8 mt-12">
      <div className="flex items-center justify-center gap-4 md:-ml-[35px]">
        <Image
          src="/logo.png"
          alt="FOAF Foundation Logo"
          width={70}
          height={70}
          className="w-12 h-12 md:w-[70px] md:h-[70px]"
        />
        <h1 className="text-4xl font-bold">FOAF Foundation</h1>
      </div>
      <p className="text-lg text-foreground/80 text-center mt-2 max-w-2xl mx-auto">
        Decentralized trust infrastructure for community-scale value exchange
      </p>
    </header>
  );
}
  