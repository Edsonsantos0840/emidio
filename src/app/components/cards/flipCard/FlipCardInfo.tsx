"use client";

import { MassoterapiaProps } from "@/app/fields/MassoterapiaFields";
import Image from "next/image";
import Link from "next/link";

export default function FlipCardInfo({image,
  title,
  tex,
  articles,
  }: MassoterapiaProps) {
  return (
    <article className="group [perspective:1000px] cursor-pointer ">
      <div className="relative rounded-lg border border-transparent 
        hover:border-letra2 hover:shadow-2xl 
        hover:bg-fundoCard2 w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <figure className="absolute w-[420px] h-[420px] inset-0 bg-gray-200 rounded-xl shadow-xl overflow-hidden [backface-visibility:hidden]">
        {/* Frente do card */}
          <Image
            src={image}
            alt={`Imagem ${title}`}
            width={420}
            height={420}
            className="w-full h-full object-cover"
          />
        </figure>

        {/* Verso do card */}
        <div className="absolute inset-0 bg-white rounded-xl shadow-xl p-4 flex flex-col justify-center items-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <h2 className="titulo respoFont text-corLetra lg:text-letra2">{title}</h2>
        <ul
          className="text-md lg:text-[1.1rem] text-corLetra  text-center"
          aria-label={`Lista de detalhes sobre ${title}`}
        >

          <p className="group-hover:hidden text-center p-2 respoFont md:text-[1.1rem] lg:text-[1rem]">
            {tex}
          </p>
          {articles.map((item, i) => (
            <li key={i} className="iinfoP respoFont">
              {item}
            </li>
          ))}
        </ul>
          <Link
            href="/contato"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-letra2 px-6 py-1 mt-2 text-center text-fundo rounded-md shadow-md hover:scale-105 hover:bg-[rgb(159, 226, 24)] transition-all duration-300 text-[1.2rem]  lg:text-[1.1rem] respoFont"
          aria-label={`Agendar consulta sobre ${title}`}
          >
            {tex}
          </Link>
        </div>
      </div>
    </article>
  );
}
