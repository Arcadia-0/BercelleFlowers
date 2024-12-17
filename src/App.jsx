import './App.css'
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
    </div>
  )
}

export default App
