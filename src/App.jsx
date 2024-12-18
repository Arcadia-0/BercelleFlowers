import './App.css'
import CircleSection from './components/Circle/CircleSection'
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
    </div>
  )
}

export default App
