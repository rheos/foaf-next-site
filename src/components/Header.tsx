import Image from 'next/image';

export default function Header() {
  return (
    <header className="flex items-center gap-4 mb-8 mt-12">
      <Image
        src="/logo.png"
        alt="FOAF Foundation Logo"
        width={48}
        height={48}
        className="w-12 h-12"
      />
      <div>
        <h1 className="text-4xl font-bold mb-2">FOAF Foundation</h1>
        <p className="text-lg text-foreground/80">Resilient Local Trade – Powered by Trust, Not Cash</p>
      </div>
    </header>
  );
}
  