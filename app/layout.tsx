import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fliegengitter Fenster - Qualität & Meisterschaft",
  description: "Fliegengitter Fenster - Maßgefertigte Insektenschutzlösungen für Ihr Zuhause. Höchste Qualität und professionelle Montage. Jetzt kostenloses Angebot anfordern!",
  keywords: "Fliegengitter Fenster, Insektenschutz, Fliegengitter, Fenster, Österreich, Sineklik, Plisee, Jaluzi, Zip Perde",
  authors: [{ name: "Fliegengitter Fenster" }],
  creator: "Fliegengitter Fenster",
  publisher: "Fliegengitter Fenster",
  robots: "index, follow",
  openGraph: {
    title: "Fliegengitter Fenster | Premium Insektenschutz Österreich",
    description: "Maßgefertigte Fliegengitter für Fenster und Türen. Hochwertige Insektenschutzlösungen aus Österreich.",
    url: "https://fliegengitterfenster.at",
    siteName: "Fliegengitter Fenster",
    locale: "de_AT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fliegengitter Fenster | Premium Insektenschutz",
    description: "Maßgefertigte Fliegengitter für Fenster und Türen aus Österreich.",
  },
  alternates: {
    canonical: "https://fliegengitterfenster.at",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Fliegengitter Fenster",
              "description": "Premium Insektenschutzlösungen aus Österreich",
              "url": "https://fliegengitterfenster.at",
              "telephone": "+90 540 336 3873",
              "email": "info@fenetresystems.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Mariahilfer Straße 123",
                "addressLocality": "Wien",
                "postalCode": "1070",
                "addressCountry": "AT",
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "48.2082",
                "longitude": "16.3738",
              },
              "areaServed": ["AT", "DE", "NL", "BE", "FR", "CH"],
              "priceRange": "€€",
              "openingHours": "Mo-Fr 09:00-18:00",
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
