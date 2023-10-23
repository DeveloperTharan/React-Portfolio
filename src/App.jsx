import react from 'react'
import './App.css'
import Hero from './components/Hero'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div className='container mx-auto overflow-x-hidden'>
        <Hero />
        <About />
        <Projects/>
        <Services/>
        <Contact/>
      </div>
      <Footer/>
    </>
  )
}

export default App
