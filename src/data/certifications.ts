import type { Certification } from '../types'

export const certifications: Certification[] = [
  {
    id: 'alura-react',
    title: 'React: desenvolvendo com JavaScript',
    issuer: 'Alura',
    year: '2022',
    type: 'certification',
    description: 'Fundamentos, hooks, gerenciamento de estado e boas práticas em React.',
  },
  {
    id: 'alura-typescript',
    title: 'TypeScript: evoluindo seu JavaScript',
    issuer: 'Alura',
    year: '2022',
    type: 'certification',
    description: 'Tipagem estática, interfaces, generics e integração com React.',
  },
  {
    id: 'alura-nextjs',
    title: 'Next.js: o React em produção',
    issuer: 'Alura',
    year: '2023',
    type: 'certification',
    description: 'SSR, SSG, App Router, otimizações e deploy em produção.',
  },
  {
    id: 'alura-nodejs',
    title: 'Node.js com Express',
    issuer: 'Alura',
    year: '2023',
    type: 'certification',
    description: 'APIs RESTful, middlewares, autenticação e integração com bancos de dados.',
  },
  {
    id: 'alura-graphql',
    title: 'GraphQL: construindo uma API com Apollo Server',
    issuer: 'Alura',
    year: '2023',
    type: 'certification',
    description: 'Schema, resolvers, queries, mutations e integração com frontend React.',
  },
  {
    id: 'alura-sql',
    title: 'SQL com PostgreSQL',
    issuer: 'Alura',
    year: '2023',
    type: 'certification',
    description: 'Modelagem, consultas avançadas, índices e otimização de performance.',
  },
  {
    id: 'alura-docker',
    title: 'Docker: criando e gerenciando containers',
    issuer: 'Alura',
    year: '2023',
    type: 'certification',
    description: 'Containers, imagens, Docker Compose e deploy de aplicações.',
  },
  {
    id: 'alura-git',
    title: 'Git e GitHub: controle e compartilhe seu código',
    issuer: 'Alura',
    year: '2022',
    type: 'certification',
    description: 'Versionamento, branches, pull requests e fluxo de trabalho colaborativo.',
  },
  {
    id: 'kenzie-fullstack',
    title: 'Formação Full-Stack Developer',
    issuer: 'Kenzie Academy Brasil',
    year: '2022',
    type: 'academic',
    description:
      'Bootcamp intensivo de 12 meses cobrindo desenvolvimento web full-stack com foco em React, Node.js, TypeScript e metodologias ágeis.',
  },
]

export const academicFormation: Certification[] = [
  {
    id: 'kenzie-bootcamp',
    title: 'Desenvolvimento Full-Stack',
    issuer: 'Kenzie Academy Brasil',
    year: '2022',
    type: 'academic',
    description:
      'Bootcamp intensivo de 12 meses. HTML, CSS, JavaScript, React, Python, Django, Node.js, TypeScript, SQL. Mais de 1.200 horas de formação prática.',
  },
]
