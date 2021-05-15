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
      <>
          <h1>hello listing is here</h1>
          <h1>hello listing is here</h1>
          <h1>hello listing is here</h1>
          <h1>hello listing is here</h1>
    
        </>
    )
      

}
export default Users;