import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Activity,
  Apple,
  CalendarDays,
  Dumbbell,
  Globe2,
  HeartPulse,
  MapPin,
  MessageCircle,
  MonitorSmartphone,
  Ruler,
  Scale,
  Sparkles,
  Target,
  Trophy,
  Users,
  Utensils,
} from 'lucide-react'

import consultaPresencial from '../../assets/images/servicios/consulta-presencial.png'
import consultaOnline from '../../assets/images/servicios/consulta-online.png'
import consultaDeportiva from '../../assets/images/servicios/consulta-deportiva.png'
import seguimientoNutricional from '../../assets/images/servicios/seguimiento-nutricional.png'
import familiaParejas from '../../assets/images/servicios/familia-parejas.png'

import './Services.css'

const services = [
  {
    id: 'presencial',
    number: '01',
    label: 'Presencial',
    subtitle: 'Atención en consultorio',
    eyebrow: 'Valoración integral',
    kicker: 'Conoce tu punto de partida',
    titleTop: 'Consulta',
    titleBottom: 'Presencial',
    description:
      'Profundizamos en tu contexto, hábitos, objetivos y composición corporal para construir una estrategia nutricional completamente adaptada a tu realidad.',
    icon: MapPin,
    image: consultaPresencial,
    imageClass: 'services__art-image--presencial',
    imageAlt:
      'Ilustración de una consulta nutricional presencial con valoración corporal',
    location: 'San Felipe, Guanajuato',
    time: '60 minutos',
    features: [
      {
        number: '01',
        icon: Ruler,
        title: 'Perímetros',
        text: 'Mediciones corporales para conocer tu punto de partida.',
      },
      {
        number: '02',
        icon: Activity,
        title: 'Plicometría',
        text: 'Seguimiento enfocado en cambios de composición corporal.',
      },
      {
        number: '03',
        icon: Scale,
        title: 'Bioimpedancia',
        text: 'Información complementaria para una valoración integral.',
      },
      {
        number: '04',
        icon: Utensils,
        title: 'Plan individual',
        text: 'Alimentación, entrenamiento e indicaciones adaptadas a ti.',
      },
    ],
  },

  {
    id: 'online',
    number: '02',
    label: 'Online',
    subtitle: 'Desde donde estés',
    eyebrow: 'Atención sin fronteras',
    kicker: 'Tu proceso viaja contigo',
    titleTop: 'Consulta',
    titleBottom: 'Online',
    description:
      'Recibe atención personalizada desde cualquier lugar. Revisamos tu contexto, mediciones y objetivos para construir un proceso que funcione dentro de tu rutina.',
    icon: MonitorSmartphone,
    image: consultaOnline,
    imageClass: 'services__art-image--online',
    imageAlt:
      'Ilustración de una consulta nutricional online mediante computadora',
    location: 'México y otros países',
    time: 'Vía WhatsApp',
    features: [
      {
        number: '01',
        icon: Scale,
        title: 'Mediciones',
        text: 'Llegas a consulta con los datos necesarios para comenzar.',
      },
      {
        number: '02',
        icon: Activity,
        title: 'Bioimpedancia',
        text: 'Utilizamos la información corporal disponible para valorar.',
      },
      {
        number: '03',
        icon: Target,
        title: 'Progreso visual',
        text: 'Las fotografías permiten evaluar visualmente tu evolución.',
      },
      {
        number: '04',
        icon: MessageCircle,
        title: 'Seguimiento',
        text: 'Mantenemos comunicación durante las diferentes etapas.',
      },
    ],
  },

  {
    id: 'deportiva',
    number: '03',
    label: 'Deportiva',
    subtitle: 'Rendimiento sin límites',
    eyebrow: 'Rendimiento · disciplina · estrategia',
    kicker: 'Alimenta tu rendimiento',
    titleTop: 'Nutrición',
    titleBottom: 'Deportiva',
    description:
      'Nutrición enfocada en entrenamiento, composición corporal y rendimiento físico para aprovechar mejor tu potencial y acercarte a tus objetivos deportivos.',
    icon: Dumbbell,
    image: consultaDeportiva,
    imageClass: 'services__art-image--deportiva',
    imageAlt:
      'Ilustración de consulta de nutrición deportiva con un atleta',
    location: 'Objetivos deportivos',
    time: 'Plan integral',
    features: [
      {
        number: '01',
        icon: HeartPulse,
        title: 'Rendimiento',
        text: 'Estrategias para energía, recuperación y desempeño físico.',
      },
      {
        number: '02',
        icon: Dumbbell,
        title: 'Composición',
        text: 'Masa muscular, pérdida de grasa o recomposición corporal.',
      },
      {
        number: '03',
        icon: Target,
        title: 'Estrategia',
        text: 'El plan se adapta a tu entrenamiento y objetivo deportivo.',
      },
      {
        number: '04',
        icon: Trophy,
        title: 'Evolución',
        text: 'Evaluamos resultados y ajustamos conforme avanzas.',
      },
    ],
  },

  {
    id: 'seguimiento',
    number: '04',
    label: 'Seguimiento',
    subtitle: 'Tu progreso, siempre',
    eyebrow: 'Evaluación · ajustes · avance',
    kicker: 'Evolucionar también es ajustar',
    titleTop: 'Seguimiento',
    titleBottom: 'Nutricional',
    description:
      'Revisamos hábitos, adherencia, resultados y dificultades para identificar qué necesita ajustarse y mantener tu proceso avanzando con dirección.',
    icon: CalendarDays,
    image: seguimientoNutricional,
    imageClass: 'services__art-image--seguimiento',
    imageAlt:
      'Ilustración de una consulta de seguimiento nutricional con un paciente',
    location: 'Cada 4–5 semanas',
    time: 'Proceso continuo',
    features: [
      {
        number: '01',
        icon: Target,
        title: 'Evaluamos',
        text: 'Revisamos tus resultados, hábitos y adherencia al proceso.',
      },
      {
        number: '02',
        icon: Activity,
        title: 'Ajustamos',
        text: 'Modificamos alimentación y entrenamiento cuando hace falta.',
      },
      {
        number: '03',
        icon: Utensils,
        title: 'Actualizamos',
        text: 'Tu siguiente plan responde a la etapa en la que estás.',
      },
      {
        number: '04',
        icon: MessageCircle,
        title: 'Acompañamos',
        text: 'La comunicación permite mantener continuidad y dirección.',
      },
    ],
  },

  {
    id: 'pareja',
    number: '05',
    label: 'Pareja / Familiar',
    subtitle: 'Salud en conjunto',
    eyebrow: 'Hábitos · apoyo · bienestar',
    kicker: 'Avanzar también puede ser juntos',
    titleTop: 'Consulta',
    titleBottom: 'En conjunto',
    description:
      'Una alternativa para parejas o familias que desean mejorar hábitos al mismo tiempo, respetando los objetivos y necesidades individuales de cada persona.',
    icon: Users,
    image: familiaParejas,
    imageClass: 'services__art-image--pareja',
    imageAlt:
      'Ilustración de una consulta nutricional para pareja o familia',
    location: 'Presencial u online',
    time: 'Atención personalizada',
    features: [
      {
        number: '01',
        icon: Users,
        title: 'En conjunto',
        text: 'El entorno se transforma en una herramienta de apoyo.',
      },
      {
        number: '02',
        icon: HeartPulse,
        title: 'Hábitos',
        text: 'Construimos cambios sostenibles dentro de la vida cotidiana.',
      },
      {
        number: '03',
        icon: Target,
        title: 'Objetivos',
        text: 'Cada integrante conserva necesidades y metas individuales.',
      },
      {
        number: '04',
        icon: Apple,
        title: 'Educación',
        text: 'Mejoramos la relación con la alimentación en conjunto.',
      },
    ],
  },
]

