import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '../../utils/cn'

interface TechBadgeProps {
  name: string
  icon?: React.ReactNode
  level?: 'Avançado' | 'Intermediário' | 'Básico'
  className?: string
}

const levelColors = {
  'Avançado': 'text-accent',
  'Intermediário': 'text-amber',
  'Básico': 'text-[var(--muted)]',
}

const levelDots = {
  'Avançado': 3,
  'Intermediário': 2,
  'Básico': 1,
}

export function TechBadge({ name, icon, level, className }: TechBadgeProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      className={cn(
        'relative flex items-center gap-2 px-3 py-2 rounded-lg',
        'bg-[var(--card)] border border-[var(--border)]',
        'cursor-default select-none',
        className
      )}
      whileHover={{ scale: 1.05, y: -2 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        boxShadow: hovered ? '0 4px 16px rgba(0, 200, 150, 0.15)' : '0 1px 4px var(--shadow)',
        borderColor: hovered ? '#00C896' : 'var(--border)',
      }}
    >
      {icon && (
        <span className="text-lg flex-shrink-0" style={{ color: hovered ? '#00C896' : 'var(--muted)' }}>
          {icon}
        </span>
      )}
      <span className="font-body text-sm font-medium text-[var(--text)] whitespace-nowrap">
        {name}
      </span>

      <AnimatePresence>
        {hovered && level && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-20"
          >
            <div className="bg-[var(--card)] border border-[var(--border)] rounded-md px-2.5 py-1.5 shadow-lg whitespace-nowrap">
              <div className="flex items-center gap-1.5">
                <span className={cn('font-mono text-xs font-medium', levelColors[level])}>
                  {level}
                </span>
                <div className="flex gap-0.5">
                  {[1, 2, 3].map(dot => (
                    <div
                      key={dot}
                      className={cn(
                        'w-1.5 h-1.5 rounded-full',
                        dot <= levelDots[level] ? levelColors[level] : 'bg-[var(--border)]'
                      )}
                      style={{
                        backgroundColor: dot <= levelDots[level]
                          ? level === 'Avançado' ? '#00C896' : level === 'Intermediário' ? '#F5A623' : '#6B7280'
                          : undefined
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div
              className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0"
              style={{
                borderLeft: '4px solid transparent',
                borderRight: '4px solid transparent',
                borderTop: '4px solid var(--border)',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
