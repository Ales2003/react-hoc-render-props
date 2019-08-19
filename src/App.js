import React, {Component} from 'react';
import './App.css';
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'


class App extends Component {

  
  render (){
    return (
      <div className="App">
        Hello!
        <hr/>
        <ClickCounter />
        <HoverCounter />
      </div>
    );
  }
  
}

export default App;