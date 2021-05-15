import React, { useState } from "react";
function Contact(props) {
  // function test()
  // {
  //   console.warn("test function")
  // }
  const  [val,setVal]=useState("gurmeet")
  const test =(e)=>
  {
    console.warn("test function with arrow funciton",e.target.value)
    setVal(e.target.value)
  }
  return (

    <div>
      <h1>contact us component</h1>
      {/* <button onClick={()=>{console.warn("hello click done")}}> //
      
      arrow funtion */}
{/*       
      <button onClick={function(){console.warn("hello click done")}}>
        normal fucntion */}
          <input type="text" value={val} onChange={test}/>
        {/* <button onClick={test}> */}
        <button onClick={()=>alert(val)}>
        click me  

      </button>
      
    </div>
  )
}
export default Contact;
