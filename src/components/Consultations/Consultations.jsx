import { useState } from 'react'
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from 'framer-motion'

import {
  Activity,
  CalendarDays,
  Clock3,
  Dumbbell,
  Globe2,
  MapPin,
  MessageCircle,
  Monitor,
  Stethoscope,
} from 'lucide-react'

import './Consultations.css'

const consultationModes = {
  presencial: {
    id: 'presencial',
    label: 'Presencial',
    icon: MapPin,
    eyebrow: 'Consulta en San Felipe',
    title: 'Valoración cercana. Estrategia personal.',
    text:
      'Atención presencial con valoración nutricional y seguimiento adaptado a tus objetivos, contexto y evolución.',
    metaOne: 'San Felipe, Guanajuato',
    metaTwo: '60 minutos',
    metaOneIcon: MapPin,
    metaTwoIcon: Clock3,
  },

  online: {
    id: 'online',
    label: 'Online',
    icon: Monitor,
    eyebrow: 'Consulta a distancia',
    title: 'Tu seguimiento puede continuar estés donde estés.',
    text:
      'Atención online con valoración, seguimiento y ajustes para mantener tu estrategia nutricional sin importar tu ubicación.',
    metaOne: 'México y otros países',
    metaTwo: 'Vía WhatsApp',
    metaOneIcon: Globe2,
    metaTwoIcon: MessageCircle,
  },
}

function ConsultationBackgroundArt() {
  return (
    <svg
      className="consultations__art"
      viewBox="0 0 1600 560"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden="true"
    >
      {/* HEART RATE */}

      <g className="consultations__art-heart">
        <path
          className="consultations__heart-line"
          d="
            M25 320
            H160
            L185 294
            L215 352
            L252 244
            L294 334
            L320 304
            L350 320
            H492
          "
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <circle
          className="consultations__heart-dot"
          cx="252"
          cy="244"
          r="5"
          fill="currentColor"
        />
      </g>

      {/* CLINICAL CROSS */}

      <g className="consultations__art-cross">
        <circle
          cx="1380"
          cy="170"
          r="72"
          stroke="currentColor"
          strokeWidth="1.5"
        />

        <circle
          cx="1380"
          cy="170"
          r="52"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="6 12"
        />

        <path
          d="M1380 135V205"
          stroke="currentColor"
          strokeWidth="2"
        />

        <path
          d="M1345 170H1415"
          stroke="currentColor"
          strokeWidth="2"
        />
      </g>

      {/* DUMBBELL */}

      <g className="consultations__art-dumbbell">
        <g transform="rotate(-12 1300 390)">
          <line
            x1="1180"
            y1="390"
            x2="1415"
            y2="390"
            stroke="currentColor"
            strokeWidth="7"
            strokeLinecap="round"
          />

          <rect
            x="1150"
            y="351"
            width="29"
            height="78"
            rx="4"
            stroke="currentColor"
            strokeWidth="2"
          />

          <rect
            x="1120"
            y="364"
            width="25"
            height="52"
            rx="4"
            stroke="currentColor"
            strokeWidth="2"
          />

          <rect
            x="1416"
            y="351"
            width="29"
            height="78"
            rx="4"
            stroke="currentColor"
            strokeWidth="2"
          />

          <rect
            x="1450"
            y="364"
            width="25"
            height="52"
            rx="4"
            stroke="currentColor"
            strokeWidth="2"
          />
        </g>
      </g>

      {/* ORBITS */}

      <g className="consultations__art-orbits">
        <ellipse
          cx="810"
          cy="290"
          rx="390"
          ry="150"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="7 16"
        />

        <ellipse
          cx="810"
          cy="290"
          rx="315"
          ry="112"
          stroke="currentColor"
          strokeWidth="1"
        />

        <circle
          cx="1125"
          cy="290"
          r="4"
          fill="currentColor"
        />

        <circle
          cx="510"
          cy="250"
          r="3"
          fill="currentColor"
        />
      </g>

      {/* PARTICLES */}

      <g className="consultations__art-particles">
        <circle cx="550" cy="104" r="2.5" fill="currentColor" />
        <circle cx="700" cy="88" r="2" fill="currentColor" />
        <circle cx="980" cy="112" r="2.5" fill="currentColor" />
        <circle cx="1040" cy="455" r="2" fill="currentColor" />
        <circle cx="595" cy="450" r="2.5" fill="currentColor" />

        <path
          d="
            M1045 180
            L1050 191
            L1061 196
            L1050 201
            L1045 212
            L1040 201
            L1029 196
            L1040 191
            Z
          "
          stroke="currentColor"
          strokeWidth="1"
        />

        <path
          d="
            M465 405
            L469 414
            L478 418
            L469 422
            L465 431
            L461 422
            L452 418
            L461 414
            Z
          "
          stroke="currentColor"
          strokeWidth="1"
        />
      </g>
    </svg>
  )
}

