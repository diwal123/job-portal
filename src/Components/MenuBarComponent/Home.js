import React, {Component} from "react";
import axios from "axios"

class Home extends Component{

    constructor(props) {
        super(props);
        this.state = {
            jobTable: ""
        };

        this.jobBlock=this.jobBlock.bind(this);
      }

      jobBlock(jobs){
          return(
          <div>
              <h4>{jobs.Title}</h4>
              <h6>{jobs.Location}, {jobs.Type},{jobs.Education}, {jobs.Experience}, {jobs.Company}</h6>
          </div>
          )
      }

      componentDidMount() {
        var self=this;
        axios.get("http://localhost:3001/jobs")//changed here
        .then(function (response) {
          console.log(response.data);
          console.log(self);
          self.setState({jobTable: response.data})
         
        })
        .catch(function (error) {
          console.log(error);
        });
      }

    render(){
        return(
            <div>
                {this.state.jobTable?this.state.jobTable.map(item=>this.jobBlock(item)):null}
            </div>
        )
    }
}

export default Home;