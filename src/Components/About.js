 import { Outlet, Link } from "react-router-dom"
 
 
 export default function About(){
    return(
      <div className="about-container">
        <h1>About</h1>
        <div >
        <Link to="/about/ourvision">Our Vision</Link>
        <Link to="/about/contactus">Contact Us</Link>
      </div>
        <Outlet/>
      </div>
    )
  }