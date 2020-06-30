import React , {useState} from 'react';
import About from './components/About';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

import './scss/main.scss';

function App() {
  const [pointer , setPointer] = useState(1)
  return (
    <Router>
      <div className="App">
        <header>
          <ul className="nav-items-about">
            <li onClick={() => setPointer(1)} className={pointer === 1 ? 'active' : ''}><Link to="/">About</Link> </li>
            <li onClick={() => setPointer(2)} className={pointer === 2 ? 'active' : ''}><Link to="/projects">Projects</Link> </li>
            <li onClick={() => setPointer(3)} className={pointer === 3 ? 'active' : ''}><Link to="/skills">Skills</Link> </li>
            <li onClick={() => setPointer(4)} className={pointer === 4 ? 'active' : ''}><Link to="/contact">Contact</Link></li>
          </ul>
        </header>


      </div>
      <Switch>
        <Route exact path='/' component={About}></Route>
        <Route exact path='/projects' component={Projects}></Route>
        <Route exact path='/skills' component={Skills}></Route>
        <Route exact path='/contact' component={Contact}></Route>
      </Switch>
    </Router>
  );
}

export default App;
