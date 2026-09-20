import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  ClipboardList,
  Expand,
  Images,
  Maximize2,
  ShieldCheck,
  Sparkles,
  ScanSearch,
  X,
} from 'lucide-react'
import Testimonials from '../Testimonials/Testimonials'
import './Results.css'

const cases = [
  { id: '01', image: '/images/results/paciente01.jpeg' },
  { id: '02', image: '/images/results/paciente02.jpeg' },
  { id: '03', image: '/images/results/paciente03.jpeg' },
  { id: '04', image: '/images/results/paciente 04.jpeg' },
  { id: '05', image: '/images/results/paciente 05.jpeg' },
  { id: '06', image: '/images/results/paciente 06.jpeg' },
  { id: '07', image: '/images/results/paciente 07.jpeg' },
]

const getIndex = (index) => (index + cases.length) % cases.length

function Results() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)

  const dialogRef = useRef(null)
  const triggerRef = useRef(null)

  const reduceMotion = useReducedMotion()
  const activeCase = cases[activeIndex]
  const totalCases = String(cases.length).padStart(2, '0')
  const currentCase = String(activeIndex + 1).padStart(2, '0')
  const progress = ((activeIndex + 1) / cases.length) * 100

  const previous = () => setActiveIndex((current) => getIndex(current - 1))
  const next = () => setActiveIndex((current) => getIndex(current + 1))

  const openCase = () => {
    triggerRef.current = document.activeElement
    setIsExpanded(true)
  }

  const closeCase = () => setIsExpanded(false)

  useEffect(() => {
    if (!isExpanded) return undefined

    const oldOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    dialogRef.current?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeCase()
      if (event.key === 'ArrowLeft') previous()
      if (event.key === 'ArrowRight') next()

      if (event.key === 'Tab') {
        const buttons = dialogRef.current?.querySelectorAll('button')
        if (!buttons?.length) return

        const first = buttons[0]
        const last = buttons[buttons.length - 1]

        if (
          event.shiftKey &&
          (document.activeElement === first ||
            document.activeElement === dialogRef.current)
        ) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = oldOverflow
      window.removeEventListener('keydown', handleKeyDown)
      triggerRef.current?.focus()
    }
  }, [isExpanded])

  return (
    <section
      className="results"
      id="resultados"
      aria-labelledby="results-heading"
    >
      <div className="results__container container">
        <motion.header
          className="results__header"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
        >
          <div className="results__eyebrow">
            <span />
            SEGUIMIENTO DE PACIENTES
            <span />
          </div>

          <h2 id="results-heading">
            REGISTROS REALES.
            <br />
            <strong>PROCESOS INDIVIDUALES.</strong>
          </h2>

          <p>
            Explora algunos registros fotográficos compartidos por pacientes.
            Cada caso refleja un proceso distinto de acompañamiento,
            seguimiento y evolución.
          </p>
        </motion.header>

        <div className="results__board">
          <aside className="results__summary">
            <div className="results__summary-badge">
              <Sparkles size={15} strokeWidth={1.8} />
              CASO ACTIVO
            </div>

            <div className="results__summary-head">
              <span className="results__summary-label">REGISTRO CLÍNICO</span>
              <h3>
                Registro <strong>{activeCase.id}</strong>
              </h3>
            </div>

            <p className="results__summary-text">
              Visualización fotográfica de evolución compartida por un paciente
              de Nutri Visión Synergy.
            </p>

            <div className="results__summary-points">
              <div className="results__summary-point">
                <Images size={16} strokeWidth={1.8} />
                <div>
                  <strong>Formato visual comparativo</strong>
                  <span>Registro fotográfico de seguimiento</span>
                </div>
              </div>

              <div className="results__summary-point">
                <ClipboardList size={16} strokeWidth={1.8} />
                <div>
                  <strong>Evaluación individual</strong>
                  <span>Cada proceso responde a una meta distinta</span>
                </div>
              </div>

              <div className="results__summary-point">
                <ShieldCheck size={16} strokeWidth={1.8} />
                <div>
                  <strong>Experiencias personales</strong>
                  <span>Los resultados son únicos en cada paciente</span>
                </div>
              </div>
            </div>

            <div className="results__summary-progress">
              <div className="results__summary-progress-head">
                <span>PROGRESO DE GALERÍA</span>
                <strong>
                  {currentCase} / {totalCases}
                </strong>
              </div>

              <div className="results__summary-progress-bar">
                <span style={{ width: `${progress}%` }} />
              </div>
            </div>

            <div className="results__summary-note">
              <div className="results__summary-note-icon">
                <ScanSearch size={16} strokeWidth={1.9} />
              </div>

              <div className="results__summary-note-copy">
                <span>LECTURA PROFESIONAL</span>
                <strong>Cada registro documenta una evolución distinta</strong>
                <p>
                  El seguimiento nutricional, el contexto de cada paciente y la
                  constancia del proceso influyen directamente en los cambios.
                </p>
              </div>
            </div>
          </aside>

          <div className="results__viewer">
            <div className="results__viewer-top">
              <div className="results__viewer-top-group">
                <span className="results__viewer-tag">NVS / RESULTADOS</span>
                <strong>
                  CASO {activeCase.id} DE {totalCases}
                </strong>
              </div>

              <button
                type="button"
                className="results__viewer-expand"
                onClick={openCase}
                aria-label={`Ampliar registro fotográfico ${activeCase.id}`}
              >
                <Maximize2 size={15} strokeWidth={1.8} />
                AMPLIAR
              </button>
            </div>

            <div className="results__viewer-frame">
              <button
                className="results__nav results__nav--left"
                type="button"
                onClick={previous}
                aria-label="Registro anterior"
              >
                <ArrowLeft size={18} strokeWidth={1.8} />
              </button>

              <AnimatePresence mode="wait" initial={false}>
                <motion.button
                  key={activeCase.id}
                  type="button"
                  className="results__preview"
                  onClick={openCase}
                  aria-label={`Abrir registro ${activeCase.id} en tamaño grande`}
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
                  transition={{ duration: reduceMotion ? 0 : 0.28 }}
                >
                  <img
                    className="results__preview-glow"
                    src={activeCase.image}
                    alt=""
                    aria-hidden="true"
                  />

                  <img
                    className="results__preview-image"
                    src={activeCase.image}
                    alt={`Registro fotográfico ${activeCase.id} compartido por un paciente de NVS`}
                    decoding="async"
                  />

                  <div className="results__preview-overlay" aria-hidden="true" />

                  <span className="results__preview-pill">
                    <Expand size={14} strokeWidth={1.8} />
                    VER REGISTRO COMPLETO
                  </span>
                </motion.button>
              </AnimatePresence>

              <button
                className="results__nav results__nav--right"
                type="button"
                onClick={next}
                aria-label="Siguiente registro"
              >
                <ArrowRight size={18} strokeWidth={1.8} />
              </button>
            </div>

            <div className="results__viewer-bottom">
              <div className="results__viewer-meta">
                <span>REGISTRO FOTOGRÁFICO</span>
                <strong>Seguimiento visual de evolución</strong>
              </div>

              <p>
                Las imágenes se muestran como fueron compartidas originalmente
                por cada paciente.
              </p>
            </div>
          </div>
        </div>

        <div className="results__gallery-head">
          <span>OTROS REGISTROS DISPONIBLES</span>
          <span>
            {currentCase} — {totalCases}
          </span>
        </div>

        <div
          className="results__gallery"
          role="group"
          aria-label="Seleccionar registro fotográfico"
        >
          {cases.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`results__thumb${
                index === activeIndex ? ' results__thumb--active' : ''
              }`}
              aria-pressed={index === activeIndex}
              aria-label={`Ver registro ${item.id}`}
            >
              <div className="results__thumb-image-wrap">
                <img
                  src={item.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="results__thumb-image"
                />
              </div>

              <div className="results__thumb-copy">
                <span>CASO {item.id}</span>
                <strong>Registro fotográfico</strong>
              </div>
            </button>
          ))}
        </div>

        <p className="results__note">
          Las experiencias y resultados pueden variar de una persona a otra.
          Este contenido no sustituye una valoración personalizada.
        </p>

        <Testimonials />
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="results__lightbox"
            role="presentation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) closeCase()
            }}
          >
            <div
              className="results__dialog"
              role="dialog"
              aria-modal="true"
              aria-label={`Registro fotográfico ${activeCase.id} ampliado`}
              ref={dialogRef}
              tabIndex={-1}
            >
              <div className="results__dialog-top">
                <span>
                  NVS / REGISTRO {activeCase.id} DE {totalCases}
                </span>

                <button
                  type="button"
                  onClick={closeCase}
                  aria-label="Cerrar fotografía ampliada"
                >
                  <X size={20} />
                </button>
              </div>

              <img
                src={activeCase.image}
                alt={`Registro fotográfico ${activeCase.id} en tamaño ampliado`}
              />

              <div className="results__dialog-bottom">
                <button type="button" onClick={previous}>
                  <ArrowLeft size={18} />
                  ANTERIOR
                </button>

                <span>
                  {activeCase.id} / {totalCases}
                </span>

                <button type="button" onClick={next}>
                  SIGUIENTE
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Results