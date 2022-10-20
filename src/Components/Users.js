import axios from 'axios';
import { useState, useEffect } from 'react';
import UserPage from "./UserPage";
 
 
 export default function Users(){
    const [users, setUsers] = useState([])
    const [loading,setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [usersPerPage, setUsersPerPage] = useState(1)

    useEffect(() => {
        const fetchUsers = async () =>{
            setLoading(true);
            const res = await axios.get("https://randomuser.me/api");
            setUsers(res.data);
            setLoading(false)

    
        }
        fetchUsers()
    }, [])

    


    return(
      <div className="users-container">
        <h1>Users</h1>
        <UserPage users={users} loading={loading}/>
      </div>
    )
  }
  