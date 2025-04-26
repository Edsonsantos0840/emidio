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
      className="relative transition-all duration-700 ease-in-out gap-3 bg-white 
        lg:flex md:w-full p-2 group rounded-lg border border-transparent 
        hover:border-[var(--corLetra2)] hover:w-[100%] hover:shadow-2xl 
        hover:scale-[1.02] hover:bg-[var(--fundoCard3)]"
      aria-labelledby={`titulo-${props.titulo}`}
    >
      {/* Imagem */}
      <figure
        className="relative bg-cover lg:w-[1000px] group-hover:lg:w-[600px] group-hover:h-[350px] lg:h-[400px]"
      >
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
        className="absolute top-0 left-0 w-full h-full p-1 flex flex-col justify-center gap-4 rounded-lg
          opacity-0 transition-opacity duration-700 ease-in-out  
          lg:static bg-[var(--fundoCard3)] bg-opacity-90 group-hover:opacity-100 lg:bg-transparent"
      >
        <h2
          id={`titulo-${props.titulo}`}
          className="titulo respoFont text-[var(--corLetra2)]"
        >
          {props.titulo}
        </h2>

        <ul
          className="text-md md:text-[2rem] lg:text-[1rem] text-[var(--corLetra)] list-disc pl-5"
          aria-label={`Lista de detalhes sobre ${props.titulo}`}
        >
          {props.artigos.map((artigo, index) => (
            <li key={index} className="font-terceiraFont">
              {artigo}
            </li>
          ))}
        </ul>

        <Link
          href="/contato"
          className="bg-[var(--corLetra2)] p-1 text-center text-[var(--corFundo)] rounded-md shadow-md hover:scale-105 hover:bg-[var(--terceira-cor)] transition-all duration-300 text-[1.2rem] md:text-[2rem] lg:text-[1.1rem] respoFont"
          aria-label={`Agendar consulta sobre ${props.titulo}`}
        >
          {props.agenda}
        </Link>
      </div>
    </article>
  );
}
