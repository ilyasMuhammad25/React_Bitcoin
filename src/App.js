import React, { Component } from 'react';
import Bitcoint from './component/Bitcoint';
import Rptobitcoint from './component/Rptobitcoint';
import Bitcointorp from './component/Bitcointorp';
import { Route } from 'react-router-dom';
class App extends Component {
    
  render()
  {
  return (
      <div>
        <h1>soal 3</h1>
        <Route exact path="/" component={Bitcoint}/>
        <Route path="/Rptobitcoint" component={Rptobitcoint}/>
        <Route path="/Bitcointorp" component={Bitcointorp}/>
        
      </div>
      );
    }
  }
export default App;