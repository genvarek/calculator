import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import Title from './Title'
import Box from './Content/Box'



class App extends Component {
  render() {
    return [
      <div className="App">
        
        <Title/>
      </div>,

      <div className="App">
      <Box/>
      </div>
      
     ];
  }
} 



export default App;



