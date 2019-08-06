import React, { Component } from "react";
import MenuBar from "./Components/MenuBarComponent/MenuBar";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.test=this.test.bind(this);
  }

test(){
  console.log("working");
}



  render() {
    return <MenuBar functions={this.test} />;
  }
}

export default App;
