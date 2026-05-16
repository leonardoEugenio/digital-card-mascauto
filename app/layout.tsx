import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const renogare = localFont({
  src: "../public/fonts/Renogare-Regular.otf",
  variable: "--font-renogare",
  display: "swap",
});

const title = "MASC Autohaus | Compra e venda de automóveis no Brasil";
const description =
  "MASC Autohaus: automóveis novos e seminovos selecionados, com curadoria, procedência e atendimento personalizado para compra e venda em todo o Brasil.";
const shareImage = "/images/logos/logo_MASC_iconebranco_fundoazul.png";

export const metadata: Metadata = {
  metadataBase: new URL("https://mascautohaus.com.br"),
  title,
  description,
  applicationName: "MASC Autohaus",
  authors: [{ name: "MASC Autohaus" }],
  creator: "MASC Autohaus",
  publisher: "MASC Autohaus",
  keywords: [
    "MASC Autohaus",
    "compra e venda de automóveis",
    "automóveis novos",
    "automóveis seminovos",
    "revenda de carros",
    "veículos selecionados",
    "curadoria automotiva",
    "procedência veicular",
    "atendimento personalizado",
    "Brasil",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "MASC Autohaus",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: shareImage,
        width: 596,
        height: 596,
        alt: "Logo MASC Autohaus",
      },
    ],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: [
      {
        url: shareImage,
        alt: "Logo MASC Autohaus",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
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
