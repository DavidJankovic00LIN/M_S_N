// components/FadeInWhenVisible.tsx
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  animation: 'fadeIn' | 'fadeUp' | 'slideLeft' | 'slideRight' | 'rotateFade'
  duration?: number
  delay?: number
}

export default function FadeInWhenVisible({
  children,
  animation,
  duration = 0.6,
  delay = 0,
}: Props) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  const variants = {
    fadeIn: { opacity: inView ? 1 : 0 },
    fadeUp: {
      opacity: inView ? 1 : 0,
      y: inView ? 0 : 20,
    },
    slideLeft: {
      opacity: inView ? 1 : 0,
      x: inView ? 0 : 50,
    },
    slideRight: {
      opacity: inView ? 1 : 0,
      x: inView ? 0 : -50,
    },
    rotateFade: {
      opacity: inView ? 1 : 0,
      rotate: inView ? 0 : -15,
    },
  }

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration, delay }}
      style={{ willChange: 'transform, opacity' }}
      variants={{
        visible: variants[animation],
        hidden: {
          opacity: 0,
          ...variants[animation],
        },
      }}
    >
      {children}
    </motion.div>
  )
}
