import { motion } from 'framer-motion'
import {
  Activity,
  MapPin,
  MessageCircle,
} from 'lucide-react'

import logo from '../../assets/images/logo/nutriologo-logo.png'

import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  const whatsappUrl =
    'https://wa.me/524775905740?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20informaci%C3%B3n%20sobre%20una%20consulta%20en%20Nutri%20Visi%C3%B3n%20Synergy.'

  return (
    <footer className="footer">
      <div
        className="footer__light"
        aria-hidden="true"
      />

      <motion.div
        className="footer__main container"
        initial={{
          opacity: 0,
          y: 8,
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
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* BRAND */}

        <a
          href="#inicio"
          className="footer__brand"
          aria-label="Nutri Visión Synergy - Inicio"
        >
          <span className="footer__logo">
            <img
              src={logo}
              alt=""
              aria-hidden="true"
            />
          </span>

          <span className="footer__brand-copy">
            <small>
              Nutrición · Fitness · Rendimiento
            </small>

            <strong>
              Nutri Visión
              <span>Synergy</span>
            </strong>

            <em>
              Nutre tu mejor versión
            </em>
          </span>
        </a>

        {/* CONTACT */}

        <div className="footer__contact">
          {/* LOCATION */}

          <div className="footer__contact-item">
            <span className="footer__contact-icon">
              <MapPin
                size={17}
                strokeWidth={1.55}
              />

              <i />
            </span>

            <span className="footer__contact-copy">
              <small>
                Ubicación
              </small>

              <strong>
                San Felipe, Gto.
              </strong>

              <em>
                Presencial · Online
              </em>
            </span>
          </div>

          {/* WHATSAPP */}

          <a
            className="footer__contact-item footer__contact-item--link"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            <span className="footer__contact-icon">
              <MessageCircle
                size={17}
                strokeWidth={1.55}
              />

              <i />
            </span>

            <span className="footer__contact-copy">
              <small>
                WhatsApp
              </small>

              <strong>
                477 590 5740
              </strong>

              <em>
                Agenda tu consulta
              </em>
            </span>
          </a>
        </div>
      </motion.div>

      {/* BOTTOM */}

      <div className="footer__bottom">
        <div className="footer__bottom-inner container">
          <span>
            © {currentYear} Nutri Visión Synergy
          </span>

          <div className="footer__signature">
            <Activity
              size={10}
              strokeWidth={1.35}
            />

            <span>
              Nutrición con visión en sinergia
            </span>
          </div>

          <span>
            NVS · Guanajuato
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer