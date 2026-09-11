import { useState } from 'react'
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from 'framer-motion'

import {
  Activity,
  ClipboardCheck,
  Plus,
  Stethoscope,
} from 'lucide-react'

import './FAQ.css'

const questions = [
  {
    id: 'laboratorios',
    question: '¿Necesito estudios de laboratorio?',
    answer:
      'No en todos los casos. Si por tu contexto, antecedentes u objetivo es necesario revisar algún estudio, se te indicará durante la valoración.',
  },

  {
    id: 'suplementos',
    question: '¿Necesito tomar suplementos?',
    answer:
      'No necesariamente. La suplementación se valora de forma individual y se utiliza únicamente cuando puede complementar de manera adecuada tu estrategia.',
  },

  {
    id: 'pesar-alimentos',
    question: '¿Tengo que pesar todos mis alimentos?',
    answer:
      'Depende del objetivo y de la estrategia utilizada. El plan puede trabajar con cantidades, equivalentes, porciones o referencias prácticas que faciliten su aplicación.',
  },

  {
    id: 'seguimiento',
    question: '¿Cada cuánto son las consultas de seguimiento?',
    answer:
      'Generalmente se realizan cada 4 a 5 semanas. La frecuencia puede ajustarse de acuerdo con tu evolución, objetivos y necesidades durante el proceso.',
  },

  {
    id: 'online',
    question: '¿Cómo funciona la consulta online?',
    answer:
      'La consulta se realiza a distancia. Para la valoración pueden solicitarse datos como mediciones, información sobre composición corporal disponible y fotografías de progreso.',
  },

  {
    id: 'cambiar-alimentos',
    question: '¿Puedo cambiar alimentos de mi plan?',
    answer:
      'Sí. La intención es que la alimentación pueda adaptarse a tus preferencias, posibilidades y contexto, procurando mantener el objetivo de la estrategia nutricional.',
  },

  {
    id: 'condiciones',
    question: '¿Puedo acudir si tengo alguna condición de salud?',
    answer:
      'Se trabajan distintos objetivos y condiciones como obesidad, diabetes, hipertensión y resistencia a la insulina. Algunos casos pueden requerir atención especializada o trabajo multidisciplinario.',
  },
]

function FAQBackgroundArt() {
  return (
    <svg
      className="faq__art"
      viewBox="0 0 650 680"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      {/* CLIPBOARD */}

      <g className="faq__art-group faq__art-group--clipboard">
        <rect
          x="130"
          y="110"
          width="300"
          height="390"
          rx="26"
          stroke="currentColor"
          strokeWidth="2"
        />

        <path
          d="
            M230 110
            V87
            C230 70 244 56 261 56
            H299
            C316 56 330 70 330 87
            V110
          "
          stroke="currentColor"
          strokeWidth="2"
        />

        <rect
          x="214"
          y="93"
          width="132"
          height="48"
          rx="14"
          stroke="currentColor"
          strokeWidth="2"
        />

        <path
          d="M184 207H375"
          stroke="currentColor"
          strokeWidth="1.5"
        />

        <path
          d="M184 267H348"
          stroke="currentColor"
          strokeWidth="1.5"
        />

        <path
          d="M184 327H370"
          stroke="currentColor"
          strokeWidth="1.5"
        />

        <path
          d="M184 387H325"
          stroke="currentColor"
          strokeWidth="1.5"
        />

        <circle
          cx="166"
          cy="207"
          r="7"
          stroke="currentColor"
          strokeWidth="1.5"
        />

        <circle
          cx="166"
          cy="267"
          r="7"
          stroke="currentColor"
          strokeWidth="1.5"
        />

        <circle
          cx="166"
          cy="327"
          r="7"
          stroke="currentColor"
          strokeWidth="1.5"
        />

        <circle
          cx="166"
          cy="387"
          r="7"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </g>

      {/* HEARTBEAT */}

      <g className="faq__art-group faq__art-group--heartbeat">
        <path
          className="faq__heartbeat-line"
          d="
            M62 554
            H155
            L179 530
            L206 584
            L239 487
            L276 565
            L300 538
            L330 554
            H455
          "
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <circle
          className="faq__heartbeat-dot"
          cx="239"
          cy="487"
          r="5"
          fill="currentColor"
        />
      </g>

      {/* MEASUREMENT */}

      <g className="faq__art-group faq__art-group--measure">
        <path
          d="
            M466 137
            C533 183 567 256 551 328
          "
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="5 12"
        />

        <path
          d="M492 161L478 181"
          stroke="currentColor"
          strokeWidth="1.5"
        />

        <path
          d="M521 199L500 214"
          stroke="currentColor"
          strokeWidth="1.5"
        />

        <path
          d="M541 245L517 253"
          stroke="currentColor"
          strokeWidth="1.5"
        />

        <path
          d="M550 294L525 295"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </g>

      {/* CROSS */}

      <g className="faq__art-group faq__art-group--cross">
        <circle
          cx="510"
          cy="439"
          r="54"
          stroke="currentColor"
          strokeWidth="1.5"
        />

        <path
          d="M510 412V466"
          stroke="currentColor"
          strokeWidth="2"
        />

        <path
          d="M483 439H537"
          stroke="currentColor"
          strokeWidth="2"
        />
      </g>

      {/* PARTICLES */}

      <g className="faq__art-particles">
        <circle
          cx="82"
          cy="122"
          r="3"
          fill="currentColor"
        />

        <circle
          cx="482"
          cy="83"
          r="2"
          fill="currentColor"
        />

        <circle
          cx="567"
          cy="389"
          r="3"
          fill="currentColor"
        />

        <circle
          cx="94"
          cy="448"
          r="2"
          fill="currentColor"
        />

        <path
          d="
            M516 552
            L521 563
            L532 568
            L521 573
            L516 584
            L511 573
            L500 568
            L511 563
            Z
          "
          stroke="currentColor"
          strokeWidth="1"
        />

        <path
          d="
            M103 276
            L107 284
            L115 288
            L107 292
            L103 300
            L99 292
            L91 288
            L99 284
            Z
          "
          stroke="currentColor"
          strokeWidth="1"
        />
      </g>
    </svg>
  )
}

