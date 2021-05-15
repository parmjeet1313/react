import React from "react";
class About extends React.Component {
  constructor() {
    super();
    // console.warn("constructor called");
    this.state={
      name:'parm',
      age:25
    }
  }
  componentDidMount() {
    console.warn("componentDidMount called");
  }
componentDidUpdate() {
  // console.warn("did  update")

  alert("name is updated")
  
} 
  render() {
    console.warn("render call")
    return (
      <div>
        <h1>About page</h1>
        <h2>{this.state.name}</h2>
        <h2>{this.state.age}</h2>
        <button onClick={()=>this.setState({name:'roop'})}>update state</button>
      </div>
    );
  }
}
export default About;

// componentDidUpdate(prevProps, prevState) {

//}
// componentWillUnmount() {

// }
