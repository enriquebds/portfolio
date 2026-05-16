import { motion, AnimatePresence } from 'framer-motion'
import { useMemoryGame } from '../../hooks/useMemoryGame'

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

const techColors: Record<string, string> = {
  React: '#61DAFB',
  TypeScript: '#3178C6',
  JavaScript: '#F7DF1E',
  NodeJS: '#339933',
  Docker: '#2496ED',
  Git: '#F05032',
  Vite: '#646CFF',
  PostgreSQL: '#336791',
  GraphQL: '#E10098',
  NestJS: '#E0234E',
}

const techSymbols: Record<string, string> = {
  React: '⛛',
  TypeScript: 'TS',
  JavaScript: 'JS',
  NodeJS: '⬡',
  Docker: '🐳',
  Git: '⌥',
  Vite: '⚡',
  PostgreSQL: '🐘',
  GraphQL: '◈',
  NestJS: '🐈',
}

function CardBack() {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center rounded-xl"
      style={{ backfaceVisibility: 'hidden', background: 'linear-gradient(135deg, #1A1D2E 0%, #0F111A 100%)', border: '1px solid rgba(0,200,150,0.2)' }}
    >
      <div className="grid grid-cols-3 gap-1 opacity-20">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-sm"
            style={{ background: '#00C896' }}
          />
        ))}
      </div>
      <span
        className="absolute font-display font-bold text-lg"
        style={{ color: 'rgba(0,200,150,0.15)' }}
      >
        EB
      </span>
    </div>
  )
}

function CardFront({ name }: { name: string }) {
  const color = techColors[name] || '#00C896'
  const symbol = techSymbols[name] || name[0]

  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center rounded-xl gap-1"
      style={{
        backfaceVisibility: 'hidden',
        transform: 'rotateY(180deg)',
        background: 'linear-gradient(135deg, #1A1D2E 0%, #12151F 100%)',
        border: `1px solid ${color}40`,
        boxShadow: `0 0 20px ${color}20`,
      }}
    >
      <span className="text-2xl md:text-3xl">{symbol}</span>
      <span
        className="font-mono text-xs font-medium"
        style={{ color }}
      >
        {name}
      </span>
    </div>
  )
}

export function MemoryGame() {
  const { cards, attempts, time, gameState, bestScore, handleCardClick, resetGame } = useMemoryGame()

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <div className="flex gap-4">
          <div className="text-center">
            <p className="font-mono text-xs text-[var(--muted)] mb-0.5">Tentativas</p>
            <p className="font-display text-2xl font-bold text-[var(--text)]">{attempts}</p>
          </div>
          <div className="text-center">
            <p className="font-mono text-xs text-[var(--muted)] mb-0.5">Tempo</p>
            <p className="font-display text-2xl font-bold text-accent">{formatTime(time)}</p>
          </div>
          {bestScore !== null && (
            <div className="text-center">
              <p className="font-mono text-xs text-[var(--muted)] mb-0.5">Recorde</p>
              <p className="font-display text-2xl font-bold text-amber">{bestScore}</p>
            </div>
          )}
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={resetGame}
          className="font-mono text-sm px-4 py-2 rounded-lg border border-[var(--border)] text-[var(--muted)] hover:text-accent hover:border-accent transition-colors"
        >
          ↺ Reiniciar
        </motion.button>
      </div>

      <div className="relative">
        <div className="grid grid-cols-5 gap-2 md:gap-3">
          {cards.map(card => (
            <motion.div
              key={card.id}
              className="relative cursor-pointer"
              style={{ aspectRatio: '1', perspective: '600px' }}
              whileHover={!card.isMatched && !card.isFlipped ? { scale: 1.05 } : {}}
              whileTap={!card.isMatched && !card.isFlipped ? { scale: 0.97 } : {}}
              onClick={() => handleCardClick(card.id)}
            >
              <motion.div
                className="relative w-full h-full"
                style={{ transformStyle: 'preserve-3d' }}
                animate={{ rotateY: card.isFlipped || card.isMatched ? 180 : 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <CardBack />
                <CardFront name={card.name} />
              </motion.div>
              {card.isMatched && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center z-10"
                  style={{ background: '#00C896', fontSize: '8px' }}
                >
                  ✓
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {gameState === 'won' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col items-center justify-center rounded-xl z-20"
              style={{
                background: 'rgba(15, 17, 26, 0.92)',
                backdropFilter: 'blur(4px)',
              }}
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className="text-center"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-6xl mb-4"
                >
                  🎉
                </motion.div>
                <h3 className="font-display text-2xl font-bold text-white mb-1">
                  Você venceu!
                </h3>
                <p className="font-mono text-sm text-accent mb-1">
                  {attempts} tentativas · {formatTime(time)}
                </p>
                {bestScore !== null && bestScore === attempts && (
                  <p className="font-mono text-xs text-amber mb-4">
                    ✨ Novo recorde!
                  </p>
                )}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={resetGame}
                  className="mt-4 font-mono text-sm px-6 py-2 rounded-lg bg-accent text-[#0F111A] font-medium"
                >
                  Jogar novamente
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {gameState === 'idle' && (
        <p className="mt-4 text-center font-mono text-xs text-[var(--muted)]">
          Clique em qualquer carta para começar
        </p>
      )}
    </div>
  )
}
