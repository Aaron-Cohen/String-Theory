import './App.css';
import Sidebar from './components/Sidebar';
import React, { Component } from 'react'
import ReactGA from 'react-ga';
import { HashRouter, Route, Switch } from 'react-router-dom';
import StringTheory from './pages/StringTheory';
import About from './pages/About';
import { GlobalContext, defaultTuning, defaultRoot, majorScale } from './GlobalsAndContext';
import PageNotFound from './pages/PageNotFound';

export default class App extends Component {
  state = {
    mode: 'Sharps',
    root: defaultRoot,
    inlays: true,
    noteSet: majorScale(defaultRoot),
    fretNumbers: true,
    sidebar: false,
    lefty: false,
    tuning: defaultTuning,
    updateMode: (mode) => this.setState({ mode }),
    updateRoot: (root) => this.setState({ root }),
    updateInlays: (inlays) => this.setState({ inlays }),
    updateNoteSet: (noteSet) => this.setState({ noteSet }),
    updateFretNumbers: (fretNumbers) => this.setState({ fretNumbers }),
    updateSidebar: (sidebar) => this.setState({ sidebar }),
    updateLefty: (lefty) => this.setState({ lefty }),
    updateTuning: (stringNumber, note) => {
      const tuning = this.state.tuning.slice();
      tuning[stringNumber] = note;
      this.setState({ tuning });
    },
    setTuning: (tuning) => this.setState({ tuning })
  }

  componentDidMount() {
    // Google analytics to track traffic
    ReactGA.initialize('UA-187525938-1');
    ReactGA.pageview(window.location.pathname + window.location.search)
  }

  render() {
    return (
      <GlobalContext.Provider value={this.state}>
        <HashRouter>
          <Sidebar />
          <Switch>
            <Route path='/' exact component={StringTheory} />
            <Route path='/About/' exact component={About} />
            <Route path='*' component={PageNotFound} />
          </Switch>
        </HashRouter>
      </GlobalContext.Provider>
    )
  }
}