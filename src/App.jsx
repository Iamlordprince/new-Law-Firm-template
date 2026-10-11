import './App.css'
import About from './components/about'
import Home from './components/home'
import NavBar from './components/navBar'
import OurServices from './components/ourServices'
import PracticalArea from './components/pacticalArea'


function App() {

  return (
   <div>
    <NavBar/>
    <Home/>
    <PracticalArea/>
    <About/>
    <OurServices/>
   </div>
  )
}

export default App
