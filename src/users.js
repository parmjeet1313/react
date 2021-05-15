import React, { useState, useEffect, Fragment } from "react";
import {Table} from 'react-bootstrap'


function Users()
{
    // const [name, setName] = useState("navroop");
  const [user,setUser]=useState([
    { name: 'parmjeet', age: '25', address: 'noida' },
    { name: 'jeet', age: '25' },
    { name: 'sing', age: '20' },
    { name: 'roop', age: '15' },
    { name: 'nav', age: '10' }
  ])    
  return(
      <Fragment>
         <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Age</th>
      <th>Address</th>
    </tr>
  </thead>
  <tbody>
   {
       user.map((item,index)=> <tr key={index}>
       <td>{index}</td>
       <td>{item.name}</td>
       <td>{item.age}</td>
       <td>{item.address}</td>
     </tr>
     )
   }
  </tbody>
</Table>
        </Fragment>
    )
      

}
export default Users;