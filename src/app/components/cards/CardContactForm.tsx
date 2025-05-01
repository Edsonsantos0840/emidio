"use client";

import { ContactFields } from "@/app/fields/ContactFields";
import UseForm from "@/app/hooks/UseForm";
import { FaMedkit, FaRegCommentDots } from "react-icons/fa";

export default function CardContactForm() {
  const { handleSubmit, loading, status } = UseForm();

  return (
    <section
      aria-labelledby="contact-title"
      className="w-full mb-2 md:w-[90%] lg:w-[40%] lg:mx-auto bg-white p-4 shadow-lg rounded-xl relative mt-14"
    >
      <header>
        <h2
          id="contact-title"
          className="text-2xl font-bold text-center drop-shadow-lg mb-2 relative z-20 text-principal"
        >
          Entre em Contato
        </h2>
      </header>

      {status && (
        <p
          role="alert"
          className="mb-4 text-center text-sm text-red-600 bg-fundoCard p-2 rounded"
        >
          {status}
        </p>
      )}

      <form action={handleSubmit} className="space-y-4" noValidate>
        <fieldset className="space-y-4" aria-label="Campos de contato">
          {ContactFields.map((input, index) => (
            <div key={index} className="relative">
              {input.ico}
              <label htmlFor={input.name} className="sr-only">
                {input.ariaLabel}
              </label>
              <input
                type={input.type}
                name={input.name}
                placeholder={input.placeholder}
                className="w-full text-center p-5 border rounded-lg  text-icoInput focus:outline-none focus:ring-2 focus:corFocus [color-scheme:light] [&::-webkit-calendar-picker-indicator]:opacity-0"
                required
                aria-label={input.ariaLabel}
                aria-required="true"
              />
            </div>
          ))}
          <div className="relative">
            <label htmlFor="especialidades" className="sr-only">
              Especialidades
            </label>
            <FaMedkit className="absolute right-3 transform translate-y-3 text-icoInput" />
            <select
              id="especialidades"
              name="especialidades"
              className="w-full  text-icoInput h-11 appearance-none border rounded-lg focus:outline-none focus:ring-2 focus:corFocus text-center"
              aria-label="Especialidades"
            >
              <option value="">--------Selecione--------</option>
              <option value="Massoterapia">Massoterapia</option>
              <option value="Psicologia">Psicologia</option>
            </select>
          </div>

          {/* Mensagem */}
          <div className="relative">
            <label htmlFor="mensagem" className="sr-only">
              Mensagem
            </label>
            <FaRegCommentDots className="absolute right-3 top-3 text-icoInput" />
            <textarea
              id="mensagem"
              name="mensagem"
              placeholder="Sua Mensagem"
              className="w-full text-center pt-2 h-[60px]  border rounded-lg focus:outline-none focus:ring-2 focus:corFocus"
              required
              aria-label="Mensagem"
              aria-required="true"
            ></textarea>
          </div>
        </fieldset>
        {/* Botão */}
        <button
          type="submit"
          className="w-full bg-principal text-letra p-2 rounded-lg font-semibold hover:scale-95 transition relative z-30 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={loading}
        >
          {loading ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </section>
  );
}
