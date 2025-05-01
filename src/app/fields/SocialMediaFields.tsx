import { ReactElement } from "react";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

interface SocialMediaProps {
  ico: ReactElement;
  href: string
}

export const SocialMediaFields : SocialMediaProps[] =  [
  {
    ico: <BsFacebook className="hover:scale-150 text-3xl md:text-4xl text-corEspecial hover:text-principal transition-all ease-in duration-300" />,
    href: "https://www.facebook.com/people/Emidio-s%C3%A1-psicologia/100095584324495/?mibextid=LQQJ4d",
  },
  {
    ico:  <BsInstagram className="hover:scale-150 text-3xl md:text-4xl text-corEspecial hover:text-principal transition-all ease-in duration-300" />,
    href:"https://www.instagram.com/espaco_emidiosa.sx/",
  },
  {
    ico: <BsWhatsapp className="hover:scale-150 text-3xl md:text-4xl text-corEspecial hover:text-principal transition-all ease-in duration-300" />,
    href: "https://api.whatsapp.com/send/?phone=5519991062455&text=Ol%C3%A1+visitei+seu+site%2C+quero+um+or%C3%A7amento.&type=phone_number&app_absent=0",
  },
  {
    ico: <FaLinkedin className="hover:scale-150 text-3xl md:text-4xl text-corEspecial hover:text-principal transition-all ease-in duration-300" />, 
    href: "/",
  },
];