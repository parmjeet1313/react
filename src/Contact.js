import React,{useEffect,useState} from "react";
function Contact(props) {

  // const[name,setName]=useState("raman")
  // const[age,setAge]=useState(25)
  useEffect(()=>{
    console.warn("check props",props.name)
  },[])
  useEffect(()=>{
    console.warn("check props 2 for update",props.name)
  },[props.name])


  let data = "this is jsx contact component";
  return (
    <div>
      <h1>{data}</h1>
      <h2>{props.name}</h2>

      
    </div>
  );
}
export default Contact;
