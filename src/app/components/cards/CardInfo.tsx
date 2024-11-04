import React from "react";
import Image from "next/image";
interface CardInfoProps {
  imagem: string;
  titulo: string;
  texto: string;
  artigo1: string;
  artigo2: string;
  artigo3: string;
  artigo4: string;
  artigo5: string;
  artigo6?: string;
  artigo7?: string;
  artigo8?: string;
  artigo9?: string;
  artigo10?: string;
  // agenda: string,
}

export default function CardInfo(props: CardInfoProps) {
  return (
    <div className="topoInfo group">
      <div className="topoInfo2">
        <div>
          <Image
            src={props.imagem}
            alt="imagem"
            width={200}
            height={200}
            className="imgInfo"
          />
        </div>
        <article className="gap-2 w-full md:group-hover:w-[90%] ease-in duration-700 ">
          <h2 className="titulo group-hover:hidden pt-3">{props.titulo}</h2>
          <p className="group-hover:hidden text-center p-2">{props.texto}</p>
          <ul className="hidden group-hover:flex flex-col gap-2 m-auto py-4 p-2 text-center md:text-justify">
            <p className="iinfoP">{props.artigo1}</p>
            <p className="iinfoP">{props.artigo2}</p>
            <p className="iinfoP">{props.artigo3}</p>
            <p className="iinfoP">{props.artigo4}</p>
            <p className="iinfoP">{props.artigo5}</p>
            <p className="iinfoP">{props.artigo6}</p>
            <p className="iinfoP">{props.artigo7}</p>
            <p className="iinfoP">{props.artigo8}</p>
            <p className="iinfoP">{props.artigo9}</p>
            <p className="iinfoP">{props.artigo10}</p>
          </ul>
        </article>
      </div>
    </div>
  );
}
