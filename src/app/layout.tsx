import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Dried Flower Guide - ドライフラワー診断",
  description: "あなたにぴったりのドライフラワースタイルを診断。好みの雰囲気や飾りたい場所から、おすすめの花と香りをご提案します。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="min-h-screen font-sans antialiased">
        <Header />
        <main className="pb-24">{children}</main>
      </body>
    </html>
  );
}
