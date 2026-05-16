import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { SectionTitle } from '../ui/SectionTitle'
import { useInView } from '../../hooks/useInView'
import { staggerContainerVariants, fadeUpVariants } from '../../utils/constants'
import { cn } from '../../utils/cn'

type FormData = {
  name: string
  email: string
  message: string
}

const schema: yup.ObjectSchema<FormData> = yup.object({
  name: yup.string().min(2, 'Mínimo 2 caracteres').required('Nome obrigatório'),
  email: yup.string().email('Email inválido').required('Email obrigatório'),
  message: yup.string().min(10, 'Mínimo 10 caracteres').required('Mensagem obrigatória'),
})

const contactItems = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: 'Email',
    value: 'enrique.barbosasilva@gmail.com',
    href: 'mailto:enrique.barbosasilva@gmail.com',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: 'LinkedIn',
    value: 'linkedin.com/in/enriquebds',
    href: 'https://linkedin.com/in/enriquebds',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    label: 'GitHub',
    value: 'github.com/enriquebds',
    href: 'https://github.com/enriquebds',
  },
]

const inputBase = 'w-full font-body text-sm px-4 py-3 rounded-lg border bg-[var(--bg)] text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none transition-colors'

export function Contact() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<FormData>({ resolver: yupResolver(schema), mode: 'onTouched' })

  const onSubmit = (data: FormData) => {
    const subject = encodeURIComponent(`Contato via portfólio — ${data.name}`)
    const body = encodeURIComponent(`Nome: ${data.name}\nEmail: ${data.email}\n\n${data.message}`)
    // eslint-disable-next-line react-hooks/immutability
    window.location.href = `mailto:enrique.barbosasilva@gmail.com?subject=${subject}&body=${body}`
    reset()
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-24 md:py-32 relative"
    >
      <div
        className="absolute top-0 left-1/3 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,200,150,0.06) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          id="contact-heading"
          title="Contato"
          accent="// contact"
          subtitle="Pronto para conversar sobre projetos, oportunidades ou só um bom papo técnico."
        />

        <div ref={ref as React.RefObject<HTMLDivElement>} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact info */}
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.div
              variants={fadeUpVariants}
              className="mb-8 p-4 rounded-xl border border-accent/20 bg-accent/5"
            >
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse flex-shrink-0 mt-1.5" />
                <div>
                  <p className="font-body font-semibold text-[var(--text)] text-sm">Aberto a oportunidades</p>
                  <p className="font-mono text-xs text-accent mt-0.5">CLT ou PJ · Híbrido ou Remoto</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={staggerContainerVariants} className="space-y-4">
              {contactItems.map(item => (
                <motion.a
                  key={item.label}
                  variants={fadeUpVariants}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 rounded-xl border border-[var(--border)] bg-[var(--card)] group hover:border-accent transition-all"
                  whileHover={{ x: 4 }}
                >
                  <span className="text-[var(--muted)] group-hover:text-accent transition-colors flex-shrink-0">
                    {item.icon}
                  </span>
                  <div>
                    <p className="font-mono text-xs text-[var(--muted)]">{item.label}</p>
                    <p className="font-body text-sm text-[var(--text)] font-medium">{item.value}</p>
                  </div>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    className="ml-auto text-[var(--muted)] group-hover:text-accent opacity-0 group-hover:opacity-100 transition-all"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="p-6 md:p-8 rounded-2xl border border-[var(--border)] bg-[var(--card)]"
              style={{ boxShadow: '0 4px 24px var(--shadow)' }}
            >
              <h3 className="font-display font-bold text-lg text-[var(--text)] mb-6">
                Enviar mensagem
              </h3>

              <div className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="font-mono text-xs text-[var(--muted)] mb-1.5 block">
                    nome
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Seu nome"
                    {...register('name')}
                    aria-invalid={!!errors.name}
                    className={cn(inputBase, errors.name ? 'border-red-500 focus:border-red-500' : 'border-[var(--border)] focus:border-accent')}
                  />
                  {errors.name && (
                    <p className="mt-1.5 font-mono text-xs text-red-500">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="font-mono text-xs text-[var(--muted)] mb-1.5 block">
                    email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    {...register('email')}
                    aria-invalid={!!errors.email}
                    className={cn(inputBase, errors.email ? 'border-red-500 focus:border-red-500' : 'border-[var(--border)] focus:border-accent')}
                  />
                  {errors.email && (
                    <p className="mt-1.5 font-mono text-xs text-red-500">{errors.email.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="font-mono text-xs text-[var(--muted)] mb-1.5 block">
                    mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Olá, Enrique! Gostaria de conversar sobre..."
                    {...register('message')}
                    aria-invalid={!!errors.message}
                    className={cn(inputBase, 'resize-none', errors.message ? 'border-red-500 focus:border-red-500' : 'border-[var(--border)] focus:border-accent')}
                  />
                  {errors.message && (
                    <p className="mt-1.5 font-mono text-xs text-red-500">{errors.message.message}</p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full font-body font-semibold text-sm py-3 rounded-lg text-[#0F111A] bg-accent transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ boxShadow: '0 4px 16px rgba(0, 200, 150, 0.25)' }}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
                </motion.button>

                {isSubmitSuccessful && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center font-mono text-xs text-accent"
                  >
                    ✓ Mensagem enviada com sucesso!
                  </motion.p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
