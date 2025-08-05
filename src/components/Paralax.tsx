'use client'

import{useRef} from 'react'
import Image from 'next/image'
import {useParallax} from 'react-scroll-parallax'

const Parallax = () => {

    const containerRef = useRef<HTMLDivElement>(null)

    const parallax = useParallax<HTMLDivElement>({
        speed: 10,
        targetElement: containerRef.current ?? undefined,
    })

    return(
        <section
      ref={containerRef}
      className="relative h-[550px] flex items-center justify-center overflow-hidden"
    >
      {/* Parallax pozadinska slika */}
      <div ref={parallax.ref} className="absolute inset-0 -z-10 bg-gray-100">
        <Image
          src="/M_S_slike_nove/pexels-goda-morgan-121487563-18649612.jpg"
          alt="Parallax pozadina"
          fill
          className="object-cover"
          priority
        />
      </div>
      
     
    </section>
    );
}
export default Parallax;