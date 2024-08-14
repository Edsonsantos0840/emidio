import Image from "next/image";
import logo from "../../../../public/image/2.png";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

function NavBar() {
  return (
    <nav className="flex justify-between md:items-center w-[100vw] h-[90px] md:h-[115px] fixed">
       
      <div className="flex w-full items-center ml-16 md:ml-0 ">
        <div className="flex w-full items-center">
          <div className="w-[100px] h-[100px] md:w-[130px] md:h-[130px] p-1 ">
            <Image src={logo} alt="Logo" width={250} height={250} />
          </div>
          <div className="flex w-full justify-center md:justify-start items-center gap-1">
            <h1 className="text-[1.3rem] md:text-[1.6rem] lg:text-3xl self-baseline">Espaço</h1>
            <div className="flex flex-col justify-end">
              <h2 className="text-[1.3rem] md:text-[1.5rem] lg:text-3xl text-[var(--corLetra2)] text-center">
                Emídio & Sá
              </h2>
              <p className="text-[.5rem] lg:text-xs text-[var(--corLetra2)]">
                CUIDANDO DE SUA SAÚDE
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute md:flex-row md:w-full gap-4 group w-12 bg-[var(--fundoCard2)] md:bg-transparent py-[29px] md:py-[5px] p-2 m-auto ">
            <RxHamburgerMenu className="md:hidden text-3xl cursor-pointer" />
            <div className="hidden group-hover:block md:w-full md:flex  md:gap-2  bg-[var(--corSombra)] md:bg-[var(--corFundo2)] absolute md:relative left-0 top-[91px] md:top-0 md:left-[20.4rem] lg:left-[29.5rem]">
              <div className="flex flex-col md:flex-row text-[var(--corFundo)] md:text-[var(--corLetra)] p-2  md:gap-2 lg:gap-8 font-[var(--font1)]">
                <Link href={"/"} className="hover:scale-105 p-1 md:hover:bg-[var(--corLetra)] md:hover:text-[var(--corFundo)] " >Início</Link>
                <Link href={"/"} className="hover:scale-105 p-1 md:hover:bg-[var(--corLetra)] md:hover:text-[var(--corFundo)] " >Massoterapia</Link>
                <Link href={"/"} className="hover:scale-105 p-1 md:hover:bg-[var(--corLetra)] md:hover:text-[var(--corFundo)] " >Pisicologia</Link>
                <Link href={"/"} className="hover:scale-105 p-1 md:hover:bg-[var(--corLetra)] md:hover:text-[var(--corFundo)] " >Sobre Nós</Link>
                <Link href={"/"} className="hover:scale-105 p-1 md:hover:bg-[var(--corLetra)] md:hover:text-[var(--corFundo)] " >Contato</Link>
              </div>
            </div>
          </div>
    </nav>
  );
}

export default NavBar;
