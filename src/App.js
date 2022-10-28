import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Users from './Components/Users';
import OurVision from './Components/Ourvision';
import ContactUs from './Components/Contactus';
import PageNotFound from './Components/PageNotFound';
import ErrorFallback from './Components/ErrorFallBack';


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
