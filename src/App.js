import React, {Component} from 'react';
import './App.css';
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'

import ClickCounterTwo from './components/ClickCounterTwo'
import HoverCounterTwo from './components/HoverCounterTwo'

class App extends Component {
  
  render (){
    return (
      <div className="App">
        Hello HOC!
        <hr/>
        {/* HOC */}
        <ClickCounter name="Alex"/>
        <HoverCounter name="Alex"/>
        <hr/>
        {/* renderProps */  }
        Hello renderProps!
        <hr/>
        <ClickCounterTwo />
        <HoverCounterTwo />
      </div>
    );
  }
}

export default App;