'use client'
import { useEffect, useState } from "react";

export default function Home() {
 const texto = 'Olá, meu nome é: Edson Santos.'
 const [animaTesto, setAnimaTexto] = useState<string>('')
 const [index, setIndex] = useState<number>(0)

useEffect(() => {
  if(index < texto.length){
  var carrega =  setTimeout(() => {
      setAnimaTexto((prev) => prev + texto[index] )
      setIndex((prev) => prev +1 )
    }, 100 )
    return () => clearTimeout(carrega)
  }else if(index == texto.length){
    setTimeout(() => {
      setAnimaTexto('')
      setIndex(0)
    }, 5000 )
  }
},[index] )

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <h1>{animaTesto}</h1>
    </main>
  );
}
