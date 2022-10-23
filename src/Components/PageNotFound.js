import { NavLink } from "react-router-dom"

export default function PageNotFound() {
   return( 
       <div>
        <h1>404 Error</h1>
        <h1>Page Not Found</h1>
        <section>
        <h1>Go Back To</h1>
        <NavLink to ="/" >Home </NavLink>
        <NavLink to ="/about">About</NavLink>
        <NavLink to ="/users" >Users</NavLink>
      </section>
    </div>
   )
}