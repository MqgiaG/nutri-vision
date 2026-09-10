import { motion } from 'framer-motion'
import {
  Award,
  Dumbbell,
  GraduationCap,
  HeartPulse,
} from 'lucide-react'

import alejandroAbout from '../../assets/images/about/alejandro-about.png'

import './About.css'

const credentials = [
  {
    number: '01',
    icon: GraduationCap,
    title: 'Formación en Nutrición',
    text: 'Egresado de la carrera de Nutrición por la Universidad de León.',
  },
  {
    number: '02',
    icon: Dumbbell,
    title: 'Entrenamiento personalizado',
    text: 'Certificación enfocada en planificación y adaptación del entrenamiento.',
  },
  {
    number: '03',
    icon: Award,
    title: 'Nutrición deportiva',
    text: 'Diplomado en nutrición deportiva con enfoque en futbolistas y rendimiento físico.',
  },
]

const values = [
  'Atención',
  'Servicio',
  'Compromiso',
]

const letterContainer = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.022,
    },
  },
}

const letterItem = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      duration: 0.28,
      ease: 'easeOut',
    },
  },
}

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 14,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

function AnimatedLetters({
  text,
  className = '',
  loopOffset = 0,
}) {
  return (
    <motion.span
      className={`about__animated-text ${className}`}
      variants={letterContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.75,
      }}
      aria-label={text}
    >
      {Array.from(text).map(
        (letter, index) => (
          <motion.span
            key={`${letter}-${index}`}
            className="about__animated-letter"
            style={{
              '--letter-loop-delay':
                `${loopOffset + index * 0.07}s`,
            }}
            variants={letterItem}
            aria-hidden="true"
          >
            {letter === ' '
              ? '\u00A0'
              : letter}
          </motion.span>
        ),
      )}
    </motion.span>
  )
}

function AnimatedValue({
  text,
  delay = 0,
}) {
  return (
    <motion.strong
      className="about__value-word"
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.8,
      }}
      variants={{
        hidden: {},

        visible: {
          transition: {
            delayChildren: delay,
            staggerChildren: 0.055,
          },
        },
      }}
      aria-label={text}
    >
      {Array.from(text).map(
        (letter, index) => (
          <motion.span
            key={`${letter}-${index}`}
            className="about__value-letter"
            style={{
              '--letter-index': index,
              '--value-loop-delay':
                `${delay + index * 0.055}s`,
            }}
            variants={{
              hidden: {
                opacity: 0.12,
              },

              visible: {
                opacity: 1,

                transition: {
                  duration: 0.25,
                  ease: 'easeOut',
                },
              },
            }}
            aria-hidden="true"
          >
            {letter === ' '
              ? '\u00A0'
              : letter}
          </motion.span>
        ),
      )}
    </motion.strong>
  )
}

function GhostApple() {
  return (
    <svg
      viewBox="0 0 180 200"
      fill="none"
    >
      <path
        d="M91 53C89 35 95 21 111 10"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <path
        d="M104 31C121 18 141 21 152 38C134 46 117 42 104 31Z"
        stroke="currentColor"
        strokeWidth="4"
      />

      <path
        d="M86 66C68 47 42 47 25 66C7 86 11 117 20 142C31 173 48 189 68 189C78 189 83 183 90 183C98 183 103 189 113 189C134 189 151 173 162 142C171 116 175 85 156 65C140 47 114 47 98 66L92 73L86 66Z"
        stroke="currentColor"
        strokeWidth="4"
      />
    </svg>
  )
}

function GhostLeaf() {
  return (
    <svg
      viewBox="0 0 160 180"
      fill="none"
    >
      <path
        d="M133 21C74 27 31 61 25 111C21 148 45 164 76 153C121 137 144 87 133 21Z"
        stroke="currentColor"
        strokeWidth="4"
      />

      <path
        d="M43 138C60 104 85 78 121 49"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <path
        d="M67 107L56 82"
        stroke="currentColor"
        strokeWidth="3"
      />

      <path
        d="M86 87L110 88"
        stroke="currentColor"
        strokeWidth="3"
      />
    </svg>
  )
}

function GhostDumbbell() {
  return (
    <svg
      viewBox="0 0 270 120"
      fill="none"
    >
      <path
        d="M78 60H192"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />

      <rect
        x="50"
        y="34"
        width="20"
        height="52"
        rx="5"
        stroke="currentColor"
        strokeWidth="4"
      />

      <rect
        x="27"
        y="23"
        width="16"
        height="74"
        rx="5"
        stroke="currentColor"
        strokeWidth="4"
      />

      <rect
        x="200"
        y="34"
        width="20"
        height="52"
        rx="5"
        stroke="currentColor"
        strokeWidth="4"
      />

      <rect
        x="227"
        y="23"
        width="16"
        height="74"
        rx="5"
        stroke="currentColor"
        strokeWidth="4"
      />
    </svg>
  )
}

