import { motion } from 'framer-motion'
import {
  SiReact, SiTypescript, SiJavascript, SiNodedotjs,
  SiDocker, SiGit, SiVite, SiPostgresql, SiGraphql,
  SiNestjs, SiRedux, SiTailwindcss, SiStyledcomponents,
  SiReactrouter, SiFigma, SiVitest, SiNextdotjs, SiEslint,
  SiGithubactions,
} from 'react-icons/si'
import { SectionTitle } from '../ui/SectionTitle'
import { TechBadge } from '../ui/TechBadge'
import { useInView } from '../../hooks/useInView'
import { skills, skillCategories } from '../../data/skills'
import { staggerContainerVariants, fadeUpVariants } from '../../utils/constants'

const iconMap: Record<string, React.ReactNode> = {
  'React': <SiReact />,
  'TypeScript': <SiTypescript />,
  'JavaScript': <SiJavascript />,
  'Node.js': <SiNodedotjs />,
  'Docker': <SiDocker />,
  'Git': <SiGit />,
  'Vite': <SiVite />,
  'PostgreSQL': <SiPostgresql />,
  'GraphQL': <SiGraphql />,
  'NestJS': <SiNestjs />,
  'Redux Toolkit': <SiRedux />,
  'Tailwind CSS': <SiTailwindcss />,
  'Styled Components': <SiStyledcomponents />,
  'React Router': <SiReactrouter />,
  'Figma': <SiFigma />,
  'Vitest': <SiVitest />,
  'Next.js': <SiNextdotjs />,
  'ESLint': <SiEslint />,
  'GitHub Actions': <SiGithubactions />,
}

const categoryColors: Record<string, string> = {
  'Frontend': '#00C896',
  'Backend': '#F5A623',
  'Ferramentas & DevOps': '#61DAFB',
  'Soft Skills': '#C084FC',
}

export function Skills() {
  const { ref, isInView } = useInView({ threshold: 0.05 })

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          id="skills-heading"
          title="Skills"
          accent="// skills"
          subtitle="Ferramentas e tecnologias que uso no dia a dia."
        />

        <div ref={ref as React.RefObject<HTMLDivElement>}>
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-10"
          >
            {skillCategories.map(category => {
              const categorySkills = skills.filter(s => s.category === category)
              const color = categoryColors[category] || '#00C896'

              return (
                <motion.div key={category} variants={fadeUpVariants}>
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: color }}
                    />
                    <h3
                      className="font-mono text-sm font-medium"
                      style={{ color }}
                    >
                      {category}
                    </h3>
                    <div
                      className="flex-1 h-[1px]"
                      style={{ background: `linear-gradient(to right, ${color}30, transparent)` }}
                    />
                  </div>

                  <motion.div
                    variants={staggerContainerVariants}
                    className="flex flex-wrap gap-2"
                  >
                    {categorySkills.map(skill => (
                      <motion.div key={skill.name} variants={fadeUpVariants}>
                        <TechBadge
                          name={skill.name}
                          icon={iconMap[skill.name]}
                          level={skill.level}
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
