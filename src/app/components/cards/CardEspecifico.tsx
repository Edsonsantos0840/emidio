import React from "react";
import Image from "next/image";
import Link from "next/link";
interface CardEspecificoProps {
  imagem: string;
  titulo: string;
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
  agenda: string;
}

export default function CardEspecifico(props: CardEspecificoProps) {
  return (
    <div className="md:flex md:w-[50%] p-2 md:p-5 group hover:bg-[var(--fundoCard3)] md:hover:w-[150%] hover:shadow-2xl rounded-lg hover:border-2 border-[var(--corLetra2)] gap-5 ease-in duration-700">
      <div className="md:w-[350px] md:h-[350px]">
        <Image
          src={props.imagem}
          alt="imagem"
          width={400}
          height={400}
          className="shadow-lg"
        />
      </div>
      <article className=" pt-2 hidden group-hover:alinha6 gap-2 m-auto">
        <h2 className="titulo">{props.titulo}</h2>
        <ul className="text-md">
          <li className="font-terceiraFont list-disc text-md">
            {props.artigo1}
          </li>
          <li className="font-terceiraFont list-disc text-md">
            {props.artigo2}
          </li>
          <li className="font-terceiraFont list-disc text-md">
            {props.artigo3}
          </li>
          <li className="font-terceiraFont list-disc text-md">
            {props.artigo4}
          </li>
          <li className="font-terceiraFont list-disc text-md">
            {props.artigo5}
          </li>
          <li className="font-terceiraFont list-disc text-md">
            {props.artigo6}
          </li>
          <li className="font-terceiraFont list-disc text-md">
            {props.artigo7}
          </li>
          <li className="font-terceiraFont list-disc text-md">
            {props.artigo8}
          </li>
          <li className="font-terceiraFont list-disc text-md">
            {props.artigo9}
          </li>
          <li className="font-terceiraFont list-disc text-md">
            {props.artigo10}
          </li>
        </ul>
        <Link
          href={"/contato"}
          className="md:w-full m-auto bg-[var(--corLetra2)] p-2 md:p-3 text-center text-[var(--corFundo)] rounded-md shadow-md hover:scale-105 hover:bg-[var(--terceira-cor)] w-[300px] text-[1.2rem] respoFont ease-in duration-300"
        >
          {props.agenda}
        </Link>
      </article>
    </div>
  );
}
