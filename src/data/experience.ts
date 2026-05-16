import type { Experience } from '../types'

export const experiences: Experience[] = [
  {
    id: 'group-link-one',
    company: 'Group Link One',
    role: 'Front-end Engineer',
    period: 'Mar 2023 — Presente',
    location: 'Vila Olímpia, SP',
    description:
      'Desenvolvimento de plataformas B2B SaaS focadas em AIoT e smart cities, com foco em performance, escalabilidade e experiência do usuário.',
    bullets: [
      'Desenvolveu e manteve dashboards de monitoramento em tempo real para soluções AIoT e smart cities, utilizando React, TypeScript e Redux Toolkit',
      'Implementou mais de 20 custom React hooks reutilizáveis, reduzindo duplicação de código e melhorando a consistência entre times',
      'Liderou a migração de projetos legados de JavaScript para TypeScript, aumentando a confiabilidade e reduzindo bugs em produção',
      'Colaborou diretamente com equipe de design (Figma) na criação de um design system interno com componentes acessíveis e responsivos',
      'Integrou APIs REST e GraphQL para exibição de dados em tempo real em mapas interativos (Leaflet, Mapbox)',
      'Mentoreou desenvolvedores juniores em code reviews, boas práticas de React e padrões de arquitetura front-end',
      'Configurou pipelines de CI/CD com GitHub Actions e padronizou fluxos de desenvolvimento com ESLint, Prettier e Husky',
      'Aplicou testes unitários e de integração com Vitest e React Testing Library, atingindo cobertura de 80%+ em módulos críticos',
      'Otimizou bundle size e performance de carregamento com lazy loading, code splitting e memoization estratégica',
      'Participou ativamente de cerimônias ágeis (Daily, Sprint Planning, Retrospectiva) em squads multidisciplinares',
    ],
    stack: [
      'React',
      'TypeScript',
      'Redux Toolkit',
      'GraphQL',
      'Node.js',
      'NestJS',
      'PostgreSQL',
      'Docker',
      'Tailwind CSS',
      'Figma',
      'Vitest',
      'GitHub Actions',
    ],
    current: true,
  },
]
