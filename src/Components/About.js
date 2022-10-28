 import { Outlet, Link } from "react-router-dom"
 
 
 export default function About(){
    return(
      <div className="about-container">
        <h2 className="about-header">Who Are We?</h2>
        <p className="about-content">We are one of Nigeria's leading and efficient diagnostic companies, we've worked with various leading hospitals around the country and even in other parts of West Africa. Our company is certified by the Federal Government of Nigeria and we keep on producing fantastic results.</p>

        <h2 className="about-header">Why are we better than the rest?</h2>
        <p className="about-content"> <span>Efficient</span> We are a very efficient company with fast and accurate lab results.Staff that are highly dedicated to their work and the latest and more up to date medical equipment</p>
        <p className="about-content"><span>Reliable</span> We are a very reliable company, we have worked with various hospitals and we have a very good reputation in the medical field.</p>
        
        <div >
        <Link className="navigate" to="/about/ourvision">Our Vision</Link>
        <Link  className="navigate" to="/about/contactus">Contact Us</Link>
      </div>
        <Outlet/>
      </div>
    )
  }