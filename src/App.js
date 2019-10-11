import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';

const views = ['/', 'projects', 'about', 'contact'];

const viewIndex = {
  '/': 0,
  '/projects': 1,
  '/about': 2,
  '/contact': 3,
}

class App extends React.Component {
  state = {
    index: 0,
    currentView: '/'
  }
  setView = currentView => {
    this.setState({ currentView })
  }
  viewUp = () => {
    let { currentView, index } = this.state
    if (index === 0) {
      index = views.length - 1
    } else {
      index--
    }
    currentView = viewIndex[index]
    this.setState({ index, currentView })
  }
  viewDown = () => {
    let { currentView, index } = this.state
    if (index === views.length - 1) {
      index = 0
    } else {
      index++
    }
    currentView = viewIndex[index]
    this.setState({ index, currentView })
  }
  onKeyPressed = event => {
  }
  render() {
    const { currentView, } = this.state
    return (
      <div className="App"
        onKeyDown={this.onKeyPressed}
      >
        <NavBar setView={this.setView} view={currentView} />
        <main role="contentinfo">
          <Switch>
            <Route exact path='/' component={Intro} />
            <Route path='/portfolio' component={Intro} />
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
