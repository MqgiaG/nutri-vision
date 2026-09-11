import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Activity,
  Dumbbell,
  MoonStar,
  Scale,
  Sparkles,
} from 'lucide-react'

import './Tips.css'

const tips = [
  {
    id: 'progreso',
    label: 'Progreso',
    icon: Scale,
    title: 'La evolución no se interpreta con un solo dato',
    text:
      'El peso corporal es solo una variable. Medidas, composición corporal, fuerza, energía y rendimiento permiten valorar tu progreso con mayor contexto.',
    note: 'Evaluación integral',
  },

  {
    id: 'rendimiento',
    label: 'Rendimiento',
    icon: Dumbbell,
    title: 'La estrategia nutricional debe acompañar tu entrenamiento',
    text:
      'La intensidad, frecuencia, volumen de entrenamiento y recuperación modifican tus necesidades. La alimentación debe responder a la carga que realmente realizas.',
    note: 'Nutrición aplicada al rendimiento',
  },

  {
    id: 'descanso',
    label: 'Descanso',
    icon: MoonStar,
    title: 'La recuperación también forma parte de tu progreso',
    text:
      'El descanso influye en recuperación, rendimiento, regulación del apetito y capacidad para mantener buenos hábitos durante el proceso.',
    note: 'Recuperación y adherencia',
  },

  {
    id: 'nutricion',
    label: 'Nutrición',
    icon: Sparkles,
    title: 'La suplementación es un complemento, no la base',
    text:
      'Su uso debe responder a una necesidad y a un objetivo específico. La alimentación, el descanso y la constancia continúan siendo la base de cualquier estrategia.',
    note: 'Estrategia individual',
  },
]

