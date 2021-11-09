import React, { Component } from 'react';
import Form from './components/Form';
import View from './components/View';
import Popup from './components/Popup';
import Footer from './components/Footer';
import Header from './components/Header';

class App extends Component {
  state = {
    firstname: "",
    lastname: "",
    phonenumber: "",
    role: "",
    message: "",
    showPopup: false
  }

  inputHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  popupHandler = (e) => {
    e.preventDefault();
    this.setState({
      showPopup: true
    });
  };

  render() {
    // rendering props to be used easily later, below
    const myData = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      phone: this.state.phone,
      role: this.state.role,
      message: this.state.message
    }

    return (
      <div>
        <Header />
         {/* props.change in Form */}
        <Form change={this.inputHandler} submit={this.popupHandler}/>
        <View {...myData} />
          {this.state.showPopup && <Popup {...myData} />}
        <Footer />
      </div>
    );
  }
}

export default App;
