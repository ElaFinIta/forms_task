import './App.css';
import React, { Component } from 'react';
import Form from './components/Form';
import View from './components/View';
import Popup from './components/Popup';

class App extends Component {
  state = {
    firstname: "",
    lastname: "",
    phonenumber: "",
    role: "",
    message: ""
  }

  inputHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div>
         {/* props.change in Form */}
        <Form change={this.inputHandler}/>
        <View
          firstname={this.state.firstname}
          lastname={this.state.lastname}
          phone={this.state.phone}
          role={this.state.role}
          message={this.state.message}
          />
          <Popup />
      </div>
    );
  }
}

export default App;
