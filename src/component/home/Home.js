import {React,useState ,useRef ,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import arowBtn  from "../../assets/images/Vector (1).png"
import "./nav.css"
function Home() {
const  headerRed =useRef()
  const [isOpen ,SetOpen] = useState(false)
  const handleDrop =() =>{
    SetOpen(!isOpen)
  }
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const firstViewportHeight = window.innerHeight;

      if (scrollPosition >= firstViewportHeight / 10) {
        headerRed.current.classList.add('navbar-scrolled');
      } else {
        headerRed.current.classList.remove('navbar-scrolled');
      }

      
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
  <section className="home_section" id="about">
    <header ref={headerRed}>
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
    <div className="home_content">
      <h2>
      Find the perfect car
for you at YourCar.
      </h2>
<p>
We offer a wide range of cars that cater to your needs and budget. Visit us today and drive away with your dream car!
</p>
<button>
  Discover
  <img src={arowBtn} alt="" />
</button>
    </div>
  </section>
  )
}

export default Home