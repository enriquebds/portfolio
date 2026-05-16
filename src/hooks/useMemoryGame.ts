import { useState, useEffect, useRef, useCallback } from 'react'
import type { Card, GameState, UseMemoryGameReturn } from '../types'

const TECH_NAMES = [
  'React',
  'TypeScript',
  'JavaScript',
  'NodeJS',
  'Docker',
  'Git',
  'Vite',
  'PostgreSQL',
  'GraphQL',
  'NestJS',
]

function fisherYates<T>(array: T[]): T[] {
  const arr = [...array]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

function createCards(): Card[] {
  const pairs = TECH_NAMES.flatMap(name => [
    { id: `${name}-a`, pairId: name, name, isFlipped: false, isMatched: false },
    { id: `${name}-b`, pairId: name, name, isFlipped: false, isMatched: false },
  ])
  return fisherYates(pairs)
}

export function useMemoryGame(): UseMemoryGameReturn {
  const [cards, setCards] = useState<Card[]>(createCards)
  const [attempts, setAttempts] = useState(0)
  const [time, setTime] = useState(0)
  const [gameState, setGameState] = useState<GameState>('idle')
  const [bestScore, setBestScore] = useState<number | null>(() => {
    const stored = localStorage.getItem('memoryBestScore')
    return stored ? parseInt(stored, 10) : null
  })

  const flippedIds = useRef<string[]>([])
  const isChecking = useRef(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (gameState === 'playing') {
      timerRef.current = setInterval(() => {
        setTime(prev => prev + 1)
      }, 1000)
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current)
        timerRef.current = null
      }
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [gameState])

  const handleCardClick = useCallback((id: string) => {
    if (isChecking.current) return
    if (flippedIds.current.length >= 2) return

    setCards(prev => {
      const card = prev.find(c => c.id === id)
      if (!card || card.isFlipped || card.isMatched) return prev
      return prev.map(c => c.id === id ? { ...c, isFlipped: true } : c)
    })

    setCards(prev => {
      const card = prev.find(c => c.id === id)
      if (!card || card.isMatched) return prev
      if (flippedIds.current.includes(id)) return prev

      flippedIds.current = [...flippedIds.current, id]

      if (flippedIds.current.length === 1) {
        setGameState(gs => gs === 'idle' ? 'playing' : gs)
      }

      if (flippedIds.current.length === 2) {
        isChecking.current = true
        setAttempts(a => a + 1)

        const [firstId, secondId] = flippedIds.current
        const first = prev.find(c => c.id === firstId)
        const second = prev.find(c => c.id === secondId)

        if (first && second && first.pairId === second.pairId) {
          flippedIds.current = []
          isChecking.current = false

          const newCards = prev.map(c =>
            c.id === firstId || c.id === secondId
              ? { ...c, isFlipped: true, isMatched: true }
              : c
          )

          const allMatched = newCards.every(c => c.isMatched)
          if (allMatched) {
            setGameState('won')
            setAttempts(prevAttempts => {
              const score = prevAttempts
              setBestScore(bs => {
                const newBest = bs === null || score < bs ? score : bs
                localStorage.setItem('memoryBestScore', String(newBest))
                return newBest
              })
              return prevAttempts
            })
          }

          return newCards
        } else {
          const savedFirst = firstId
          const savedSecond = secondId
          setTimeout(() => {
            setCards(c =>
              c.map(card =>
                (card.id === savedFirst || card.id === savedSecond) && !card.isMatched
                  ? { ...card, isFlipped: false }
                  : card
              )
            )
            flippedIds.current = []
            isChecking.current = false
          }, 800)
        }
      }

      return prev
    })
  }, [])

  const resetGame = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    flippedIds.current = []
    isChecking.current = false
    setCards(createCards())
    setAttempts(0)
    setTime(0)
    setGameState('idle')
  }, [])

  return { cards, attempts, time, gameState, bestScore, handleCardClick, resetGame }
}