function TipsBackgroundArt() {
  return (
    <svg
      className="tips__art"
      viewBox="0 0 1600 760"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="tipsStrokeFade"
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop
            offset="0%"
            stopColor="currentColor"
            stopOpacity="0"
          />

          <stop
            offset="45%"
            stopColor="currentColor"
            stopOpacity="1"
          />

          <stop
            offset="100%"
            stopColor="currentColor"
            stopOpacity="0"
          />
        </linearGradient>

        <radialGradient id="tipsDotGlow">
          <stop
            offset="0%"
            stopColor="currentColor"
            stopOpacity="0.8"
          />

          <stop
            offset="100%"
            stopColor="currentColor"
            stopOpacity="0"
          />
        </radialGradient>
      </defs>

      {/* =========================================
          APPLE / NUTRITION
      ========================================= */}

      <g className="tips__art-group tips__art-group--apple">
        <path
          d="
            M184 166
            C158 139 114 143 93 174
            C68 211 78 273 111 311
            C131 335 151 350 171 350
            C187 350 198 339 213 339
            C229 339 240 350 256 350
            C277 350 298 334 317 309
            C348 268 354 210 329 175
            C307 143 263 139 236 166
            C222 180 212 195 210 214
            C205 194 198 179 184 166Z
          "
          stroke="currentColor"
          strokeWidth="2"
        />

        <path
          d="
            M211 158
            C209 122 228 92 263 78
            C263 110 246 140 211 158Z
          "
          stroke="currentColor"
          strokeWidth="2"
        />

        <path
          d="M211 158C219 129 239 109 263 92"
          stroke="currentColor"
          strokeWidth="1.4"
        />

        <circle
          cx="108"
          cy="157"
          r="5"
          fill="currentColor"
        />

        <circle
          cx="332"
          cy="204"
          r="3"
          fill="currentColor"
        />

        <path
          d="M67 250H25"
          stroke="currentColor"
          strokeWidth="1"
        />

        <path
          d="M348 278H390"
          stroke="currentColor"
          strokeWidth="1"
        />
      </g>

      {/* =========================================
          MOLECULE / CLINICAL
      ========================================= */}

      <g className="tips__art-group tips__art-group--molecule">
        <circle
          cx="1310"
          cy="142"
          r="28"
          stroke="currentColor"
          strokeWidth="1.5"
        />

        <circle
          cx="1404"
          cy="95"
          r="15"
          stroke="currentColor"
          strokeWidth="1.5"
        />

        <circle
          cx="1460"
          cy="179"
          r="20"
          stroke="currentColor"
          strokeWidth="1.5"
        />

        <circle
          cx="1362"
          cy="225"
          r="12"
          stroke="currentColor"
          strokeWidth="1.5"
        />

        <circle
          cx="1252"
          cy="226"
          r="18"
          stroke="currentColor"
          strokeWidth="1.5"
        />

        <line
          x1="1335"
          y1="129"
          x2="1389"
          y2="103"
          stroke="currentColor"
          strokeWidth="1.2"
        />

        <line
          x1="1420"
          y1="108"
          x2="1449"
          y2="161"
          stroke="currentColor"
          strokeWidth="1.2"
        />

        <line
          x1="1442"
          y1="190"
          x2="1374"
          y2="220"
          stroke="currentColor"
          strokeWidth="1.2"
        />

        <line
          x1="1351"
          y1="210"
          x2="1324"
          y2="167"
          stroke="currentColor"
          strokeWidth="1.2"
        />

        <line
          x1="1286"
          y1="165"
          x2="1263"
          y2="210"
          stroke="currentColor"
          strokeWidth="1.2"
        />

        <line
          x1="1271"
          y1="218"
          x2="1342"
          y2="220"
          stroke="currentColor"
          strokeWidth="1.2"
        />
      </g>

      {/* =========================================
          DUMBBELL
      ========================================= */}

      <g className="tips__art-group tips__art-group--dumbbell">
        <g transform="rotate(-15 1370 545)">
          <line
            x1="1260"
            y1="545"
            x2="1485"
            y2="545"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
          />

          <rect
            x="1235"
            y="509"
            width="26"
            height="72"
            rx="4"
            stroke="currentColor"
            strokeWidth="2"
          />

          <rect
            x="1207"
            y="520"
            width="25"
            height="50"
            rx="4"
            stroke="currentColor"
            strokeWidth="2"
          />

          <rect
            x="1485"
            y="509"
            width="26"
            height="72"
            rx="4"
            stroke="currentColor"
            strokeWidth="2"
          />

          <rect
            x="1514"
            y="520"
            width="25"
            height="50"
            rx="4"
            stroke="currentColor"
            strokeWidth="2"
          />
        </g>

        <path
          d="M1285 644C1340 616 1400 618 1465 651"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="7 10"
        />
      </g>

      {/* =========================================
          HEARTBEAT
      ========================================= */}

      <g className="tips__art-group tips__art-group--heartbeat">
        <path
          d="
            M110 590
            H180
            L201 570
            L224 620
            L252 525
            L283 598
            L304 571
            L329 590
            H425
          "
          stroke="url(#tipsStrokeFade)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <circle
          cx="252"
          cy="525"
          r="4"
          fill="currentColor"
        />
      </g>

      {/* =========================================
          ORBITS
      ========================================= */}

      <g className="tips__art-group tips__art-group--orbit">
        <ellipse
          cx="760"
          cy="394"
          rx="360"
          ry="165"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="6 14"
        />

        <ellipse
          cx="760"
          cy="394"
          rx="270"
          ry="112"
          stroke="currentColor"
          strokeWidth="1"
        />

        <circle
          cx="1030"
          cy="394"
          r="4"
          fill="currentColor"
        />

        <circle
          cx="500"
          cy="338"
          r="3"
          fill="currentColor"
        />
      </g>

      {/* =========================================
          PARTICLES
      ========================================= */}

      <g className="tips__art-particles">
        <circle cx="420" cy="130" r="2.5" fill="currentColor" />
        <circle cx="480" cy="165" r="1.7" fill="currentColor" />
        <circle cx="1090" cy="125" r="2.2" fill="currentColor" />
        <circle cx="1160" cy="205" r="1.8" fill="currentColor" />
        <circle cx="440" cy="620" r="2.2" fill="currentColor" />
        <circle cx="1050" cy="632" r="2.5" fill="currentColor" />

        <path
          d="M1115 594L1120 604L1131 609L1120 614L1115 625L1110 614L1099 609L1110 604Z"
          stroke="currentColor"
          strokeWidth="1"
        />

        <path
          d="M392 293L396 301L405 305L396 309L392 318L388 309L379 305L388 301Z"
          stroke="currentColor"
          strokeWidth="1"
        />
      </g>
    </svg>
  )
}

