"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import QRCode from "react-qr-code";

export default function Home() {
  const [text, setText] = useState("");
  const qrCodeRef = useRef<HTMLDivElement>(null);
  const handleDownload = () => {
    if (!qrCodeRef.current) {
      return;
    }

    const svgElement = qrCodeRef.current.querySelector("svg");
    if (!svgElement) {
      return;
    }

    const svgData = new XMLSerializer().serializeToString(svgElement);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (!ctx) {
      return;
    }

    const img = new Image();
    img.onload = () => {
      const padding = 20;

      canvas.width = img.width + padding * 2;
      canvas.height = img.height + padding * 2;

      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.drawImage(img, padding, padding);

      const pngFile = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.download = "qrcode.png";
      downloadLink.href = pngFile;
      downloadLink.click();
    };

    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white p-4">
      <div className="flex flex-col items-center justify-center w-full flex-1 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Gerador de QR Code
        </h1>

        <p className="mt-3 text-lg md:text-xl text-gray-300">
          Cole uma URL ou digite um texto para criar seu QR Code
          instantaneamente.
        </p>

        <div className="mt-8 w-full max-w-md">
          <label htmlFor="qr-input" className="block">
            <span className="sr-only">URL ou texto para o QR Code</span>
            <input
              id="qr-input"
              type="text"
              placeholder="https://google.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </label>
        </div>

        <div className="mt-6">
          <div
            ref={qrCodeRef}
            className="w-64 h-64 bg-white p-4 flex items-center justify-center rounded-lg"
          >
            {text ? (
              // Passo 2: Usamos o novo componente. Ele se ajusta automaticamente.
              <QRCode
                value={text}
                size={256}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                viewBox={`0 0 256 256`}
              />
            ) : (
              <span className="text-gray-500 text-center">
                Digite algo para gerar o QR Code
              </span>
            )}
          </div>
        </div>

        <button
          onClick={handleDownload}
          className="mt-6 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400"
          disabled={!text}
        >
          Download (PNG)
        </button>
      </div>
      <div className="w-full max-w-4xl mt-12 md:mt-16">
        <div
          aria-label="Espaço para anúncio"
          className="mx-auto w-[300px] h-[250px] md:w-[728px] md:h-[90px] bg-gray-800 border border-dashed border-gray-600 flex items-center justify-center"
        >
          <span className="text-gray-500 text-sm text-center">
            Espaço reservado para anúncio <br /> (Ex: 300x250 ou 728x90)
          </span>
        </div>
      </div>
      <section className="w-full max-w-4xl mt-16 md:mt-24 text-left px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Tudo Sobre QR Codes
        </h2>
        <div className="space-y-6 text-gray-300">
          <div>
            <h3 className="text-xl font-semibold text-white">
              O que é um QR Code?
            </h3>
            <p className="mt-2">
              Um QR Code (ou Código de Resposta Rápida) é um tipo de código de
              barras bidimensional que pode ser lido facilmente por smartphones.
              Ele armazena informações como links para sites, textos,
              informações de contato, senhas de Wi-Fi e muito mais.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">
              Como eu posso usar um QR Code?
            </h3>
            <p className="mt-2">
              As possibilidades são infinitas! Você pode usar QR Codes em
              cartões de visita para compartilhar seu contato, em embalagens de
              produtos para levar a um manual de instruções, em cardápios de
              restaurantes, em convites de casamento para confirmar presença, ou
              em campanhas de marketing para direcionar clientes a uma página de
              promoção.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">
              É seguro usar este gerador?
            </h3>
            <p className="mt-2">
              Sim. Nosso Gerador de QR Code funciona inteiramente no seu
              navegador. Nenhuma das informações que você digita é enviada ou
              armazenada em nossos servidores. Sua privacidade e segurança são
              nossa prioridade.
            </p>
          </div>
        </div>
      </section>
      <footer className="w-full max-w-4xl mt-12 md:mt-16 py-6 border-t border-gray-700">
        <div className="flex justify-center items-center gap-x-4 text-gray-400">
          <Link href="/sobre" className="hover:text-white transition-colors">
            Sobre
          </Link>

          <span>|</span>

          <Link
            href="/politica-de-privacidade"
            className="hover:text-white transition-colors"
          >
            Política de Privacidade
          </Link>
        </div>
      </footer>
    </main>
  );
}
