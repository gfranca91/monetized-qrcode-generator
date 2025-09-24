import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Gerador de QR Code Grátis e Rápido | Crie QR Codes Online",
    template: "%s | Gerador de QR Code Rápido",
  },
  description:
    "Crie QR Codes de alta qualidade para URLs, textos, Wi-Fi e mais. Ferramenta online, gratuita, rápida e segura. Baixe seu QR Code em formato PNG com um clique.",
  keywords: [
    "gerador de qr code",
    "criar qr code",
    "qr code online",
    "qrcode gratis",
    "qr code png",
    "gerador qrcode",
  ],
  openGraph: {
    title: "Gerador de QR Code Grátis e Rápido",
    description:
      "Crie, personalize e baixe seus QR Codes instantaneamente. Ferramenta online e gratuita.",
    url: "https://seu-dominio.com", // TODO: Trocaremos pelo seu domínio real no futuro
    siteName: "Gerador de QR Code Rápido",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gerador de QR Code Grátis e Rápido",
    description:
      "A forma mais fácil de criar e baixar QR Codes para seus projetos, links e negócios.",
  },
  alternates: {
    canonical: "https://seu-dominio.com", // TODO: Trocaremos pelo seu domínio real
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    rating: "general",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
