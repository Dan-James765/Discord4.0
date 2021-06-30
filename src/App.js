import React from 'react';
import Header from './components/Header';
import { Switch } from 'react-router-dom'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Hero from './components/Hero';



function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path ="/">
      <Header/> 
      <Hero/>
      </Route>
     
      </Switch>
      </Router>
      
    </>
  );
}

export default App;
