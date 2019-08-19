import React, {Component} from 'react';
import './App.css';
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'

import User from './components/User'

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
        {/* renderProps User*/  }
        Hello renderProps simple
        <hr/>
        {/* pass variable */}
        {/* <User name = "Alex"/> */}

        {/* pass function */}
        <User render = {(isLogedIn) => isLogedIn ? "Alex": "Guest"}/>

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