import React from 'react';
import logo from './logo.svg';



import { Route,BrowserRouter as Router, Switch } from 'react-router-dom';



import Breakingbad from './Breakingbad';
import Detailsbreakingbad from './Detailsbreakingbad';

function App() {
  return (
    <Router>
    <div className="App">
      
    <Switch>
    
         
         
      <Route path="/itunes">
         <Breakingbad></Breakingbad>
      </Route>

      <Route path="/viewdetails/:id">
         <Detailsbreakingbad></Detailsbreakingbad>
      </Route>
      
         
         
      </Switch>
   
    </div>
    </Router>
  );
}

export default App;
