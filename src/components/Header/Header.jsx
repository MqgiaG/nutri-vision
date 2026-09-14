import { useEffect, useState } from 'react'
import {
  Menu,
  X,
  MessageCircle,
} from 'lucide-react'

import logo from '../../assets/images/logo/nutriologo-logo.png'
import dumbbell from '../../assets/images/logo/mancuerna.png'

import './Header.css'

const navLinks = [
  {
    label: 'Inicio',
    href: '#inicio',
    id: 'inicio',
  },
  {
    label: 'Sobre mí',
    href: '#sobre-mi',
    id: 'sobre-mi',
  },
  {
    label: 'Servicios',
    href: '#servicios',
    id: 'servicios',
  },
  {
    label: 'Resultados',
    href: '#resultados',
    id: 'resultados',
  },
  {
    label: 'Tips',
    href: '#tips',
    id: 'tips',
  },
  {
    label: 'FAQ',
    href: '#faq',
    id: 'faq',
  },
]

const whatsappUrl =
  'https://wa.me/524775905740?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20informaci%C3%B3n%20sobre%20una%20consulta%20en%20Nutri%20Visi%C3%B3n%20Synergy.'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)

      const position = window.scrollY + 180
      let sectionId = 'inicio'

      navLinks.forEach(({ id }) => {
        const section = document.getElementById(id)

        if (
          section &&
          section.offsetTop <= position
        ) {
          sectionId = id
        }
      })

      setActiveSection(sectionId)
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    const handleResize = () => {
      if (window.innerWidth > 1120) {
        setIsMenuOpen(false)
      }
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (window.innerWidth <= 1120) {
      document.body.style.overflow = isMenuOpen
        ? 'hidden'
        : ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`header ${
        isScrolled ? 'header--scrolled' : ''
      }`}
    >
      <div className="header__shell container">
        <a
          href="#inicio"
          className="header__brand"
          onClick={closeMenu}
          aria-label="Nutri Visión Synergy - Inicio"
        >
          <div className="header__brand-mark">
            <span className="header__orbit header__orbit--one" />
            <span className="header__orbit header__orbit--two" />

            <img
              src={logo}
              alt=""
              aria-hidden="true"
              className="header__logo"
            />
          </div>

          <div className="header__brand-info">
            <span className="header__brand-overline">
              Nutrición · Fitness · Rendimiento
            </span>

            <div className="header__brand-title">
              <strong>Nutri Visión</strong>
              <span>Synergy</span>
            </div>

            <small className="header__brand-slogan">
              Nutre tu mejor versión
            </small>
          </div>
        </a>

        <div
          className={`header__menu ${
            isMenuOpen
              ? 'header__menu--open'
              : ''
          }`}
        >
          <div className="header__menu-top">
            <span>NVS</span>
            <strong>Navegación</strong>
          </div>

          <nav
            id="main-navigation"
            className="header__nav"
            aria-label="Navegación principal"
          >
            {navLinks.map(
              ({
                label,
                href,
                id,
              }) => (
                <a
                  key={id}
                  href={href}
                  className={`header__nav-link ${
                    activeSection === id
                      ? 'header__nav-link--active'
                      : ''
                  }`}
                  onClick={closeMenu}
                >
                  <span className="header__dumbbell-slot">
                    <img
                      src={dumbbell}
                      alt=""
                      aria-hidden="true"
                      className="header__dumbbell"
                    />
                  </span>

                  <span className="header__nav-name">
                    {label}
                  </span>
                </a>
              ),
            )}
          </nav>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="header__mobile-cta"
            onClick={closeMenu}
          >
            <MessageCircle size={18} />
            Hablar con NVS
          </a>
        </div>

        <div className="header__actions">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="header__cta"
          >
            <div className="header__cta-copy">
              <span>WhatsApp</span>
              <strong>Agenda tu consulta</strong>
            </div>

            <div className="header__cta-separator" />

            <span className="header__cta-orb">
              <span className="header__cta-orb-glow" />

              <MessageCircle
                size={21}
                strokeWidth={2.15}
              />
            </span>
          </a>

          <button
            className="header__menu-button"
            type="button"
            aria-label={
              isMenuOpen
                ? 'Cerrar menú'
                : 'Abrir menú'
            }
            aria-expanded={isMenuOpen}
            aria-controls="main-navigation"
            onClick={() =>
              setIsMenuOpen(
                (current) => !current,
              )
            }
          >
            {isMenuOpen ? (
              <X size={25} />
            ) : (
              <Menu size={25} />
            )}
          </button>
        </div>
      </div>

      <div className="header__energy-line">
        <span />
      </div>

      {isMenuOpen && (
        <button
          type="button"
          className="header__overlay"
          aria-label="Cerrar menú"
          onClick={closeMenu}
        />
      )}
    </header>
  )
}

export default Header