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
  Monitor,
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
    titleLine1: 'Consulta',
    titleLine2: 'Presencial',
    description:
      'Profundizamos en tu contexto, hábitos, objetivos y composición corporal para construir una estrategia nutricional completamente adaptada a tu realidad.',
    icon: MapPin,
    image: consultaPresencial,
    imageAlt:
      'Ilustración de consulta nutricional presencial con toma de medidas corporales',
    meta: 'San Felipe, Guanajuato',
    detail: '60 minutos',
    features: [
      {
        icon: Ruler,
        title: 'Perímetros',
        text: 'Mediciones corporales para conocer tu punto de partida.',
      },
      {
        icon: Activity,
        title: 'Plicometría',
        text: 'Seguimiento enfocado en cambios de composición corporal.',
      },
      {
        icon: Scale,
        title: 'Bioimpedancia',
        text: 'Información complementaria para una valoración integral.',
      },
      {
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
    titleLine1: 'Consulta',
    titleLine2: 'Online',
    description:
      'Recibe atención personalizada desde cualquier lugar. Revisamos tu contexto, mediciones y objetivos para construir un proceso que funcione dentro de tu rutina.',
    icon: Monitor,
    image: consultaOnline,
    imageAlt:
      'Ilustración de consulta nutricional online mediante computadora',
    meta: 'México y otros países',
    detail: 'Vía WhatsApp',
    features: [
      {
        icon: Scale,
        title: 'Mediciones',
        text: 'Llegas a consulta con los datos necesarios para comenzar.',
      },
      {
        icon: Activity,
        title: 'Bioimpedancia',
        text: 'Utilizamos la información corporal disponible para valorar.',
      },
      {
        icon: Target,
        title: 'Progreso visual',
        text: 'Las fotografías permiten evaluar visualmente tu evolución.',
      },
      {
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
    titleLine1: 'Nutrición',
    titleLine2: 'Deportiva',
    description:
      'Nutrición enfocada en entrenamiento, composición corporal y rendimiento físico para aprovechar mejor tu potencial y acercarte a tus objetivos deportivos.',
    icon: Dumbbell,
    image: consultaDeportiva,
    imageAlt:
      'Ilustración de consulta de nutrición deportiva con un atleta',
    meta: 'Objetivos deportivos',
    detail: 'Plan integral',
    features: [
      {
        icon: HeartPulse,
        title: 'Rendimiento',
        text: 'Estrategias para energía, recuperación y desempeño físico.',
      },
      {
        icon: Dumbbell,
        title: 'Composición',
        text: 'Masa muscular, pérdida de grasa o recomposición corporal.',
      },
      {
        icon: Target,
        title: 'Estrategia',
        text: 'El plan se adapta a tu entrenamiento y objetivo deportivo.',
      },
      {
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
    titleLine1: 'Seguimiento',
    titleLine2: 'Nutricional',
    description:
      'Revisamos hábitos, adherencia, resultados y dificultades para identificar qué necesita ajustarse y mantener tu proceso avanzando con dirección.',
    icon: CalendarDays,
    image: seguimientoNutricional,
    imageAlt:
      'Ilustración de seguimiento nutricional revisando el progreso de un paciente',
    meta: 'Cada 4–5 semanas',
    detail: 'Proceso continuo',
    features: [
      {
        icon: Target,
        title: 'Evaluamos',
        text: 'Revisamos tus resultados, hábitos y adherencia al proceso.',
      },
      {
        icon: Activity,
        title: 'Ajustamos',
        text: 'Modificamos alimentación y entrenamiento cuando hace falta.',
      },
      {
        icon: Utensils,
        title: 'Actualizamos',
        text: 'Tu siguiente plan responde a la etapa en la que estás.',
      },
      {
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
    titleLine1: 'Consulta',
    titleLine2: 'En conjunto',
    description:
      'Una alternativa para parejas o familias que desean mejorar hábitos al mismo tiempo, respetando los objetivos y necesidades individuales de cada persona.',
    icon: Users,
    image: familiaParejas,
    imageAlt:
      'Ilustración de consulta nutricional para pareja y familia',
    meta: 'Presencial u online',
    detail: 'Atención personalizada',
    features: [
      {
        icon: Users,
        title: 'En conjunto',
        text: 'El entorno se transforma en una herramienta de apoyo.',
      },
      {
        icon: HeartPulse,
        title: 'Hábitos',
        text: 'Construimos cambios sostenibles dentro de la vida cotidiana.',
      },
      {
        icon: Target,
        title: 'Objetivos',
        text: 'Cada integrante conserva necesidades y metas individuales.',
      },
      {
        icon: Apple,
        title: 'Educación',
        text: 'Mejoramos la relación con la alimentación en conjunto.',
      },
    ],
  },
]

const goals = [
  {
    name: 'Wellness y salud general',
    icon: Sparkles,
  },
  {
    name: 'Pérdida de peso',
    icon: Scale,
  },
  {
    name: 'Aumento de masa muscular',
    icon: Dumbbell,
  },
  {
    name: 'Recomposición corporal',
    icon: Activity,
  },
  {
    name: 'Nutrición deportiva',
    icon: Trophy,
  },
  {
    name: 'Obesidad',
    icon: Users,
  },
  {
    name: 'Diabetes',
    icon: Activity,
  },
  {
    name: 'Hipertensión',
    icon: HeartPulse,
  },
  {
    name: 'Resistencia a la insulina',
    icon: Target,
  },
  {
    name: 'Trastornos de conducta alimentaria',
    icon: Utensils,
  },
  {
    name: 'Embarazo',
    icon: HeartPulse,
  },
  {
    name: 'Adultos mayores',
    icon: Users,
  },
  {
    name: 'SMOP',
    icon: Activity,
  },
]

function DNAVisual() {
  const lines = [
    [89, 35, 211, 35],
    [117, 72, 183, 72],
    [136, 108, 164, 108],
    [104, 145, 196, 145],
    [78, 183, 222, 183],
    [70, 220, 230, 220],
    [90, 258, 210, 258],
    [122, 294, 178, 294],
    [122, 330, 178, 330],
    [89, 367, 211, 367],
    [70, 404, 230, 404],
    [78, 443, 222, 443],
    [105, 480, 195, 480],
    [136, 516, 164, 516],
    [116, 553, 184, 553],
    [89, 590, 211, 590],
  ]

  return (
    <svg
      className="services__dna"
      viewBox="0 0 300 620"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M70 0C245 100 245 210 70 310C-105 410 -105 520 70 620"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M230 0C55 100 55 210 230 310C405 410 405 520 230 620"
        stroke="currentColor"
        strokeWidth="2"
      />

      {lines.map((line, index) => (
        <line
          key={index}
          x1={line[0]}
          y1={line[1]}
          x2={line[2]}
          y2={line[3]}
          stroke="currentColor"
          strokeWidth="1"
        />
      ))}
    </svg>
  )
}

function Services() {
  const [activeId, setActiveId] = useState('presencial')

  const activeService =
    services.find((service) => service.id === activeId) || services[0]

  const whatsappUrl =
    'https://wa.me/524775905740?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20informaci%C3%B3n%20sobre%20una%20consulta%20en%20Nutri%20Visi%C3%B3n%20Synergy.'

  return (
    <section className="services" id="servicios">
      <div className="services__grid" aria-hidden="true" />

      <div
        className="services__glow services__glow--left"
        aria-hidden="true"
      />

      <div
        className="services__glow services__glow--right"
        aria-hidden="true"
      />

      <div className="services__ghost-word" aria-hidden="true">
        NVS
      </div>

      <div className="services__container container">
        <motion.header
          className="services__header"
          initial={{
            opacity: 0,
            y: 18,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.55,
          }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="services__eyebrow">
            <span />
            <strong>Servicios</strong>
            <i />
            <small>Nutri Visión Synergy</small>
            <span />
          </div>

          <h2>
            Nuestros <strong>servicios</strong>
          </h2>

          <p>
            Nutrición personalizada para cada etapa de tu vida. Estrategias,
            educación y acompañamiento para ayudarte a alcanzar tu mejor
            versión.
          </p>
        </motion.header>

        <div className="services__main">
          <motion.aside
            className="services__nav"
            initial={{
              opacity: 0,
              x: -18,
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
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="services__nav-heading">
              <span>Modalidades</span>
              <small>Selecciona una</small>
            </div>

            {services.map((service) => {
              const Icon = service.icon
              const isActive = activeId === service.id

              return (
                <button
                  type="button"
                  key={service.id}
                  className={`services__nav-item ${
                    isActive ? 'services__nav-item--active' : ''
                  }`}
                  onMouseEnter={() => setActiveId(service.id)}
                  onClick={() => setActiveId(service.id)}
                >
                  <span className="services__nav-number">
                    {service.number}
                  </span>

                  <span className="services__nav-icon">
                    <Icon size={27} strokeWidth={1.55} />
                  </span>

                  <span className="services__nav-copy">
                    <strong>{service.label}</strong>
                    <small>{service.subtitle}</small>
                  </span>

                  <span className="services__nav-state">
                    <i />
                  </span>
                </button>
              )
            })}
          </motion.aside>

          <div className="services__detail">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                className="services__detail-content"
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -7,
                }}
                transition={{
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="services__detail-eyebrow">
                  <span />
                  <strong>{activeService.eyebrow}</strong>
                </div>

                <h3>
                  <span>{activeService.titleLine1}</span>
                  <strong>{activeService.titleLine2}</strong>
                </h3>

                <p className="services__description">
                  {activeService.description}
                </p>

                <div className="services__features">
                  {activeService.features.map((feature, index) => {
                    const Icon = feature.icon

                    return (
                      <motion.div
                        className="services__feature"
                        key={feature.title}
                        initial={{
                          opacity: 0,
                          y: 8,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 0.3,
                          delay: 0.06 + index * 0.05,
                        }}
                      >
                        <span className="services__feature-number">
                          0{index + 1}
                        </span>

                        <span className="services__feature-icon">
                          <Icon size={23} strokeWidth={1.5} />
                        </span>

                        <div>
                          <strong>{feature.title}</strong>
                          <p>{feature.text}</p>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>

                <div className="services__detail-bottom">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="services__cta"
                  >
                    <MessageCircle size={21} strokeWidth={1.6} />
                    <span>Solicitar información</span>
                    <i />
                  </a>

                  <div className="services__detail-meta">
                    <span>{activeService.meta}</span>
                    <i />
                    <strong>{activeService.detail}</strong>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div
            className="services__visual"
            initial={{
              opacity: 0,
              x: 15,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.65,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="services__visual-grid" aria-hidden="true" />
            <div className="services__visual-glow" aria-hidden="true" />

            <div className="services__dna-wrap" aria-hidden="true">
              <DNAVisual />
            </div>

            <div
              className="services__visual-ring services__visual-ring--one"
              aria-hidden="true"
            />

            <div
              className="services__visual-ring services__visual-ring--two"
              aria-hidden="true"
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                className="services__visual-image-stage"
                initial={{
                  opacity: 0,
                  x: 20,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  x: -12,
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.42,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <img
                  src={activeService.image}
                  alt={activeService.imageAlt}
                  className={`services__visual-image services__visual-image--${activeService.id}`}
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        <motion.div
          className="services__goals"
          initial={{
            opacity: 0,
            y: 18,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.18,
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="services__goals-intro">
            <div className="services__goals-kicker">
              <span />
              <strong>Enfoque</strong>
            </div>

            <h3>
              Tu objetivo es
              <strong>
                nuestro punto
                <br />
                de partida.
              </strong>
            </h3>

            <p>
              Abordamos diferentes objetivos y condiciones mediante estrategias
              adaptadas a tu contexto, necesidades y estilo de vida.
            </p>

            <div className="services__goals-signature">
              <span />

              <small>
                Nutrición
                <i />
                Salud
                <i />
                Rendimiento
              </small>
            </div>
          </div>

          <div className="services__goals-area">
            <div className="services__goals-top">
              <div className="services__goals-heading">
                <span>Objetivos y condiciones que trabajamos</span>

                <i />

                <small>Alimentación adaptada a tu contexto</small>
              </div>
            </div>

            <div className="services__goal-grid">
              {goals.map((goal, index) => {
                const Icon = goal.icon

                return (
                  <motion.div
                    key={goal.name}
                    className="services__goal"
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.5,
                    }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.025,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <span className="services__goal-icon">
                      <Icon size={25} strokeWidth={1.5} />
                    </span>

                    <strong>{goal.name}</strong>

                    <span className="services__goal-line" />

                    <span
                      className="services__goal-ghost"
                      aria-hidden="true"
                    >
                      <Icon size={56} strokeWidth={1} />
                    </span>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>

        <div className="services__footer-line">
          <div>
            <Apple size={17} strokeWidth={1.5} />
            <span>Ciencia</span>
            <i />
            <span>Hábitos</span>
            <i />
            <span>Resultados reales</span>
          </div>

          <div>
            <Globe2 size={17} strokeWidth={1.5} />
            <span>Atención presencial y online</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services