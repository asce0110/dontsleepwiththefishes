"use client";

import { Header } from "./Header";
import { Footer } from "./Footer";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-bg-primary">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
