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

  const getVariants = () => {
    switch (animation) {
      case 'fadeIn':
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        }
      case 'fadeUp':
        return {
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }
      case 'slideLeft':
        return {
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 }
        }
      case 'slideRight':
        return {
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 }
        }
      case 'rotateFade':
        return {
          hidden: { opacity: 0, rotate: -15 },
          visible: { opacity: 1, rotate: 0 }
        }
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={getVariants()}
      transition={{ duration, delay }}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.div>
  )
}
