"use client";

// Componentes
import CardHead from "./components/cards/CardHead";
import FlipCardEmidio from "./components/cards/flipCard/FlipCardEmidio";
import { CardsFields } from "./fields/CardsFields";

export default function Home() {
  return (
    <main className="alinha  pt-12">
      <CardHead
        image="/image/4 copy.png"
        testo="Saúde do corpo e da mente."
        descrição="Determinação e satisfação em oferecer o melhor para nossos pacientes."
        muda="hidden"
        tamanho="md:w-[100%] lg:w-[65%] xl:w-[55%]"
      />

      <header className="text-center md:mt-6">
        <h3 className="py-5 font-fontPrincipal text-corLetra text-3xl md:text-2xl">
          <span className="md:hidden">Áreas que Trabalhamos.</span>
          <span className="hidden md:block">
            ______________Áreas que Trabalhamos.______________
          </span>
        </h3>
      </header>

      <section
        aria-label="Lista de especialidades e tratamentos oferecidos"
        className="w-full md:alinha2 md:px-5 transition-all ease-in duration-700"
      >
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 transition-all ease-in duration-700">
          {
          CardsFields &&
            CardsFields.map((item, i) => (
            <FlipCardEmidio key={i} image={item.image} title={item.title} articles={item.articles} agenda={item.agenda}/>
            ))}
            {/* Card Fixo Final */}
            <div
            className="p-2 md:hidden lg:block lg:p-4 bg-fundoCard lg:col-span-2  rounded-md shadow-md transition-all duration-700 ease-in"
            aria-label="Mensagem de encerramento sobre autocuidado"
          >
            <article className=" lg:px-4">
              <h2 className=" text-corLetra lg:text-letra2 text-[1.6rem] text-center respoFont lg:mt-10">
                Você sofre desses males? Podemos te ajudar.
              </h2>
              <p className="respoFont lg:text-[1.1rem] mt-10 lg:w-full m-auto text-justify">
                Tanto a massoterapia quanto a psicologia são recursos valiosos
                para cuidarmos de nós mesmos de maneira integral. Enquanto a
                massoterapia foca no relaxamento físico, a psicologia nos
                auxilia a compreender e lidar com as complexidades da mente. Ao
                explorar esses espaços, estamos investindo em nosso próprio
                bem-estar, buscando equilíbrio e qualidade de vida. Lembre-se de
                que cada indivíduo é único, então encontrar a combinação certa
                de práticas que funcionem para você é essencial. Obrigado por me
                ouvirem e lembrem-se de cuidar tanto do corpo quanto da mente!
              </p>
            </article>
          </div>
        </ul>
      </section>
    </main>
  );
}
