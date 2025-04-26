import Link from "next/link";

export default function CardDetalhes() {
  return (
    <div className=" alinha3 gap-3 md:gap-14 pt-4 md:pt-4">
      <Link href={"/contato"} className="linkHead rounded-md">
        Agende um horário
      </Link>
      <Link href={"/sobre"} className="linkHead rounded-md">
        Saiba mais..
      </Link>
    </div>
  );
}
