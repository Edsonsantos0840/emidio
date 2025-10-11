'use client'
import { MassoterapiaProps } from "@/app/fields/MassoterapiaFields";
import Image from "next/image";

export default function CardInfo({image,
  title,
  tex,
  articles,
  }: MassoterapiaProps) {
  return (
    <section
      className="my-2 "
      role="region"
      aria-labelledby={`titulo-${title.replace(/\s+/g, "-").toLowerCase()}`}
    >
      <div className="grid grid-cols-[1fr_2fr] rounded-lg border  
        border-letra2 hover:shadow-2xl 
        hover:bg-fundoCard2">
        {/* Imagem com legenda semântica */}
        <figure className="relative w-[360px] h-[360px] lrounded-xl shadow-xl ">
          <Image
            src={image}
            alt={`Imagem ilustrativa sobre ${title}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            quality={100}
            className="imgInfo "
          />
        </figure>

        <article className="gap-1 p-2 w-full  ease-in group [perspective:1000px] cursor-pointer 
        ">
          <div className="relative transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="relative overflow-hidden [backface-visibility:hidden]">
          <h2
            id={`titulo-${title.replace(/\s+/g, "-").toLowerCase()}`}
            className="titulo  pt-3 respoFont"
          >
            {title}
          </h2>

          <p className="  p-2 respoFont md:text-[1.1rem] lg:text-[1rem]">
            {tex}
          </p>

            </div>
          {/* Lista visível no hover */}
          <ul
            className="absolute top-0 flex flex-col gap-1 p-2 md:text-[1rem] lg:text-[1rem] [transform:rotateY(180deg)] [backface-visibility:hidden]"
            aria-label={`Mais detalhes sobre ${title}`}
          >
            {articles.map((artigo, i) => (
              <li key={i} className="iinfoP respoFont">
                {artigo}
              </li>
            ))}
          </ul>

          </div>

        </article>
      </div>
    </section>
  );
}
