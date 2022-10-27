import './App.css';
import {Routes, Route, NavLink,} from 'react-router-dom';

import About from './Components/About';
import Users from './Components/Users';
import OurVision from './Components/Ourvision';
import ContactUs from './Components/Contactus';
import PageNotFound from './Components/PageNotFound';
import ErrorFallback from './Components/ErrorFallBack';





//Create a Home Page component
function Home(){
 
  return(
    <div className="home-container">
      <h1 className='main-title'>T-Lab Diagonistics </h1>
      <p>We offer the best lab and health services you can find anywhere</p>
      
      <section>
        <NavLink  to ="/" >Home </NavLink>
        <NavLink to ="/about">About</NavLink>
        <NavLink to ="/users" >Users</NavLink>
      </section>

      <section>
        <div>
          <h3>Laboratory Services</h3>
          <img></img>
        </div>
        <div>
          <h3>Medical Tests</h3>
          <img></img>
        </div>

        <div>
          <h3>Consultation</h3>
          <img></img>
        </div>
      </section>
    </div>
  )} 
  








function App() {
  try{

  return(
    <div className='main-container'>
      <Routes className="navigate">
      <Route path="*" element={<PageNotFound/>}/>
        <Route path ="/" element={<Home/>}/>
        <Route  path ="/about" element={<About/>}>
           <Route path='/about/ourvision' element={<OurVision />} /> 
           <Route path='/about/contactus' element={<ContactUs />} />
        </Route> 
        <Route path="/users"  element ={<Users/>}/>
        
      </Routes>

    </div>
  )} catch (error) {
    return <ErrorFallback error={error} />
  }
  
   
}

export default App;
