import React, { Component } from 'react';
import Form from './components/Form';
import View from './components/View';
import Popup from './components/Popup';
import Footer from './components/Footer';
import Header from './components/Header';
import Notes from './components/Notes';
import axios from 'axios';
import Main from './components/Main';

class App extends Component {
  state = {
    inputData: {
      firstname: "",
      lastname: "",
      phonenumber: "",
      role: "",
      message: ""
    },
    showPopup: false,
    data: []
  }

  componentDidMount() {
    axios
    .get("http://localhost:3050/notes")
    .then((res) => this.setState({ data: res.data}))
  }

  inputHandler = (e) => {
    this.setState({
      inputData:{...this.state.inputData, [e.target.name]: e.target.value}
    });
  };

  popupHandler = (e) => {
    e.preventDefault();
    this.setState({
      showPopup: true
    });
  };

  postHandler = () => {
    axios
      .post('http://localhost:3050/notes', this.state.inputData) 
      .then((res) => {console.log(res);
        this.setState({showPopup: false });
        window.location.reload();
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div>
        <Header />
         {/* props.change in Form */}
        <div className="form_area">
          <Form change={this.inputHandler} submit={this.popupHandler}/>
          {/* passing inputData to View */}
          <View {...this.state.inputData} />
        </div>
        {this.state.showPopup && <Popup {...this.state.inputData} postit={this.postHandler} />}
        <Main data={this.state.data}/>
        <Footer />
      </div>
    );
  }
}

export default App;
