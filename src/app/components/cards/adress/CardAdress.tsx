"use client";

import Image from "next/image";


export default function CardAdress(props: {images: string[]} ) {

  return (
    <div className="relative w-[400px] h-[320px] md:w-[700px] md:h-[400px] lg:w-[800px] lg:h-[300px] mx-auto my-8">
      {/* Slide de Imagens */}
      {props.images.map((image, i) => (
        <Image
          key={i}
          src={image}
          alt={`Slide ${i + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 33vw"
          quality={100}
          className={`absolute object-cover transition-opacity duration-1000 "
          }`}
        />
      ))}
    </div>
  );
}
