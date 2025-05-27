import './globals.css';
import Nav from '../components/Nav';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'FOAF Foundation',
  description: 'Decentralized trust infrastructure for community-scale value exchange',
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
