import React from 'react'

const UserPage= ({ users, loading}) => {
    if(loading){
        return <h2>Please wait a moment...</h2>
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