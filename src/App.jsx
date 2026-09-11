import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import Tips from './components/Tips/Tips'
import FAQ from './components/FAQ/FAQ'
import Consultations from './components/Consultations/Consultations'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Services />
        <Tips />
        <FAQ />
        <Consultations />
      </main>

      <Footer />
    </>
  )
}

export default App