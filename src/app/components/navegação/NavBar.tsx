//Módulos.
import Link from "next/link";
import Image from "next/image";
//Imagem.
import logo from "../../../../public/image/2.png";
//Ícone.
import { RxHamburgerMenu } from "react-icons/rx";

function NavBar() {
  return (
    <nav className="flex justify-between md:items-center w-[100vw] h-[80px] md:h-[115px] lg:h-[93px]  fixed z-20 bg-[var(--corFundo)] shadow-lg ">
      <div className="flex w-full items-center ml-16 md:ml-0  ">
        <div className="flex w-full items-center">
          <div className="w-[100px] h-[100px] md:w-[130px] md:h-[130px] p-1 ">
            <Image src={logo} alt="Logo" width={250} height={250} />
          </div>
          <div className="flex w-full  md:justify-start items-center gap-1 ">
            <h1 className="text-[1.7rem] md:text-[1.6rem] lg:text-3xl self-baseline">
              Espaço
            </h1>
            <div className="flex flex-col justify-end">
              <h2 className="text-[1.6rem] md:text-[1.5rem] lg:text-3xl text-[var(--corLetra2)] text-center">
                Emídio & Sá
              </h2>
              <p className="text-[.6rem] respoFont lg:text-xs text-[var(--primeira-cor)] md:text-[var(--corLetra2)]">
                CUIDANDO DE SUA SAÚDE
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute md:flex-row w-full gap-4 group  md:bg-transparent py-[25px] md:py-[5px] p-2 m-auto ">
        <RxHamburgerMenu className="md:hidden text-3xl cursor-pointer" />
        <div className="hidden group-hover:block w-full md:flex  md:gap-2 bg-[var(--corSombra2)]  lg:bg-[var(--corSombra)] md:bg-[var(--corFundo2)] absolute md:relative left-0 top-[80px] md:top-0 md:left-[20.4rem] lg:left-[29.5rem]">
          <div className=" w-full flex flex-col md:flex-row text-[var(--corFundo)] md:text-[var(--corLetra)] p-2 text-center md:gap-2 lg:gap-8 font-[var(--font1)]">
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
