import './App.css'
import About from './components/About'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import Navbar from './components/Navbar'
import "./styles/fonts.css"

function App() {

  return (
    <>
      <div className='w-full min-h-screen bg-zinc-900 text-white'>
        <Navbar/>
        <LandingPage/>
        <Marquee/>
        <About/>
      </div>
    </>
  )
}

export default App
