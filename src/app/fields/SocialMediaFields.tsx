import { ReactElement } from "react";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

interface SocialMediaProps {
  ico: ReactElement;
  href: string
}

export const SocialMediaFields : SocialMediaProps[] =  [
  {
    ico: <BsFacebook className="hover:scale-150 text-3xl md:text-4xl text-blue-600 hover:text-blue-800 transition-all ease-in duration-300" />,
    href: "https://www.facebook.com/profile.php?id=100095584324495&mibextid=LQQJ4d",
  },
  {
    ico:  <BsInstagram className="hover:scale-150 text-3xl md:text-4xl text-[#ecac48] hover:text-orange-400 transition-all ease-in duration-300" />,
    href:"https://www.instagram.com/espaco_emidiosa.sx/",
  },
  {
    ico: <BsWhatsapp className="hover:scale-150 text-3xl md:text-4xl text-green-500 hover:text-green-700 transition-all ease-in duration-300" />,
    href: "https://wa.me/5519991062455?text=Ol%C3%A1+visitei+seu+site%2C+quero+um+or%C3%A7amento.",
  },
  {
    ico: <FaLinkedin className="hover:scale-150 text-3xl md:text-4xl text-blue-800 hover:text-blue-900 transition-all ease-in duration-300" />, 
    href: "/",
  },
];