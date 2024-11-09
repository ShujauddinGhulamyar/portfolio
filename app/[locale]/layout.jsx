import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ErrorBoundary from "@/components/ErrorBoundary";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { metadata } from "../metadata";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { routing } from "@/i18n/routing";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetBrainsMono",
});

export default async function Layout({ children, params }) {
  const { locale } = await params;
  console.log(locale);
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Charger les messages en fonction de la locale
  const messages = await getMessages(locale);

  return (
    <NextIntlClientProvider messages={messages}>
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
          <meta
            property="og:image"
            content={metadata.openGraph.images[0].url}
          />
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
          <Header />
          <ErrorBoundary>
            <main className="flex-grow">{children}</main>
          </ErrorBoundary>
          <Footer />
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
