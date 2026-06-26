import type { Metadata } from "next";
import Script from "next/script";
import { AppShell } from "./components/layout/AppShell";
import "../styles/index.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dontsleepwiththefishes.net"),
  title: {
    default: "Don't Sleep With The Fishes Guide & Wiki — Now on Steam",
    template: "%s",
  },
  description: "Complete survival guide for Don't Sleep With The Fishes. 35+ items, 12+ endings, night event counters, walkthrough. Updated for v1.1.2. Now available on Steam.",
  openGraph: {
    title: "Don't Sleep With The Fishes Guide & Wiki — Now on Steam",
    description: "Complete survival guide. 35+ items, 12+ endings, night event counters, walkthrough. Updated for v1.1.2. Now available on Steam.",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Don't Sleep With The Fishes Guide & Wiki — Now on Steam",
    description: "Complete survival guide updated for v1.1.2. Now on Steam.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-icon.svg" />
        <link rel="preconnect" href="https://fonts.loli.net" />
        <link rel="preconnect" href="https://gstatic.loli.net" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.loli.net/css2?family=Fredoka:wght@300..700&family=Nunito:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap"
        />
      </head>
      <body>
        <AppShell>{children}</AppShell>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-E1MF2C62X4" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-E1MF2C62X4');`}
        </Script>
      </body>
    </html>
  );
}
