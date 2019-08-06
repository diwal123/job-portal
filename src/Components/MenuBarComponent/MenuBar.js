import React, {Component} from 'react';
import EmployerLogin from "./EmployerLogin"



import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';




class MenuBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
      }

render(){

    
  return (
<div >
      <AppBar position="static">
        <Toolbar>
            <Button color="inherit" onClick={this.props.logoFunction}  >Logo</Button>
             <Button color="inherit" onClick={this.props.homeFunction}>Home</Button>
             <Button color="inherit" onClick={this.props.aboutFunction}>About US</Button>
             <Button color="inherit" onClick={this.props.findtalentFunction}>Find talent</Button>
            <Button color="inherit" onClick={this.props.loginFunction}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
}

export default MenuBar;
