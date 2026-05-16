import type { Skill } from '../types'

export const skills: Omit<Skill, 'icon'>[] = [
  { name: 'React', level: 'Avançado', category: 'Frontend' },
  { name: 'TypeScript', level: 'Avançado', category: 'Frontend' },
  { name: 'JavaScript', level: 'Avançado', category: 'Frontend' },
  { name: 'Tailwind CSS', level: 'Avançado', category: 'Frontend' },
  { name: 'Framer Motion', level: 'Intermediário', category: 'Frontend' },
  { name: 'Redux Toolkit', level: 'Avançado', category: 'Frontend' },
  { name: 'React Router', level: 'Avançado', category: 'Frontend' },
  { name: 'Styled Components', level: 'Intermediário', category: 'Frontend' },
  { name: 'Next.js', level: 'Intermediário', category: 'Frontend' },
  { name: 'Vite', level: 'Avançado', category: 'Frontend' },
  { name: 'Node.js', level: 'Intermediário', category: 'Backend' },
  { name: 'NestJS', level: 'Intermediário', category: 'Backend' },
  { name: 'GraphQL', level: 'Intermediário', category: 'Backend' },
  { name: 'PostgreSQL', level: 'Intermediário', category: 'Backend' },
  { name: 'REST APIs', level: 'Avançado', category: 'Backend' },
  { name: 'WebSocket', level: 'Intermediário', category: 'Backend' },
  { name: 'Git', level: 'Avançado', category: 'Ferramentas & DevOps' },
  { name: 'Docker', level: 'Intermediário', category: 'Ferramentas & DevOps' },
  { name: 'GitHub Actions', level: 'Intermediário', category: 'Ferramentas & DevOps' },
  { name: 'Figma', level: 'Intermediário', category: 'Ferramentas & DevOps' },
  { name: 'Vitest', level: 'Avançado', category: 'Ferramentas & DevOps' },
  { name: 'ESLint', level: 'Avançado', category: 'Ferramentas & DevOps' },
  { name: 'Code Review', level: 'Avançado', category: 'Soft Skills' },
  { name: 'Mentoria', level: 'Intermediário', category: 'Soft Skills' },
  { name: 'Metodologias Ágeis', level: 'Avançado', category: 'Soft Skills' },
  { name: 'Comunicação Técnica', level: 'Avançado', category: 'Soft Skills' },
  { name: 'Trabalho em Equipe', level: 'Avançado', category: 'Soft Skills' },
]

export const skillCategories = [
  'Frontend',
  'Backend',
  'Ferramentas & DevOps',
  'Soft Skills',
] as const
