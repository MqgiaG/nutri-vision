
import { useEffect, useRef, useState } from 'react'
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from 'framer-motion'

import {
  Apple,
  BadgeCheck,
  Brain,
  ChevronRight,
  Dumbbell,
  HeartHandshake,
  Leaf,
  Quote,
  ShieldCheck,
  Sparkles,
  Target,
  X,
} from 'lucide-react'

import './Testimonials.css'

/*
  NVS · Testimonios de pacientes

  Se conservan los ocho testimonios anteriores
  y se agrega el de Mary Piña como número 09.

  Los textos están editados para su presentación web.
  Antes de publicar, confirma con cada paciente la
  autorización para mostrar su testimonio y nombre.
*/

const testimonials = [
  {
    id: '01',
    name: 'Gabriela',
    icon: 'target',
    tag: 'Testimonio destacado',
    title: 'Un cambio físico, mental y sostenible.',
    excerpt:
      'Gabriela llegó buscando un cambio estético, pero durante su proceso también fortaleció su relación con la comida, su disciplina y la forma en la que entiende su cuerpo.',
    body: [
      'Hola, mi nombre es Gabriela y me gustaría compartir un poco de todo lo que he logrado al pertenecer a Nutri Visión Synergy.',

      'Si tuviera que resumir mi proceso, lo dividiría en tres partes: decisión, proceso y evolución.',

      'Decidí iniciar un asesoramiento porque quería cambiar mi cuerpo desde un enfoque estético, sentirme mejor y aprender cómo hacerlo correctamente. Por eso me acerqué a Javier Alejandro Hernández Ortiz.',

      'Desde la primera consulta entendí que no se trataba solamente de recibir un plan alimenticio y una guía de ejercicios. También aprendí sobre la importancia de construir una relación sana con la comida, entender mi cuerpo y reconocer que cada proceso es diferente.',

      'Algo que valoro muchísimo es que su enfoque se adapta a la vida real. No propone alimentos extraños o costosos, sino opciones que consideran nuestros gustos, necesidades y posibilidades económicas.',

      'Mi proceso no ha sido lineal, porque también influyen el trabajo y las situaciones de la vida diaria. Aun así, siempre he sentido acompañamiento. Si avanzo despacio, él va conmigo; si avanzo rápido, también. No permite que pierda de vista mi objetivo.',

      'Con el tiempo entendí que mi meta no era solamente cambiar físicamente. También he mejorado mi relación con la comida y aprendido a medir porciones, preparar mis alimentos, realizar los ejercicios correctamente e identificar lo que me aporta cada alimento.',

      'Hoy veo este proceso como un aprendizaje continuo. No se trata de llegar a un final, sino de seguir construyendo hábitos para cuidar mi cuerpo y mi mente.',
    ],
    highlights: [
      'Mejoró su relación con la comida',
      'Aprendió sobre porciones y aportes nutricionales',
      'Desarrolló disciplina y constancia',
      'Reconoció que cada cuerpo tiene su propio proceso',
    ],
  },
  {
    id: '02',
    name: 'Eva Rodríguez',
    icon: 'sparkles',
    tag: 'Nutrición deportiva',
    title: 'Un plan adaptado a mi deporte y a mi estilo de vida.',
    excerpt:
      'Eva destaca que su plan se adaptó a sus objetivos, su deporte y sus horarios laborales. También comparte los cambios que ha notado en su energía y condición física.',
    body: [
      'En mi experiencia, ha sido un excelente nutriólogo deportivo. Siempre he notado su profesionalismo y conocimiento.',

      'Ha adaptado todo a mis objetivos, a mi deporte y, sobre todo, a mi estilo de vida, incluyendo mis horarios laborales.',

      'He notado más energía, mejor condición y cambios físicos con las rutinas y el plan que me ofrece.',

      'Más allá del profesionalismo, es una persona muy humana. Explica con entusiasmo todo lo que tengo duda y me motiva bastante durante el proceso.',
    ],
    highlights: [
      'Plan adaptado a sus objetivos y deporte',
      'Consideración de sus horarios laborales',
      'Cambios percibidos en energía y condición',
      'Acompañamiento y resolución de dudas',
    ],
  },
  {
    id: '03',
    name: 'Erik Alderete',
    icon: 'badge',
    tag: 'Seguimiento personalizado',
    title: 'Un seguimiento que se adapta a mis necesidades.',
    excerpt:
      'Erik destaca la accesibilidad del acompañamiento, la adaptación a sus necesidades y el seguimiento de sus medidas corporales.',
    body: [
      'En mi experiencia con mi nutriólogo Ale, lo recomendaría muchísimo.',

      'Es accesible para estudiantes y se acopla a tus necesidades.',

      'Además, da un seguimiento preciso de tus medidas corporales y adapta el acompañamiento a tu alimentación.',

      'Por eso y más, considero que es una excelente opción tener un seguimiento con él.',
    ],
    highlights: [
      'Acompañamiento accesible para estudiantes',
      'Adaptación a las necesidades individuales',
      'Seguimiento de medidas corporales',
      'Orientación alimentaria personalizada',
    ],
  },
  {
    id: '04',
    name: 'Alondra Padrón',
    icon: 'heart',
    tag: 'Cambio de hábitos',
    title: 'Confianza, empatía y hábitos que permanecen.',
    excerpt:
      'Alondra comparte que el acompañamiento le ayudó a construir hábitos alimenticios, sentirse más segura y reconocer cambios que van más allá de la báscula.',
    body: [
      'En mi proceso de pérdida de peso y mejora de hábitos alimenticios y físicos, el acompañamiento ha sido una pieza fundamental.',

      'Desde la primera consulta me sentí muy cómoda y sabía que podía confiar en ti y en tus conocimientos.',

      'Recomiendo tu trabajo porque eres una persona que me ha acompañado, motivado y apoyado durante todo este camino. Tu empatía y calidez humana me han hecho confiar más en mí.',

      'Poco a poco he aprendido a llevar una mejor alimentación, conocer mis necesidades y crear hábitos que pueda mantener día con día.',

      'Más que cambios o números en la báscula, hoy me siento diferente y muy orgullosa de lo que he conseguido.',
    ],
    highlights: [
      'Mayor confianza durante su proceso',
      'Construcción de hábitos alimenticios',
      'Acompañamiento y motivación',
      'Cambios que van más allá del peso',
    ],
  },
  {
    id: '05',
    name: 'Baresi Rivas Ortiz',
    icon: 'shield',
    tag: 'Educación nutricional',
    title: 'Mucho más que recibir una dieta y una rutina.',
    excerpt:
      'Baresi destaca que aprendió a comprender mejor su alimentación y reconoce la atención amable, profesional y paciente durante sus consultas.',
    body: [
      'Mi experiencia con Nutri Visión Synergy y Alejandro ha sido excelente.',

      'Más allá de solo darme una dieta y una rutina, me ha enseñado a entender lo que como y a adquirir conocimientos de nutrición que antes no tenía.',

      'El trato siempre ha sido de 10: muy amable, profesional y paciente para resolver cada duda.',

      'Definitivamente, el acompañamiento del nutriólogo es clave y hace una gran parte del trabajo. Pero también me queda claro que, como paciente, hay que poner de nuestra parte y ser constantes para que los resultados se vean.',
    ],
    highlights: [
      'Aprendizaje sobre alimentación',
      'Atención amable y paciente',
      'Resolución de dudas',
      'Mayor compromiso con el proceso',
    ],
  },
  {
    id: '06',
    name: 'Luis Manuel Alva González',
    icon: 'dumbbell',
    tag: 'Recomposición corporal',
    title: 'De la inseguridad a disfrutar mi proceso.',
    excerpt:
      'Luis Manuel comparte que llegó con inseguridades sobre su físico y que el acompañamiento le ayudó a ganar confianza y motivación.',
    body: [
      'Llegué al consultorio con muchas inseguridades relacionadas con mi físico y con miedo de volver a empezar.',

      'Desde el primer contacto me sentí cómodo para expresar mi proceso anterior y recibir orientación para comenzar de nuevo.',

      'Lo que antes era una inseguridad al subirme a la báscula se convirtió en motivación al reconocer los avances que iba teniendo en cada consulta.',

      'Con el seguimiento aprendí a disfrutar más el proceso y a relacionarme de otra manera con la alimentación y el ejercicio.',

      'Hoy me siento agradecido por el acompañamiento y por la motivación que recibo para continuar trabajando en mis objetivos.',
    ],
    highlights: [
      'Mayor seguridad personal',
      'Motivación a lo largo del proceso',
      'Seguimiento de su recomposición corporal',
      'Mejor relación con sus objetivos físicos',
    ],
  },
  {
    id: '07',
    name: 'Alex Olvera Vecino',
    icon: 'brain',
    tag: 'Atención personalizada',
    title: 'Un plan práctico para mi día a día.',
    excerpt:
      'Alex valora la confianza desde la primera consulta, la adaptación a sus horarios y el seguimiento cercano durante su proceso.',
    body: [
      'Mi experiencia con mi nutriólogo ha sido excelente de principio a fin.',

      'Desde la primera consulta me sentí en confianza. Se tomó el tiempo de explicarme todo y de entender mis horarios.',

      'Nada de dietas imposibles: todo el plan fue muy personalizado y práctico para mi día a día.',

      'Lo que más valoro es el seguimiento. Siempre está al pendiente, resuelve dudas y te motiva cuando lo necesitas.',

      'He notado cambios no solo en los músculos, sino también en mi energía, mi digestión y mi relación con la comida.',
    ],
    highlights: [
      'Plan adaptado a sus horarios',
      'Acompañamiento cercano',
      'Resolución de dudas',
      'Cambios percibidos en su bienestar',
    ],
  },
  {
    id: '08',
    name: 'Ariana Camarillo',
    icon: 'apple',
    tag: 'Bienestar integral',
    title: 'Mucho más que cambios físicos.',
    excerpt:
      'Ariana describe un proceso en el que ha aprendido a cuidar su alimentación, ser constante y sentirse con más seguridad y confianza.',
    body: [
      'Quiero agradecerte por todo el acompañamiento que me has dado durante este proceso.',

      'Mi experiencia contigo ha sido muy bonita y ha significado mucho más que solamente ver cambios físicos.',

      'Gracias a tu orientación he aprendido a tener una mejor relación con la comida, a ser más disciplinada y constante, pero también a disfrutar el proceso sin sentir que estoy haciendo algo imposible de mantener.',

      'Físicamente he notado cambios que me hacen sentir muy feliz, pero creo que lo más importante ha sido cómo ha cambiado la manera en la que me veo y me siento conmigo misma.',

      'He ganado mucha más seguridad, confianza y motivación.',

      'También agradezco mucho tu paciencia, tu disposición para resolver mis dudas y la manera en la que siempre me motivas a seguir adelante.',
    ],
    highlights: [
      'Mejor relación con la comida',
      'Mayor disciplina y constancia',
      'Más confianza y seguridad personal',
      'Acompañamiento durante su proceso',
    ],
  },

  // NUEVO TESTIMONIO · MARY PIÑA

  {
    id: '09',
    name: 'Mary Piña',
    icon: 'leaf',
    tag: 'Hábitos alimenticios',
    title: 'Aprendí a comer y a dejar atrás mis miedos.',
    excerpt:
      'Mary cuenta que aprendió a comprender qué, cómo y cuánto comer. Su proceso también le ha ayudado a superar inseguridades y construir hábitos para ella y su familia.',
    body: [
      'Alejandro no es un nutricionista más. Con él aprendí a comer, a romper mitos y a transformar miedos y creencias sobre la dieta.',

      'Cuando comencé con él, hace ahora un año, me enseñó qué, cómo y cuánto comer. Esa ha sido la clave para incorporar en mi vida nuevos hábitos alimenticios, que no solo he aplicado yo, sino también toda mi familia.',

      'Su comprensión y paciencia hacen que este camino sea más llevadero y también un descubrimiento de uno mismo.',

      'Estuve mucho tiempo en mi zona de confort hasta que me di cuenta de que el tiempo estaba pasando y mi sedentarismo no me llevaría a nada bueno. Por ello, busqué ayuda y encontré más de lo que esperaba.',

      'No es fácil, pero con alguien que me guía en el camino y comprende cómo me siento, he ido dejando atrás inseguridades, miedos, pensamientos irracionales y muchos complejos.',

      'Día con día voy pisando más fuerte mientras compruebo que quererme y cuidarme es mi mejor y primera opción.',
    ],
    highlights: [
      'Aprendió qué, cómo y cuánto comer',
      'Incorporó hábitos junto con su familia',
      'Encontró acompañamiento y paciencia',
      'Ha trabajado en superar miedos e inseguridades',
    ],
  },
]