function Tips() {
  const [activeId, setActiveId] = useState('progreso')

  const activeIndex = tips.findIndex(
    (tip) => tip.id === activeId,
  )

  const activeTip =
    tips.find((tip) => tip.id === activeId) ||
    tips[0]

  const ActiveIcon = activeTip.icon

  const progress =
    tips.length > 1
      ? (activeIndex / (tips.length - 1)) * 100
      : 0

  return (
    <section
      className="tips"
      id="tips"
    >
      {/* =========================================
          BACKGROUND
      ========================================= */}

      <div
        className="tips__grid"
        aria-hidden="true"
      />

      <div
        className="tips__glow tips__glow--left"
        aria-hidden="true"
      />

      <div
        className="tips__glow tips__glow--right"
        aria-hidden="true"
      />

      <TipsBackgroundArt />

      <div className="tips__container container">
        {/* =========================================
            HEADER
        ========================================= */}

        <motion.header
          className="tips__header"
          initial={{
            opacity: 0,
            y: 14,
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
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="tips__eyebrow">
            <span />

            <strong>Tips</strong>

            <i />

            <small>
              Nutrición aplicada
            </small>

            <span />
          </div>

          <h2>
            Pequeños ajustes.
            <strong>
              Mejores decisiones.
            </strong>
          </h2>

          <p>
            Información práctica para comprender mejor las variables
            que influyen en tu nutrición, rendimiento y evolución.
          </p>
        </motion.header>

        {/* =========================================
            KNOWLEDGE TIMELINE
        ========================================= */}

        <motion.div
          className="tips__knowledge"
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.35,
          }}
          transition={{
            duration: 0.65,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="tips__track-wrap">
            <div
              className="tips__rail"
              aria-hidden="true"
            >
              <span className="tips__rail-base" />

              <span
                className="tips__rail-progress"
                style={{
                  width: `${progress}%`,
                }}
              />

              <span className="tips__rail-light tips__rail-light--one" />

              <span className="tips__rail-light tips__rail-light--two" />
            </div>

            <div className="tips__track">
              {tips.map((tip) => {
                const Icon = tip.icon

                const isActive =
                  activeId === tip.id

                return (
                  <div
                    className={`tips__track-item ${
                      isActive
                        ? 'tips__track-item--active'
                        : ''
                    }`}
                    key={tip.id}
                  >
                    <span className="tips__track-label">
                      {tip.label}
                    </span>

                    <button
                      type="button"
                      className="tips__node"
                      aria-label={`Mostrar tip de ${tip.label}`}
                      aria-pressed={isActive}
                      onClick={() =>
                        setActiveId(tip.id)
                      }
                    >
                      <span
                        className="tips__node-orbit"
                        aria-hidden="true"
                      />

                      <span
                        className="tips__node-halo"
                        aria-hidden="true"
                      />

                      <span className="tips__node-core">
                        <Icon
                          size={20}
                          strokeWidth={1.55}
                        />
                      </span>

                      <span
                        className="tips__node-pulse"
                        aria-hidden="true"
                      />
                    </button>

                    <span
                      className="tips__drop-line"
                      aria-hidden="true"
                    />
                  </div>
                )
              })}
            </div>
          </div>

          {/* =========================================
              ACTIVE INFORMATION
          ========================================= */}

          <div className="tips__content">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTip.id}
                className="tips__content-inner"
                initial={{
                  opacity: 0,
                  y: 10,
                  scale: 0.985,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -7,
                  scale: 0.99,
                }}
                transition={{
                  duration: 0.32,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div
                  className="tips__content-ambient"
                  aria-hidden="true"
                >
                  <ActiveIcon
                    size={185}
                    strokeWidth={0.6}
                  />
                </div>

                <div className="tips__content-icon">
                  <span
                    className="tips__content-icon-ring"
                    aria-hidden="true"
                  />

                  <ActiveIcon
                    size={38}
                    strokeWidth={1.35}
                  />
                </div>

                <div className="tips__content-kicker">
                  <span />

                  <strong>
                    {activeTip.label}
                  </strong>

                  <i />

                  <small>
                    Punto clave
                  </small>

                  <span />
                </div>

                <h3>
                  {activeTip.title}
                </h3>

                <p>
                  {activeTip.text}
                </p>

                <div className="tips__clinical-note">
                  <span />

                  <small>
                    {activeTip.note}
                  </small>

                  <i />

                  <small>
                    Contexto individual
                  </small>

                  <span />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* =========================================
            FOOTER
        ========================================= */}

        <motion.div
          className="tips__footer"
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
            duration: 0.5,
            delay: 0.15,
          }}
        >
          <Activity
            size={14}
            strokeWidth={1.35}
          />

          <span>
            Nutri Visión Synergy
          </span>

          <i />

          <span>
            Evidencia
          </span>

          <i />

          <span>
            Contexto
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

export default Tips