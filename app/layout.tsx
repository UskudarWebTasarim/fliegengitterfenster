import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fliegengitter Fenster - Qualität & Meisterschaft",
  description: "Fliegengitter Fenster - Maßgefertigte Insektenschutzlösungen für Ihr Zuhause. Höchste Qualität und professionelle Montage. Jetzt kostenloses Angebot anfordern!",
  keywords: "Avusturya sineklik, Österreich Fliegengitter, Avusturya plise sineklik, Österreich Plissee, Avusturya plise perde, Österreich Plissee Vorhänge, Avusturya sineklik fiyatları, Österreich Insektenschutz Preise, Avusturya jaluzi, Österreich Jalousien, Avusturya zip perde, Österreich Zip Rollos, Avusturya pencere sineklik, Österreich Fenster Insektenschutz, Avusturya balkon sineklik, Österreich Balkon Insektenschutz, Avusturya kapı sineklik, Österreich Tür Insektenschutz, Avusturya honeycomb, Österreich Honeycomb, Avusturya düette, Österreich Düette, Avusturya sineklik montaj, Österreich Insektenschutz Montage, Avusturya sineklik ölçü, Österreich Insektenschutz Messung, Avusturya sineklik sipariş, Österreich Insektenschutz Bestellung, Avusturya sineklik teslimat, Österreich Insektenschutz Lieferung, Avusturya sineklik garantisi, Österreich Insektenschutz Garantie, Avusturya sineklik servisi, Österreich Insektenschutz Service, Avusturya sineklik satış, Österreich Insektenschutz Verkauf, Avusturya sineklik firması, Österreich Insektenschutz Firma, Avusturya sineklik üreticisi, Österreich Insektenschutz Hersteller, Avusturya sineklik toptan, Österreich Insektenschutz Großhandel",
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
              "description": "Premium Insektenschutzlösungen aus Österreich - Maßgefertigte Fliegengitter, Plissee Vorhänge, Jalousien und mehr für Ihr Zuhause.",
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
              "keywords": "Avusturya sineklik, Österreich Fliegengitter, Avusturya plise sineklik, Österreich Plissee, Avusturya plise perde",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Insektenschutz Produkte",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Fliegengitter",
                      "description": "Maßgefertigte Fliegengitter für Fenster und Türen",
                    },
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Plissee Vorhänge",
                      "description": "Plissee Rollos für Fenster und Balkone",
                    },
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Jalousien",
                      "description": "Aluminium Jalousien für Fenster",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
