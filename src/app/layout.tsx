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
