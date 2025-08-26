import type { Metadata, Viewport } from "next";
import "./globals.css";
import ParallaxProviderWrapper from '@/components/ParallaxProvider';
import { LanguageProvider } from '@/context/LanguageContext';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: "Proizvodnja vlažnih maramica - Markus CO",
  description: "Markus Co je porodična firma iz Valjeva, osnovana 1994. godine, sa jasnom misijom da potrošačima obezbedi kvalitetne i pristupačne proizvode za ličnu higijenu.",
  keywords: "vlažne maramice, baby fit, perfecto, universal, desinfect, higijena, bebe",
  authors: [{ name: "Markus CO" }],
  openGraph: {
    title: "Vlažne maramice za bebe. Markus Co",
    description: "Kvalitetne vlažne maramice za bebe i univerzalnu upotrebu",
    url: "www.markus.rs",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <head>
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        
        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/markus-logo.png" />
        
        {/* Android Icons */}
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/markus-logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/markus-logo.png" />
        
        {/* Microsoft Tiles */}
        <meta name="msapplication-TileColor" content="#c19d5f" />
        <meta name="theme-color" content="#c19d5f" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="overflow-x-hidden">
        <LanguageProvider>
          <ParallaxProviderWrapper>
            <Navigation />
            {children}
          </ParallaxProviderWrapper>
        </LanguageProvider>
      </body>
    </html>
  );
}
