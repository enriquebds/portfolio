import { motion } from 'framer-motion'
import { SectionTitle } from '../ui/SectionTitle'
import { useInView } from '../../hooks/useInView'
import { experiences } from '../../data/experience'
import { fadeUpVariants, staggerContainerVariants } from '../../utils/constants'

export function Experience() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          id="experience-heading"
          title="Experiência"
          accent="// experience"
          subtitle="Onde construí produtos reais e aprendi com times incríveis."
        />

        <div ref={ref as React.RefObject<HTMLDivElement>} className="relative">
          <div
            className="absolute left-8 top-4 bottom-4 w-[2px] bg-gradient-to-b from-accent via-accent/30 to-transparent hidden md:block"
          />

          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-8"
          >
            {experiences.map(exp => (
              <motion.div
                key={exp.id}
                variants={fadeUpVariants}
                className="md:pl-20 relative"
              >
                <div className="absolute left-6 top-6 w-4 h-4 rounded-full border-2 border-accent bg-[var(--bg)] hidden md:flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                </div>

                <motion.div
                  whileHover={{ y: -2 }}
                  className="p-6 md:p-8 rounded-2xl border border-[var(--border)] bg-[var(--card)] transition-all"
                  style={{ boxShadow: '0 2px 20px var(--shadow)' }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-display font-bold text-xl text-[var(--text)]">
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span className="font-mono text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                            atual
                          </span>
                        )}
                      </div>
                      <p className="font-body text-lg font-semibold text-accent">
                        {exp.company}
                      </p>
                      <p className="font-mono text-sm text-[var(--muted)] mt-0.5">
                        {exp.location}
                      </p>
                    </div>
                    <span className="font-mono text-sm text-[var(--muted)] bg-[var(--bg)] px-3 py-1 rounded-lg border border-[var(--border)] whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <p className="font-body text-[var(--muted)] leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <span className="font-mono text-accent mt-1.5 flex-shrink-0 text-xs">▸</span>
                        <span className="font-body text-sm text-[var(--muted)] leading-relaxed">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map(tech => (
                      <span
                        key={tech}
                        className="font-mono text-xs px-2.5 py-1 rounded-md border border-[var(--border)] text-[var(--muted)] bg-[var(--bg)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
