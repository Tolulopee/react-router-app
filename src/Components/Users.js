//import axios from 'axios';
import { useState, useEffect } from 'react';
import UserPage from "./UserPage";
import ErrorFallback from './ErrorFallBack';
import Pagination from './Pagination';
 
 
 export default function Users(){
    const [users, setUsers] = useState([])
    const [loading,setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [usersPerPage] = useState(1)

   // useEffect(() => {
       // const fetchUsers = async () =>{
          //  setLoading(true);
           // const res = await axios.get("https://randomuser.me/api");
           // setUsers(res.data["results"]);
           // setLoading(false)

    
       // }
        //fetchUsers()
  //  }, [])

    useEffect(() => {
      const fetchData= async() => {
        try {
          setLoading(true)
          const response = await fetch('https://randomuser.me/api/')
          const data = await response.json();
          setUsers(data)
        
        } catch (error) {
          console.log(error)
        }
      }
      fetchData()
    },[])

    //Get current Users
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser -usersPerPage;
    const currentUsers= users.slice(indexOfFirstUser , indexOfLastUser);


    //Change page
    const paginate =(pageNumber) => setCurrentPage(pageNumber)

    try{


    return(
      <div className="users-container">
        <h1>Users</h1>
        <UserPage users={currentUsers} loading={loading}/>
        <Pagination usersPerPage={usersPerPage} totalUsers={users.length} paginate={paginate}/>
      </div>
    )} catch(error){
      return <ErrorFallback error={error} />
    }
  }
  