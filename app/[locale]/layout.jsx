// app/layout.jsx
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ErrorBoundary from "@/components/ErrorBoundary";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";

// Importer la metadata
import { metadata } from "../metadata";

// components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Pour charger la police JetBrains_Mono
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetBrainsMono",
});

export default async function Layout({ children, params }) {
  // Await the params object
  const { locale } = await params;

  // Vérifier si la locale est valide (tu pourrais également vérifier cela dans un routing comme tu l'as fait précédemment)
  if (!["en", "fr", "de"].includes(locale)) {
    notFound();
  }

  // Charger les messages en fonction de la locale
  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta
          property="og:image:width"
          content={metadata.openGraph.images[0].width}
        />
        <meta
          property="og:image:height"
          content={metadata.openGraph.images[0].height}
        />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta name="twitter:image" content={metadata.twitter.images[0]} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </head>
      <body
        className={`${jetBrainsMono.variable} antialiased flex flex-col min-h-screen bg-primary text-white`}
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          <ErrorBoundary>
            <main className="flex-grow">{children}</main>
          </ErrorBoundary>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
