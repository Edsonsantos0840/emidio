import CardHead from "../components/cards/CardHead";
import ima from "../../../public/image/14 copy.png";
import CardInfo from "../components/cards/CardInfo";
import { PiscologiaFields } from "../fields/PiscologiaFields";

function Piscologia() {
  return (
    <main className="alinha min-h-screen pt-16">
      <CardHead
        image={ima}
        testo="Saúde do corpo e da mente."
        descrição="Determinação e satisfação em oferecer o melhor para nossos paciêntes."
        muda={"md:block"}
        tamanho={"md:w-[160%] lg:w-[67%] xl:w-[50%]"}
      />
      <section className="m-auto w-[99%] lg:w-[90%] p-1 py-8">
        <h2 className="text-[var(--corLetra2)] text-2xl md:text-3xl  text-center respoFont">
          O que é Psicologia?
        </h2>
        <p className="respoFont text-center md:text-[1.3rem] lg:text-[1rem]">
          A psicologia é a ciência que estuda o comportamento humano e os
          processos mentais. Ela busca compreender como as pessoas pensam,
          sentem e se comportam, bem como as interações entre os aspectos
          biológicos, emocionais, cognitivos e sociais que influenciam o
          funcionamento mental e comportamental. A psicologia abrange uma ampla
          gama de áreas de pesquisa e aplicação, incluindo psicologia clínica,
          psicologia educacional, psicologia organizacional, psicologia do
          desenvolvimento, psicologia social, entre outras. Ela utiliza métodos
          científicos para investigar questões relacionadas à mente, ao cérebro,
          ao comportamento individual e coletivo, e busca contribuir para o
          entendimento e a melhoria da qualidade de vida das pessoas.
        </p>
      </section>
      <h2 className="text-[var(--corLetra2)] text-3xl  text-center  ease-in duration-700 respoFont">
        Tratamentos da Psicologia
      </h2>
      <hr />

      {PiscologiaFields.map((item, index) => (
        <CardInfo
          key={index}
          imagem={item.imagem}
          titulo={item.titulo}
          texto={item.texto}
          artigos={item.artigos}
        />
      ))}
    </main>
  );
}

export default Piscologia;