function FAQ() {
  const [activeId, setActiveId] =
    useState('laboratorios')

  const reduceMotion =
    useReducedMotion()

  const toggleQuestion = (id) => {
    setActiveId((current) =>
      current === id
        ? null
        : id,
    )
  }

  const introTransition = reduceMotion
    ? {
        duration: 0,
      }
    : {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }

  const questionsVariants = {
    hidden: {},
    visible: {
      transition: reduceMotion
        ? {}
        : {
            staggerChildren: 0.075,
            delayChildren: 0.15,
          },
    },
  }

  const questionVariants = {
    hidden: reduceMotion
      ? {
          opacity: 1,
        }
      : {
          opacity: 0,
          x: 16,
          filter: 'blur(4px)',
        },

    visible: {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)',

      transition: reduceMotion
        ? {
            duration: 0,
          }
        : {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          },
    },
  }

  return (
    <section
      className="faq"
      id="faq"
    >
      {/* BACKGROUND */}

      <div
        className="faq__grid"
        aria-hidden="true"
      />

      <div
        className="faq__glow faq__glow--one"
        aria-hidden="true"
      />

      <div
        className="faq__glow faq__glow--two"
        aria-hidden="true"
      />

      <div
        className="faq__ambient-line"
        aria-hidden="true"
      />

      <div className="faq__container container">
        {/* =========================================
            INTRO
        ========================================= */}

        <motion.div
          className="faq__intro"
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  x: -22,
                }
          }
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.28,
          }}
          transition={
            introTransition
          }
        >
          <FAQBackgroundArt />

          <div className="faq__intro-content">
            <motion.div
              className="faq__eyebrow"
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
                    : 0.45,
                delay:
                  reduceMotion
                    ? 0
                    : 0.08,
              }}
            >
              <span />

              <strong>
                FAQ
              </strong>

              <i />

              <small>
                Preguntas frecuentes
              </small>

              <span />
            </motion.div>

            <motion.h2
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
              }}
              transition={{
                duration:
                  reduceMotion
                    ? 0
                    : 0.65,
                delay:
                  reduceMotion
                    ? 0
                    : 0.13,
                ease: [
                  0.22,
                  1,
                  0.36,
                  1,
                ],
              }}
            >
              Antes de empezar,

              <motion.strong
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 15,
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
                      : 0.65,
                  delay:
                    reduceMotion
                      ? 0
                      : 0.23,
                  ease: [
                    0.22,
                    1,
                    0.36,
                    1,
                  ],
                }}
              >
                resolvamos tus dudas.
              </motion.strong>
            </motion.h2>

            <motion.p
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 12,
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
                    : 0.3,
              }}
            >
              Conoce cómo funciona el proceso,
              qué puedes esperar de tus
              consultas y cómo se adapta la
              atención a tu contexto.
            </motion.p>

            <motion.div
              className="faq__intro-detail"
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 14,
                      scale: 0.98,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
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
                    : 0.36,
                ease: [
                  0.22,
                  1,
                  0.36,
                  1,
                ],
              }}
            >
              <div className="faq__intro-icon">
                <span
                  className="faq__intro-icon-pulse"
                  aria-hidden="true"
                />

                <Stethoscope
                  size={28}
                  strokeWidth={1.35}
                />
              </div>

              <div>
                <small>
                  Atención personalizada
                </small>

                <strong>
                  Información clara antes de comenzar
                </strong>
              </div>
            </motion.div>

            <motion.div
              className="faq__signature"
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                    }
              }
              whileInView={{
                opacity: 1,
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
                    : 0.45,
              }}
            >
              <Activity
                size={15}
                strokeWidth={1.3}
              />

              <span>
                Nutri Visión Synergy
              </span>

              <i />

              <span>
                Consulta nutricional
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* =========================================
            QUESTIONS PANEL
        ========================================= */}

        <motion.div
          className="faq__questions"
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  x: 22,
                  scale: 0.985,
                }
          }
          whileInView={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.18,
          }}
          transition={{
            duration:
              reduceMotion
                ? 0
                : 0.7,
            delay:
              reduceMotion
                ? 0
                : 0.05,
            ease: [
              0.22,
              1,
              0.36,
              1,
            ],
          }}
        >
          <div
            className="faq__panel-scan"
            aria-hidden="true"
          />

          <div
            className="faq__panel-glow"
            aria-hidden="true"
          />

          <div className="faq__questions-top">
            <div>
              <span>
                Información para tu consulta
              </span>

              <strong>
                Lo que necesitas saber
              </strong>
            </div>

            <span className="faq__clipboard-icon">
              <ClipboardCheck
                size={27}
                strokeWidth={1.3}
              />
            </span>
          </div>

          <motion.div
            className="faq__list"
            variants={
              questionsVariants
            }
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
          >
            {questions.map(
              (item, index) => {
                const isActive =
                  activeId ===
                  item.id

                return (
                  <motion.article
                    layout={
                      !reduceMotion
                    }
                    variants={
                      questionVariants
                    }
                    className={`faq__item ${
                      isActive
                        ? 'faq__item--active'
                        : ''
                    }`}
                    key={item.id}
                  >
                    <button
                      className="faq__question"
                      type="button"
                      onClick={() =>
                        toggleQuestion(
                          item.id,
                        )
                      }
                      aria-expanded={
                        isActive
                      }
                      aria-controls={`faq-answer-${item.id}`}
                    >
                      <div className="faq__question-main">
                        <span className="faq__question-index">
                          {String(
                            index + 1,
                          ).padStart(
                            2,
                            '0',
                          )}
                        </span>

                        <span className="faq__question-text">
                          {
                            item.question
                          }
                        </span>
                      </div>

                      <span className="faq__plus">
                        <span
                          className="faq__plus-pulse"
                          aria-hidden="true"
                        />

                        <Plus
                          size={20}
                          strokeWidth={
                            1.5
                          }
                        />
                      </span>
                    </button>

                    <AnimatePresence
                      initial={false}
                    >
                      {isActive && (
                        <motion.div
                          id={`faq-answer-${item.id}`}
                          className="faq__answer"
                          initial={
                            reduceMotion
                              ? {
                                  height:
                                    0,
                                  opacity:
                                    1,
                                }
                              : {
                                  height:
                                    0,
                                  opacity:
                                    0,
                                }
                          }
                          animate={{
                            height:
                              'auto',
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            height: {
                              duration:
                                reduceMotion
                                  ? 0
                                  : 0.38,
                              ease: [
                                0.22,
                                1,
                                0.36,
                                1,
                              ],
                            },

                            opacity: {
                              duration:
                                reduceMotion
                                  ? 0
                                  : 0.22,
                            },
                          }}
                        >
                          <motion.div
                            className="faq__answer-inner"
                            initial={
                              reduceMotion
                                ? false
                                : {
                                    opacity:
                                      0,
                                    y: -7,
                                    filter:
                                      'blur(3px)',
                                  }
                            }
                            animate={{
                              opacity: 1,
                              y: 0,
                              filter:
                                'blur(0px)',
                            }}
                            transition={{
                              duration:
                                reduceMotion
                                  ? 0
                                  : 0.32,
                              delay:
                                reduceMotion
                                  ? 0
                                  : 0.08,
                            }}
                          >
                            <span className="faq__answer-line" />

                            <p>
                              {
                                item.answer
                              }
                            </p>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.article>
                )
              },
            )}
          </motion.div>

          {/* IMPORTANT */}

          <motion.div
            className="faq__important"
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
                  : 0.5,
              delay:
                reduceMotion
                  ? 0
                  : 0.3,
            }}
          >
            <span className="faq__important-mark">
              <span
                className="faq__important-ring"
                aria-hidden="true"
              />

              !
            </span>

            <div>
              <small>
                Importante
              </small>

              <p>
                Actualmente no se brinda
                atención a pacientes
                oncológicos ni a menores
                de 12 años.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