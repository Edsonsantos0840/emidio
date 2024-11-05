//Módulos.
import Link from "next/link";
import Image from "next/image";
//Imagem.
import logo from "../../../../public/image/2.png";
//Ícone.
import { RxHamburgerMenu } from "react-icons/rx";

function NavBar() {
  return (
    <nav className="
      fixed w-[100vw] h-[80px] md:h-[115px] lg:h-[93px] 
      flex justify-between md:items-center z-20 bg-[var(--corFundo)] shadow-lg "
    >
      <div className="w-full ml-16 md:ml-0  ">
        <div className=" w-full flex items-center ">
          <div className="w-[100px] h-[100px] md:w-[130px] md:h-[130px] p-1 ">
            <Image src={logo} alt="Logo" width={250} height={250} />
          </div>
          <div className="w-full flex  gap-1 ">
            <h1 className="text-[1.7rem] md:text-[1.6rem] lg:text-3xl self-baseline">
              Espaço
            </h1>
            <div className="">
              <h2 className="
                 text-[1.6rem] md:text-[1.5rem] lg:text-3xl text-center
                 text-[var(--corLetra3)] lg:text-[var(--corLetra2)] "
              >
                Emídio & Sá
              </h2>
              <p className="respoFont text-[.6rem] lg:text-xs text-[var(--primeira-cor)] lg:text-[var(--corLetra2)]">
                CUIDANDO DE SUA SAÚDE
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-full group md:flex-row gap-4 d:bg-transparent py-[25px] md:py-[5px] p-2 m-auto ">
        <RxHamburgerMenu className="md:hidden text-3xl cursor-pointer" />
        <div className="
            hidden absolute md:relative w-full 
            group-hover:block  md:flex  md:gap-2 
            left-0 top-[80px] md:top-0 md:left-[20.4rem] lg:left-[29.5rem]
            bg-[var(--corSombra2)] md:bg-[var(--corFundo2)] "
        >
          <div className=" 
            w-full flex flex-col md:flex-row  p-2 text-center md:gap-2 lg:gap-8 
            text-[var(--corFundo)] md:text-[var(--corLetra)] font-[var(--font1)]"
          >
            <Link href={"/"} className="linkNav ">
              Início
            </Link>
            <Link href={"/massoterapia"} className="linkNav ">
              Massoterapia
            </Link>
            <Link href={"/pisicologia"} className="linkNav ">
              Pisicologia
            </Link>
            <Link href={"/sobre"} className="linkNav ">
              Sobre Nós
            </Link>
            <Link href={"/contato"} className="linkNav ">
              Contato
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
