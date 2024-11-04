import CardHead from "../components/cards/CardHead";
import ima from "../../../public/image/3 copy.png";
import CardInfo from "../components/cards/CardInfo";
import CardInfo2 from "../components/cards/CardInfo2";

function Massoterapia() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-16 ">
      <CardHead
        image={ima}
        testo="Saúde do corpo e da mente."
        descrição="Determinação e satisfação em oferecer o melhor para nossos paciêntes."
        muda={"md:block"}
        tamanho={"md:w-[160%] lg:w-[67%] xl:w-[50%]"}
      />
      <section className="m-auto w-[90%] md:w-[60%] p-1 py-8 ">
        <h2 className="text-[var(--corLetra2)] text-2xl text-center respoFont ">
          Afinal, o que é a Massoterapia?
        </h2>
        <p className="respoFont">
          A massoterapia é uma forma de terapia que envolve a aplicação de
          diferentes técnicas de massagem com o objetivo de promover o bem-estar
          físico e mental. Ela é utilizada para relaxamento, alívio de tensões
          musculares, redução do estresse, melhoria da circulação sanguínea e
          aumento da flexibilidade.
        </p>
      </section>
      <section className="p-1 md:p-8 bg-[var(--fundoCard2)] w-[90%] md:w-[80%] rounded-md shadow-md  group cursor-pointer">
        <h2 className="text-[var(--corLetra2)] text-2xl text-center respoFont ">
          Modalidades
        </h2>
        <p className="hidden group-hover:block group-hover:ease-in group-hover:duration-700 w-[90%] md:w-[60%] m-auto respoFont">
          Existem diversas abordagens e técnicas dentro da massoterapia, cada
          uma com suas características e objetivos específicos. Algumas das
          técnicas mais comuns incluem :
        </p>
        <p className="hidden group-hover:block group-hover:ease-in group-hover:duration-700 w-[95%] m-auto py-6 respoFont ">
          <strong className="respoFont">Massagem Clássica ou Sueca:</strong> Uma das formas mais
          conhecidas de massoterapia, que utiliza movimentos como amassamento,
          deslizamento, fricção e percussão para relaxar os músculos e melhorar
          a circulação. <br />
          <strong className="respoFont">Massagem Terapêutica:</strong> Concentra-se em áreas
          específicas do corpo para tratar dores musculares, lesões e disfunções
          físicas. Pode envolver técnicas como liberação miofascial, alongamento
          e pressão profunda. <br />
          <strong className="respoFont">Massagem Desportiva:</strong> Projetada para atletas e pessoas
          envolvidas em atividades físicas intensas. Ajuda na prevenção e
          recuperação de lesões, melhorando o desempenho atlético. <br />
          <strong className="respoFont">Massagem Shiatsu:</strong> Originária do Japão, utiliza
          pressão dos dedos em pontos específicos do corpo para equilibrar o
          fluxo de energia (conhecido como qi ou chi). <br />
          <strong className="respoFont">Massagem Tailandesa:</strong> Realizada no chão, com o
          paciente vestido com roupas confortáveis. Envolve alongamentos
          passivos e pressões ao longo das linhas de energia do corpo. <br />
          <strong className="respoFont">Massagem de Pedras Quentes:</strong> Utiliza pedras aquecidas
          para massagear o corpo, combinando o calor terapêutico com a pressão
          das pedras. <br />
          <strong className="respoFont">Massagem Reflexológica:</strong> Baseia-se na ideia de que
          diferentes partes dos pés, mãos e orelhas estão conectadas a órgãos e
          sistemas do corpo. Estimular essas áreas pode promover o equilíbrio e
          a cura. <br />
          <strong className="respoFont">Massagem Ayurvédica:</strong> Originada da Índia, combina
          técnicas de massagem com os princípios da medicina ayurvédica, visando
          equilibrar os doshas (energias) do corpo.
        </p>

        <p className="py-6 w-[90%] md:w-[60%] m-auto hidden group-hover:block group-hover:ease-in group-hover:duration-700 respoFont">
          É importante ressaltar que a massoterapia não é uma substituição para
          cuidados médicos. Se você tem condições médicas específicas ou está
          lidando com problemas de saúde, é sempre recomendado consultar um
          profissional de saúde antes de receber qualquer forma de massagem
          terapêutica. Além disso, ao escolher um massoterapeuta, certifique-se
          de que ele seja certificado e tenha treinamento adequado nas técnicas
          que utiliza.
        </p>
      </section>
      <h2 className="text-[var(--corLetra2)] text-2xl text-center py-8">
        Tratamentos da Massoterapia
      </h2>
      <hr />
      <CardInfo
        imagem="/image/Circulação Sanguínea.png"
        titulo="Circulação Sanguínea"
        texto="Os problemas de circulação sanguínea podem ter uma variedade de sintomas, que variam de leves a graves. Esses sintomas podem ser indicativos de condições médicas subjacentes que afetam a circulação. É importante ressaltar que qualquer pessoa que suspeite ter um problema de circulação deve procurar orientação médica para um diagnóstico adequado e tratamento. Alguns sintomas comuns de problemas de circulação sanguínea incluem:"
        artigo1="Dor, sensação de queimação, cãibras ou dormência nas pernas, pés, braços ou mãos."
        artigo2="A pele nas áreas afetadas pode ficar mais pálida ou até mesmo adquirir uma coloração azulada devido à diminuição do fluxo sanguíneo."
        artigo3="Edema nas extremidades, especialmente nos tornozelos, pode ser um sinal de má circulação."
        artigo4="Sensações de formigamento, dormência ou alfinetadas nas extremidades podem indicar problemas circulatórios."
        artigo5="Úlceras que não cicatrizam facilmente nas pernas ou pés podem ser causadas por uma circulação deficiente."
        artigo6="Sensação de pernas cansadas, pesadas ou doloridas, especialmente após ficar em pé por longos períodos."
        artigo7="As mãos e os pés podem ficar frios ao toque devido ao fluxo sanguíneo reduzido."
        artigo8="A redução da pulsação nas extremidades pode ser um sinal de fluxo sanguíneo comprometido."
        artigo9="Nos homens, a má circulação sanguínea pode afetar a função erétil."
      />
      <CardInfo2
        imagem="/image/Recuperação de Lesões.png"
        titulo="Recuperação de Lesões"
        texto="Os problemas de circulação sanguínea podem ter uma variedade de sintomas, que variam de leves a graves. Esses sintomas podem ser indicativos de condições médicas subjacentes que afetam a circulação. É importante ressaltar que qualquer pessoa que suspeite ter um problema de circulação deve procurar orientação médica para um diagnóstico adequado e tratamento. Alguns sintomas comuns de problemas de circulação sanguínea incluem:"
        artigo1="Dor, sensação de queimação, cãibras ou dormência nas pernas, pés, braços ou mãos."
        artigo2="A pele nas áreas afetadas pode ficar mais pálida ou até mesmo adquirir uma coloração azulada devido à diminuição do fluxo sanguíneo."
        artigo3="Edema nas extremidades, especialmente nos tornozelos, pode ser um sinal de má circulação."
        artigo4="Sensações de formigamento, dormência ou alfinetadas nas extremidades podem indicar problemas circulatórios."
        artigo5="Úlceras que não cicatrizam facilmente nas pernas ou pés podem ser causadas por uma circulação deficiente."
        artigo6="Sensação de pernas cansadas, pesadas ou doloridas, especialmente após ficar em pé por longos períodos."
        artigo7="As mãos e os pés podem ficar frios ao toque devido ao fluxo sanguíneo reduzido."
        artigo8="A redução da pulsação nas extremidades pode ser um sinal de fluxo sanguíneo comprometido."
        artigo9="Nos homens, a má circulação sanguínea pode afetar a função erétil."
      />
      <CardInfo
        imagem="/image/Recuperação de Lesões 2.png"
        titulo="Recuperação de Lesões"
        texto="Os problemas de circulação sanguínea podem ter uma variedade de sintomas, que variam de leves a graves. Esses sintomas podem ser indicativos de condições médicas subjacentes que afetam a circulação. É importante ressaltar que qualquer pessoa que suspeite ter um problema de circulação deve procurar orientação médica para um diagnóstico adequado e tratamento. Alguns sintomas comuns de problemas de circulação sanguínea incluem:"
        artigo1="Dor, sensação de queimação, cãibras ou dormência nas pernas, pés, braços ou mãos."
        artigo2="A pele nas áreas afetadas pode ficar mais pálida ou até mesmo adquirir uma coloração azulada devido à diminuição do fluxo sanguíneo."
        artigo3="Edema nas extremidades, especialmente nos tornozelos, pode ser um sinal de má circulação."
        artigo4="Sensações de formigamento, dormência ou alfinetadas nas extremidades podem indicar problemas circulatórios."
        artigo5="Úlceras que não cicatrizam facilmente nas pernas ou pés podem ser causadas por uma circulação deficiente."
        artigo6="Sensação de pernas cansadas, pesadas ou doloridas, especialmente após ficar em pé por longos períodos."
        artigo7="As mãos e os pés podem ficar frios ao toque devido ao fluxo sanguíneo reduzido."
        artigo8="A redução da pulsação nas extremidades pode ser um sinal de fluxo sanguíneo comprometido."
        artigo9="Nos homens, a má circulação sanguínea pode afetar a função erétil."
      />
      <CardInfo2
        imagem="/image/Flexibilidade e Amplitude de Movimento.png"
        titulo="Flexibilidade e Amplitude de Movimento"
        texto="Os problemas de circulação sanguínea podem ter uma variedade de sintomas, que variam de leves a graves. Esses sintomas podem ser indicativos de condições médicas subjacentes que afetam a circulação. É importante ressaltar que qualquer pessoa que suspeite ter um problema de circulação deve procurar orientação médica para um diagnóstico adequado e tratamento. Alguns sintomas comuns de problemas de circulação sanguínea incluem:"
        artigo1="Dor, sensação de queimação, cãibras ou dormência nas pernas, pés, braços ou mãos."
        artigo2="A pele nas áreas afetadas pode ficar mais pálida ou até mesmo adquirir uma coloração azulada devido à diminuição do fluxo sanguíneo."
        artigo3="Edema nas extremidades, especialmente nos tornozelos, pode ser um sinal de má circulação."
        artigo4="Sensações de formigamento, dormência ou alfinetadas nas extremidades podem indicar problemas circulatórios."
        artigo5="Úlceras que não cicatrizam facilmente nas pernas ou pés podem ser causadas por uma circulação deficiente."
        artigo6="Sensação de pernas cansadas, pesadas ou doloridas, especialmente após ficar em pé por longos períodos."
        artigo7="As mãos e os pés podem ficar frios ao toque devido ao fluxo sanguíneo reduzido."
        artigo8="A redução da pulsação nas extremidades pode ser um sinal de fluxo sanguíneo comprometido."
        artigo9="Nos homens, a má circulação sanguínea pode afetar a função erétil."
      />
      <CardInfo
        imagem="/image/sindrome do Túnel do Carpo.png"
        titulo="Síndrome do Túnel do Carpo"
        texto="Os problemas de circulação sanguínea podem ter uma variedade de sintomas, que variam de leves a graves. Esses sintomas podem ser indicativos de condições médicas subjacentes que afetam a circulação. É importante ressaltar que qualquer pessoa que suspeite ter um problema de circulação deve procurar orientação médica para um diagnóstico adequado e tratamento. Alguns sintomas comuns de problemas de circulação sanguínea incluem:"
        artigo1="Dor, sensação de queimação, cãibras ou dormência nas pernas, pés, braços ou mãos."
        artigo2="A pele nas áreas afetadas pode ficar mais pálida ou até mesmo adquirir uma coloração azulada devido à diminuição do fluxo sanguíneo."
        artigo3="Edema nas extremidades, especialmente nos tornozelos, pode ser um sinal de má circulação."
        artigo4="Sensações de formigamento, dormência ou alfinetadas nas extremidades podem indicar problemas circulatórios."
        artigo5="Úlceras que não cicatrizam facilmente nas pernas ou pés podem ser causadas por uma circulação deficiente."
        artigo6="Sensação de pernas cansadas, pesadas ou doloridas, especialmente após ficar em pé por longos períodos."
        artigo7="As mãos e os pés podem ficar frios ao toque devido ao fluxo sanguíneo reduzido."
        artigo8="A redução da pulsação nas extremidades pode ser um sinal de fluxo sanguíneo comprometido."
        artigo9="Nos homens, a má circulação sanguínea pode afetar a função erétil."
      />
      <CardInfo2
        imagem="/image/dor Muscular e Tensão.png"
        titulo="Dor Muscular e Tensão"
        texto="Dor muscular e tensão são duas condições frequentemente relacionadas ao sistema musculoesquelético. Vou explicar cada uma delas:"
        artigo1="Dor, sensação de queimação, cãibras ou dormência nas pernas, pés, braços ou mãos."
        artigo2="A pele nas áreas afetadas pode ficar mais pálida ou até mesmo adquirir uma coloração azulada devido à diminuição do fluxo sanguíneo."
        artigo3="Edema nas extremidades, especialmente nos tornozelos, pode ser um sinal de má circulação."
        artigo4="Sensações de formigamento, dormência ou alfinetadas nas extremidades podem indicar problemas circulatórios."
        artigo5="Úlceras que não cicatrizam facilmente nas pernas ou pés podem ser causadas por uma circulação deficiente."
        artigo6="Sensação de pernas cansadas, pesadas ou doloridas, especialmente após ficar em pé por longos períodos."
        artigo7="As mãos e os pés podem ficar frios ao toque devido ao fluxo sanguíneo reduzido."
        artigo8="A redução da pulsação nas extremidades pode ser um sinal de fluxo sanguíneo comprometido."
        artigo9="Nos homens, a má circulação sanguínea pode afetar a função erétil."
      />
      <CardInfo
        imagem="/image/dor Crônica.png"
        titulo="Dor Crônica"
        texto="Dor crônica é um tipo de dor que persiste por um período prolongado, geralmente por mais de três meses, ou mesmo além do tempo de cicatrização esperado para uma lesão ou condição. Ela pode afetar várias áreas do corpo e pode ser causada por uma variedade de fatores. A dor crônica é mais do que apenas uma resposta ao dano físico; muitas vezes, está relacionada a alterações complexas nos sistemas nervoso e musculoesquelético.Alguns exemplos de condições que podem resultar em dor crônica incluem:"
        artigo1="Dor nas Costas Crônica: Pode ser causada por problemas como hérnia de disco, osteoartrite, espondilite anquilosante ou lesões antigas."
        artigo2="Enxaqueca ou Dor de Cabeça Crônica: Pessoas que sofrem de enxaquecas frequentes podem experimentar dor crônica."
        artigo3="Síndrome da Dor Regional Complexa (SDRC): Também conhecida como distrofia simpática reflexa, é uma condição que causa dor intensa e mudanças na pele"
        artigo4="Artrite Reumatoide: Uma doença autoimune que causa inflamação nas articulações e pode levar à dor crônica"
        artigo5="Neuropatia Diabética: Danos aos nervos causados pelo diabetes podem resultar em dor crônica, formigamento e dormência."
        artigo6="Dor Crônica Pós-Cirúrgica: Algumas cirurgias podem levar à dor persistente após o procedimento."
        artigo7="Síndrome do Intestino Irritável (SII): Pode causar dor abdominal crônica, inchaço e alterações nos hábitos intestinais."
        artigo8="A abordagem para o tratamento da dor crônica geralmente é multifacetada e pode envolver uma combinação de métodos, dependendo da causa subjacente da dor."
      />
      <CardInfo2
        imagem="/image/prblemas de sono.png"
        titulo="Problemas de Sono"
        texto="Os problemas de sono, também conhecidos como distúrbios do sono, são condições que afetam a qualidade e/ou quantidade do sono de uma pessoa. Existem vários tipos de distúrbios do sono que podem afetar diferentes aspectos do sono, resultando em dificuldades para adormecer, permanecer dormindo ou obter um sono reparador. Alguns dos problemas de sono mais comuns incluem:"
        artigo1="Insônia: É caracterizada pela dificuldade em adormecer ou permanecer dormindo, levando a um sono inadequado e não reparador. Pode ser causada por fatores como estresse, ansiedade, depressão, uso excessivo de dispositivos eletrônicos antes de dormir ou má higiene do sono."
        artigo2="Apneia do sono: A apneia do sono é um distúrbio em que a pessoa para de respirar temporariamente durante o sono, muitas vezes devido ao colapso das vias respiratórias. Isso pode resultar em despertares frequentes e interrupções no padrão de sono, levando a sonolência diurna, falta de energia e problemas de saúde a longo prazo."
        artigo3="Síndrome das pernas inquietas: Caracteriza-se por uma sensação desconfortável nas pernas, muitas vezes acompanhada de um impulso irresistível de movê-las. Isso pode interferir no sono, pois as pessoas afetadas frequentemente sentem a necessidade de se mover, o que pode dificultar o adormecimento."
        artigo4="Distúrbios do ritmo circadiano: O ritmo circadiano é o relógio biológico interno que regula o ciclo de sono-vigília. Distúrbios como o jet lag (resultante de viagens atravessando fusos horários) e o transtorno do ritmo circadiano são exemplos de problemas que podem afetar esse ritmo, levando a dificuldades para dormir nos horários convencionais."
        artigo5={""}
      />
      <CardInfo
        imagem="/image/prblemas de sono2.png"
        titulo="Problemas de Sono"
        texto="Se você está enfrentando problemas de sono persistentes, é recomendado procurar um médico ou especialista em sono. Um diagnóstico adequado pode ajudar a identificar a causa subjacente do seu problema de sono e permitir o desenvolvimento de um plano de tratamento adequado. Em muitos casos, pequenas mudanças nos hábitos de sono e no estilo de vida podem fazer uma grande diferença na qualidade do sono."
        artigo1="Narcolepsia: É um distúrbio do sono caracterizado por sonolência excessiva durante o dia, ataques de sono repentinos e perda de controle muscular (cataplexia) em resposta a emoções intensas. Pode interferir significativamente na vida diária e nas atividades normais."
        artigo2="Parassonias: São comportamentos anormais durante o sono, como sonambulismo, terrores noturnos, pesadelos frequentes e até mesmo comportamentos violentos durante o sono."
        artigo3="Distúrbios do sono relacionados ao trabalho por turnos: Pessoas que trabalham em turnos alternados, noturnos ou irregulares muitas vezes enfrentam problemas de sono devido às mudanças no ritmo circadiano."
        artigo4="Distúrbios do sono relacionados ao envelhecimento: À medida que envelhecemos, os padrões de sono podem mudar, com tendência a acordar mais cedo e ter dificuldade em adormecer."
        artigo5="Distúrbios do sono relacionados ao envelhecimento: À medida que envelhecemos, os padrões de sono podem mudar, com tendência a acordar mais cedo e ter dificuldade em adormecer."
      />
      <CardInfo2
        imagem="/image/problemas de Postura.png"
        titulo="Problemas de Postura"
        texto="Problemas de postura, também conhecidos como alterações posturais, referem-se às posições inadequadas ou anormais nas quais uma pessoa mantém o seu corpo enquanto está sentada, em pé ou realizando várias atividades. Esses problemas podem ter várias causas, desde fatores genéticos e hábitos diários até condições médicas subjacentes. Alguns dos problemas de postura mais comuns incluem:"
        artigo1="Dor, sensação de queimação, cãibras ou dormência nas pernas, pés, braços ou mãos."
        artigo2="A pele nas áreas afetadas pode ficar mais pálida ou até mesmo adquirir uma coloração azulada devido à diminuição do fluxo sanguíneo."
        artigo3="Edema nas extremidades, especialmente nos tornozelos, pode ser um sinal de má circulação."
        artigo4="Sensações de formigamento, dormência ou alfinetadas nas extremidades podem indicar problemas circulatórios."
        artigo5="Úlceras que não cicatrizam facilmente nas pernas ou pés podem ser causadas por uma circulação deficiente."
        artigo6="Sensação de pernas cansadas, pesadas ou doloridas, especialmente após ficar em pé por longos períodos."
        artigo7="As mãos e os pés podem ficar frios ao toque devido ao fluxo sanguíneo reduzido."
        artigo8="A redução da pulsação nas extremidades pode ser um sinal de fluxo sanguíneo comprometido."
        artigo9="Nos homens, a má circulação sanguínea pode afetar a função erétil."
      />
      <CardInfo
        imagem="/image/fibromialgia.png"
        titulo="Fibromialgia"
        texto="A fibromialgia é um distúrbio crônico caracterizado por dor musculoesquelética generalizada, fadiga, distúrbios do sono e pontos sensíveis. É considerada uma condição complexa que afeta a forma como o cérebro processa os sinais de dor. Embora a fibromialgia se manifeste principalmente como dor e desconforto nos músculos, ligamentos e tendões, ela também pode levar a uma variedade de outros sintomas e desafios. Principais características da fibromialgia incluem:"
        artigo1="O sintoma principal da fibromialgia é a dor generalizada que persiste por pelo menos três meses. A dor costuma ser descrita como uma sensação constante de dor leve e pode ser sentida em ambos os lados do corpo, acima e abaixo da cintura."
        artigo2="Pessoas com fibromialgia frequentemente experimentam pontos sensíveis, áreas específicas no corpo que são sensíveis ao toque. A pressão sobre esses pontos pode causar dor."
        artigo3="A fadiga crônica é comum na fibromialgia. Apesar de dormir o suficiente, indivíduos com fibromialgia muitas vezes acordam se sentindo cansados e sem se sentirem revigorados.
