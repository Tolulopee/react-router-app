 import { Outlet, Link } from "react-router-dom"
 
 
 export default function About(){
    return(
      <div className="about-container">
        <h2>Who Are We?</h2>
        <p>We are one of Nigeria's Laeding and efficient diagnostic companies, we've worked with various leading hospitals around the country and even in other parts of West Africa. Our comapny is certified by the Federal Government of Nigeria and we keep on poducing fntastic results.</p>

        <h2>Why are we better than the rest?</h2>
        <p> <span>Efficient</span> We are a very efficient company with fast and accurate lab results.Staff that are highly dedicated to their work and the latest and more up to date medical equipment</p>
        <p><span>Reliable</span> We are a very reliable company, we have worked with various hospitals and we have a very good reputation in the medical field</p>
        
        <div >
        <Link to="/about/ourvision">Our Vision</Link>
        <Link to="/about/contactus">Contact Us</Link>
      </div>
        <Outlet/>
      </div>
    )
  }