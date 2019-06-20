import React, { Component } from "react";

import logo from "./logo.svg";
import "./App.css";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: []
    };
  }

  fileSelectedHandler = event => {
    let arr = [];
    if (event.target.files && event.target.files[0]) {
      
      for(let i = 0; i<event.target.files.length; i++){
        arr.push(URL.createObjectURL(event.target.files[i]));
      }
     
      
      this.setState({
        images: [
          ...this.state.images,
          ...arr]
        
      });
    }
  };

  render() {
    return (
      <div className="App">
        <input type="file" onChange={this.fileSelectedHandler} multiple />
       <div>
       {this.state.images.map(e => 
         <img src={e}/>
        )}
        </div>
      </div>
    );
  }
}

export default App;
