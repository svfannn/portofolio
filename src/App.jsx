import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './assets/css/styles.css'
import Navigation from './component/Navigation/Navigation'
import Masterhead from './component/Masterhead/Masterhead'
import About from './component/About Section/About'
import Contact from './component/Contact Section/Contact'
import Portofolio from './component/Portofolio Section/Portofolio'
import Footer from './component/Footer/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation />
      <Masterhead />
      <Portofolio />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default App
