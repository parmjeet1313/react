import React, { useState, useEffect } from "react";


function Users()
{
    // const [name, setName] = useState("navroop");
  const user=[
    { name: "parmjeet", age: 25, address: "noida" },
    { name: "jeet", age: 25 },
    { name: "sing", age: 20 },
    { name: "roop", age: 15 },
    { name: "nav", age: 10 },
  ]
  return(
      <div>
          <h1>hello listing is here</h1>
    {
    user.map((item, i) => 
        // <div key={i}>  {item.name} , {item.age} ,{item.address} </div>
        <div key={i}>
          <span>{item.name}</span>
          <span>{item.age}</span>
          <span>{item.address}</span>
        </div>
      ) 
    }
        </div>
    )
      

}
export default Users;