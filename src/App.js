import React, {Component} from 'react';
import './assets/css/style.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Global/Header';
import Footer from './components/Global/Footer';
import Copyright from './components/Global/pages/Copyright'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Header />
          <Switch>
            <Route exact path="/copyright" component={Copyright} />
          </Switch>
        <Footer />
      </div>
      </Router>
    )
  }
}

export default App;
