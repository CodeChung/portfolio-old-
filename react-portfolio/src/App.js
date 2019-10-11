import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';

class App extends React.Component {
  state = {
    currentView: '/'
  }
  setView = currentView => {
    this.setState({ currentView })
  }
  render() {
    const { currentView, } = this.state
    return (
      <div className="App">
        <NavBar setView={this.setView} view={currentView} />
        <main role="contentinfo">
          <Switch>
            <Route exact path='/' component={Intro} />
            <Route path='/projects' component={Projects} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </main>
      </div>
    );
  }
  
}

export default App;
