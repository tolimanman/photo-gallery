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
    if (event.target.files && event.target.files[0]) {
      this.setState({
        images: [
          ...this.state.images,
          URL.createObjectURL(event.target.files[0])
        ]
      });
    }
  };

  render() {
    return (
      <div className="App">
        <input type="file" onChange={this.fileSelectedHandler} multiple />
        {this.state.images.map(e => (
          <img src={e} />
        ))}
      </div>
    );
  }
}

export default App;
