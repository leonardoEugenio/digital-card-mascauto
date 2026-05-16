import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const renogare = localFont({
  src: "../public/fonts/Renogare-Regular.otf",
  variable: "--font-renogare",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MASC Autohaus",
  description: "Revenda de carros Precisão. Performance. Engenharia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${renogare.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
