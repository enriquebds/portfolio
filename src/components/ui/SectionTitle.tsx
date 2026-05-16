import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'

interface SectionTitleProps {
  title: string
  subtitle?: string
  accent?: string
  id?: string
}

export function SectionTitle({ title, subtitle, accent, id }: SectionTitleProps) {
  const { ref, isInView } = useInView({ threshold: 0.3 })

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="mb-12 md:mb-16"
    >
      {accent && (
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="font-mono text-sm text-accent mb-2 block"
        >
          {accent}
        </motion.span>
      )}
      <motion.h2
        id={id}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-display text-4xl md:text-5xl font-bold text-[var(--text)] leading-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-3 text-[var(--muted)] font-body text-lg max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="mt-4 h-[2px] w-16 bg-accent origin-left"
      />
    </div>
  )
}
