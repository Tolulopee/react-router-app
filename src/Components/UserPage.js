import React from 'react'

const UserPage= ({ users, loading}) => {
    if(loading){
        return <h2>Please wait a moment...</h2>
    }
   return (
          <div>
         {users.map(user =>(
            <li key ={user.login.uuid}>
                {user.name.first}
            </li>
            
        ))}
        </div>

    

    
    
  )
}

export default UserPage;