function Consultations() {
  const [activeMode, setActiveMode] =
    useState('presencial')

  const reduceMotion =
    useReducedMotion()

  const consultation =
    consultationModes[activeMode]

  const ModeIcon =
    consultation.icon

  const MetaOneIcon =
    consultation.metaOneIcon

  const MetaTwoIcon =
    consultation.metaTwoIcon

  const whatsappUrl =
    'https://wa.me/524775905740?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20informaci%C3%B3n%20para%20agendar%20una%20consulta%20en%20Nutri%20Visi%C3%B3n%20Synergy.'

  return (
    <section
      className="consultations"
      id="consultas"
    >
      <div
        className="consultations__grid"
        aria-hidden="true"
      />

      <div
        className="consultations__glow consultations__glow--left"
        aria-hidden="true"
      />

      <div
        className="consultations__glow consultations__glow--right"
        aria-hidden="true"
      />

      <div
        className="consultations__ambient-beam"
        aria-hidden="true"
      />

      <ConsultationBackgroundArt />

      <div className="consultations__container container">
        {/* =========================================
            HEADER
        ========================================= */}

        <motion.header
          className="consultations__header"
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 18,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.45,
          }}
          transition={{
            duration: reduceMotion
              ? 0
              : 0.65,
            ease: [
              0.22,
              1,
              0.36,
              1,
            ],
          }}
        >
          <motion.div
            className="consultations__eyebrow"
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    scale: 0.95,
                  }
            }
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration:
                reduceMotion
                  ? 0
                  : 0.5,
              delay:
                reduceMotion
                  ? 0
                  : 0.08,
            }}
          >
            <span />

            <strong>
              Consultas
            </strong>

            <i />

            <small>
              Presencial · Online
            </small>

            <span />
          </motion.div>

          <motion.h2
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 20,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration:
                reduceMotion
                  ? 0
                  : 0.7,
              delay:
                reduceMotion
                  ? 0
                  : 0.12,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
          >
            <span>
              Tu proceso empieza
            </span>

            <strong>
              con una decisión.
            </strong>
          </motion.h2>

          <motion.p
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 10,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration:
                reduceMotion
                  ? 0
                  : 0.55,
              delay:
                reduceMotion
                  ? 0
                  : 0.25,
            }}
          >
            Elige la modalidad que mejor se adapte a ti y solicita
            información para comenzar tu proceso.
          </motion.p>
        </motion.header>

        {/* =========================================
            STATION
        ========================================= */}

        <motion.div
          className="consultations__station"
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 20,
                  scale: 0.985,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration:
              reduceMotion
                ? 0
                : 0.7,
            delay:
              reduceMotion
                ? 0
                : 0.07,
            ease: [
              0.22,
              1,
              0.36,
              1,
            ],
          }}
        >
          <div
            className="consultations__station-glow"
            aria-hidden="true"
          />

          {/* MODES */}

          <div className="consultations__modes">
            {Object.values(
              consultationModes,
            ).map((mode) => {
              const Icon =
                mode.icon

              const isActive =
                activeMode ===
                mode.id

              return (
                <button
                  type="button"
                  key={mode.id}
                  className={`consultations__mode ${
                    isActive
                      ? 'consultations__mode--active'
                      : ''
                  }`}
                  onClick={() =>
                    setActiveMode(
                      mode.id,
                    )
                  }
                >
                  <span className="consultations__mode-icon">
                    <Icon
                      size={22}
                      strokeWidth={1.45}
                    />
                  </span>

                  <span>
                    {mode.label}
                  </span>

                  <i />

                  {isActive && (
                    <span
                      className="consultations__mode-pulse"
                      aria-hidden="true"
                    />
                  )}
                </button>
              )
            })}
          </div>

          {/* =========================================
              ACTIVE CONTENT
          ========================================= */}

          <AnimatePresence mode="wait">
            <motion.div
              className="consultations__content"
              key={activeMode}
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 10,
                      filter:
                        'blur(4px)',
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
                filter:
                  'blur(0px)',
              }}
              exit={
                reduceMotion
                  ? {
                      opacity: 1,
                    }
                  : {
                      opacity: 0,
                      y: -8,
                      filter:
                        'blur(3px)',
                    }
              }
              transition={{
                duration:
                  reduceMotion
                    ? 0
                    : 0.34,
                ease: [
                  0.22,
                  1,
                  0.36,
                  1,
                ],
              }}
            >
              {/* ICON */}

              <div className="consultations__content-icon">
                <span />

                <span className="consultations__content-icon-pulse" />

                <ModeIcon
                  size={43}
                  strokeWidth={1.25}
                />
              </div>

              {/* COPY */}

              <div className="consultations__copy">
                <span>
                  {
                    consultation.eyebrow
                  }
                </span>

                <h3>
                  {
                    consultation.title
                  }
                </h3>

                <p>
                  {
                    consultation.text
                  }
                </p>

                <div className="consultations__meta">
                  <div>
                    <MetaOneIcon
                      size={17}
                      strokeWidth={1.4}
                    />

                    <span>
                      {
                        consultation.metaOne
                      }
                    </span>
                  </div>

                  <i />

                  <div>
                    <MetaTwoIcon
                      size={17}
                      strokeWidth={1.4}
                    />

                    <span>
                      {
                        consultation.metaTwo
                      }
                    </span>
                  </div>
                </div>
              </div>

              {/* ACTION */}

              <div className="consultations__action">
                <div className="consultations__action-top">
                  <CalendarDays
                    size={20}
                    strokeWidth={1.35}
                  />

                  <span>
                    Agenda tu consulta
                  </span>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="consultations__button"
                >
                  <MessageCircle
                    size={23}
                    strokeWidth={1.5}
                  />

                  <span>
                    Solicitar información

                    <small>
                      WhatsApp · 477 590 5740
                    </small>
                  </span>

                  <i />

                  <span
                    className="consultations__button-pulse"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* =========================================
              SCHEDULE
          ========================================= */}

          <motion.div
            className="consultations__schedule"
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 10,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration:
                reduceMotion
                  ? 0
                  : 0.55,
              delay:
                reduceMotion
                  ? 0
                  : 0.25,
            }}
          >
            <div className="consultations__schedule-label">
              <Clock3
                size={16}
                strokeWidth={1.35}
              />

              <span>
                Horarios de atención
              </span>
            </div>

            <div className="consultations__schedule-hours">
              <div>
                <span>
                  Lun — Vie
                </span>

                <strong>
                  09:00 — 12:00
                </strong>

                <i />

                <strong>
                  16:00 — 19:00
                </strong>
              </div>

              <div>
                <span>
                  Sábado
                </span>

                <strong>
                  09:00 — 14:00
                </strong>
              </div>
            </div>

            <div className="consultations__schedule-signature">
              <Stethoscope
                size={15}
                strokeWidth={1.3}
              />

              <span>
                Nutri Visión Synergy
              </span>

              <i />

              <Dumbbell
                size={15}
                strokeWidth={1.3}
              />
            </div>
          </motion.div>

          <div
            className="consultations__scan"
            aria-hidden="true"
          />
        </motion.div>

        {/* =========================================
            BOTTOM
        ========================================= */}

        <motion.div
          className="consultations__bottom"
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 8,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration:
              reduceMotion
                ? 0
                : 0.5,
            delay:
              reduceMotion
                ? 0
                : 0.32,
          }}
        >
          <Activity
            size={15}
            strokeWidth={1.3}
          />

          <span>
            Nutrición
          </span>

          <i />

          <span>
            Estrategia
          </span>

          <i />

          <span>
            Rendimiento
          </span>

          <i />

          <span>
            Seguimiento
          </span>
        </motion.div>
      </div>
    </section>
  )
}

export default Consultations