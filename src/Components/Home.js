import { Link} from 'react-router-dom';
//import consultationImage from './Images/Doctors.svg'

function Home(){
 
    return(
      <div className="home-container">
        <h1 className='main-title'>T-Lab Diagonistics </h1>
        <p>We offer the best lab and health services you can find anywhere</p>
        
        <section className='links'>
          <Link  className='navigate'  to ="/" >Home </Link>
          <Link className='navigate' to ="/about">About</Link>
          <Link className='navigate' to ="/users" >Users</Link>
        </section>
  
        <section className='home-images'>
          <div>
            <h3>Laboratory Services</h3>
            <img src="../Images/Doctors.svg" alt="animation of lab services"></img>
          </div>
          <div>
            <h3>Medical Tests</h3>
            <img src="" alt="animation of medical tests"></img>
          </div>
  
          <div>
            <h3>Consultation</h3>
            <img src="" alt="animation of consultation"></img>
          </div>
        </section>
      </div>
    )} 
  export default Home;  