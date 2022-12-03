import '../styles/App.css';
import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react'

import Title from "./Title"
import { Header, RouteH } from "./Header"



import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
class App extends Component {
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
