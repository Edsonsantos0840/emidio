"use client";
//Componentes.
import CardHead from "./components/cards/CardHead";
import ima from "../../public/image/4 copy.png";
import CardEspecifico from "./components/cards/CardEspecifico";

export default function Home() {
  return (
    <main className="alinha min-h-screen pt-16">
      <CardHead
        image={ima}
        testo="Saúde do corpo e da mente."
        descrição="Determinação e satisfação em oferecer o melhor para nossos paciêntes."
        muda="hidden"
        tamanho={"md:w-[76%] lg:w-[58%] xl:w-[50%]"}
      />
      {/* Página Principal */}
      <h3 className="md:hidden py-5 font-fontPrincipal text-[var(--corLetra)] text-2xl">
        Áreas que Trabalhamos.
      </h3>
      <h3 className="hidden md:block py-5 font-fontPrincipal text-[var(--corLetra)] text-2xl">
        ______________Áreas que Trabalhamos.______________
      </h3>
      <section className="md:alinha2 md:px-5 w-full ">
        <div className="md:flex w-full ">
          <CardEspecifico
            imagem="/image/fibromialgia.png"
            titulo="Dores no corpo. "
            artigo1="Limitações na funcionalidade."
            artigo2="Dificuldades no estudos."
            artigo3="Alterações emocionais."
            artigo4="Distúrbios do sono."
            artigo5="pior desempenho no trabalho."
            artigo6="Limitações funcionais."
            artigo7="Uso excessivo de medicamentos."
            artigo8="Impacto na saúde mental."
            artigo9="Comprometimento emocional e relacional."
            artigo10="Isolamento social."
            agenda="Agende um Horário"
          />
          <CardEspecifico
            imagem="/image/estresse e Ansiedade.png"
            titulo="Estresse e Ansiedade "
            artigo1="Doenças Cardiovasculares."
            artigo2="Distúrbios Digestivos."
            artigo3="Problemas Imunológicos."
            artigo4="Dores Musculares e Tensão."
            artigo5="Redução do Foco e Concentração."
            artigo6="Conflitos Relacionais."
            artigo7="Qualidade de Vida Geral."
            artigo8="Insônia e Distúrbios do Sono."
            artigo9="Diminuição do Bem-Estar Geral."
            artigo10="Uso Excessivo de Substâncias."
            agenda="Agende um Horário"
          />
        </div>
      </section>
      <section className="md:alinha2 md:px-5 w-full ">
        <div className="md:flex w-full ">
          <CardEspecifico
            imagem="/image/Recuperação de Lesões 2.png"
            titulo="Recuperação de Lesões"
            artigo1="Dor e desconforto."
            artigo2="Inflamação. "
            artigo3="Debilidade Muscular. "
            artigo4="Perda de Função. "
            artigo5="Limitações de Mobilidade. "
            artigo6="Autoestima reduzida. "
            artigo7="Cicatrizes e Aderências. "
            artigo8="Limitações funcionais. "
            artigo9="Cicatrizes e Aderências. "
            artigo10="Complicações a Longo Prazo. "
            agenda="Agende um Horário"
          />
          <CardEspecifico
            imagem="/image/depressão3.png"
            titulo="Depressão, Traumas e Transtornos "
            artigo1="Sofrimento emocional."
            artigo2="Isolamento social."
            artigo3="Dificuldades no trabalho e estudos. "
            artigo4="Prejuízos nas relações interpessoais. "
            artigo5="Problemas físicos. "
            artigo6="Autoestima reduzida. "
            artigo7="ArtigComportamentos de risco."
            artigo8="Limitações funcionais. "
            artigo9="Custo financeiro. "
            artigo10="Efeitos sobre a saúde física. "
            agenda="Agende um Horário"
          />
        </div>
      </section>
      <section className="md:alinha2 md:px-5 w-full ">
        <div className="md:flex w-full ">
          <CardEspecifico
            imagem="/image/Circulação Sanguínea.png"
            titulo="Problemas de circulação sanguínea "
            artigo1="Dor ou desconforto nas extremidades."
            artigo2="Pele pálida ou azulada. "
            artigo3="Inchaço. "
            artigo4="Formigamento ou dormência. "
            artigo5="Úlceras de pernas. "
            artigo6="Pernas cansadas ou pesadas. "
            artigo7="ArtigDiminuição da temperatura nas extremidades. "
            artigo8="Pulsação fraca. "
            artigo9="Dor no peito. "
            artigo10="Disfunção erétil. "
            agenda="Agende um Horário"
          />
          <CardEspecifico
            imagem="/image/Flexibilidade e Amplitude de Movimento.png"
            titulo="Reabilitação e recuperação dos movimentos"
            artigo1="Acidente Vascular Cerebral (AVC)."
            artigo2="Esclerose Múltipla (EM)."
            artigo3="Lesão Medular. "
            artigo4="Doença de Parkinson. "
            artigo5="Esclerose Lateral Amiotrófica (ELA). "
            artigo6="Paralisia Cerebral. "
            artigo7="Lesões Nervosas Periféricas. "
            artigo8="Miastenia Gravis. "
            artigo9="Distúrbios Musculares Hereditários. "
            artigo10="Doença de Lou Gehrig. "
            agenda="Agende um Horário"
          />
        </div>
      </section>
      <section className="md:alinha2 md:px-5 w-full ">
        <div className="md:flex w-full ">
          <CardEspecifico
            imagem="/image/desenvolvimento Pessoal.png"
            titulo="Crescimento pessoal"
            artigo1="Medo do Fracasso."
            artigo2="Falta de Autodisciplina. "
            artigo3="Falta de Recursos. "
            artigo4="Ambiente Social não adequado. "
            artigo5="Saúde Mental. "
            artigo6="Compromissos Externos. "
            artigo7="Expectativas Externas. "
            artigo8="Falta de Clareza. "
            artigo9="Zona de Conforto."
            artigo10="Crenças Limitantes. "
            agenda="Agende um Horário"
          />
          <div className=" p-4 md:p-8 bg-[var(--fundoCard2)] md:w-[50%] rounded-md shadow-md">
            <h2 className="titulo respoFont">
              Você sofre desses males? Podemos te ajudar.
            </h2>
            <p className="respoFont" >
              Tanto a massoterapia quanto a psicologia são recursos valiosos
              para cuidarmos de nós mesmos de maneira integral. Enquanto a
              massoterapia foca no relaxamento físico, a psicologia nos auxilia
              a compreender e lidar com as complexidades da mente. Ao explorar
              esses espaços, estamos investindo em nosso próprio bem-estar,
              buscando equilíbrio e qualidade de vida. Lembre-se de que cada
              indivíduo é único, então encontrar a combinação certa de práticas
              que funcionem para você é essencial. Obrigado por me ouvirem e
              lembrem-se de cuidar tanto do corpo quanto da mente!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