function GhostTape() {
  return (
    <svg
      viewBox="0 0 260 150"
      fill="none"
    >
      <path
        d="M31 104C49 60 92 36 139 42C174 46 198 61 228 94"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <path
        d="M28 104C73 127 164 128 230 95"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <path
        d="M70 68L78 82"
        stroke="currentColor"
        strokeWidth="3"
      />

      <path
        d="M94 56L100 73"
        stroke="currentColor"
        strokeWidth="3"
      />

      <path
        d="M120 50L124 68"
        stroke="currentColor"
        strokeWidth="3"
      />

      <path
        d="M149 51L147 69"
        stroke="currentColor"
        strokeWidth="3"
      />

      <path
        d="M177 59L170 76"
        stroke="currentColor"
        strokeWidth="3"
      />
    </svg>
  )
}

function GhostMolecule() {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
    >
      <circle
        cx="100"
        cy="100"
        r="15"
        stroke="currentColor"
        strokeWidth="4"
      />

      <circle
        cx="39"
        cy="63"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />

      <circle
        cx="159"
        cy="52"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />

      <circle
        cx="158"
        cy="149"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />

      <circle
        cx="43"
        cy="152"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />

      <path
        d="M87 92L48 68"
        stroke="currentColor"
        strokeWidth="4"
      />

      <path
        d="M113 91L150 60"
        stroke="currentColor"
        strokeWidth="4"
      />

      <path
        d="M112 111L150 143"
        stroke="currentColor"
        strokeWidth="4"
      />

      <path
        d="M88 111L51 144"
        stroke="currentColor"
        strokeWidth="4"
      />
    </svg>
  )
}

function GhostPlate() {
  return (
    <svg
      viewBox="0 0 180 180"
      fill="none"
    >
      <circle
        cx="90"
        cy="90"
        r="65"
        stroke="currentColor"
        strokeWidth="4"
      />

      <circle
        cx="90"
        cy="90"
        r="43"
        stroke="currentColor"
        strokeWidth="3"
      />

      <path
        d="M90 25V45"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <path
        d="M90 135V155"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <path
        d="M25 90H45"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <path
        d="M135 90H155"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  )
}

