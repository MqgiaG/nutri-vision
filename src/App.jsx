import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'

import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import Results from './components/Results/Results'
import Tips from './components/Tips/Tips'
import FAQ from './components/FAQ/FAQ'
import Consultations from './components/Consultations/Consultations'
import Footer from './components/Footer/Footer'
import Loader from './components/Loader/Loader'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1200)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loader />}
      </AnimatePresence>

      <Header />

      <main>
        <Hero />
        <About />
        <Services />
        <Results />
        <Tips />
        <FAQ />
        <Consultations />
      </main>

      <Footer />
    </>
  )
}

export default App