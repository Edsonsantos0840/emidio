// Módulos.
import Image, { StaticImageData } from "next/image";
import CardDetalhes from "./CardDetalhes";

interface PropsCardHead {
  image: StaticImageData | string;
  testo?: string;
  descrição?: string;
  muda?: string;
  tamanho?: string;
  botao?: boolean;
}

export default function CardHead(props: PropsCardHead) {
  return (
    <figure className="relative w-full h-[370px] md:h-[500px] overflow-hidden bg-cover z-0">
      <Image
        src={props.image}
        alt="" // imagem decorativa
        role="presentation"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        quality={100}
        priority
        aria-hidden="true"
      />

      <div className="relative flex justify-between pt-20 md:pt-24 lg:pt-40 h-full bg-sombra lg:bg-corSombra w-full">
        {/* Bloco visual à esquerda - apenas se precisar ser exibido */}
        <div className={`w-1/2 hidden ${props.muda}`}></div>

        {/* Conteúdo textual */}
        <div
          className={`relative ${props.tamanho}`}
          role="region"
          aria-label="Seção de destaque"
        >
          <figcaption className="flex flex-col items-center text-center gap-2 md:gap-4">
            {props.testo && (
              <h1 className="text-[2.4rem] md:text-[3.2rem] lg:text-[3rem] text-letra2 font-bold">
                {props.testo}
              </h1>
            )}
            {props.descrição && (
              <p className="text-[1.3rem] md:text-[1.3rem] lg:text-[1.3rem] text-[#dbefc8] w-[95%] md:w-[60%] lg:w-[85%]">
                {props.descrição}
              </p>
            )}
            {!props.botao && <CardDetalhes />}
          </figcaption>
        </div>
      </div>
    </figure>
  );
}
