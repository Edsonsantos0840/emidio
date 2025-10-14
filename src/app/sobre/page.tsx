"use client";

import CardHead from "../components/cards/CardHead";
import Image from "next/image";
import Link from "next/link";

function Sobre() {
  return (
    <main className="alinha py-12">
      <CardHead
        image="/image/17.png"
        testo="Saúde do corpo e da mente."
        descrição="Determinação e satisfação em oferecer o melhor para nossos pacientes."
        muda="md:block"
        tamanho="md:w-[160%] lg:w-[67%] "
      />

      <section
        className="grid grid-cols-1 lg:grid-cols-2 w-full gap-2 mt-10 ease-in duration-300"
        aria-label="Serviços oferecidos"
      >
        {/* Psicologia */}
        <article
          className="rounded-lg shadow-lg transform transition duration-500 ease-in-out  p-4 alinha6 hover:scale-105 hover:border-2 border-letra2 "
          aria-labelledby="titulo-psicologia"
        >
          <h2
            id="titulo-psicologia"
            className="text-3xl font-semibold mb-4 text-letra2 respoFont"
          >
            Psicologia
          </h2>

          <figure
            className="relative w-[200px] h-[200px] mb-4 m-auto"
            role="img"
            aria-label="Imagem ilustrativa de atendimento psicológico"
          >
            <Image
              src="/image/60.png"
              alt="Ilustração de atendimento psicológico com terapeuta"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              quality={100}
              className="rounded-lg"
            />
          </figure>

          <p className=" icoInput leading-relaxed text-center mb-4 md:text-[1.3rem] lg:text-[1rem] respoFont">
            Nossa psicóloga está aqui para oferecer orientação e apoio
            emocional. Trabalhamos com sessões individuais e terapias focadas em
            ajudar você a explorar seus pensamentos, sentimentos e
            comportamentos, promovendo o autoconhecimento e o crescimento
            pessoal.
          </p>

          <Link
            href="/contato"
            aria-label="Agendar horário com psicólogo"
            className="focus:outline-none focus:ring-2 focus:ring-letra2 focus:ring-offset-2
              bg-letra2 text-fundo hover:bg-fundo hover:text-letra2
              p-1 rounded-sm border-2 border-letra2 shadow-md w-[40vw] md:w-[40vw] lg:w-[18vw]
              text-[1rem] md:text-[1.3rem] lg:text-[1.1rem] text-center font-semibold hover:scale-105
              ease-in duration-300 respoFont"
          >
            Agende um Horário
          </Link>
        </article>

        {/* Massoterapia */}
        <article
          className="rounded-lg p-4 shadow-lg alinha6 transform transition duration-500 ease-in-out hover:scale-105 hover:border-2 border-letra2"
          aria-labelledby="titulo-massoterapia"
        >
          <h2
            id="titulo-massoterapia"
            className="text-3xl font-semibold mb-4 text-letra2 respoFont"
          >
            Massoterapia
          </h2>

          <figure
            className="relative w-[200px] h-[200px] mb-4 m-auto"
            role="img"
            aria-label="Imagem ilustrativa de massagem terapêutica"
          >
            <Image
              src="/image/61.png"
              alt="Ilustração de sessão de massagem terapêutica"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              quality={100}
              className="rounded-lg"
            />
          </figure>

          <p className="icoInput leading-relaxed text-center mb-4  md:text-[1.3rem] lg:text-[1rem] respoFont">
            Nosso terapeuta especializado está aqui para oferecer orientação e apoio oferece técnicas variadas para aliviar
            tensões musculares, melhorar a circulação e promover um relaxamento
            profundo. As sessões são personalizadas para atender às suas
            necessidades específicas.
          </p>

          <Link
            href="/contato"
            aria-label="Agendar horário com terapeuta"
            className="focus:outline-none focus:ring-2 focus:ring-letra2 focus:ring-offset-2
              bg-letra2 text-fundo hover:bg-fundo hover:text-letra2
              p-1 rounded-sm border-2 border-letra2 shadow-md w-[40vw] md:w-[26vw] lg:w-[18vw]
              text-[1rem] md:text-[1.3rem] lg:text-[1.1rem] text-center font-semibold hover:scale-105
              ease-in duration-300 respoFont"
          >
            Agende um Horário
          </Link>
        </article>
      </section>
    </main>
  );
}

export default Sobre;
