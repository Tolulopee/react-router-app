import React from 'react'


import users from './Users'

const UserPage= ({ users, loading}) => {
    if(loading){
        return <h2>Loading..</h2>
    }
   return (

    

       <div>
         {users.map(user =>(
            <li key ={user.id}>
                {user.name}
            </li>
        ))}

        </div>

    
    
  )
}

export default UserPage;