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
import { useState } from "react";
//Módulo Externo.
import emailjs from "@emailjs/browser";

export default function Contato() {
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [fone, setFone] = useState<string>("");
  const [esp, setEsp] = useState<string>("");
  const [datas, setDatas] = useState<string>("");
  const [mensagem, setMensagem] = useState<string>("");
  const [recado, setRecado] = useState<string>("");

  function captura(e: { preventDefault: () => void }) {
    e.preventDefault();
    if (
      nome === "" ||
      email === "" ||
      fone === "" ||
      esp === "" ||
      datas === ""
    ) {
      setRecado("Todos os campos com asterisco são obrigatórios!!!");
    } else if (nome.length < 3) {
      setRecado("Digite pelo menos 4 letras");
    } else if (email.length < 3) {
      setRecado("Digite pelo menos 4 letras");
    } else if (fone.length < 8) {
      setRecado("Digite pelo menos 8 números");
    } else {
      setRecado("Enviado com sucesso, entraremos em contato em breve!!!");
      const templateParams: {
        from_name: string;
        email: string;
        telefone: string;
        especialidade: string;
        data: string;
        message: string;
    } = {
        from_name: nome,
        email,
        telefone: fone,
        especialidade: esp,
        data: datas,
        message: mensagem,
      };
      emailjs
        .send(
          "service_092zaue",
          "template_yrje0me",
          templateParams,
          "irOtK26YzqWiLtyD8"
        )
        .then(
          (res) => {
            console.log("EMAIL ENVIADO COM SUCESSO", res.status, res.text);
            setNome("");
            setEmail("");
            setFone("");
            setEsp("");
            setDatas("");
            setMensagem("");
          },
          (err) => {
            console.log("ERRO:", err);
          }
        );
    }
  }

  return (
    <div className="min-h-screen w-full custom-gradient py-10 md:alinha3 ">
      {/* Header & Logo Section */}
      <div className=" mx-auto  p-8 flex flex-col items-center md:pt-14 body ">
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

      {/* Form Section */}
      <form
        onSubmit={captura}
        className="max-w-6xl mx-auto bg-white p-5 md:mt-16 rounded-xl shadow-lg space-y-3"
      >
        <h2 className="text-3xl font-semibold text-gray-700 text-center respoFont">
          Agende um Horário
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recado && <p>{recado}</p>}
          {/* Nome */}
          <label className="flex flex-col">
            <div className="flex items-center space-x-2">
              <FaUserAlt className="text-[var(--corLetra2)]" />
              <span className="text-gray-700">*Nome:</span>
            </div>
            <input
              type="text"
              className="border-gray-300 border p-2 rounded-md"
              placeholder="Digite seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </label>

          {/* Email */}
          <label className="flex flex-col">
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-[var(--corLetra2)]" />
              <span className="text-gray-700">*E-mail:</span>
            </div>
            <input
              type="email"
              className="border-gray-300 border p-2 rounded-md"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          {/* Telefone */}
          <label className="flex flex-col">
            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="text-[var(--corLetra2)]" />
              <span className="text-gray-700">*Telefone:</span>
            </div>
            <input
              type="text"
              className="border-gray-300 border p-2 rounded-md"
              placeholder="Digite seu telefone"
              value={fone}
              onChange={(e) => setFone(e.target.value)}
            />
          </label>

          {/* Data */}
          <label className="flex flex-col">
            <div className="flex items-center space-x-2">
              <BsCalendarDate className="text-[var(--corLetra2)]" />
              <span className="text-gray-700">*Data:</span>
            </div>
            <input
              type="date"
              className="border-gray-300 border p-2 rounded-md"
              value={datas}
              onChange={(e) => setDatas(e.target.value)}
            />
          </label>

          {/* Especialidade */}
          <label className="flex flex-col ">
            <div className="flex items-center space-x-2">
              <FaMedkit className="text-[var(--corLetra2)]" />
              <span className="text-gray-700">*Especialidade:</span>
            </div>
            <select
              className="border-gray-300 border w-[80%] text-sm text-center rounded-md"
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
            <span className="text-gray-700">Deixe sua mensagem:</span>
          </div>
          <textarea
            className="border-gray-300 border h-24 p-2 rounded-md"
            placeholder="Escreva sua mensagem..."
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
          ></textarea>
        </label>

        {/* Botão de Enviar */}
        <button
          type="submit"
          className="w-full bg-[var(--corLetra2)] text-white py-2 rounded-md hover:bg-[var(--letra1-cor)] transition duration-300"
        >
          Enviar
        </button>

        {/* Mensagem de Retorno */}
      </form>
    </div>
  );
}
