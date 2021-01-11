import './App.css';
import Sidebar from './components/Sidebar';
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Alt2ner from './pages/Alt2ner';
import About from './pages/About';
import { GlobalContext, defaultTuning } from './GlobalsAndContext'


export default class App extends Component {
  state = {
    tuning: defaultTuning,
    mode: 'Sharps',
    updateMode: (mode) => this.setState({ mode }),
    updateTuning: (stringNumber, note) => {
      const tuning = this.state.tuning.slice();
      tuning[stringNumber] = note;
      this.setState({ tuning })
    }
  }

  render() {
    return (
      <GlobalContext.Provider value={this.state}>
        <Router>
          <Sidebar />
          <Switch>
            <Route exact path="/">
              <Redirect to="/Alt2ner" />
            </Route>
            <Route path='/Alt2ner' exact component={Alt2ner} />
            <Route path='/About' exact component={About} />
          </Switch>
        </Router>
      </GlobalContext.Provider>
    )
  }
}