import React,{useState} from "react";
import About from "./About";
import Contact from "./Contact";
import "./App.css";

function App() {
  const[name,setName]=useState("navroop")
  return (
    <div className="App">
      <h1>hello from react</h1>
      {/* <About name={name} /> */}
      <button onClick={()=>{setName("Rupinder")}}>update props</button>
      {/* <About /> */}
      <Contact name={name}/>

    </div>
  );
}

export default App;
