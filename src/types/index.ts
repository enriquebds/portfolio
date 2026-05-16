export interface Experience {
  id: string
  company: string
  role: string
  period: string
  location: string
  description: string
  bullets: string[]
  stack: string[]
  current: boolean
}

export interface Project {
  id: string
  title: string
  description: string
  stack: string[]
  githubUrl?: string
  demoUrl?: string
  imageUrl?: string
  isComingSoon: boolean
  featured: boolean
}

export interface Skill {
  name: string
  level: 'Avançado' | 'Intermediário' | 'Básico'
  icon?: React.ReactNode
  category: 'Frontend' | 'Backend' | 'Ferramentas & DevOps' | 'Soft Skills'
}

export interface Certification {
  id: string
  title: string
  issuer: string
  year: string
  url?: string
  type: 'certification' | 'academic'
  description?: string
}

export interface Card {
  id: string
  pairId: string
  name: string
  isFlipped: boolean
  isMatched: boolean
}

export type GameState = 'idle' | 'playing' | 'won'

export interface UseMemoryGameReturn {
  cards: Card[]
  attempts: number
  time: number
  gameState: GameState
  bestScore: number | null
  handleCardClick: (id: string) => void
  resetGame: () => void
}
