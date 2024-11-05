    //Módulo Externo.
import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function UseForm() {
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
  return {captura, nome, setNome, email, setEmail, fone, setFone, esp, setEsp, datas, setDatas, mensagem, setMensagem, recado, setRecado }
}
