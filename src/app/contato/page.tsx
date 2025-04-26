"use client";

import Image from "next/image";
import Link from "next/link";
import CardContactForm from "../components/cards/CardContactForm";
import { SocialMediaFields } from "../fields/SocialMediaFields";

export default function Contato() {
  return (
    <main className="min-h-screen w-full custom-gradient py-12 lg:alinha3">
      {/* Sessão Header & Logo */}
      <div className="mx-auto p-8 md:pt-14 flex flex-col items-center body">
        <Link href={"/"} passHref aria-label="Voltar para a página inicial">
          <Image
            src={"/image/3.png"}
            alt="Logo do Espaço Emídio & Sá"
            width={200}
            height={200}
            className="md:mb-4 md:w-[250px]"
          />
        </Link>
        <h1 className="text-3xl md:text-5xl font-bold mb-4 mt-[-60px]">
          Espaço <span className="text-[var(--corLetra2)]">Emídio & Sá</span>
        </h1>
        <div className="flex space-x-4 mb-8">
          {/* Links para redes sociais */}
          {SocialMediaFields.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              target="_blank"
              aria-label={`Ir para ${link.href}`} // Melhorar acessibilidade
            >
              {link.ico}
            </Link>
          ))}
        </div>
      </div>

      {/* Formulário de Contato */}
      <CardContactForm />
    </main>
  );
}
