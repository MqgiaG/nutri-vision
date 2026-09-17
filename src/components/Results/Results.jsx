import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  Expand,
  X,
} from 'lucide-react'

import Testimonials from '../Testimonials/Testimonials'

import './Results.css'

const resultCases = [
  {
    id: 1,
    image: '/images/results/paciente01.jpeg',
    label: 'Caso 01',
    category: 'Seguimiento nutricional individualizado',
    title: 'Intervención adaptada a la evolución del paciente.',
    description:
      'El seguimiento se ajusta de acuerdo con los objetivos, contexto, hábitos y respuesta individual observada durante el proceso.',
  },
  {
    id: 2,
    image: '/images/results/paciente02.jpeg',
    label: 'Caso 02',
    category: 'Cambio de hábitos',
    title: 'Hábitos sostenibles integrados a la vida cotidiana.',
    description:
      'La estrategia nutricional busca facilitar decisiones realistas y sostenibles, adaptadas a las necesidades y posibilidades de cada persona.',
  },
  {
    id: 3,
    image: '/images/results/paciente03.jpeg',
    label: 'Caso 03',
    category: 'Composición corporal',
    title: 'Seguimiento orientado a objetivos de composición corporal.',
    description:
      'Cada etapa del proceso requiere valoración, seguimiento y ajustes individualizados de acuerdo con la evolución y los objetivos establecidos.',
  },
]

function Results() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [expandedCase, setExpandedCase] = useState(null)

  const activeCase = resultCases[activeIndex]

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? resultCases.length - 1 : current - 1,
    )
  }

  const showNext = () => {
    setActiveIndex((current) =>
      current === resultCases.length - 1 ? 0 : current + 1,
    )
  }

  const getRelativePosition = (index) => {
    let difference = index - activeIndex

    if (difference > 1) {
      difference -= resultCases.length
    }

    if (difference < -1) {
      difference += resultCases.length
    }

    return difference
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (expandedCase) {
        if (event.key === 'Escape') {
          setExpandedCase(null)
        }

        return
      }

      if (event.key === 'ArrowLeft') {
        setActiveIndex((current) =>
          current === 0 ? resultCases.length - 1 : current - 1,
        )
      }

      if (event.key === 'ArrowRight') {
        setActiveIndex((current) =>
          current === resultCases.length - 1 ? 0 : current + 1,
        )
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [expandedCase])

  useEffect(() => {
    if (!expandedCase) return undefined

    const previousOverflow = document.body.style.overflow

    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [expandedCase])

  return (
    <section className="results" id="resultados">
      <div
        className="results__ambient results__ambient--one"
        aria-hidden="true"
      />

      <div
        className="results__ambient results__ambient--two"
        aria-hidden="true"
      />

      <div className="results__container container">
        <motion.header
          className="results__header"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            duration: 0.6,
            ease: 'easeOut',
          }}
        >
          <div className="results__eyebrow">
            <span />
            RESULTADOS REALES · NVS
            <span />
          </div>

          <div className="results__heading">
            <h2>
              Resultados reales
              <span> de pacientes NVS.</span>
            </h2>

            <p>
              Procesos documentados con autorización, desarrollados a partir de
              una valoración individual, seguimiento continuo y ajustes
              nutricionales realizados conforme evoluciona cada paciente.
            </p>
          </div>
        </motion.header>

        <div className="results-carousel">
          <div className="results-carousel__stage">
            {resultCases.map((resultCase, index) => {
              const position = getRelativePosition(index)
              const isActive = position === 0

              return (
                <motion.button
                  className={
                    isActive
                      ? 'results-slide results-slide--active'
                      : 'results-slide'
                  }
                  type="button"
                  key={resultCase.id}
                  animate={{
                    x:
                      position === 0
                        ? '0%'
                        : position < 0
                          ? '-62%'
                          : '62%',
                    scale: isActive ? 1 : 0.78,
                    rotateY:
                      position === 0
                        ? 0
                        : position < 0
                          ? 16
                          : -16,
                    opacity: isActive ? 1 : 0.4,
                    filter: isActive
                      ? 'blur(0px)'
                      : 'blur(0.35px)',
                    zIndex: isActive ? 3 : 1,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 145,
                    damping: 22,
                    mass: 0.85,
                  }}
                  onClick={() => {
                    if (isActive) {
                      setExpandedCase(resultCase)
                    } else {
                      setActiveIndex(index)
                    }
                  }}
                  aria-label={
                    isActive
                      ? `Ampliar ${resultCase.label}`
                      : `Mostrar ${resultCase.label}`
                  }
                >
                  <div className="results-slide__glass">
                    <div className="results-slide__image">
                      <img
                        src={resultCase.image}
                        alt={`${resultCase.label} de Nutri Visión Synergy`}
                      />

                      {isActive && (
                        <span className="results-slide__expand">
                          <Expand size={14} strokeWidth={1.8} />
                          Ampliar
                        </span>
                      )}
                    </div>

                    <div className="results-slide__footer">
                      <div>
                        <span>{resultCase.label}</span>
                        <strong>{resultCase.category}</strong>
                      </div>

                      <small>
                        {String(index + 1).padStart(2, '0')}
                      </small>
                    </div>
                  </div>
                </motion.button>
              )
            })}
          </div>

          <div className="results-carousel__controls">
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Caso anterior"
            >
              <ArrowLeft size={17} strokeWidth={1.8} />
            </button>

            <div className="results-carousel__pagination">
              {resultCases.map((resultCase, index) => (
                <button
                  key={resultCase.id}
                  type="button"
                  className={
                    index === activeIndex
                      ? 'results-carousel__dot results-carousel__dot--active'
                      : 'results-carousel__dot'
                  }
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Mostrar caso ${index + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={showNext}
              aria-label="Siguiente caso"
            >
              <ArrowRight size={17} strokeWidth={1.8} />
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            className="results-case-info"
            key={activeCase.id}
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -8,
            }}
            transition={{
              duration: 0.28,
              ease: 'easeOut',
            }}
          >
            <div className="results-case-info__number">
              <span>
                {String(activeCase.id).padStart(2, '0')}
              </span>

              <small>
                / {String(resultCases.length).padStart(2, '0')}
              </small>
            </div>

            <div className="results-case-info__content">
              <span>{activeCase.category}</span>

              <h3>{activeCase.title}</h3>

              <p>{activeCase.description}</p>
            </div>

            <div className="results-case-info__note">
              <span>Enfoque NVS</span>

              <p>
                Cada intervención se adapta a los objetivos, antecedentes,
                necesidades y evolución individual de cada paciente.
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        <Testimonials />

        <p className="results__disclaimer">
          Las imágenes y testimonios corresponden a experiencias individuales
          compartidas con autorización. Los resultados pueden variar según las
          características, objetivos, adherencia y contexto de cada persona.
        </p>
      </div>

      <AnimatePresence>
        {expandedCase && (
          <motion.div
            className="results-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setExpandedCase(null)
              }
            }}
          >
            <motion.div
              className="results-lightbox__dialog"
              initial={{
                opacity: 0,
                scale: 0.96,
                y: 18,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.97,
                y: 10,
              }}
              transition={{
                duration: 0.25,
                ease: 'easeOut',
              }}
            >
              <button
                className="results-lightbox__close"
                type="button"
                onClick={() => setExpandedCase(null)}
                aria-label="Cerrar imagen"
              >
                <X size={19} strokeWidth={1.8} />
              </button>

              <img
                src={expandedCase.image}
                alt={`${expandedCase.label} ampliado`}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Results