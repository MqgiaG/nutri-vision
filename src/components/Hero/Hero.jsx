import { motion } from 'framer-motion'
import {
  Apple,
  Brain,
  Dumbbell,
  HeartPulse,
  Leaf,
  MapPin,
  MessageCircle,
  Monitor,
  ShieldCheck,
} from 'lucide-react'

import alejandroHero from '../../assets/images/logo/alejandro-cartoon-hero.png'

import './Hero.css'

const leftSignals = [
  {
    icon: Leaf,
    title: 'Nutrición',
    text: 'Personalizada',
  },
  {
    icon: Dumbbell,
    title: 'Rendimiento',
    text: 'Con estrategia',
  },
  {
    icon: HeartPulse,
    title: 'Salud',
    text: 'Sostenible',
  },
]

const rightSignals = [
  {
    icon: Apple,
    title: 'Hábitos',
    text: 'Que puedes mantener',
  },
  {
    icon: Brain,
    title: 'Educación',
    text: 'Nutricional',
  },
  {
    icon: MessageCircle,
    title: 'Seguimiento',
    text: 'Directo',
  },
]

const stats = [
  {
    value: '3 años',
    title: 'de experiencia',
    text: 'En consulta nutricional',
  },
  {
    value: '+10 años',
    title: 'en fitness',
    text: 'Experiencia en entrenamiento',
  },
  {
    value: '60 min',
    title: 'por consulta',
    text: 'Tiempo dedicado a tu proceso',
  },
  {
    value: 'Online',
    title: 'y presencial',
    text: 'Atención adaptada a ti',
  },
]

function GhostDumbbell() {
  return (
    <svg viewBox="0 0 260 110" fill="none">
      <path
        d="M74 55H186"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />

      <rect
        x="48"
        y="31"
        width="20"
        height="48"
        rx="5"
        stroke="currentColor"
        strokeWidth="4"
      />

      <rect
        x="26"
        y="21"
        width="16"
        height="68"
        rx="5"
        stroke="currentColor"
        strokeWidth="4"
      />

      <rect
        x="192"
        y="31"
        width="20"
        height="48"
        rx="5"
        stroke="currentColor"
        strokeWidth="4"
      />

      <rect
        x="218"
        y="21"
        width="16"
        height="68"
        rx="5"
        stroke="currentColor"
        strokeWidth="4"
      />
    </svg>
  )
}

function GhostApple() {
  return (
    <svg viewBox="0 0 160 180" fill="none">
      <path
        d="M83 46C82 32 87 20 100 11"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <path
        d="M94 26C110 15 127 18 137 33C120 40 106 37 94 26Z"
        stroke="currentColor"
        strokeWidth="4"
      />

      <path
        d="M79 59C64 43 40 43 26 59C9 77 12 106 20 128C30 157 44 171 63 171C72 171 77 166 83 166C90 166 95 171 104 171C123 171 138 157 148 128C156 104 159 76 142 58C128 43 105 43 91 59L85 66L79 59Z"
        stroke="currentColor"
        strokeWidth="4"
      />
    </svg>
  )
}

function GhostShaker() {
  return (
    <svg viewBox="0 0 120 180" fill="none">
      <path
        d="M36 26H84"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <path
        d="M43 17H77"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <path
        d="M32 37H88L82 157H38L32 37Z"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      <path
        d="M40 67H80"
        stroke="currentColor"
        strokeWidth="3"
      />

      <path
        d="M44 102H76"
        stroke="currentColor"
        strokeWidth="3"
      />
    </svg>
  )
}

function GhostPlate() {
  return (
    <svg viewBox="0 0 160 160" fill="none">
      <circle
        cx="80"
        cy="80"
        r="59"
        stroke="currentColor"
        strokeWidth="4"
      />

      <circle
        cx="80"
        cy="80"
        r="19"
        stroke="currentColor"
        strokeWidth="4"
      />

      <path
        d="M80 21V42"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <path
        d="M80 118V139"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <path
        d="M21 80H42"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <path
        d="M118 80H139"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  )
}

function GhostLeaf() {
  return (
    <svg viewBox="0 0 130 150" fill="none">
      <path
        d="M109 18C61 22 27 49 22 91C18 123 38 137 63 128C101 114 119 72 109 18Z"
        stroke="currentColor"
        strokeWidth="4"
      />

      <path
        d="M37 114C50 87 71 65 99 42"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  )
}

