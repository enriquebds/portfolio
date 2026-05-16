import './styles/globals.css'
import { useTheme } from './hooks/useTheme'
import { CustomCursor } from './components/cursor/CustomCursor'
import { ScrollProgress } from './components/ui/ScrollProgress'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Experience } from './components/sections/Experience'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'
import { Certifications } from './components/sections/Certifications'
import { Contact } from './components/sections/Contact'
import { MemoryGame } from './components/ui/MemoryGame'
import { SectionTitle } from './components/ui/SectionTitle'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div
      className="min-h-screen font-body"
      style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-accent focus:text-[#0F111A] focus:font-semibold"
      >
        Pular para o conteúdo
      </a>

      <CustomCursor />
      <ScrollProgress />
      <Header theme={theme} onToggleTheme={toggleTheme} />

      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />

        <section
          id="game"
          aria-labelledby="game-heading"
          className="py-24 md:py-32 relative overflow-hidden"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(to right, var(--border) 1px, transparent 1px),
                linear-gradient(to bottom, var(--border) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
              opacity: 0.2,
            }}
          />
          <div className="max-w-7xl mx-auto px-6 relative">
            <SectionTitle
              id="game-heading"
              title="Memory Game"
              accent="// game"
              subtitle="Encontre todos os pares de tecnologias. Um quebra-cabeça feito para devs."
            />
            <MemoryGame />
          </div>
        </section>

        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
