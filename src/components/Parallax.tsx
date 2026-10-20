'use client'

import { useCallback, useState } from 'react'
import Image from 'next/image'
import { useParallax } from 'react-scroll-parallax'

const Parallax = () => {
  const [target, setTarget] = useState<HTMLElement | undefined>(undefined)
  const setSection = useCallback((node: HTMLElement | null) => {
    setTarget(node ?? undefined)
  }, [])

  const parallax = useParallax<HTMLDivElement>({
    speed: -15,
    targetElement: target,
  })

  return (
    <section
      ref={setSection}
      className="relative h-[600px] flex items-center justify-center overflow-hidden"
    >
      <div ref={parallax.ref} className="absolute inset-0 -z-10 w-full h-[750px] -top-20">
        <Image
          src="/assets/paralax_1.jpg"
          alt="Parallax pozadina"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-0 z-10 bg-black/5" />
      </div>
    </section>
  )
}

export default Parallax
