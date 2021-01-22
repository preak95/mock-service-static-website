import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Get from './components/Get';
import Create from './components/Create';
import List from './components/List'

class App extends Component {
  render() {  
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Route exact path='/' component={Home} />
          <Route exact path='/index.html' component={Home} />
          <Route path='/get' component={Get} />
          <Route path='/create' component={Create}/>
          <Route path='/list' component={List}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App; 
