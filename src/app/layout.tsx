import type { Metadata } from "next";
import "./globals.css";
import ParallaxProviderWrapper from '@/components/ParallaxProvider';

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
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <head>
        <link rel="shortcut icon" href="/icon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="overflow-x-hidden">
        <ParallaxProviderWrapper>
          {children}
        </ParallaxProviderWrapper>
      </body>
    </html>
  );
}
