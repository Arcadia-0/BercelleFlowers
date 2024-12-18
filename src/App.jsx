import './App.css'
import CircleSection from './components/Circle/CircleSection'
import Contact from './components/Contact/Contact'
import Discount from './components/Discount/Discount'
import Hero from './components/Hero/Hero'
import { Navbar } from './components/Navbar/Navbar'
import Premium from './components/Premium/Premium'
import Products from './components/Products/Products'

function App() {

  return (
    <div>
    <Navbar/>
    <Hero/>
    <Premium/>
    <Products/>
    <Discount/>
    <CircleSection/>
    <Contact/>
    </div>
  )
}

export default App
