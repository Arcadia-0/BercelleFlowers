import './App.css'
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
    </div>
  )
}

export default App
