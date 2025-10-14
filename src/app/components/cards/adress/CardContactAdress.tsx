import { AdressFields } from "@/app/fields/AdressFields";
import Link from "next/link";

export default function CardContactAdress() {
  return (
    <section aria-labelledby="contact-address-title">
      <h2
        id="contact-address-title"
        className="text-3xl text-corEspecial font-semibold mt-2 mb-8"
      >
        Endereços e Contatos
      </h2>
      <address className="not-italic space-y-6 text-base">
        {/* Unidade 1 */}
        <ul className="space-y-4 text-letra ">
          {
            AdressFields.map((link, index) => (
              <li key={index} className="text-lg md:text-xl">
                <Link 
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 md:gap-6 hover:underline"
                >
                  {link.ico}  {link.text}
                </Link>
              </li>
            ))
          }
        </ul>
      </address>
    </section>
  );
}
