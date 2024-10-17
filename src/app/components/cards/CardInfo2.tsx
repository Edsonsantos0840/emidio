import React from "react";
import Image from "next/image";
interface CardInfo2Props {
imagem: string,
titulo: string,
texto:string,
artigo1: string,
artigo2: string,
artigo3: string,
artigo4: string,
artigo5?: string,
artigo6?: string,
artigo7?: string,
artigo8?: string,
artigo9?: string,
artigo10?: string,
// agenda: string,
}

export default function CardInfo2(props: CardInfo2Props) {
  return (
    <div className="w-full group bg-[var(--fundoCard3)] shadow-2xl rounded-lg border-2 border-[var(--corLetra2)] gap-5 ease-in duration-700 my-1">
      <div className="flex w-full gap-2 group-hover:bg-[var(--fundoCard2)]" >
      <article className="gap-2 w-full group-hover:w-[90%] ease-in duration-700 ">
        <h2 className="text-[var(--corLetra2)] text-xl text-center group-hover:hidden" >{props.titulo}</h2>
        <p className="group-hover:hidden text-center">{props.texto}</p>
        <ul className="hidden group-hover:flex flex-col gap-2 m-auto px-20 py-4 ">
            <p className="font-terceiraFont list-disc text-sm">{props.artigo1}</p>
            <p className="font-terceiraFont list-disc text-sm">{props.artigo2}</p>
            <p className="font-terceiraFont list-disc text-sm">{props.artigo3}</p>
            <p className="font-terceiraFont list-disc text-sm">{props.artigo4}</p>
            <p className="font-terceiraFont list-disc text-sm">{props.artigo5}</p>
            <p className="font-terceiraFont list-disc text-sm">{props.artigo6}</p>
            <p className="font-terceiraFont list-disc text-sm">{props.artigo7}</p>
            <p className="font-terceiraFont list-disc text-sm">{props.artigo8}</p>
            <p className="font-terceiraFont list-disc text-sm">{props.artigo9}</p>
            <p className="font-terceiraFont list-disc text-sm">{props.artigo10}</p>
          </ul>
        {/* <button className="m-auto bg-[var(--corLetra2)] p-3 text-[var(--corFundo)] rounded-sm shadow-md hover:scale-105 hover:bg-[var(--terceira-cor)] w-full ease-in duration-300 hidden group-hover:flex">{props.agenda}</button> */}

      </article>
      <div >
        <Image src={props.imagem} alt="imagem" width={200} height={200} className="shadow-lg rounded-r-md group-hover:h-[100%] group-hover:w-[350px]"/>
      </div>
      </div>
      
    </div>
  );
}
