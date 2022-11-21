import '../styles/App.css';
import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react'

import Title from "./Title"
import { Header, RouteH } from "./Header"



import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
class App extends Component {
  state = {
      data: null
    };
  
  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    return (
      <>
      <BrowserRouter>
        {/*<Title />*/}
        <Header />
        <RouteH />
      </BrowserRouter>
    </>
    );
  }
}

export default App;