Problemas de sono são frequentes na fibromialgia. Isso pode incluir dificuldades para adormecer, permanecer dormindo e ter um sono restaurador"
        artigo4="Frequentemente chamado de névoa da fibro, problemas cognitivos como dificuldade de concentração, problemas de memória e processamento cognitivo mais lento podem ocorrer."
        artigo5=""
      />
      <CardInfo2
        imagem="/image/fibromialgia2.png"
        titulo="Fibromialgia"
        texto="A causa exata da fibromialgia não é bem compreendida. Acredita-se que envolva uma combinação de fatores genéticos, ambientais e psicológicos. Fatores de risco para o desenvolvimento da fibromialgia incluem histórico familiar da condição, trauma físico ou emocional, infecções e certas doenças autoimunes incluem:"
        artigo1="O diagnóstico da fibromialgia pode ser desafiador, uma vez que não existem testes laboratoriais específicos ou exames de imagem que possam confirmá-la. O diagnóstico geralmente é baseado nos sintomas relatados pelo paciente e em um exame físico. Médicos frequentemente utilizam critérios estabelecidos por organizações como o Colégio Americano de Reumatologia para diagnosticar a fibromialgia."
        artigo2="Embora não haja cura para a fibromialgia, o tratamento visa gerenciar os sintomas e melhorar a qualidade de vida do paciente. Isso pode envolver uma combinação de medicamentos (como analgésicos, antidepressivos e auxílios para dormir), fisioterapia, exercícios, técnicas de gerenciamento de estresse e mudanças no estilo de vida. É importante que pessoas com fibromialgia trabalhem em conjunto com um profissional de saúde para desenvolver um plano de tratamento personalizado."
        artigo3="Se você suspeita que tem fibromialgia ou está experimentando sintomas semelhantes aos descritos acima, é recomendado consultar um profissional médico para uma avaliação adequada e orientação."
        artigo4=""
        artigo5=""
      />
      <CardInfo
        imagem="/image/tensão Pre-Menstrual2.png"
        titulo="Tensão Pré-Menstrual (TPM)"
        texto="A tensão pré-menstrual (TPM) é um conjunto de sintomas físicos, emocionais e comportamentais que ocorrem em muitas pessoas menstruantes nos dias que antecedem a menstruação. Ela é causada pelas flutuações hormonais que ocorrem durante o ciclo menstrual. Os sintomas da TPM podem variar de leves a graves e podem incluir:"
        artigo1="Sintomas físicos: Inchaço abdominal, Dor nos seios, Cólicas menstruais, Fadiga, Dores de cabeça, Mudanças no apetite e desejos alimentares."
        artigo2="Sintomas emocionais e psicológicos: Irritabilidade, Mudanças de humor, Ansiedade ,Depressão,Choro fácil, Dificuldade de concentração."
        artigo3="Sintomas comportamentais: Distúrbios do sono, Redução da libido, Dificuldade de lidar com o estresse, Sensação de estar sobrecarregada."
        artigo4="A gravidade e a combinação de sintomas variam de pessoa para pessoa. Algumas pessoas podem ter sintomas leves que não afetam muito sua qualidade de vida, enquanto outras podem experimentar sintomas mais intensos que interferem em suas atividades diárias. O tratamento da TPM depende da gravidade dos sintomas e das necessidades individuais."
        artigo5="Frequentemente chamado de névoa da fibro, problemas cognitivos como dificuldade de concentração, problemas de memória e processamento cognitivo mais lento podem ocorrer."
      />
    </main>
  );
}

export default Massoterapia;
