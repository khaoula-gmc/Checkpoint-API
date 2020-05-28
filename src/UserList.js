
import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css'


const UserList=()=> {
 const [data, setData] = useState([]);
 useEffect(() => {
   const fetchData = async () => {
     const result = await axios.get(
       "https://jsonplaceholder.typicode.com/users"
     );
     setData(result.data);
   };
   fetchData();
 }, []);
 return (
     
   <table id='users'>
       <tr>
        <th>Username</th> 
        <th>Name</th> 
        <th>Email</th>
        <th>Address</th>
        <th>Phone</th>
        <th>Website</th>
        <th>Company</th>
       </tr>
     {data.map(item => (
       <tr key={item.id}>
        <td>{item.username}</td> 
        <td>{item.name}</td> 
        <td>{item.email}</td>
        <td>{item.address.street},{item.address.suite},{item.address.city}</td>
        <td>{item.phone}</td>
        <td>{item.website}</td>
        <td>{item.company.name}</td>

       </tr>
     ))}
   </table>
 );
}
export default UserList;
