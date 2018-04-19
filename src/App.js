import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Number from './js/components/Number';
import Operator from './js/components/Operator';
import Result from './js/components/Result';
import Clear from './js/components/Clear';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <div className="container">
            <Result />
          </div>
          <div className="container">
            <Clear />
            <Operator operator="&divide;" />
          </div>
          <div className="container">
            <Number number="7" big="false" />
            <Number number="8" big="false" />
            <Number number="9" big="false" />  
            <Operator operator="&times;" />        
          </div>
          <div className="container">
            <Number number="4" big="false" />
            <Number number="5" big="false" />
            <Number number="6" big="false" />    
            <Operator operator="&minus;" />      
          </div>
          <div className="container">
            <Number number="1" big="false" />
            <Number number="2" big="false" />
            <Number number="3" big="false" />
            <Operator operator="+" />          
          </div>
          <div className="container">
            <Number number="0" big="true" />
            <Number number="." big="false" />          
            <Operator operator="=" />          
          </div>
        </div>
      </Provider>
    );
  }
}


export default App;
