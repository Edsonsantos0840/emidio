'use client'
import { MassoterapiaProps } from "@/app/fields/MassoterapiaFields";
import Image from "next/image";
import { FaBrain, FaComments, FaLeaf, FaSun, FaSpa, FaHandHoldingHeart, FaWater } from "react-icons/fa";
import { GiLotus, GiHealing, GiStonePile } from "react-icons/gi";
import { IoIosPerson } from "react-icons/io";
import { IoChatbubblesOutline } from "react-icons/io5";
import { LuSparkles } from "react-icons/lu";

export default function FlipCardInfo({image,
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
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] justify-center rounded-lg border  
        border-letra2 hover:shadow-2xl 
        hover:bg-fundoCard2">
        {/* Imagem com legenda semântica */}
        <figure className="relative md:m-auto w-[376px] h-[376px]  lrounded-xl shadow-xl ">
          <Image
            src={image}
            alt={`Imagem ilustrativa sobre ${title}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            quality={100}
            className="imgInfo "
          />
        </figure>

        <article className="gap-1 py-4 p-1 lg:py-1 w-full  ease-in group [perspective:1000px] cursor-pointer 
        ">
          <div className="relative transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            <div className="relative overflow-hidden [backface-visibility:hidden]">
          <h2
            id={`titulo-${title.replace(/\s+/g, "-").toLowerCase()}`}
            className="titulo text-center text-3xl pt-3 respoFont py-6"
          >
            {title}
          </h2>

          <p className="  p-2 respoFont md:text-[1.1rem] lg:text-[1rem]">
            {tex}
          </p>
          <div className="flex justify-between items-center py-8 pr-12 pl-2 font-terceiraFont">
              <div>
              <strong className="flex gap-2 text-base opacity-80"><IoIosPerson size={23} />Milhões de casos</strong>
              <p className="flex flex-col opacity-60"> <strong className="text-base">No Mundo</strong></p>
              </div>
               <div>
              <strong className="flex gap-2 text-base opacity-80"><IoIosPerson size={23} />Podemos </strong>
              <p className="flex flex-col opacity-60"> <strong className="text-base">Te Ajudar</strong></p>
              </div>
          
          </div>
          <div className="flex justify-between pr-12 pl-2 text-4xl w-full opacity-80">
          <FaBrain className="text-green-950"  />  
          <FaComments className="text-green-950"  /> 
          <FaLeaf className="text-green-950"  /> 
          <LuSparkles className="text-green-950"  /> 
          <FaSun className="text-green-950"  />    
          <IoChatbubblesOutline className="text-green-950"  /> 
          <FaSpa className="text-green-950"  />    
          <FaHandHoldingHeart className="text-green-950"  /> 
          <FaWater className="text-green-950"  />   
          <GiLotus className="text-green-950"  />    
          <GiHealing className="text-green-950"  />        
          <GiStonePile className="text-green-950"  />  
        </div>
            </div>
          {/* Lista visível no hover */}
          <ul
            className="absolute top-0 flex flex-col gap-1 p-2 md:text-[1rem] lg:text-[1rem] [transform:rotateY(180deg)] [backface-visibility:hidden]"
            aria-label={`Mais detalhes sobre ${title}`}
          >
            {articles.map((artigo, i) => (
              <li key={i} className="infoP respoFont md:text-justify">
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