const focusOne = [
  'Wellness',
  'Pérdida de peso',
  'Masa muscular',
  'Recomposición corporal',
  'Nutrición deportiva',
  'Obesidad',
  'Diabetes',
]

const focusTwo = [
  'Hipertensión',
  'Resistencia a la insulina',
  'Embarazo',
  'Adultos mayores',
  'Trastornos gastrointestinales',
  'Conducta alimentaria',
  'SMOP',
]

function MarqueeRow({
  items,
  reverse = false,
}) {
  const repeatedItems = [
    ...items,
    ...items,
  ]

  return (
    <div
      className={`services__marquee ${
        reverse
          ? 'services__marquee--reverse'
          : ''
      }`}
    >
      <div className="services__marquee-track">
        {repeatedItems.map(
          (item, index) => (
            <div
              className="services__marquee-item"
              key={`${item}-${index}`}
              aria-hidden={
                index >= items.length
                  ? 'true'
                  : undefined
              }
            >
              <span />

              <strong>
                {item}
              </strong>
            </div>
          ),
        )}
      </div>
    </div>
  )
}

function Services() {
  const [activeId, setActiveId] =
    useState('presencial')

  const activeService =
    services.find(
      (service) =>
        service.id === activeId,
    ) || services[0]

  const ActiveIcon =
    activeService.icon

  const whatsappUrl =
    'https://wa.me/524775905740?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20informaci%C3%B3n%20sobre%20los%20servicios%20de%20Nutri%20Visi%C3%B3n%20Synergy.'

  return (
    <section
      className="services"
      id="servicios"
    >
      {/* =========================================
          AMBIENT BACKGROUND
      ========================================= */}

      <div
        className="services__grid"
        aria-hidden="true"
      />

      <div
        className="services__ambient services__ambient--one"
        aria-hidden="true"
      />

      <div
        className="services__ambient services__ambient--two"
        aria-hidden="true"
      />

      <div
        className="services__ghost-word"
        aria-hidden="true"
      >
        SYNERGY
      </div>

      <div className="services__container container">
        {/* =========================================
            SECTION HEADING
        ========================================= */}

        <motion.header
          className="services__header"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.6,
          }}
          transition={{
            duration: 0.65,
            ease: [
              0.22,
              1,
              0.36,
              1,
            ],
          }}
        >
          <div className="services__eyebrow">
            <span />

            <strong>
              03
            </strong>

            <i />

            <strong>
              Servicios
            </strong>

            <small>
              Nutri Visión Synergy
            </small>

            <span />
          </div>

          <h2 className="services__title">
            <span>
              Nutrición que
            </span>

            <strong className="services__title-accent">
              se adapta a ti.
            </strong>
          </h2>

          <p className="services__intro">
            Diferentes objetivos requieren
            diferentes estrategias. Elige la
            modalidad que mejor se adapta a tu
            proceso.
          </p>
        </motion.header>

        {/* =========================================
            MAIN EXPERIENCE
        ========================================= */}

        <div className="services__experience">
          {/* =========================================
              LEFT SELECTOR
          ========================================= */}

          <motion.aside
            className="services__selector"
            initial={{
              opacity: 0,
              x: -20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
          >
            <div className="services__selector-head">
              <span>
                Modalidades
              </span>

              <small>
                Selecciona una
              </small>
            </div>

            <div className="services__selector-list">
              {services.map(
                (service) => {
                  const Icon =
                    service.icon

                  const isActive =
                    activeId ===
                    service.id

                  return (
                    <button
                      className={`services__selector-item ${
                        isActive
                          ? 'services__selector-item--active'
                          : ''
                      }`}
                      key={
                        service.id
                      }
                      type="button"
                      onMouseEnter={() =>
                        setActiveId(
                          service.id,
                        )
                      }
                      onFocus={() =>
                        setActiveId(
                          service.id,
                        )
                      }
                      onClick={() =>
                        setActiveId(
                          service.id,
                        )
                      }
                    >
                      <span className="services__selector-number">
                        {
                          service.number
                        }
                      </span>

                      <span className="services__selector-icon">
                        <Icon
                          size={27}
                          strokeWidth={
                            1.55
                          }
                        />
                      </span>

                      <span className="services__selector-copy">
                        <strong>
                          {
                            service.label
                          }
                        </strong>

                        <small>
                          {
                            service.subtitle
                          }
                        </small>
                      </span>

                      <span className="services__selector-line">
                        <i />
                      </span>
                    </button>
                  )
                },
              )}
            </div>
          </motion.aside>

          {/* =========================================
              DYNAMIC STAGE
          ========================================= */}

          <motion.div
            className="services__stage"
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              delay: 0.08,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
          >
            <div
              className="services__stage-grid"
              aria-hidden="true"
            />

            <div
              className="services__stage-glow"
              aria-hidden="true"
            />

            <div
              className="services__stage-orbit services__stage-orbit--one"
              aria-hidden="true"
            />

            <div
              className="services__stage-orbit services__stage-orbit--two"
              aria-hidden="true"
            />

            {/* ART */}

            <div className="services__art">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`art-${activeService.id}`}
                  className="services__art-motion"
                  initial={{
                    opacity: 0,
                    x: 45,
                    scale: 0.93,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    x: -24,
                    scale: 0.96,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [
                      0.22,
                      1,
                      0.36,
                      1,
                    ],
                  }}
                >
                  <div className="services__art-float">
                    <img
                      src={
                        activeService.image
                      }
                      alt={
                        activeService.imageAlt
                      }
                      className={`services__art-image ${activeService.imageClass}`}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* HUGE NUMBER */}

            <AnimatePresence mode="wait">
              <motion.span
                key={`number-${activeService.id}`}
                className="services__stage-number"
                initial={{
                  opacity: 0,
                  y: -12,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 0.35,
                }}
              >
                {
                  activeService.number
                }
              </motion.span>
            </AnimatePresence>

            {/* ART LABEL */}

            <AnimatePresence mode="wait">
              <motion.div
                key={`label-${activeService.id}`}
                className="services__art-label"
                initial={{
                  opacity: 0,
                  x: 12,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 0.35,
                  delay: 0.12,
                }}
              >
                <ActiveIcon
                  size={18}
                  strokeWidth={1.5}
                />

                <span>
                  {
                    activeService.kicker
                  }
                </span>
              </motion.div>
            </AnimatePresence>

            {/* CONTENT */}

            <AnimatePresence mode="wait">
              <motion.div
                key={`copy-${activeService.id}`}
                className="services__stage-content"
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
                  y: -9,
                }}
                transition={{
                  duration: 0.34,
                  ease: [
                    0.22,
                    1,
                    0.36,
                    1,
                  ],
                }}
              >
                <div className="services__stage-eyebrow">
                  <span />

                  <strong>
                    {
                      activeService.eyebrow
                    }
                  </strong>
                </div>

                <h3>
                  <span>
                    {
                      activeService.titleTop
                    }
                  </span>

                  <strong>
                    {
                      activeService.titleBottom
                    }
                  </strong>
                </h3>

                <p className="services__description">
                  {
                    activeService.description
                  }
                </p>

                {/* FEATURES */}

                <div className="services__features">
                  {activeService.features.map(
                    (
                      feature,
                      index,
                    ) => {
                      const Icon =
                        feature.icon

                      return (
                        <motion.div
                          className="services__feature"
                          key={
                            feature.title
                          }
                          initial={{
                            opacity: 0,
                            x: -10,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          transition={{
                            duration:
                              0.32,
                            delay:
                              0.08 +
                              index *
                                0.06,
                          }}
                        >
                          <span className="services__feature-number">
                            {
                              feature.number
                            }
                          </span>

                          <span className="services__feature-icon">
                            <Icon
                              size={
                                22
                              }
                              strokeWidth={
                                1.5
                              }
                            />
                          </span>

                          <div>
                            <strong>
                              {
                                feature.title
                              }
                            </strong>

                            <p>
                              {
                                feature.text
                              }
                            </p>
                          </div>
                        </motion.div>
                      )
                    },
                  )}
                </div>

                {/* CTA */}

                <div className="services__stage-bottom">
                  <a
                    href={
                      whatsappUrl
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="services__cta"
                  >
                    <MessageCircle
                      size={20}
                      strokeWidth={
                        1.6
                      }
                    />

                    <span>
                      Solicitar información
                    </span>

                    <i />
                  </a>

                  <div className="services__meta">
                    <span>
                      {
                        activeService.location
                      }
                    </span>

                    <i />

                    <strong>
                      {
                        activeService.time
                      }
                    </strong>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="services__stage-signature">
              <span />

              <strong>
                Nutrición con Visión
                en Sinergia
              </strong>
            </div>
          </motion.div>
        </div>

        {/* =========================================
            FOCUS / OBJECTIVES
        ========================================= */}

        <motion.div
          className="services__focus"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.65,
          }}
        >
          <div className="services__focus-intro">
            <div>
              <span>
                Enfoque
              </span>

              <i />

              <small>
                Atención individual
              </small>
            </div>

            <h3>
              Tu objetivo es
              <strong>
                nuestro punto de partida.
              </strong>
            </h3>

            <p>
              Salud, composición corporal,
              rendimiento y bienestar abordados
              desde una estrategia personalizada.
            </p>
          </div>

          <div className="services__focus-marquees">
            <MarqueeRow
              items={focusOne}
            />

            <MarqueeRow
              items={focusTwo}
              reverse
            />
          </div>

          <div className="services__focus-footer">
            <div>
              <Sparkles
                size={18}
                strokeWidth={1.5}
              />

              <span>
                Estrategias adaptadas
                a tu realidad
              </span>
            </div>

            <div>
              <Globe2
                size={18}
                strokeWidth={1.5}
              />

              <span>
                Presencial + Online
              </span>
            </div>

            <div>
              <HeartPulse
                size={18}
                strokeWidth={1.5}
              />

              <span>
                Salud + Rendimiento
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services