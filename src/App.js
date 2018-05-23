import React, { Component } from 'react';
import './assests/css/index.css';
import Login from './components/Login/login';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Login/>
      </div>
    );
  }
}
