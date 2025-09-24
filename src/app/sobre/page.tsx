import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nós",
  description: "Saiba mais sobre nosso projeto de Gerador de QR Code.",
};

export default function AboutPage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <main className="max-w-4xl mx-auto p-6 md:p-10">
        <h1 className="text-4xl font-bold mb-6">Sobre o Projeto</h1>
        <div className="space-y-4 text-gray-300">
          <p>Bem-vindo ao nosso Gerador de QR Code!</p>
          <p>
            Este projeto foi criado como parte de um portfólio de
            desenvolvimento web, utilizando as tecnologias mais modernas como
            Next.js, React, TypeScript e Tailwind CSS.
          </p>
          <p>
            Nosso objetivo é fornecer uma ferramenta simples, rápida e gratuita
            para qualquer pessoa que precise criar QR Codes de alta qualidade
            para uso pessoal ou profissional.
          </p>
        </div>
      </main>
    </div>
  );
}
