import React, {Component} from 'react';
import './assets/css/style.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Global/Header';
import Footer from './components/Global/Footer';
import Copyright from './components/Global/pages/Copyright'
import PrivacyPolicy from './components/Global/pages/PrivacyPolicy'
import ReturnPolicy from './components/Global/pages/ReturnPolicy'
import AllProduct from './components/Global/pages/AllProduct'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
            <Switch>
              <Route exact path="/copyright" component={Copyright} />
              <Route exact path="/privacypolicy" component={PrivacyPolicy} />
              <Route exact path="/returnpolicy" component={ReturnPolicy} />
              <Route exact path="/all-product" component={AllProduct} />
            </Switch>
          <Footer />
        </div>
     </Router>
    )
  }
}

export default App;
