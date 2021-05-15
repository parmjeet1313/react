import React,{useEffect,useState} from "react";
function Contact() {

  const[name,setName]=useState("raman")
  const[age,setAge]=useState(25)
  useEffect(()=>{
    console.warn("hello from Hook")
  },[age])

  let data = "this is jsx contact component";
  return (
    <div>
      <h1>{data}</h1>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <button onClick={()=>setName("ramandeep singh")}>Update Name</button>
      <button onClick={()=>setAge(52)}>update Age</button>

    </div>
  );
}
export default Contact;