function About() {
  return (
    <section
      className="about"
      id="sobre-mi"
    >
      <div
        className="about__grid"
        aria-hidden="true"
      />

      <div
        className="about__glow about__glow--left"
        aria-hidden="true"
      />

      <div
        className="about__glow about__glow--right"
        aria-hidden="true"
      />

      <div
        className="about__background-word"
        aria-hidden="true"
      >
        VISION
      </div>

      {/* ============================
          GHOST DRAWINGS
      ============================ */}

      <div
        className="about__ghosts"
        aria-hidden="true"
      >
        <div className="about__ghost about__ghost--apple">
          <GhostApple />
        </div>

        <div className="about__ghost about__ghost--leaf">
          <GhostLeaf />
        </div>

        <div className="about__ghost about__ghost--dumbbell">
          <GhostDumbbell />
        </div>

        <div className="about__ghost about__ghost--tape">
          <GhostTape />
        </div>

        <div className="about__ghost about__ghost--molecule">
          <GhostMolecule />
        </div>

        <div className="about__ghost about__ghost--plate">
          <GhostPlate />
        </div>
      </div>

      <div className="about__container container">
        {/* ============================
            LEFT
        ============================ */}

        <motion.div
          className="about__visual"
          initial={{
            opacity: 0,
            scale: 0.985,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.span
            className="about__section-number"
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            02
          </motion.span>

          <div className="about__photo-stage">
            <div
              className="about__photo-halo about__photo-halo--one"
              aria-hidden="true"
            />

            <div
              className="about__photo-halo about__photo-halo--two"
              aria-hidden="true"
            />

            <div
              className="about__photo-dot about__photo-dot--one"
              aria-hidden="true"
            />

            <div
              className="about__photo-dot about__photo-dot--two"
              aria-hidden="true"
            />

            <div
              className="about__photo-dot about__photo-dot--three"
              aria-hidden="true"
            />

            <div
              className="about__photo-code"
              aria-hidden="true"
            >
              <span>
                NVS
              </span>

              <strong>
                02
              </strong>
            </div>

            <div className="about__photo-shell">
              <img
                src={alejandroAbout}
                alt="Profesional de Nutri Visión Synergy trabajando en consulta"
                className="about__photo"
              />

              <div
                className="about__photo-overlay"
                aria-hidden="true"
              />

              <div className="about__photo-label">
                <span>
                  Nutri Visión Synergy
                </span>

                <strong>
                  Nutrición · Salud · Rendimiento
                </strong>
              </div>
            </div>

            <motion.div
              className="about__experience"
              initial={{
                opacity: 0,
                x: 18,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.8,
              }}
              transition={{
                duration: 0.55,
                delay: 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="about__experience-item">
                <motion.strong
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.35,
                    delay: 0.3,
                  }}
                >
                  3
                </motion.strong>

                <div>
                  <span>
                    años
                  </span>

                  <small>
                    En consulta
                  </small>
                </div>
              </div>

              <i />

              <div className="about__experience-item">
                <motion.strong
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.35,
                    delay: 0.42,
                  }}
                >
                  +10
                </motion.strong>

                <div>
                  <span>
                    años
                  </span>

                  <small>
                    En fitness
                  </small>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="about__visual-index"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
          >
            <span>
              Nutrición
            </span>

            <i />

            <span>
              Visión
            </span>

            <i />

            <span>
              Synergy
            </span>
          </motion.div>
        </motion.div>

        {/* ============================
            RIGHT
        ============================ */}

        <div className="about__content">
          <div className="about__heading-block">
            <motion.div
              className="about__eyebrow"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.8,
              }}
            >
              <span className="about__eyebrow-line" />

              <span>
                Sobre mí
              </span>

              <i />

              <small>
                Alejandro Ortiz
              </small>

              <span className="about__eyebrow-line about__eyebrow-line--end" />
            </motion.div>

            <h2 className="about__title">
              <AnimatedLetters
                text="Un enfoque que"
                className="about__title-white"
                loopOffset={0}
              />

              <AnimatedLetters
                text="entiende tu realidad."
                className="about__title-blue"
                loopOffset={0.9}
              />
            </h2>

            <motion.div
              className="about__statement"
              initial={{
                opacity: 0,
                scale: 0.985,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.8,
              }}
              transition={{
                duration: 0.45,
                delay: 0.22,
              }}
            >
              <p>
                El plan debe{' '}
                <strong>
                  adaptarse a ti,
                </strong>{' '}
                no tú al plan.
              </p>
            </motion.div>
          </div>

          {/* ============================
              COPY
          ============================ */}

          <div className="about__copy">
            <motion.p
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
                amount: 0.7,
              }}
              transition={{
                duration: 0.5,
              }}
            >
              Cada persona tiene{' '}
              <strong>
                hábitos, objetivos, necesidades y contextos diferentes.
              </strong>{' '}
              Por eso, el proceso nutricional se construye de forma individual.
            </motion.p>

            <motion.p
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
                amount: 0.7,
              }}
              transition={{
                duration: 0.5,
                delay: 0.12,
              }}
            >
              En Nutri Visión Synergy se integran{' '}
              <strong>
                nutrición, educación, seguimiento y entrenamiento
              </strong>{' '}
              para crear estrategias que puedas entender, aplicar y sostener.
            </motion.p>
          </div>

          {/* ============================
              VALUES
          ============================ */}

          <div className="about__values">
            {values.map(
              (value, index) => (
                <motion.div
                  className="about__value"
                  key={value}
                  initial={{
                    opacity: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.8,
                  }}
                  transition={{
                    duration: 0.4,
                    delay:
                      index * 0.1,
                  }}
                >
                  <span className="about__value-number">
                    0{index + 1}
                  </span>

                  <AnimatedValue
                    text={value}
                    delay={
                      0.15 +
                      index * 0.65
                    }
                  />

                  <i />
                </motion.div>
              ),
            )}
          </div>

          {/* ============================
              PREPARATION
          ============================ */}

          <motion.div
            className="about__credentials"
            initial={{
              opacity: 0,
              y: 12,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.55,
            }}
          >
            <div className="about__credentials-heading">
              <div>
                <motion.span
                  className="about__credentials-kicker"
                  initial={{
                    opacity: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                >
                  Preparación
                </motion.span>

                <strong>
                  Formación que respalda el proceso
                </strong>
              </div>

              <small>
                Formación + experiencia
              </small>
            </div>

            {credentials.map(
              ({
                number,
                icon: Icon,
                title,
                text,
              }, index) => (
                <motion.div
                  className="about__credential"
                  key={number}
                  initial={{
                    opacity: 0,
                    x: 12,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.85,
                  }}
                  transition={{
                    duration: 0.45,
                    delay:
                      index * 0.09,
                  }}
                >
                  <span className="about__credential-number">
                    {number}
                  </span>

                  <motion.span
                    className="about__credential-icon"
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.35,
                      delay:
                        0.1 +
                        index * 0.09,
                    }}
                  >
                    <Icon
                      size={20}
                      strokeWidth={1.6}
                    />
                  </motion.span>

                  <div className="about__credential-copy">
                    <strong>
                      {title}
                    </strong>

                    <p>
                      {text}
                    </p>
                  </div>
                </motion.div>
              ),
            )}
          </motion.div>

          {/* ============================
              BOTTOM
          ============================ */}

          <motion.div
            className="about__bottom"
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
              amount: 0.7,
            }}
            transition={{
              duration: 0.45,
            }}
          >
            <div className="about__philosophy">
              <motion.span
                className="about__philosophy-icon"
                initial={{
                  opacity: 0,
                  scale: 0.75,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.35,
                }}
              >
                <HeartPulse
                  size={18}
                  strokeWidth={1.5}
                />
              </motion.span>

              <div>
                <span>
                  Filosofía NVS
                </span>

                <AnimatedLetters
                  text="Educación para crear hábitos sostenibles."
                  className="about__philosophy-text"
                />
              </div>
            </div>

            <a
              href="#servicios"
              className="about__next"
            >
              <span>
                Conoce los servicios
              </span>

              <i />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About