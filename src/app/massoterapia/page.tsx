"use client";

import CardHead from "../components/cards/CardHead";
import ima from "../../../public/image/3 copy.png";
import CardInfo from "../components/cards/CardInfo";
import { MassoterapiaFields } from "../fields/MassoterapiaFields";

function Massoterapia() {
  return (
    <main className="min-h-screen alinha pt-16">
      {/* Seção Cabeçalho */}
      <CardHead
        image={ima}
        testo="Saúde do corpo e da mente."
        descrição="Determinação e satisfação em oferecer o melhor para nossos pacientes."
        muda={"md:block"}
        tamanho={"md:w-[160%] lg:w-[67%] xl:w-[50%]"}
      />

      {/* Descrição sobre Massoterapia */}
      <section className="m-auto w-[98%] lg:w-[60%] p-1 py-8">
        <h2 className="text-[var(--corLetra2)] text-2xl md:text-3xl text-center respoFont">
          Afinal, o que é a Massoterapia?
        </h2>
        <p className="respoFont text-center md:text-[1.3rem] lg:text-[1rem]">
          A massoterapia é uma forma de terapia que envolve a aplicação de diferentes técnicas de massagem com o objetivo de promover o bem-estar físico e mental. Ela é utilizada para relaxamento, alívio de tensões musculares, redução do estresse, melhoria da circulação sanguínea e aumento da flexibilidade.
        </p>
      </section>

      {/* Modalidades de Massoterapia */}
      <section className="p-1 md:p-8 bg-[var(--fundoCard2)] w-[90%] lg:w-[80%] rounded-md shadow-md group cursor-pointer transition-all ease-in-out duration-700">
        <h2 className="text-[var(--corLetra2)] text-2xl md:text-3xl text-center respoFont">
          Modalidades
        </h2>

        {/* Texto explicativo com animação */}
        <p className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-[100px] group-hover:opacity-100 transition-all duration-700 ease-in-out w-[90%] md:text-[1.3rem] lg:text-[1rem] m-auto respoFont">
          Existem diversas abordagens e técnicas dentro da massoterapia, cada uma com suas características e objetivos específicos. Algumas das técnicas mais comuns incluem:
        </p>

        {/* Lista das modalidades */}
        <p className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-[1500px] group-hover:opacity-100 transition-all duration-700 ease-in-out w-[95%] md:text-[1.3rem] lg:text-[1rem] m-auto py-6 respoFont">
          <strong className="respoFont">Massagem Clássica ou Sueca:</strong> Uma das formas mais conhecidas de massoterapia, que utiliza movimentos como amassamento, deslizamento, fricção e percussão para relaxar os músculos e melhorar a circulação.<br />
          <strong className="respoFont">Massagem Terapêutica:</strong> Concentra-se em áreas específicas do corpo para tratar dores musculares, lesões e disfunções físicas. Pode envolver técnicas como liberação miofascial, alongamento e pressão profunda.<br />
          <strong className="respoFont">Massagem Desportiva:</strong> Projetada para atletas e pessoas envolvidas em atividades físicas intensas. Ajuda na prevenção e recuperação de lesões, melhorando o desempenho atlético.<br />
          <strong className="respoFont">Massagem Shiatsu:</strong> Originária do Japão, utiliza pressão dos dedos em pontos específicos do corpo para equilibrar o fluxo de energia (conhecido como qi ou chi).<br />
          <strong className="respoFont">Massagem Tailandesa:</strong> Realizada no chão, com o paciente vestido com roupas confortáveis. Envolve alongamentos passivos e pressões ao longo das linhas de energia do corpo.<br />
          <strong className="respoFont">Massagem de Pedras Quentes:</strong> Utiliza pedras aquecidas para massagear o corpo, combinando o calor terapêutico com a pressão das pedras.<br />
          <strong className="respoFont">Massagem Reflexológica:</strong> Baseia-se na ideia de que diferentes partes dos pés, mãos e orelhas estão conectadas a órgãos e sistemas do corpo. Estimular essas áreas pode promover o equilíbrio e a cura.<br />
          <strong className="respoFont">Massagem Ayurvédica:</strong> Originada da Índia, combina técnicas de massagem com os princípios da medicina ayurvédica, visando equilibrar os doshas (energias) do corpo.
        </p>

        {/* Aviso importante com animação */}
        <p className="py-6 w-[90%] md:text-[1.3rem] lg:text-[1rem] m-auto hidden group-hover:block group-hover:ease-in group-hover:duration-700 respoFont">
          É importante ressaltar que a massoterapia não é uma substituição para cuidados médicos. Se você tem condições médicas específicas ou está lidando com problemas de saúde, é sempre recomendado consultar um profissional de saúde antes de receber qualquer forma de massagem terapêutica. Além disso, ao escolher um massoterapeuta, certifique-se de que ele seja certificado e tenha treinamento adequado nas técnicas que utiliza.
        </p>
      </section>

      {/* Título para os tratamentos */}
      <h2 className="text-[var(--corLetra2)] text-2xl md:text-3xl text-center py-8">
        Tratamentos da Massoterapia
      </h2>
      <hr />

      {/* Mapeamento e exibição dos tratamentos */}
      {MassoterapiaFields.map((item, index) => (
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

export default Massoterapia;
