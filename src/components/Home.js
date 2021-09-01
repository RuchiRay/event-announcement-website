import React,{useState} from "react";
import brand from "../image/brand.png";
import './home.css'
const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const handelMenu = ()=>{
    console.log('opened');
    setMenuOpen(!menuOpen)
    console.log(menuOpen);
    
  }
  const [value, setValue] = useState(false)
  console.log(value);
  
  return (
    <div className="home">
      <div className="navbar-wrapper">
      <div className="skill-navbar">
        <img src={brand} alt="logo" />
        <ul className={menuOpen?'menu-items open':'menu-items'}>
          <li>Timings</li>
          <li>Speakers</li>
          <li>Features</li>
          <li> <button className="book-btn">Book Free Ticket</button></li>
        </ul>
       <div className="hamburger" onClick={()=>handelMenu()}>
         <div className="line"></div>
         <div className="line"></div>
         <div className="line"></div>
       </div>
      </div>
      </div>
      <div className="timing-wrapper">
        <div className="timing">
          <h3 className="blue-text">8 August 2021</h3>
          <h3>7:00 PM - 8:00 PM <span className='blue-text'> IST</span> </h3>
          <h1>The <span className='blue-text extra-large'>Ultimate</span> </h1>
          <h1>Performer</h1>
          <div className='intro'>
          <p>
            <span className="blue-text">"</span> Free Live legendary <i>LEADERSHIP</i> and
            <i> PERSONAL DEVELOPMENT</i>
          </p>
          <p>trainig event. <span className="blue-text">"</span></p>
          </div>
        </div>
        <div className='button-box'>
          <button className="book-btn">BOOK FREE TICKET</button>
          <button className="know-btn">Know more</button>
        </div>
      </div>
    </div>
  );
  };

export default Home;
