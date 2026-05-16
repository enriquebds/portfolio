import { motion } from 'framer-motion'
import { SectionTitle } from '../ui/SectionTitle'
import { useInView } from '../../hooks/useInView'
import { certifications, academicFormation } from '../../data/certifications'
import { staggerContainerVariants, cardVariants } from '../../utils/constants'

const issuerColors: Record<string, string> = {
  'Alura': '#00C7B7',
  'Kenzie Academy Brasil': '#F5A623',
}

export function Certifications() {
  const { ref, isInView } = useInView({ threshold: 0.08 })

  const certs = certifications.filter(c => c.type === 'certification')

  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          id="certifications-heading"
          title="Formação"
          accent="// education"
          subtitle="Certificações e formação acadêmica que moldaram minha carreira."
        />

        <div ref={ref as React.RefObject<HTMLDivElement>}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h3 className="font-mono text-sm text-accent mb-5">// formação acadêmica</h3>
            <div className="space-y-4">
              {academicFormation.map(item => (
                <motion.div
                  key={item.id}
                  whileHover={{ y: -2 }}
                  className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--card)]"
                  style={{
                    borderLeft: `3px solid ${issuerColors[item.issuer] || '#00C896'}`,
                    boxShadow: '0 2px 16px var(--shadow)',
                  }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                    <div>
                      <h4 className="font-display font-bold text-lg text-[var(--text)]">
                        {item.title}
                      </h4>
                      <p
                        className="font-body font-medium mt-0.5"
                        style={{ color: issuerColors[item.issuer] || '#00C896' }}
                      >
                        {item.issuer}
                      </p>
                    </div>
                    <span className="font-mono text-sm text-[var(--muted)] bg-[var(--bg)] px-3 py-1 rounded-lg border border-[var(--border)]">
                      {item.year}
                    </span>
                  </div>
                  {item.description && (
                    <p className="font-body text-sm text-[var(--muted)] leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div>
            <h3 className="font-mono text-sm text-accent mb-5">// certificações</h3>
            <motion.div
              variants={staggerContainerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {certs.map(cert => (
                <motion.div
                  key={cert.id}
                  variants={cardVariants}
                  whileHover={{ y: -4, boxShadow: '0 8px 24px var(--shadow)' }}
                  className="p-5 rounded-xl border border-[var(--border)] bg-[var(--card)] cursor-default"
                  style={{ transition: 'box-shadow 0.2s, transform 0.2s' }}
                >
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span
                      className="font-mono text-xs px-2 py-0.5 rounded-full border"
                      style={{
                        color: issuerColors[cert.issuer] || '#00C896',
                        borderColor: `${issuerColors[cert.issuer] || '#00C896'}40`,
                        background: `${issuerColors[cert.issuer] || '#00C896'}10`,
                      }}
                    >
                      {cert.issuer}
                    </span>
                    <span className="font-mono text-xs text-[var(--muted)]">{cert.year}</span>
                  </div>
                  <h4 className="font-body font-semibold text-sm text-[var(--text)] leading-snug mb-2">
                    {cert.title}
                  </h4>
                  {cert.description && (
                    <p className="font-body text-xs text-[var(--muted)] leading-relaxed">
                      {cert.description}
                    </p>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
