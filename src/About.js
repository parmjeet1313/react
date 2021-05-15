import React from "react";
class About extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    console.warn("props", this.props.name);
    // console.warn("componentDidMount called");
  }
  componentDidUpdate() {
    // alert("name is updated");
    console.warn("props in update", this.props.name);
  }
  render() {
    // console.warn("render call");
    return (
      <div>
        <h1>About page</h1>
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}
export default About;

// componentDidUpdate(prevProps, prevState) {

//}
// componentWillUnmount() {

// }
