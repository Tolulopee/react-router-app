import React from 'react'
import Users from './Users';

const UserPage= ({ users, loading}) => {
    if(loading){
        return <h2>Loading..</h2>
    }
  return (
    <ul > 
        {Users.map(user =>(
            <li key ={user.id}>
                {user.name}
            </li>
        ))}

    </ul>
  )
}

export default UserPage;