//Módulos.
import Image from "next/image";
import Link from "next/link";

interface PropsCardHead {
  image?: any;
  logo?: any;
  testo?: string;
  descrição?: string;
  muda?: string;
  tamanho?: string;
  nome?: string;
  fone?: string;
  email?: string;
  data?: any;
  especialidade?: string;
  mensagem?: string;
  botao?: boolean;
  formulário?: boolean;
}

export default function CardHead(props: PropsCardHead) {
  return (
    <div className="relative w-full  z-0 h-[270px] md:h-[450px] ">
      <Image
        src={props.image}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className=""
      />
      <div className="relative z-10 flex justify-between pt-12 md:pt-24 lg:pt-40 h-full bg-[var(--corSombra2)] lg:bg-[var(--corSombra)] w-full">
        <div className={`w-[50%]   hidden ${props.muda}`}></div>
        <div className={`z-20  ${props.tamanho}`}>
          <div className="alinha6">
            <h1 className="TestoHeader text-[2rem] md:text-[3.2rem] lg:text-[3.5rem] text-center p-1  md:p-0">
              {props.testo}
            </h1>
            <p className=" TestoP w-[95%] md:text-[1.3rem] lg:text-[1.3rem] text-[1.1rem] md:w-[60%]  lg:w-[85%] text-center">
              {props.descrição}
            </p>
            {!props.botao && (
              <div className=" alinha3 gap-3 md:gap-14 pt-4 md:pt-4">
                <Link href={"/contato"} className="linkHead ">
                  Agende um horário
                </Link>
                <Link href={"/sobre"} className="linkHead">
                  Saiba mais..
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