function GhostBottle() {
  return (
    <svg viewBox="0 0 120 200" fill="none">
      <path
        d="M43 18H77"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <path
        d="M47 18V34"
        stroke="currentColor"
        strokeWidth="4"
      />

      <path
        d="M73 18V34"
        stroke="currentColor"
        strokeWidth="4"
      />

      <path
        d="M38 35H82L91 171C92 181 85 187 76 187H44C35 187 28 181 29 171L38 35Z"
        stroke="currentColor"
        strokeWidth="4"
      />

      <path
        d="M35 78H85"
        stroke="currentColor"
        strokeWidth="3"
      />
    </svg>
  )
}

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__grid" aria-hidden="true" />

      <div
        className="hero__glow hero__glow--left"
        aria-hidden="true"
      />

      <div
        className="hero__glow hero__glow--center"
        aria-hidden="true"
      />

      <div
        className="hero__glow hero__glow--right"
        aria-hidden="true"
      />

      <div
        className="hero__background-word"
        aria-hidden="true"
      >
        SYNERGY
      </div>

      <div className="hero__ghosts" aria-hidden="true">
        <div className="hero__ghost hero__ghost--dumbbell">
          <GhostDumbbell />
        </div>

        <div className="hero__ghost hero__ghost--dumbbell-two">
          <GhostDumbbell />
        </div>

        <div className="hero__ghost hero__ghost--apple">
          <GhostApple />
        </div>

        <div className="hero__ghost hero__ghost--shaker">
          <GhostShaker />
        </div>

        <div className="hero__ghost hero__ghost--plate">
          <GhostPlate />
        </div>

        <div className="hero__ghost hero__ghost--leaf">
          <GhostLeaf />
        </div>

        <div className="hero__ghost hero__ghost--bottle">
          <GhostBottle />
        </div>
      </div>

      <div className="hero__main container">
        <motion.div
          className="hero__content"
          initial={{
            opacity: 0,
            y: 24,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="hero__eyebrow">
            <span className="hero__eyebrow-line" />

            <div className="hero__eyebrow-copy">
              <span>Nutrición</span>
              <i />
              <span>Salud</span>
              <i />
              <span>Rendimiento</span>
            </div>

            <span className="hero__eyebrow-line hero__eyebrow-line--end" />
          </div>

          <h1 className="hero__title">
            <span className="hero__title-line hero__title-line--top">
              Nutrición
            </span>

            <span className="hero__title-line hero__title-line--middle">
              Con
            </span>

            <span className="hero__title-line hero__title-line--bottom">
              Propósito
            </span>
          </h1>

          <div className="hero__description-wrap">
            <span className="hero__description-mark" />

            <p className="hero__description">
              Estrategias personalizadas donde
              <strong>
                {' '}
                nutrición, educación y rendimiento{' '}
              </strong>
              trabajan en sinergia para ayudarte a mejorar tu
              <strong>
                {' '}
                salud, hábitos y calidad de vida.
              </strong>
            </p>
          </div>

          <div className="hero__actions">
            <a
              href="https://wa.me/524775905740?text=Hola%20Alejandro%2C%20me%20interesa%20iniciar%20mi%20proceso%20con%20Nutri%20Visión%20Synergy."
              target="_blank"
              rel="noreferrer"
              className="hero__primary"
            >
              <span className="hero__action-icon">
                <MessageCircle
                  size={22}
                  strokeWidth={1.7}
                />
              </span>

              <div className="hero__action-copy">
                <small>
                  Agenda por WhatsApp
                </small>

                <strong>
                  Inicia tu proceso
                </strong>
              </div>
            </a>

            <a
              href="#sobre-mi"
              className="hero__secondary"
            >
              <div className="hero__action-copy">
                <small>
                  Nutrición en sinergia
                </small>

                <strong>
                  Conoce el enfoque
                </strong>
              </div>

              <span className="hero__secondary-accent" />
            </a>
          </div>

          <div className="hero__care">
            <div className="hero__care-item">
              <span className="hero__care-icon">
                <MapPin
                  size={21}
                  strokeWidth={1.7}
                />
              </span>

              <div className="hero__care-copy">
                <small>
                  Presencial
                </small>

                <strong>
                  San Felipe, Guanajuato
                </strong>

                <span>
                  Atención personalizada
                </span>
              </div>
            </div>

            <span className="hero__care-divider" />

            <div className="hero__care-item">
              <span className="hero__care-icon">
                <Monitor
                  size={21}
                  strokeWidth={1.7}
                />
              </span>

              <div className="hero__care-copy">
                <small>
                  Consulta online
                </small>

                <strong>
                  Desde cualquier lugar
                </strong>

                <span>
                  Seguimiento a distancia
                </span>
              </div>
            </div>
          </div>

          <div className="hero__stats">
            {stats.map(
              ({
                value,
                title,
                text,
              }) => (
                <div
                  className="hero__stat"
                  key={`${value}-${title}`}
                >
                  <span className="hero__stat-topline" />

                  <strong>
                    {value}
                  </strong>

                  <span>
                    {title}
                  </span>

                  <small>
                    {text}
                  </small>
                </div>
              ),
            )}
          </div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{
            opacity: 0,
            x: 40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div
            className="hero__visual-aura"
            aria-hidden="true"
          />

          <div
            className="hero__orbit hero__orbit--one"
            aria-hidden="true"
          />

          <div
            className="hero__orbit hero__orbit--two"
            aria-hidden="true"
          />

          <div
            className="hero__orbit-dot hero__orbit-dot--one"
            aria-hidden="true"
          />

          <div
            className="hero__orbit-dot hero__orbit-dot--two"
            aria-hidden="true"
          />

          <div
            className="hero__orbit-dot hero__orbit-dot--three"
            aria-hidden="true"
          />

          <div className="hero__signals hero__signals--left">
            {leftSignals.map(
              ({
                icon: Icon,
                title,
                text,
              }) => (
                <div
                  className="hero__signal"
                  key={title}
                >
                  <span className="hero__signal-icon">
                    <Icon
                      size={22}
                      strokeWidth={1.55}
                    />
                  </span>

                  <div className="hero__signal-copy">
                    <strong>
                      {title}
                    </strong>

                    <span>
                      {text}
                    </span>
                  </div>

                  <span className="hero__signal-line">
                    <i />
                  </span>
                </div>
              ),
            )}
          </div>

          <div className="hero__character-wrap">
            <img
              src={alejandroHero}
              alt="Ilustración del especialista de Nutri Visión Synergy"
              className="hero__character"
            />
          </div>

          <div className="hero__signals hero__signals--right">
            {rightSignals.map(
              ({
                icon: Icon,
                title,
                text,
              }) => (
                <div
                  className="hero__signal"
                  key={title}
                >
                  <span className="hero__signal-line">
                    <i />
                  </span>

                  <span className="hero__signal-icon">
                    <Icon
                      size={22}
                      strokeWidth={1.55}
                    />
                  </span>

                  <div className="hero__signal-copy">
                    <strong>
                      {title}
                    </strong>

                    <span>
                      {text}
                    </span>
                  </div>
                </div>
              ),
            )}
          </div>

          <div className="hero__visual-heading">
            <span>
              Nutri Visión Synergy
            </span>

            <strong>
              Cuerpo · mente · nutrición
            </strong>
          </div>

          <div className="hero__motto">
            <span className="hero__motto-number">
              NVS / 01
            </span>

            <span className="hero__motto-small">
              Disciplina hoy
            </span>

            <strong>
              Resultados
              <br />
              mañana.
            </strong>

            <span className="hero__motto-rule" />
          </div>

          <div className="hero__seal">
            <ShieldCheck
              size={18}
              strokeWidth={1.6}
            />

            <div>
              <span>
                Tu potencial
              </span>

              <strong>
                También se nutre
              </strong>
            </div>
          </div>

          <div
            className="hero__vertical-word"
            aria-hidden="true"
          >
            NUTRICIÓN · FITNESS · SINERGIA
          </div>
        </motion.div>
      </div>

      <div className="hero__strip">
        <div className="hero__strip-inner container">
          <div>
            <strong>01</strong>

            <span>
              Alimentación con propósito
            </span>
          </div>

          <i />

          <div>
            <strong>02</strong>

            <span>
              Hábitos sostenibles
            </span>
          </div>

          <i />

          <div>
            <strong>03</strong>

            <span>
              Rendimiento
            </span>
          </div>

          <i />

          <div>
            <strong>04</strong>

            <span>
              Tu mejor versión
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero