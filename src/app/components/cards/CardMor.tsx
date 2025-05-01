import Link from "next/link";

export default function CardMor({sty}: {sty?: string}) {
  return (
    <div className={`flex  gap-8 ${sty}`}>
    <Link
      href="https://api.whatsapp.com/send/?phone=5519991062455&text=Ol%C3%A1+visitei+seu+site%2C+quero+um+or%C3%A7amento.&type=phone_number&app_absent=0"
      target="_blank"
      className="px-6 md:px-4 py-3 bg-letra text-xl md:text-base text-corLetra lg:text-principal rounded-full font-semibold hover:bg-principal hover:text-letra transition"
    >
      Entre em Contato.
    </Link>
    <Link
      href="https://emidio.vercel.app/sobre"
      target="_blank"
      className="px-10 md:px6 py-3 bg-letra text-xl  md:text-base text-corLetra lg:text-principal rounded-full font-semibold hover:bg-principal hover:text-letra transition"
    >
      Saiba mais
    </Link>
    </div>
  )
}
