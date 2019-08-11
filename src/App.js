import React, { Component } from "react";
import MenuBar from "./Components/MenuBarComponent/MenuBar";
import Home from "./Components/MenuBarComponent/Home";
import About from "./Components/MenuBarComponent/About";
import Login from "./Components/MenuBarComponent/Login";
import EmployerLogin from "./Components/MenuBarComponent/EmployerLogin"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { menuSelected: "" };
    this.logoFunction = this.logoFunction.bind(this);
    this.homeFunction = this.homeFunction.bind(this);
    this.aboutFunction = this.aboutFunction.bind(this);
    this.findtalentFunction = this.findtalentFunction.bind(this);
    this.loginFunction = this.loginFunction.bind(this);
  }

  logoFunction() {
    this.setState({ menuSelected: "logo" });
  }
  homeFunction() {
    this.setState({ menuSelected: "home" });
  }
  aboutFunction() {
    this.setState({ menuSelected: "about" });
  }
  findtalentFunction() {
    this.setState({ menuSelected: "findTalent" });
  }
  loginFunction() {
    this.setState({ menuSelected: "login" });
  }

  render() {
    return (
      <div>
        <div>
          <MenuBar
            logoFunction={this.logoFunction}
            homeFunction={this.homeFunction}
            aboutFunction={this.aboutFunction}
            findtalentFunction={this.findtalentFunction}
            loginFunction={this.loginFunction}
          />
          ;
        </div>
        <div>{this.state.menuSelected === "logo" ? <Home /> : null}</div>
        <div>{this.state.menuSelected === "home" ? <Home /> : null}</div>
        <div>{this.state.menuSelected === "about" ? <About /> : null}</div>
        <div>{this.state.menuSelected === "findTalent" ? <EmployerLogin /> : null}</div>
        <div>{this.state.menuSelected === "login" ? <Login /> : null}</div>
        
      </div>
    );
  }
}

export default App;
