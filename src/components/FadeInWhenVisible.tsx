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

const variants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  rotateFade: {
    hidden: { opacity: 0, rotate: -15 },
    visible: { opacity: 1, rotate: 0 },
  },
}

export default function FadeInWhenVisible({
  children,
  animation,
  duration = 0.6,
  delay = 0,
}: Props) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants[animation]}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  )
}
