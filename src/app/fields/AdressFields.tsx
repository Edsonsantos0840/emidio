import { ReactElement } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

interface AdressProps {
  ico: ReactElement;
  href: string
  fone?: string
  text: string
}

export const AdressFields : AdressProps[] =  [
  {
    ico: <FaMapMarkerAlt className="hover:scale-110 text-3xl md:text-4xl text-corEspecial hover:text-principal transition-all ease-in duration-300" />,
    href: "https://www.google.com/maps/place/R.+Dr.+Jo%C3%A3o+Mascarenhas+Neves,+67+-+Jardim+Novo+Botafogo,+Campinas+-+SP,+13070-220/@-22.8954324,-47.0743932,17z/data=!3m1!4b1!4m6!3m5!1s0x94c8c8a7407c7425:0x1bec6818a1b693d8!8m2!3d-22.8954324!4d-47.0718183!16s%2Fg%2F11pw0yjd_c?entry=ttu&g_ep=EgoyMDI1MDQyOC4wIKXMDSoASAFQAw%3D%3D",
    text: 'Dr. João Mascarenhas Neves, 67'
  },
  {
    ico:  <FaPhoneAlt className="hover:scale-110 text-3xl md:text-4xl text-corEspecial hover:text-principal transition-all ease-in duration-300" />,
    href:"https://api.whatsapp.com/send/?phone=5519991062455&text=Ol%C3%A1+visitei+seu+site%2C+quero+um+or%C3%A7amento.&type=phone_number&app_absent=0",
    fone: 'Fone',
    text: '(19) 99106-2455'
  },
  {
    ico: <FaMapMarkerAlt className="hover:scale-110 text-3xl md:text-4xl text-corEspecial hover:text-principal transition-all ease-in duration-300" />,
    href: "https://www.google.com/maps/place/R.+Dr.+Jo%C3%A3o+Mascarenhas+Neves,+67+-+Jardim+Novo+Botafogo,+Campinas+-+SP,+13070-220/@-22.8954324,-47.0743932,17z/data=!3m1!4b1!4m6!3m5!1s0x94c8c8a7407c7425:0x1bec6818a1b693d8!8m2!3d-22.8954324!4d-47.0718183!16s%2Fg%2F11pw0yjd_c?entry=ttu&g_ep=EgoyMDI1MDQyOC4wIKXMDSoASAFQAw%3D%3D",
    text: 'Dr. João Mascarenhas Neves, 67'
  },
  {
    ico: <FaPhoneAlt className="hover:scale-110 text-3xl md:text-4xl text-corEspecial hover:text-principal transition-all ease-in duration-300" />, 
    href:"https://api.whatsapp.com/send/?phone=5519991062455&text=Ol%C3%A1+visitei+seu+site%2C+quero+um+or%C3%A7amento.&type=phone_number&app_absent=0",
    fone: 'Fone',
    text: '(19) 99106-2455'
  },
  {
    ico: <FaEnvelope className="hover:scale-110 text-3xl md:text-4xl text-corEspecial hover:text-principal transition-all ease-in duration-300" />, 
    href: "mailto:emidioesa@gmail.com",
    text: 'espacoemidioesa@gmail.com'
  },
];