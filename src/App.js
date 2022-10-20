import './App.css';
import {Routes, Route, NavLink,Switch} from 'react-router-dom';

import About from './Components/About';
import Users from './Components/Users';
import OurVision from './Components/Ourvision';
import ContactUs from './Components/Contactus';
import PageNotFound from './Components/PageNotFound';




//Create a Home Page component
function Home(){
  return(
    <div className="home-container">
      <h1>This is my home page </h1>
      <p>Putting a bit of text here</p>
      
      <section>
        <NavLink to ="/" >Home </NavLink>
        <NavLink to ="/about">About</NavLink>
        <NavLink to ="/users" >Users</NavLink>
      </section>
    </div>
  )
}







function App() {
 

  return(
    <div className='main-container'>
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path ="/about" element={<About/>}>
           <Route path='/about/ourvision' element={<OurVision />} /> 
           <Route path='/about/contactus' element={<ContactUs />} />
        </Route> 
        <Route path ="/users" element ={<Users/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>

    </div>
  )
  
   
}

export default App;
