import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  PlayCircle,
  Quote,
  X,
} from 'lucide-react'

import './Testimonials.css'

const testimonials = [
  {
    id: 1,
    category: 'Cambio de hábitos',
    patient: 'Paciente NVS',
    title: 'Más que ver cambios en la báscula, hoy me siento diferente.',
    excerpt:
      'Desde la primera consulta me sentí en confianza, escuchada y con la seguridad de estar en buenas manos.',
    fullText:
      'En mi proceso de pérdida de peso y mejora de hábitos, el acompañamiento ha sido fundamental. Desde la primera consulta me sentí en confianza, escuchada y con la seguridad de estar en buenas manos. Más que ver cambios en la báscula, hoy me siento diferente, más segura y orgullosa de todo lo que he logrado.',
    videoSrc: '',
  },
  {
    id: 2,
    category: 'Educación nutricional',
    patient: 'Paciente NVS',
    title: 'Aprendí a crear hábitos que realmente puedo mantener.',
    excerpt:
      'Más allá de recibir una dieta y una rutina, aprendí a entender mejor mi alimentación y mis decisiones.',
    fullText:
      'Mi experiencia ha sido excelente. Más allá de recibir una dieta y una rutina, aprendí a entender mejor mi alimentación y a crear hábitos que realmente puedo mantener día con día. El trato siempre ha sido amable, profesional y paciente, y eso hace toda la diferencia durante el proceso.',
    videoSrc: '',
  },
  {
    id: 3,
    category: 'Confianza y constancia',
    patient: 'Paciente NVS',
    title: 'Hoy no solo veo resultados físicos, también me siento más seguro.',
    excerpt:
      'Llegué con muchas inseguridades y miedo de volver a empezar, pero desde la primera consulta me sentí escuchado.',
    fullText:
      'Llegué con muchas inseguridades y miedo de volver a empezar, pero desde la primera consulta me sentí cómodo y escuchado. El seguimiento, la orientación y la motivación constante me ayudaron a transformar mi proceso. Hoy no solo veo resultados físicos, también me siento más seguro, agradecido y motivado.',
    videoSrc: '',
  },
  {
    id: 4,
    category: 'Bienestar integral',
    patient: 'Paciente NVS',
    title: 'He notado cambios en mi físico, energía y relación con la comida.',
    excerpt:
      'El plan fue personalizado, práctico y pensado para mi estilo de vida desde el inicio.',
    fullText:
      'Desde la primera consulta sentí confianza. Todo el plan fue personalizado, práctico y pensado para mi estilo de vida. Lo que más valoro es el seguimiento y la forma en la que siempre resuelve dudas y motiva. He notado cambios no solo en mi físico, sino también en mi energía, digestión y relación con la comida.',
    videoSrc: '',
  },
  {
    id: 5,
    category: 'Cambio personal',
    patient: 'Paciente NVS',
    title: 'Ha sido un cambio físico, emocional y personal.',
    excerpt:
      'Aprendí a tener una mejor relación con la comida, a ser más constante y a disfrutar el proceso.',
    fullText:
      'Mi experiencia ha sido muy positiva y ha significado mucho más que solo cambios físicos. Gracias al acompañamiento, he aprendido a tener una mejor relación con la comida, a ser más constante y a disfrutar el proceso. He ganado seguridad, confianza y motivación. Sin duda, ha sido un cambio físico, emocional y personal.',
    videoSrc: '',
  },
  {
    id: 6,
    category: 'Relación con la alimentación',
    patient: 'Paciente NVS',
    title: 'Aprendí a comer mejor, romper mitos y dejar atrás muchos miedos.',
    excerpt:
      'Este proceso me permitió mejorar mis hábitos y comprender mejor mi alimentación.',
    fullText:
      'Aprendí a comer mejor, a romper mitos y a transformar miedos y creencias sobre la dieta. Este proceso no solo me ayudó a mejorar mis hábitos, también me permitió comprender mejor mi alimentación y avanzar con mayor seguridad. Poco a poco he dejado atrás inseguridades, miedos y pensamientos que me frenaban.',
    videoSrc: '',
  },
]