const iconMap = {
  target: Target,
  sparkles: Sparkles,
  badge: BadgeCheck,
  heart: HeartHandshake,
  shield: ShieldCheck,
  dumbbell: Dumbbell,
  brain: Brain,
  apple: Apple,
  leaf: Leaf,
}

function Testimonials() {
  const [activeItem, setActiveItem] = useState(null)

  const dialogRef = useRef(null)
  const closeButtonRef = useRef(null)
  const triggerRef = useRef(null)

  const reduceMotion = useReducedMotion()

  const openModal = (item) => {
    triggerRef.current = document.activeElement
    setActiveItem(item)
  }

  const closeModal = () => {
    setActiveItem(null)
  }

  useEffect(() => {
    if (!activeItem) return undefined

    const previousOverflow = document.body.style.overflow

    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeModal()
      }

      if (event.key === 'Tab') {
        event.preventDefault()
        closeButtonRef.current?.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)

      triggerRef.current?.focus()
    }
  }, [activeItem])

  return (
    <section
      className="testimonials"
      aria-labelledby="testimonials-heading"
    >
      {/* ENCABEZADO */}

      <header className="testimonials__header">
        <div className="testimonials__eyebrow">
          <span />

          EXPERIENCIAS REALES

          <span />
        </div>

        <h3 id="testimonials-heading">
          TESTIMONIOS QUE HABLAN
          <br />

          <strong>DEL PROCESO COMPLETO.</strong>
        </h3>

        <p>
          Cada persona tiene una historia diferente.
          Conoce las experiencias que nuestros pacientes
          han compartido sobre su acompañamiento.
        </p>
      </header>

      {/* NUEVE TESTIMONIOS */}

      <div className="testimonials__grid">
        {testimonials.map((item, index) => {
          const Icon = iconMap[item.icon] || Quote

          return (
            <motion.article
              key={item.id}
              className="testimonials__card"
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
                amount: 0.12,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.5,
                delay: reduceMotion
                  ? 0
                  : Math.min(index % 3, 2) * 0.06,
              }}
            >
              <div className="testimonials__card-top">
                <span>REFERENCIA / {item.id}</span>
                <span>{item.tag}</span>
              </div>

              <div className="testimonials__profile">
                <div
                  className="testimonials__avatar"
                  aria-hidden="true"
                >
                  <Icon size={22} strokeWidth={1.8} />
                </div>

                <div className="testimonials__identity">
                  <h4>{item.name}</h4>
                  <p>Paciente / Nutri Visión Synergy</p>
                </div>
              </div>

              <div className="testimonials__copy">
                <h5>{item.title}</h5>
                <p>{item.excerpt}</p>
              </div>

              <button
                type="button"
                className="testimonials__button"
                onClick={() => openModal(item)}
                aria-label={`Leer testimonio completo de ${item.name}`}
              >
                LEER TESTIMONIO

                <ChevronRight
                  size={16}
                  strokeWidth={1.8}
                />
              </button>
            </motion.article>
          )
        })}
      </div>

      <p className="testimonials__note">
        Testimonios adaptados para facilitar su lectura.
        Cada experiencia es individual y los resultados
        pueden variar de una persona a otra.
      </p>

      {/* TESTIMONIO AMPLIADO */}

      <AnimatePresence>
        {activeItem && (
          <motion.div
            className="testimonials__overlay"
            role="presentation"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                closeModal()
              }
            }}
          >
            <motion.div
              className="testimonials__modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="testimonial-modal-title"
              ref={dialogRef}
              tabIndex={-1}
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 18,
                      scale: 0.98,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={
                reduceMotion
                  ? undefined
                  : {
                      opacity: 0,
                      y: 10,
                      scale: 0.98,
                    }
              }
              transition={{
                duration: reduceMotion ? 0 : 0.24,
              }}
            >
              <div className="testimonials__modal-head">
                <div className="testimonials__modal-label">
                  <span>
                    TESTIMONIO NVS / {activeItem.id}
                  </span>

                  <h4 id="testimonial-modal-title">
                    {activeItem.name}
                  </h4>
                </div>

                <button
                  ref={closeButtonRef}
                  type="button"
                  className="testimonials__close"
                  onClick={closeModal}
                  aria-label="Cerrar testimonio"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="testimonials__modal-body">
                <div className="testimonials__modal-intro">
                  <div
                    className="testimonials__modal-icon"
                    aria-hidden="true"
                  >
                    {(() => {
                      const Icon =
                        iconMap[activeItem.icon] || Quote

                      return (
                        <Icon
                          size={24}
                          strokeWidth={1.8}
                        />
                      )
                    })()}
                  </div>

                  <div>
                    <span>{activeItem.tag}</span>
                    <h5>{activeItem.title}</h5>
                  </div>
                </div>

                <div className="testimonials__modal-text">
                  {activeItem.body.map((paragraph, index) => (
                    <p key={index}>
                      {paragraph}
                    </p>
                  ))}
                </div>

                {activeItem.highlights.length > 0 && (
                  <div className="testimonials__highlights">
                    <h6>Puntos clave del proceso</h6>

                    <ul>
                      {activeItem.highlights.map(
                        (point, index) => (
                          <li key={index}>
                            {point}
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Testimonials