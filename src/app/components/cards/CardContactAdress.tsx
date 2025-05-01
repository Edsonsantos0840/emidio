import { AdressFields } from "@/app/fields/AdressFields";
import Link from "next/link";

export default function CardContactAdress() {
  return (
    <section aria-labelledby="contact-address-title mt-6">
      <h2
        id="contact-address-title"
        className="text-3xl text-corEspecial font-semibold "
      >
        Endereços e Contatos
      </h2>
      <address className="not-italic space-y-6 text-base">
        {/* Unidade 1 */}
        <ul className="space-y-4 text-letra mt-6">
          {
            AdressFields.map((link, index) => (
              <li key={index}>
                <Link 
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:underline"
                >
                  {link.ico} <strong>{link.fone}</strong> {link.text}
                </Link>
              </li>
            ))
          }
        </ul>
      </address>
    </section>
  );
}
