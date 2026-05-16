import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [isPointer, setIsPointer] = useState(false)

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches
    if (isMobile) return

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!isVisible) setIsVisible(true)

      const target = e.target as HTMLElement
      const cursorStyle = window.getComputedStyle(target).cursor
      setIsPointer(cursorStyle === 'pointer')
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [mouseX, mouseY, isVisible])

  if (typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches) {
    return null
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999]"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isPointer ? 1.8 : 1,
        }}
        transition={{ duration: 0.15 }}
      >
        <div
          style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: '#00C896',
          }}
        />
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99998]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: isVisible ? 0.3 : 0,
          scale: isPointer ? 2.5 : 1,
        }}
        transition={{ duration: 0.15 }}
      >
        <div
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            border: '1px solid #00C896',
          }}
        />
      </motion.div>
    </>
  )
}
