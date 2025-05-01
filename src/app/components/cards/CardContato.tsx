import { SocialMediaFields } from "@/app/fields/SocialMediaFields";
import Link from "next/link";
import CardContactAdress from "./CardContactAdress";
import CardContactForm from "./CardContactForm";
import CardMor from "./CardMor";
import Image from "next/image";

interface PropsCardContato {
    texto?: string;
    descrição?: string;
    botao?: boolean;
  }

export default function CardContato({texto, descrição, botao}: PropsCardContato) {
  return (
    <main className="min-h-screen w-full  lg:alinha3">
    <section
      className="relative w-full md:h-[50vh] lg:h-[100vh] flex items-center lg:justify-end overflow-hidden"
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
      <div className="md:flex justify-center items-center w-full mt-14 md:mt-6 ">
        <div className="relative z-10 text-principal drop-shadow-xl text-justify px-6 lg:px-12 w-full lg:max-w-[50%] mt-3">
          <h2
            id="contact-card-title"
            className="text-3xl md:text-[1.6rem] lg:text-3xl font-bold font-pacifico"
          >
            {texto}
          </h2>
          <p className="hidden lg:block text-base mt-4">{descrição}</p>

          {/* Botões */}
          {!botao && (
            <div className="flex flex-col justify-start gap-6 mt-6 lg:mt-3">
              <CardContactAdress />
              {/* Seção de Redes Sociais */}
              <div className="flex space-x-8 mb-4">
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
              <CardMor />
            </div>
          )}
        </div>

        <CardContactForm />
      </div>
    </section>
  </main>
  )
}
