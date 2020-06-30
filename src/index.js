import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'; 
import App from './App';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

{/* <Router>
      <Switch>
        <Route exact path='/' component={App}></Route>
        <Route exact path='/projects' component={Projects}></Route>
        <Route exact path='/skills' component={Skills}></Route>
        <Route exact path='/contact' component={Contact}></Route>
      </Switch>
    </Router> */}
