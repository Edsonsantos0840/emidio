import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

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

  // botao1?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  // botao2?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
}

export default function CardHead(props: PropsCardHead) {
  return (
    <div className="relative w-full  z-0 h-[230px] md:h-[350px] lg:h-[550px]  ">
      <Image
        src={props.image}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className=""
      />
      <div className="relative z-10 flex justify-between pt-20 md:pt-24 lg:pt-40 h-full bg-[var(--corSombra)] w-full">
        <div className={`w-[50%] hidden ${props.muda}`}></div>
        <div className={`z-20  ${props.tamanho}`}>
          <div className="flex flex-col justify-center items-center">
            <h1 className="TestoHeader md:text-[3.2rem] text-[2rem]  text-center ">
              {props.testo}
            </h1>
            <p className=" TestoP w-[80%] md:text-[1.3rem] text-[1rem] md:w-[90%]  lg:w-[85%] text-center">
              {props.descrição}
            </p>
            {!props.botao && (
              <div className=" flex justify-center items-center gap-3 md:gap-14 pt-4 md:pt-4">
                <Link
                  href={"/"}
                  className="bg-[var(--fundoBotao)] text-[var(--corLetra2)] hover:bg-[var(--corLetra2)] hover:text-[var(--fundoBotao)] p-1 rounded-sm border-2 border-[var(--corLetra2)] shadow-md lg:w-[18vw] md:w-[26vw] w-[40vw] text-[.9rem] md:text-[1.1rem]  text-center font-semibold hover:scale-105 ease-in duration-300 "
                >
                  Agende um horário
                </Link>
                <Link
                  href={"/"}
                  className="bg-[var(--fundoBotao)] text-[var(--corLetra2)] hover:bg-[var(--corLetra2)] hover:text-[var(--fundoBotao)] p-1 rounded-sm border-2 border-[var(--corLetra2)] shadow-md lg:w-[18vw]  md:w-[26vw] w-[40vw] text-[.9rem] md:text-[1.1rem] text-center font-semibold hover:scale-105 ease-in duration-300 "
                >
                  Saiba mais..
                </Link>
              </div>
            )}
            {props.formulário && (
              <div className="flex justify-center items-center w-[100vw] mt-[-80px]">
                <div className="w-[50%] flex flex-col justify-center items-center ">
                  <Image src={props.logo} alt="Logo" width={300} height={300} className="hover:scale-110" />
                  <div className="flex w-full justify-center md:justify-center items-center gap-1 mt-[-90px]">
                    <h1 className="text-[2.3rem] md:text-[2.6rem] lg:text-[3.2rem] text-[var(--fundoBotao)] self-baseline">
                      Espaço
                    </h1>
                    <div className="flex flex-col justify-end">
                      <h2 className="text-[2.3rem] md:text-[2.5rem] lg:text-[3.2rem] text-[var(--letra1-cor)] text-center">
                        Emídio & Sá
                      </h2>
                      <p className="text-[.9rem] lg:text-[1.1] text-[var(--letra1-cor)]">
                        CUIDANDO DE SUA SAÚDE
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 pt-3 " >
                    <FaFacebook className="text-5xl text-[var(--fundoBotao)] hover:scale-110 " />
                    <FaInstagram className="text-5xl text-[var(--fundoBotao)] hover:scale-110 " />
                    <FaWhatsapp className="text-5xl text-[var(--fundoBotao)] hover:scale-110 " />
                  </div>
                </div>
                <form className="w-[50%] flex flex-col justify-center items-center ">
                    <div className="w-full flex flex-col justify-center items-center" >
                    <h1 className="text-[1.3rem] md:text-[1.5rem] lg:text-[2.2rem] text-[var(--letra1-cor)] text-center">Agende um horário.</h1>
                    <label >
                        Nome:
                        <input 
                          type="text"
                          placeholder="Digite seu nome" 
                          name={props.nome}
                        />
                    </label>
                    <label >
                        E-mail:
                        <input 
                          type="email"
                          placeholder="Digite seu nome" 
                          name={props.email}
                        />
                    </label>
                    <label >
                        Telefone:
                        <input 
                          type="tel"
                          placeholder="Digite seu nome" 
                          name={props.fone}
                        />
                    </label>
                    <label >
                        Data:
                        <input 
                          type="date"
                          name={props.data}
                        />
                    </label>
                    <label >
                        Especialidade:
                        <select name={props.especialidade}>
                            <option value="">----Selecionar----</option>
                            <option value="massoterapia">----Massoterapia----</option>
                            <option value="pisicologia">----Pisicologia----</option>
                        </select>
                    </label>
                    <label >
                        Mensagem:
                        <textarea name={props.mensagem} ></textarea>
                    </label>

                    </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
