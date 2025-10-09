"use client";

import Link from "next/link";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { NavFields } from "@/app/fields/NavFields";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full z-30 bg-fundo shadow-lg">
      <nav
        className="container mx-auto flex justify-between items-center px-2"
        role="navigation"
        aria-label="Menu principal"
      >
        {/* Logo e nome */}
        <div className="flex items-center gap-3 w-full">
          <figure className="relative  bg-cover">
            <Image
              src="/2.png"
              alt="Logo do Espaço Emídio & Sá"
              fill
              sizes="(max-width: 768px) 100px, (max-width: 1024px) 50vw, 33vw"
              quality={100}
              priority
            />
          </figure>

          <section
            aria-label="Marca do site"
            className="flex justify-start items-baseline gap-2 w-full"
          >
            <h1 className="text-4xl text-corLetra md:text-2xl  font-bold">
              Espaço
            </h1>
            <div>
              <h2 className="text-3xl md:text-xl  text-corLetra lg:text-letra2">
                Emídio & Sá
              </h2>
              <p className="text-xs text-corLetra lg:text-principal font-terceiraFont">
                CUIDANDO DE SUA SAÚDE
              </p>
            </div>
          </section>
        </div>

        {/* Botão mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-3xl text-corLetra"
          aria-label="Abrir menu"
          aria-expanded={isOpen}
          aria-controls="nav-menu"
        >
          <RxHamburgerMenu />
        </button>

        {/* Links */}
        <div
          id="nav-menu"
          className={`${
            isOpen ? "block" : "hidden"
          } absolute  left-0 w-full bg-corSombra lg:bg-transparent lg:static lg:flex lg:items-center lg:justify-end`}
        >
          <ul className="flex flex-col lg:flex-row gap-2 text-center text-fundo lg:text-corLetra font-fontPrincipal ">
            {NavFields.map((link) => (
              <li key={link.text}>
                <Link href={link.href} className="linkNav block py-1">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
