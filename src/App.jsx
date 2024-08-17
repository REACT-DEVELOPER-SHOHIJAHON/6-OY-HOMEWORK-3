import './App.css'
import Ads from './components/ads/Ads.jsx'
import Customer from './components/customers/Customer.jsx'
import Footer from './components/footer/Footer.jsx'
import Hero from './components/hero/Hero'
import Menu from './components/menu/Menu'
import Navbar from './components/nav/Navbar'
import {menu, customers} from "./static/data.js"

function App() {
  

  return (
    <>
      <Navbar/>
      <Hero/>
      <Menu  products={menu}/>
      <Ads/>
      <Customer customers={customers}/>
      <Footer/>
    </>
  )
}

export default App
