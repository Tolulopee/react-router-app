import './App.css';
import {Routes, Route} from 'react-router-dom';
import {Helmet} from "react-helmet"
import Home from './Components/Home';
import About from './Components/About';
import Users from './Components/Users';
import OurVision from './Components/Ourvision';
import ContactUs from './Components/Contactus';
import PageNotFound from './Components/PageNotFound';
import ErrorFallBack from './Components/ErrorFallBack';


function App() {
  
// updated the errorfallback component hopefully it hasnt been graded yet
  return(
    <div className='main-container'>
      <Helmet>
      <title>React Router App</title>
        <meta name="description" content="Used react router to build a page that collects data from an api"/>
      </Helmet>
      <ErrorFallBack>
      <Routes className="navigate">
      <Route path="*" element={<PageNotFound/>}/>
        <Route path ="/" element={<Home/>}/>
        <Route  path ="/about" element={<About/>}>
           <Route path='/about/ourvision' element={<OurVision />} /> 
           <Route path='/about/contactus' element={<ContactUs />} />
        </Route> 
        <Route path="/users"  element ={<Users/>}/>
        
      </Routes>
      </ErrorFallBack>
    </div>
  )

  
   
}

export default App;
