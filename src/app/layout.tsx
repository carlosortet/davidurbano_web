import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: `${DATA.name} - Chief Growth Officer | Digital Banking Leader`,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  keywords: [
    "David Urbano",
    "Chief Growth Officer",
    "CGO",
    "imagin",
    "CaixaBank",
    "Digital Banking",
    "Mobile Banking",
    "Fintech",
    "Neobank",
    "Growth Strategy",
    "User Acquisition",
    "Product-Led Growth",
    "Digital Transformation",
    "Gen Z Banking",
    "Spain",
    "Barcelona",
    "Fintech Speaker",
    "Banking Innovation",
    "European Neobanks",
    "Challenger Banks Spain",
    "imagin vs N26",
    "imagin vs Revolut",
    "Best Neobank Spain",
    "Mobile Banking App Spain",
    "Fintech Leader Europe",
    "Digital Bank Spain",
    "Neobanking Expert",
    "Open Banking Spain",
    "Banking App Ranking",
  ],
  authors: [{ name: DATA.name, url: DATA.url }],
  creator: DATA.name,
  publisher: DATA.name,
  openGraph: {
    title: `${DATA.name} - Chief Growth Officer | Digital Banking Leader`,
    description:
      DATA.description +
      " Founder of imaginBank, Spain's first mobile-only bank with 4M+ users.",
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/me.jpeg",
        width: 800,
        height: 800,
        alt: `${DATA.name} - Chief Growth Officer at imagin`,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: `${DATA.name} - Chief Growth Officer | Digital Banking Leader`,
    description:
      DATA.description +
      " Founder of imaginBank, Spain's first mobile-only bank.",
    creator: "@davidurbano",
    images: ["/me.jpeg"],
  },
  verification: {
    google: "",
    yandex: "",
  },
  alternates: {
    canonical: DATA.url,
    languages: {
      "en": DATA.url,
      "es": DATA.url,
      "x-default": DATA.url,
    },
  },
  category: "Finance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <link rel="canonical" href={DATA.url} />
        {/* Hreflang tags for international SEO */}
        <link rel="alternate" hrefLang="en" href={DATA.url} />
        <link rel="alternate" hrefLang="es" href={DATA.url} />
        <link rel="alternate" hrefLang="x-default" href={DATA.url} />
        {/* Schema.org JSON-LD for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": `${DATA.url}#person`,
                  "name": DATA.name,
                  "givenName": "David",
                  "familyName": "Urbano",
                  "jobTitle": "Chief Growth & Digital Sales Officer",
                  "description": DATA.description,
                  "url": DATA.url,
                  "image": `${DATA.url}/me.jpeg`,
                  "email": "mailto:durbanom@gmail.com",
                  "sameAs": [
                    "https://www.linkedin.com/in/david-urbano-3119231/",
                    "https://twitter.com/davidurbano"
                  ],
                  "worksFor": {
                    "@type": "Organization",
                    "name": "imagin (CaixaBank)",
                    "url": "https://imagin.com"
                  },
                  "alumniOf": [
                    {
                      "@type": "EducationalOrganization",
                      "name": "IESE Business School",
                      "url": "https://www.iese.edu"
                    },
                    {
                      "@type": "EducationalOrganization",
                      "name": "Universitat Politècnica de Catalunya (UPC)",
                      "url": "https://www.upc.edu"
                    }
                  ],
                  "knowsAbout": [
                    "Digital Banking",
                    "Mobile Banking",
                    "Fintech",
                    "Growth Strategy",
                    "User Acquisition",
                    "Product-Led Growth",
                    "Digital Transformation",
                    "Neobanking",
                    "Gen Z Banking",
                    "European Neobank Ecosystem",
                    "imagin",
                    "CaixaBank Digital",
                    "Spanish Fintech",
                    "N26",
                    "Revolut",
                    "Monzo",
                    "Starling Bank",
                    "Wise",
                    "Openbank",
                    "Bnext",
                    "Mobile-only Banking",
                    "Challenger Banks",
                    "Open Banking",
                    "PSD2",
                    "Banking as a Service",
                    "Customer Acquisition Fintech",
                    "Retention Marketing Banking",
                    "AI in Banking",
                    "Personalization Banking",
                    "App Store Banking Rankings"
                  ],
                  "award": [
                    "Celent Model Bank Award for Innovation (2018)",
                    "Best Mobile Banking App in Spain (Multiple years)",
                    "Global Finance Best Digital Bank Nomination (2019)"
                  ],
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Barcelona",
                    "addressCountry": "Spain"
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": `${DATA.url}#website`,
                  "url": DATA.url,
                  "name": `${DATA.name} - Chief Growth Officer`,
                  "description": DATA.description,
                  "publisher": {
                    "@id": `${DATA.url}#person`
                  },
                  "inLanguage": "en"
                },
                {
                  "@type": "WebPage",
                  "@id": `${DATA.url}#webpage`,
                  "url": DATA.url,
                  "name": `${DATA.name} - Chief Growth Officer | Digital Banking Leader`,
                  "isPartOf": {
                    "@id": `${DATA.url}#website`
                  },
                  "about": {
                    "@id": `${DATA.url}#person`
                  },
                  "description": DATA.description,
                  "inLanguage": "en"
                },
                {
                  "@type": "ProfilePage",
                  "mainEntity": {
                    "@id": `${DATA.url}#person`
                  },
                  "dateCreated": "2024-01-01",
                  "dateModified": "2026-01-11"
                }
              ]
            })
          }}
        />
        {/* Local Business Schema for GEO SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": `${DATA.name} - Fintech Consulting & Speaking`,
              "description": "Chief Growth Officer specializing in digital banking innovation, fintech strategy, and growth consulting. Available for speaking engagements and advisory roles.",
              "url": DATA.url,
              "image": `${DATA.url}/me.jpeg`,
              "telephone": "",
              "email": "durbanom@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Barcelona",
                "addressRegion": "Catalonia",
                "addressCountry": "ES"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 41.3851,
                "longitude": 2.1734
              },
              "areaServed": [
                {
                  "@type": "Country",
                  "name": "Spain"
                },
                {
                  "@type": "Continent",
                  "name": "Europe"
                }
              ],
              "priceRange": "$$$$",
              "serviceType": [
                "Fintech Consulting",
                "Digital Banking Strategy",
                "Growth Strategy Consulting",
                "Keynote Speaking",
                "Advisory Services"
              ],
              "knowsLanguage": ["Spanish", "English", "Catalan"]
            })
          }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          geist.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
