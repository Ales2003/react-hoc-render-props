import React, {Component} from 'react';
import './App.css';
import ClickCounter from './components/ClickCounter'

class App extends Component {
  render (){
    return (
      <div className="App">
        Hello!
        <hr/>
        <ClickCounter />
      </div>
    );
  }
  
}

export default App;
