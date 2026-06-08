import type { Metadata } from "next";
import { AppShell } from "./components/layout/AppShell";
import "../styles/index.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dontsleepwiththefishes.net"),
  title: {
    default: "Don't Sleep With The Fishes Guide & Wiki",
    template: "%s",
  },
  description: "Complete v1.1.2 guide with endings, items, night event counters, rescue routes, Steam status, and survival tips.",
  openGraph: {
    title: "Don't Sleep With The Fishes Guide & Wiki",
    description: "Complete v1.1.2 guide with endings, items, night event counters, rescue routes, Steam status, and survival tips.",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Don't Sleep With The Fishes Guide & Wiki",
    description: "Complete v1.1.2 guide with endings, items, night event counters, rescue routes, Steam status, and survival tips.",
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
      </body>
    </html>
  );
}
