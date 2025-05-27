import './globals.css';

export const metadata = {
  title: 'FOAF Foundation',
  description: 'Resilient Local Trade – Powered by Trust, Not Cash',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
