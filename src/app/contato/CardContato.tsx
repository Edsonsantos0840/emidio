import { SocialMediaFields } from "@/app/fields/SocialMediaFields";
import Link from "next/link";
import CardContactAdress from "../components/cards/adress/CardContactAdress";
import CardContactForm from "../components/cards/form/CardContactForm";
import CardMor from "../components/cards/CardMor";
import Image from "next/image";

interface PropsCardContato {
    texto?: string;
    descrição?: string;
    botao?: boolean;
  }

export default function CardContato({texto, descrição, botao}: PropsCardContato) {
  return (
    <main className="min-h-screen w-full  lg:alinha3 pt-12">
    <section
      className="relative w-full lg:h-screen grid grid-cols-1 lg:grid-cols-2 py-4"
      aria-labelledby="contact-card-title"
    >
      {/* Imagem de fundo fixa */}
      <Image
        src="/image/3 copy.png"
        alt="Imagem de fundo"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        quality={100}
        className="absolute object-cover"
      />

      {/* Degradê da direita para a esquerda */}
      <div className="absolute inset-0 bg-gradient-to-l from-corSombra via-[#124022] via-100% to-transparent"></div>

      {/* Conteúdo (textos e botões) alinhado à direita */}
      <div className="flex justify-center  items-center w-full p-4 ">
        <div className="relative z-10 text-principal drop-shadow-xl ">
          <h2
            id="contact-card-title"
            className="text-3xl md:text-[1.6rem] lg:text-3xl font-bold font-pacifico"
          >
            {texto}
          </h2>
          <p className=" text-base ">{descrição}</p>

          {/* Botões */}
          {!botao && (
            <div className="flex flex-col items-center  gap-6 ">
              <CardContactAdress />
              {/* Seção de Redes Sociais */}
              <ul className="flex justify-between gap-12 md:gap-16 ">
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
              </ul>
              <CardMor />
            </div>
          )}
        </div>

      </div>
        <CardContactForm />
    </section>
  </main>
  )
}
