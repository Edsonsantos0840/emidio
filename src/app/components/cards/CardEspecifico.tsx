// Módulos.
import Image from "next/image";
import Link from "next/link";

interface CardEspecificoProps {
  imagem: string;
  titulo: string;
  artigos: string[];
  agenda: string;
}

export default function CardEspecifico(props: CardEspecificoProps) {
  return (
    <article
      className="relative transition-all duration-700 ease-in-out gap-3 
        lg:flex md:w-full p-2 group rounded-lg border border-transparent 
        hover:border-letra2 hover:w-[100%] hover:shadow-2xl 
        hover:scale-[1.02] hover:bg-fundoCard2"
      aria-labelledby={`titulo-${props.titulo}`}
    >
      {/* Imagem */}
      <figure className="relative bg-cover w-[400px] h-[400px] lg:w-[1000px] group-hover:lg:w-[600px] lg:group-hover:h-[350px] ">
        <Image
          src={props.imagem}
          alt={`Imagem relacionada a ${props.titulo}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          quality={100}
          className="shadow-lg md:w-full rounded-md object-cover"
        />
      </figure>

      {/* Conteúdo */}
      <div
        className="absolute top-0 left-0 w-full h-full md:w-[410px] p-1 flex flex-col justify-center gap-4 rounded-lg
          opacity-0 transition-opacity duration-700 ease-in-out px-10 lg:px-0
          lg:static bg-white  bg-opacity-90 group-hover:opacity-100 lg:bg-transparent"
      >
        <h2
          id={`titulo-${props.titulo}`}
          className="titulo respoFont text-corLetra lg:text-letra2"
        >
          {props.titulo}
        </h2>

        <ul
          className="text-md lg:text-[1rem] text-corLetra list-disc pl-5"
          aria-label={`Lista de detalhes sobre ${props.titulo}`}
        >
          {props.artigos.map((artigo, index) => (
            <li key={index} className="font-terceiraFont ">
              {artigo}
            </li>
          ))}
        </ul>

        <Link
          href="/contato"
          className="bg-letra2 p-1 text-center text-fundo rounded-md shadow-md hover:scale-105 hover:bg-[rgb(159, 226, 24)] transition-all duration-300 text-[1.2rem]  lg:text-[1.1rem] respoFont"
          aria-label={`Agendar consulta sobre ${props.titulo}`}
        >
          {props.agenda}
        </Link>
      </div>
    </article>
  );
}
