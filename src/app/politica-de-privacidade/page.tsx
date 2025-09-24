import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Leia nossa política de privacidade para entender como lidamos com seus dados.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <main className="max-w-4xl mx-auto p-6 md:p-10">
        <h1 className="text-4xl font-bold mb-6">Política de Privacidade</h1>
        <div className="space-y-4 text-gray-300">
          <p>
            A sua privacidade é importante para nós. É política do nosso site
            respeitar a sua privacidade em relação a qualquer informação sua que
            possamos coletar.
          </p>
          <p>
            {/* AVISO IMPORTANTE: Este é um texto de exemplo*/}
            Este site pode utilizar cookies e/ou web beacons quando um usuário
            tem acesso às páginas. Os cookies que podem ser utilizados
            associam-se (se for o caso) unicamente com o navegador de um
            determinado computador.
          </p>
          <p>
            Nosso site pode ter ligações para sites externos que não são
            operados por nós. Esteja ciente de que não temos controle sobre o
            conteúdo e práticas desses sites e não podemos aceitar
            responsabilidade por suas respectivas políticas de privacidade.
          </p>
        </div>
      </main>
    </div>
  );
}