function Testimonials() {
  const [showAll, setShowAll] = useState(false)
  const [activeIndex, setActiveIndex] = useState(null)

  const visibleTestimonials = showAll
    ? testimonials
    : testimonials.slice(0, 3)

  const activeTestimonial =
    activeIndex !== null ? testimonials[activeIndex] : null

  const openTestimonial = (id) => {
    const index = testimonials.findIndex(
      (testimonial) => testimonial.id === id,
    )

    setActiveIndex(index)
  }

  const closeTestimonial = () => {
    setActiveIndex(null)
  }

  const showPrevious = () => {
    setActiveIndex((currentIndex) => {
      if (currentIndex === null) return null

      return currentIndex === 0
        ? testimonials.length - 1
        : currentIndex - 1
    })
  }

  const showNext = () => {
    setActiveIndex((currentIndex) => {
      if (currentIndex === null) return null

      return currentIndex === testimonials.length - 1
        ? 0
        : currentIndex + 1
    })
  }

  useEffect(() => {
    if (activeIndex === null) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveIndex(null)
      }

      if (event.key === 'ArrowLeft') {
        setActiveIndex((currentIndex) =>
          currentIndex === 0
            ? testimonials.length - 1
            : currentIndex - 1,
        )
      }

      if (event.key === 'ArrowRight') {
        setActiveIndex((currentIndex) =>
          currentIndex === testimonials.length - 1
            ? 0
            : currentIndex + 1,
        )
      }
    }

    const previousOverflow = document.body.style.overflow

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeIndex])

  return (
    <section className="testimonials">
      <motion.div
        className="testimonials__top"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.55,
          ease: 'easeOut',
        }}
      >
        <div>
          <span className="testimonials__label">
            EXPERIENCIAS DE PACIENTES
          </span>

          <h3 className="testimonials__heading">
            Experiencias que forman parte
            <span> del proceso NVS.</span>
          </h3>
        </div>

        <p className="testimonials__description">
          Cada testimonio refleja una experiencia individual durante el
          acompañamiento nutricional, desde la construcción de hábitos hasta
          una mejor comprensión de la alimentación.
        </p>
      </motion.div>

      <div className="testimonials__grid">
        <AnimatePresence initial={false}>
          {visibleTestimonials.map((testimonial, index) => (
            <motion.article
              className="testimonial-card"
              key={testimonial.id}
              layout
              initial={{
                opacity: 0,
                y: 24,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: 16,
              }}
              transition={{
                duration: 0.4,
                delay: index < 3 ? index * 0.06 : 0,
                ease: 'easeOut',
              }}
            >
              <div className="testimonial-card__top">
                <span className="testimonial-card__number">
                  {String(testimonial.id).padStart(2, '0')}
                </span>

                <span className="testimonial-card__quote">
                  <Quote
                    size={18}
                    strokeWidth={1.7}
                  />
                </span>
              </div>

              <div className="testimonial-card__content">
                <span className="testimonial-card__category">
                  {testimonial.category}
                </span>

                <h4 className="testimonial-card__title">
                  “{testimonial.title}”
                </h4>

                <p className="testimonial-card__excerpt">
                  {testimonial.excerpt}
                </p>
              </div>

              <div className="testimonial-card__footer">
                <div className="testimonial-card__patient">
                  <span className="testimonial-card__avatar">
                    NVS
                  </span>

                  <div>
                    <strong>{testimonial.patient}</strong>
                    <span>Testimonio autorizado</span>
                  </div>
                </div>

                <button
                  className="testimonial-card__button"
                  type="button"
                  onClick={() =>
                    openTestimonial(testimonial.id)
                  }
                  aria-label={`Abrir experiencia ${testimonial.id}`}
                >
                  {testimonial.videoSrc ? (
                    <PlayCircle
                      size={17}
                      strokeWidth={1.8}
                    />
                  ) : (
                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.8}
                    />
                  )}
                </button>
              </div>

              <button
                className="testimonial-card__read"
                type="button"
                onClick={() =>
                  openTestimonial(testimonial.id)
                }
              >
                {testimonial.videoSrc
                  ? 'Ver testimonio'
                  : 'Leer experiencia'}

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.8}
                />
              </button>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      <div className="testimonials__actions">
        <button
          className="testimonials__more"
          type="button"
          onClick={() =>
            setShowAll((currentValue) => !currentValue)
          }
        >
          <span>
            {showAll
              ? 'Mostrar menos'
              : 'Ver más experiencias'}
          </span>

          <span className="testimonials__more-count">
            {showAll
              ? '−'
              : `+${testimonials.length - 3}`}
          </span>
        </button>
      </div>

      <AnimatePresence>
        {activeTestimonial && (
          <motion.div
            className="testimonial-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Testimonio de paciente"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                closeTestimonial()
              }
            }}
          >
            <motion.div
              className="testimonial-modal__dialog"
              initial={{
                opacity: 0,
                y: 25,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 15,
                scale: 0.98,
              }}
              transition={{
                duration: 0.28,
                ease: 'easeOut',
              }}
            >
              <button
                className="testimonial-modal__close"
                type="button"
                onClick={closeTestimonial}
                aria-label="Cerrar testimonio"
              >
                <X
                  size={20}
                  strokeWidth={1.7}
                />
              </button>

              <div className="testimonial-modal__head">
                <span className="testimonial-modal__number">
                  {String(activeTestimonial.id).padStart(
                    2,
                    '0',
                  )}
                </span>

                <span className="testimonial-modal__category">
                  {activeTestimonial.category}
                </span>
              </div>

              {activeTestimonial.videoSrc ? (
                <div className="testimonial-modal__video">
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    src={activeTestimonial.videoSrc}
                  >
                    Tu navegador no puede reproducir este video.
                  </video>
                </div>
              ) : (
                <div className="testimonial-modal__quote-icon">
                  <Quote
                    size={31}
                    strokeWidth={1.4}
                  />
                </div>
              )}

              <h4 className="testimonial-modal__title">
                “{activeTestimonial.title}”
              </h4>

              <p className="testimonial-modal__text">
                {activeTestimonial.fullText}
              </p>

              <div className="testimonial-modal__bottom">
                <div className="testimonial-modal__patient">
                  <span>NVS</span>

                  <div>
                    <strong>
                      {activeTestimonial.patient}
                    </strong>

                    <small>
                      Testimonio compartido con autorización
                    </small>
                  </div>
                </div>

                <div className="testimonial-modal__navigation">
                  <button
                    type="button"
                    onClick={showPrevious}
                    aria-label="Testimonio anterior"
                  >
                    <ChevronLeft
                      size={19}
                      strokeWidth={1.8}
                    />
                  </button>

                  <span>
                    {activeIndex + 1}
                    <small>/</small>
                    {testimonials.length}
                  </span>

                  <button
                    type="button"
                    onClick={showNext}
                    aria-label="Siguiente testimonio"
                  >
                    <ChevronRight
                      size={19}
                      strokeWidth={1.8}
                    />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Testimonials