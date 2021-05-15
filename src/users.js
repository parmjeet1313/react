import React, { useState, useEffect } from "react";


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
      <div>
          <h1>hello listing is here</h1>
    {
        user.length==55?<div>yes ,  this is right</div>:<div>No length should be 5 </div>
    }
        </div>
    )
      

}
export default Users;