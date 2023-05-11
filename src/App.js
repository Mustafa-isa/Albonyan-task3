import React from 'react'
import Home from './component/home/Home'
import About from "./component/about/About"
import Services from './component/service/Services'
import CarsGallery from './component/carsGallery/CarsGallery'
import Testmonial from "./component/testmonial/Testmonial"
import Logo from './component/logo/Logo'
function App() {
  return (
<div className="MAIN">
<Home/>
<About/>
<Services />
<CarsGallery />
<Testmonial />
<Logo />
</div>
  )
}

export default App