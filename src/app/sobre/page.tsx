import CardHead from "../components/cards/CardHead"
import ima from '../../../public/image/17.png'
import pscicologa from '../../../public/image/60.png'
import massoterapeuta from '../../../public/image/61.png'
import Image from "next/image"
import Link from "next/link"

function Sobre() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-20">
    <CardHead image={ima} testo="Saúde do corpo e da mente." descrição="Determinação e satisfação em oferecer o melhor para nossos paciêntes." muda={'md:block'} tamanho={'md:w-[160%] lg:w-[67%] xl:w-[50%]'}/>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 ease-in duration-300">
  <div className="rounded-lg shadow-lg transform transition hover:-translate-y-2 hover:shadow-2xl bg-custom-gradient p-10 flex flex-col justify-center items-center group ease-in duration-300">
    <h2 className="text-2xl font-semibold mb-4  text-[var(--corLetra2)]">Psicologia</h2>
    <Image src={pscicologa} alt="psicólogo" width={200} height={200} className="w-[250px] h-auto rounded-lg mb-4" />
    <p className="hidden text-gray-600 leading-relaxed mb-4 group-hover:block">
    Nossa psicóloga está aqui para oferecer orientação, apoio emocional para lidar com desafios pessoais e emocionais. temos sessões individuais e terapias focadas em ajudar você a explorar seus pensamentos, sentimentos e comportamentos, promovendo o autoconhecimento e o crescimento pessoal.
    </p>
    <Link href={'/contato'} className="bg-[var(--corLetra2)] text-[var(--corFundo)] hover:bg-[var(--corFundo)] hover:text-[var(--corLetra2)] p-1 rounded-sm border-2 border-[var(--corLetra2)] shadow-md lg:w-[18vw]  md:w-[26vw] w-[40vw] text-[.9rem] md:text-[1.1rem] text-center font-semibold hover:scale-105 ease-in duration-300 " >Agende um Horário</Link>
  </div>

  <div className="rounded-lg p-10 shadow-lg transform transition hover:-translate-y-2 hover:shadow-2xl bg-custom-gradient flex flex-col justify-center items-center group ease-in duration-300">
    <h2 className="text-2xl font-semibold mb-4  text-[var(--corLetra2)]">Massoterapia</h2>
    <Image src={massoterapeuta} alt="massoterapeuta" width={200} height={200} className="w-[220px] h-auto rounded-lg mb-4" />
    <p className="hidden text-gray-600 leading-relaxed mb-4 group-hover:block">
    Nosso terapeuta altamente especializado oferece uma variedade de técnicas de massagem destinadas a aliviar a tensão muscular, melhorar a circulação e promover o relaxamento profundo. Dores físicas muitas.
    </p>
    <Link href={'/contato'} className="bg-[var(--corLetra2)] text-[var(--corFundo)] hover:bg-[var(--corFundo)] hover:text-[var(--corLetra2)] p-1 rounded-sm border-2 border-[var(--corLetra2)] shadow-md lg:w-[18vw]  md:w-[26vw] w-[40vw] text-[.9rem] md:text-[1.1rem] text-center font-semibold hover:scale-105 ease-in duration-300 " >Agende um Horário</Link>
  </div>
</div>

  </main>
  )
}

export default Sobre