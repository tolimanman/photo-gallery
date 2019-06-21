import React, { Component } from "react";
import AdvancedGridList from './Gallery';
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
        <h2>A simple website</h2>
        <h2>Upload as meny images as you want and it will be displayed on screen</h2>
        <div  id="inputButton">
        <input type="file" onChange={this.fileSelectedHandler} multiple />
        <h3>You uploaded {this.state.images.length} images</h3>
        </div>
      
          <AdvancedGridList image = {this.state.images}/>           
       
      </div>
    );
  }
}

export default App;
