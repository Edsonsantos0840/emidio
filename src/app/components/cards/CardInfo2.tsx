//Módulos.
import Image from "next/image";
interface CardInfo2Props {
  imagem: string;
  titulo: string;
  texto: string;
  artigo1: string;
  artigo2: string;
  artigo3: string;
  artigo4: string;
  artigo5?: string;
  artigo6?: string;
  artigo7?: string;
  artigo8?: string;
  artigo9?: string;
  artigo10?: string;
  // agenda: string,
}

export default function CardInfo2(props: CardInfo2Props) {
  return (
    <div className="topoInfo group">
      <div className="topoInfo2">
        {/* Ajusta o lado que a imagem aparece */}
        <div className="xl:hidden block">
          <Image
            src={props.imagem}
            alt="imagem"
            width={200}
            height={200}
            className="imgInfo"
          />
        </div>
        <article className="gap-2 w-full group-hover:w-[90%] ease-in duration-700  ">
          <h2 className="titulo group-hover:hidden pt-3 respoFont">
            {props.titulo}
          </h2>
          <p className="group-hover:hidden md:text-[1.3rem] lg:text-[1.2rem] text-center p-2 respoFont">
            {props.texto}
          </p>
          <ul className="hidden group-hover:flex flex-col gap-2 m-auto py-4 p-2 md:text-[1.3rem] lg:text-[1.2rem] text-center md:text-justify ">
            <p className="iinfoP respoFont">{props.artigo1}</p>
            <p className="iinfoP respoFont">{props.artigo2}</p>
            <p className="iinfoP respoFont">{props.artigo3}</p>
            <p className="iinfoP respoFont">{props.artigo4}</p>
            <p className="iinfoP respoFont">{props.artigo5}</p>
            <p className="iinfoP respoFont">{props.artigo6}</p>
            <p className="iinfoP respoFont">{props.artigo7}</p>
            <p className="iinfoP respoFont">{props.artigo8}</p>
            <p className="iinfoP respoFont">{props.artigo9}</p>
            <p className="iinfoP respoFont">{props.artigo10}</p>
          </ul>
        </article>
        {/* Ajusta o lado que a imagem aparece */}
        <div className="hidden xl:block">
          <Image
            src={props.imagem}
            alt="imagem"
            width={200}
            height={200}
            className="imgInfo"
          />
        </div>
      </div>
    </div>
  );
}
