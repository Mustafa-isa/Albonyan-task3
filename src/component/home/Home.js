import {React,useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./nav.css"
function Home() {
  const [isOpen ,SetOpen] = useState(false)
  const handleDrop =() =>{
    SetOpen(!isOpen)
  }
  return (
  <section className="home_section">
    <header>
    <nav>
    <h1>
        YourCar
      </h1>
      <div className="center_nav">
        <div className={`${isOpen ?  "paths show" : "paths"}`}>
          <ul>
            <li className='active'><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services" >Services</a></li>
            <li ><a href="#cars">Cars</a></li>
            <li ><a href="#contcat">Contact Us</a></li>
          </ul>
        </div>
        <div className="icon" >
          <span className="numOfPr">3</span>
        <FontAwesomeIcon className="icon_i" icon={faShoppingCart} />
        </div>
      </div>
      <div className="Toggle" onClick={handleDrop}>
      {isOpen ? (
          <FontAwesomeIcon icon={faTimes} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </div>
    </nav>

    </header>
    .home_co
  </section>
  )
}

export default Home