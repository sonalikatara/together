import React, { Component } from 'react';
//import logo from './logo.svg';
import '../App.css';
import UserLogin from './UserLogin'
import SendMyMessage from './SendMyMessage'

class App extends Component {
  render() {
    const login= false;
    return (
      <div className="App">
        <p >
      
          <SendMyMessage/>
       
          
        </p>
      </div>
    );
  }
}

export default App;
