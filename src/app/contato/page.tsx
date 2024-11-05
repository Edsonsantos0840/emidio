"use client";
//Imagem.
import logo from "../../../public/image/3.png";
//Icones.
import {
  BsCalendarDate,
  BsFacebook,
  BsInstagram,
  BsWhatsapp,
} from "react-icons/bs";

import {
  FaLinkedin,
  FaPhoneAlt,
  FaUserAlt,
  FaEnvelope,
  FaCommentAlt,
  FaMedkit,
} from "react-icons/fa";
//Módulos.
import Image from "next/image";
import Link from "next/link";
//Hook personalizado.
import UseForm from "../components/hooks/UseForm";

export default function Contato() {
  const {
    captura,
    nome,
    setNome,
    email,
    setEmail,
    fone,
    setFone,
    esp,
    setEsp,
    datas,
    setDatas,
    mensagem,
    setMensagem,
    recado,
  } = UseForm();

  return (
    <div className="min-h-screen w-full custom-gradient py-12 lg:alinha3 ">
      {/* Sessão Header & Logo  */}
      <div className=" mx-auto p-8 md:pt-14 flex flex-col items-center body ">
        <Link href={"/"} passHref>
          <Image
            src={logo}
            alt="logo"
            width={200}
            height={200}
            className="md:mb-4 md:w-[250px] "
          />
        </Link>
        <h1 className=" text-3xl md:text-5xl font-bold  mb-4 mt-[-60px]">
          Espaço <span className="text-[var(--corLetra2)]">Emídio & Sá</span>
        </h1>
        <div className="flex space-x-4 mb-8">
          <Link
            href="https://www.facebook.com/profile.php?id=100095584324495&mibextid=LQQJ4d"
            target="_blank"
          >
            <BsFacebook className="hover:scale-150 text-3xl md:text-4xl text-blue-600 hover:text-blue-800" />
          </Link>
          <Link
            href="https://www.instagram.com/espaco_emidiosa.sx/"
            target="_blank"
          >
            <BsInstagram className="hover:scale-150 text-3xl md:text-4xl text-pink-500 hover:text-pink-700" />
          </Link>
          <Link
            href="https://wa.me/5519991062455?text=Ol%C3%A1+visitei+seu+site%2C+quero+um+or%C3%A7amento."
            target="_blank"
          >
            <BsWhatsapp className="hover:scale-150 text-3xl md:text-4xl text-green-500 hover:text-green-700" />
          </Link>
          <Link href="/" target="_blank">
            <FaLinkedin className="hover:scale-150 text-3xl md:text-4xl text-blue-800 hover:text-blue-900" />
          </Link>
        </div>
      </div>

      {/* Sessão de Formulário. */}
      <form
        onSubmit={captura}
        className="max-w-6xl lg:w-[55%] lg:h-[500px] mx-auto bg-white p-5 md:mt-16 lg:mt-14 rounded-xl shadow-lg lg:rounded-none lg:shadow-none space-y-3"
      >
        <h2 className="text-[1.5rem]  font-semibold text-gray-700 text-center respoFont">
          Agende um Horário
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Mensagem de Retorno */}
          {recado && <p className="md:text-[1rem] respoFont">{recado}</p>}
          {/* Nome */}
          <label className="flex flex-col">
            <div className="flex items-center space-x-2">
              <FaUserAlt className="text-[var(--corLetra2)]" />
              <span className="text-gray-700 md:text-[1.4rem] lg:text-[1rem] respoFont">
                *Nome:
              </span>
            </div>
            <input
              type="text"
              className="impu"
              placeholder="Digite seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </label>

          {/* Email */}
          <label className="flex flex-col">
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-[var(--corLetra2)]" />
              <span className="text-gray-700 md:text-[1.4rem] lg:text-[1rem] respoFont">
                *E-mail:
              </span>
            </div>
            <input
              type="email"
              className="impu"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          {/* Telefone */}
          <label className="flex flex-col">
            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="text-[var(--corLetra2)]" />
              <span className="text-gray-700 md:text-[1.4rem] lg:text-[1rem] respoFont">
                *Telefone:
              </span>
            </div>
            <input
              type="text"
              className="impu"
              placeholder="Digite seu telefone"
              value={fone}
              onChange={(e) => setFone(e.target.value)}
            />
          </label>

          {/* Data */}
          <label className="flex flex-col">
            <div className="flex items-center space-x-2">
              <BsCalendarDate className="text-[var(--corLetra2)]" />
              <span className="text-gray-700 md:text-[1.4rem] lg:text-[1rem] respoFont">
                *Data:
              </span>
            </div>
            <input
              type="date"
              className="impu"
              value={datas}
              onChange={(e) => setDatas(e.target.value)}
            />
          </label>

          {/* Especialidade */}
          <label className="flex flex-col ">
            <div className="flex items-center space-x-2">
              <FaMedkit className="text-[var(--corLetra2)]" />
              <span className="text-gray-700 md:text-[1.4rem] lg:text-[1rem] respoFont">
                *Especialidade:
              </span>
            </div>
            <select
              className="w-full impu text-sm text-center md:text-[1.3rem] lg:text-[1rem] respoFont"
              value={esp}
              onChange={(e) => setEsp(e.target.value)}
            >
              <option value="">--------Selecione--------</option>
              <option value="Massoterapia">Massoterapia</option>
              <option value="Psicologia">Psicologia</option>
            </select>
          </label>
        </div>

        {/* Mensagem */}
        <label className="flex flex-col">
          <div className="flex items-center space-x-2">
            <FaCommentAlt className="text-[var(--corLetra2)]" />
            <span className="text-gray-700 md:text-[1.4rem] lg:text-[1rem] respoFont">
              Deixe sua mensagem:
            </span>
          </div>
          <textarea
            className="border-gray-300 border h-24 p-2 rounded-md respoFont"
            placeholder="Escreva sua mensagem..."
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
          ></textarea>
        </label>

        {/* Botão de Enviar */}
        <button
          type="submit"
          className="w-full bg-[var(--corLetra2)] text-white md:text-[1.6rem] lg:text-[1.1rem] py-2 rounded-md hover:bg-[var(--letra1-cor)] transition duration-300 respoFont"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
