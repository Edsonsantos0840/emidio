"use client";

// Componentes
import CardHead from "./components/cards/CardHead";
import CardEspecifico from "./components/cards/CardEspecifico";
import { EspecificoFields } from "./fields/EspecificoFields";

export default function Home() {
  return (
    <main className="alinha  pt-16">
      <CardHead
        image="/image/4 copy.png"
        testo="Saúde do corpo e da mente."
        descrição="Determinação e satisfação em oferecer o melhor para nossos pacientes."
        muda="hidden"
        tamanho="md:w-[100%] lg:w-[58%] xl:w-[50%]"
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
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 transition-all ease-in duration-700">
          {EspecificoFields.map((item, i) => (
            <li
              key={item.artigos[i]}
              className="transition-all ease-in-out duration-700"
            >
              <CardEspecifico
                imagem={item.imagem}
                titulo={item.titulo}
                artigos={item.artigos.filter(Boolean)}
                agenda={item.agenda}
              />
            </li>
          ))}

          {/* Card Fixo Final */}
          <li
            className="p-4 bg-fundoCard md:hidden lg:block rounded-md shadow-md transition-all duration-700 ease-in"
            aria-label="Mensagem de encerramento sobre autocuidado"
          >
            <article>
              <h2 className=" text-corLetra lg:text-letra2 text-[1.6rem] lg:text-[1.5rem] text-center respoFont lg:mt-10">
                Você sofre desses males? Podemos te ajudar.
              </h2>
              <p className="respoFont lg:text-[1rem] mt-10 lg:w-[80%] m-auto text-center">
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
          </li>
        </ul>
      </section>
    </main>
  );
}
