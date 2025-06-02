import './globals.css';
import Nav from '../components/Nav';
import Header from '../components/Header';
import Footer from '../components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FOAF Foundation',
  description: 'Decentralized trust infrastructure for community-scale value exchange',
  metadataBase: new URL('https://foaf.foundation'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'FOAF Foundation',
    description: 'Decentralized trust infrastructure for community-scale value exchange',
    url: 'https://foaf.foundation',
    siteName: 'FOAF Foundation',
    type: 'website',
    images: [
      {
        url: 'https://foaf.foundation/og.jpg', // replace with your real image path
        width: 600,
        height: 315,
        alt: 'FOAF Foundation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FOAF Foundation',
    description: 'Decentralized trust infrastructure for community-scale value exchange',
    images: ['https://foaf.foundation/og.jpg'], // replace as needed
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground">
        <Nav />
        <Header />
        <main className="max-w-3xl mx-auto px-4 py-10 mt-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
