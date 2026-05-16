import { motion } from 'framer-motion'
import { SectionTitle } from '../ui/SectionTitle'
import { useInView } from '../../hooks/useInView'
import { projects } from '../../data/projects'
import { staggerContainerVariants, cardVariants } from '../../utils/constants'

export function Projects() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-24 md:py-32 relative overflow-hidden"
    >
      <div
        className="absolute top-20 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(245, 166, 35, 0.06) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          id="projects-heading"
          title="Projetos"
          accent="// projects"
          subtitle="Projetos pessoais em construção — volte em breve."
        />

        <div ref={ref as React.RefObject<HTMLDivElement>}>
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map(project => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                className="group relative rounded-2xl overflow-hidden"
                style={{
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 4px 24px var(--shadow)',
                }}
                whileHover={{ y: -4 }}
              >
                <div
                  className="h-32 relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,200,150,0.08) 0%, rgba(0,145,255,0.08) 100%)',
                  }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `
                        linear-gradient(to right, rgba(0,200,150,0.05) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(0,200,150,0.05) 1px, transparent 1px)
                      `,
                      backgroundSize: '20px 20px',
                    }}
                  />
                  <div className="absolute top-4 right-4">
                    <span
                      className="font-mono text-xs px-2.5 py-1 rounded-full border"
                      style={{
                        background: 'rgba(245, 166, 35, 0.1)',
                        borderColor: 'rgba(245, 166, 35, 0.3)',
                        color: '#F5A623',
                      }}
                    >
                      em breve
                    </span>
                  </div>
                  <div
                    className="absolute -top-6 -left-6 w-24 h-24 rounded-full"
                    style={{ background: 'rgba(0,200,150,0.15)', filter: 'blur(20px)' }}
                  />
                  <div
                    className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full"
                    style={{ background: 'rgba(0,145,255,0.1)', filter: 'blur(16px)' }}
                  />
                </div>

                <div className="p-6">
                  <h3 className="font-display font-bold text-lg text-[var(--text)] mb-2">
                    {project.title}
                  </h3>
                  <p className="font-body text-sm text-[var(--muted)] leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.stack.map(tech => (
                      <span
                        key={tech}
                        className="font-mono text-xs px-2 py-0.5 rounded bg-[var(--bg)] border border-[var(--border)] text-[var(--muted)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <button
                      disabled
                      className="flex items-center gap-1.5 font-mono text-xs px-3 py-2 rounded-lg border border-[var(--border)] text-[var(--muted)] opacity-40 cursor-not-allowed"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      GitHub
                    </button>
                    <button
                      disabled
                      className="flex items-center gap-1.5 font-mono text-xs px-3 py-2 rounded-lg bg-accent/10 text-accent border border-accent/20 opacity-40 cursor-not-allowed"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      Demo
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="mt-8 text-center font-mono text-sm text-[var(--muted)]"
          >
            // Projetos pessoais em construção — volte em breve 🚧
          </motion.p>
        </div>
      </div>
    </section>
  )
}
