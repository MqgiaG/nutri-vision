import { motion } from 'framer-motion'

import logoNVS from '../../assets/images/logo/nutriologo-logo-completo.png'

import './Loader.css'

function Loader() {
  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.015,
      }}
      transition={{
        duration: 0.42,
        ease: [0.76, 0, 0.24, 1],
      }}
    >
      <div className="loader__background" aria-hidden="true">
        <span className="loader__giant-text">NVS</span>

        <div className="loader__stripe loader__stripe--one" />
        <div className="loader__stripe loader__stripe--two" />
        <div className="loader__stripe loader__stripe--three" />

        <div className="loader__noise" />
        <div className="loader__glow" />
      </div>

      <motion.div
        className="loader__content"
        initial={{
          opacity: 0,
          y: 18,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <motion.div
          className="loader__kicker"
          initial={{
            opacity: 0,
            letterSpacing: '0.38em',
          }}
          animate={{
            opacity: 1,
            letterSpacing: '0.24em',
          }}
          transition={{
            delay: 0.12,
            duration: 0.5,
          }}
        >
          NUTRICIÓN
          <span />
          FITNESS
          <span />
          RENDIMIENTO
        </motion.div>

        <div className="loader__logo-stage">
          <div className="loader__logo-border" />

          <motion.div
            className="loader__logo-wrap"
            initial={{
              opacity: 0,
              scale: 0.82,
              rotate: -1.5,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            transition={{
              delay: 0.08,
              duration: 0.62,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <img
              className="loader__logo"
              src={logoNVS}
              alt="Nutri Visión Synergy"
            />

            <motion.div
              className="loader__logo-shine"
              initial={{ x: '-180%' }}
              animate={{ x: '220%' }}
              transition={{
                delay: 0.36,
                duration: 0.72,
                ease: [0.76, 0, 0.24, 1],
              }}
            />
          </motion.div>

          <motion.div
            className="loader__impact"
            initial={{
              scaleX: 0,
              opacity: 0,
            }}
            animate={{
              scaleX: [0, 1, 0.88],
              opacity: [0, 1, 0.3],
            }}
            transition={{
              delay: 0.18,
              duration: 0.7,
              ease: 'easeOut',
            }}
          />
        </div>

        <motion.div
          className="loader__loading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.3,
          }}
        >
          <div className="loader__loading-head">
            <span>PREPARANDO TU EXPERIENCIA</span>

            <motion.span
              initial={{ opacity: 0.25 }}
              animate={{ opacity: [0.25, 1, 0.25] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              NVS
            </motion.span>
          </div>

          <div className="loader__track">
            <motion.div
              className="loader__progress"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                delay: 0.18,
                duration: 1.15,
                ease: [0.76, 0, 0.24, 1],
              }}
            />
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="loader__flash"
        initial={{ x: '-120vw' }}
        animate={{ x: '140vw' }}
        transition={{
          delay: 0.26,
          duration: 0.82,
          ease: [0.76, 0, 0.24, 1],
        }}
        aria-hidden="true"
      />
    </motion.div>
  )
}

export default Loader