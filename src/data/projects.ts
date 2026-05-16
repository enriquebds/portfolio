import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'DevFlow',
    description:
      'Uma ferramenta de produtividade para desenvolvedores — gerenciamento de snippets, notas técnicas e bookmarks com busca semântica e tags inteligentes.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'NestJS'],
    isComingSoon: true,
    featured: true,
  },
  {
    id: 'project-2',
    title: 'MapIoT Dashboard',
    description:
      'Dashboard open-source para visualização de dispositivos IoT em mapas interativos, com suporte a múltiplos protocolos e alertas em tempo real.',
    stack: ['React', 'TypeScript', 'Leaflet', 'GraphQL', 'WebSocket'],
    isComingSoon: true,
    featured: true,
  },
  {
    id: 'project-3',
    title: 'UI Components Library',
    description:
      'Biblioteca de componentes React acessíveis e altamente customizáveis, com suporte a dark mode, animações e documentação via Storybook.',
    stack: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'Storybook'],
    isComingSoon: true,
    featured: false,
  },
]
