'use client'

import{useRef} from 'react'
import Image from 'next/image'
import {useParallax} from 'react-scroll-parallax'

const Parallax = () => {

    const containerRef = useRef<HTMLDivElement>(null)

    const parallax = useParallax<HTMLDivElement>({
        speed: -15,
        targetElement: containerRef.current ?? undefined,
    })

    return(
        <section
      ref={containerRef}
      className="relative h-[550px] flex items-center justify-center overflow-hidden"
    >
      {/* Parallax pozadinska slika */}
      <div ref={parallax.ref} className="absolute inset-0 -z-10 w-full h-[750px] -top-20">
        <Image
          src="/assets/paralax_1.png"
          alt="Parallax pozadina"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>
      
     
    </section>
    );
}
export default Parallax;