import React, { useEffect, useState } from "react";
function Contact(props) {
  // function test()
  // {
  //   console.warn("test function")
  // }
  const test =()=>
  {
    console.warn("test function with arrow funciton")
  }
  return (

    <div>
      <h1>contact us component</h1>
      {/* <button onClick={()=>{console.warn("hello click done")}}> //
      
      arrow funtion */}
{/*       
      <button onClick={function(){console.warn("hello click done")}}>
        normal fucntion */}
        
        <button onClick={test}>
        click me  

      </button>
      
    </div>
  )
}
export default Contact;
