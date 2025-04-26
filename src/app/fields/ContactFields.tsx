import { ReactElement } from "react";
import { FaEnvelope, FaPhone, FaUser } from "react-icons/fa";

interface ContactProps {
  ico: ReactElement;
  type: string;
  name: string;
  placeholder?: string;
  ariaLabel: string;
}

export const ContactFields : ContactProps[] =  [
  {
    ico: <FaUser className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />,
    type: "text",
    name: "nome",
    placeholder: "Seu Nome",
    ariaLabel:"Nome"
  },
  {
    ico: <FaEnvelope className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />,
    type:"email",
    name:"email",
    placeholder:"Seu Email",
    ariaLabel:"email",
  },
  {
    ico: <FaPhone className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />,
    type: "tel",
    name: "telefone",
    placeholder: "Seu Telefone",
    ariaLabel:"telefone"
  },
  {
    ico:  <svg
    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none "
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    width="20"
    height="20"
    
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>,
    type: "date",
    name: "datas",
    ariaLabel:"Data"
  },
];
