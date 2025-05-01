// Módulos.
import Image from "next/image";

interface CardInfoProps {
  imagem: string;
  titulo: string;
  texto: string;
  artigos: string[];
}

export default function CardInfo(props: CardInfoProps) {
  return (
    <section
      className="topoInfo group"
      role="region"
      aria-labelledby={`titulo-${props.titulo.replace(/\s+/g, "-").toLowerCase()}`}
    >
      <div className="topoInfo2">
        {/* Imagem com legenda semântica */}
        <figure className="relative w-[420px] h-[420px] lg:group-hover:w-[300px] lg:group-hover:h-[300px]">
          <Image
            src={props.imagem}
            alt={`Imagem ilustrativa sobre ${props.titulo}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            quality={100}
            className="imgInfo"
          />
        </figure>

        <article className="gap-1 w-full md:group-hover:w-[90%] ease-in duration-700">
          <h2
            id={`titulo-${props.titulo.replace(/\s+/g, "-").toLowerCase()}`}
            className="titulo group-hover:hidden pt-3 respoFont"
          >
            {props.titulo}
          </h2>

          <p className="group-hover:hidden text-center p-2 respoFont md:text-[1.1rem] lg:text-[1rem]">
            {props.texto}
          </p>

          {/* Lista visível no hover */}
          <ul
            className="hidden group-hover:flex flex-col gap-1 m-auto p-2 text-center md:text-justify md:text-[1rem] lg:text-[1rem]"
            aria-label={`Mais detalhes sobre ${props.titulo}`}
          >
            {props.artigos.map((artigo, index) => (
              <li key={index} className="iinfoP respoFont">
                {artigo}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
