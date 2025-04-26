'use client'
import { useState } from "react";

import emailjs from "@emailjs/browser";

export default function UseForm() {
    const [status, setStatus] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
  
    // const validateEmail = (email: FormDataEntryValue) => {
    //   if (typeof email !== "string") return false;
    //   const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //   return re.test(email);
    // };
  
    const handleSubmit = (formData: FormData) => {
      setStatus(null);
      const nome = formData.get('name')
      const email = formData.get('email')
      const telefone = formData.get('telefone')
      const mensagem = formData.get('mensagem')
      const data = formData.get('data')
      const especialidades = formData.get('name')
  
      // if (
      //   !nome ||
      //   !email ||
      //   !telefone ||
      //   !mensagem ||
      //   !data ||
      //   !especialidades
      // ) {
      //   setStatus("⚠️ Por favor, preencha todos os campos obrigatórios.");
      //   return;
      // }
  
      // if (!validateEmail(email)) {
      //   setStatus("⚠️ Por favor, insira um e-mail válido.");
      //   return;
      // }
  
      setLoading(true);
  
      const templateParams = {
        nome,
        email,
        telefone,
        data,
        especialidades,
        mensagem,
      };
  
      emailjs
        .send(
          "service_092zaue",
          "template_yrje0me",
          templateParams,
          "irOtK26YzqWiLtyD8"
        )
        .then(() => {
          setStatus("✅ Mensagem enviada com sucesso!");
  
        })
        .catch(() => {
          setStatus("❌ Erro ao enviar. Tente novamente mais tarde.");
        })
        .finally(() => setLoading(false));
    };
    return {handleSubmit, loading, status}
}
