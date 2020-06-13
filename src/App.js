import React, {Component} from 'react';
import './assets/css/style.css';
import './assets/css/register.css'
import './assets/css/studentRegister.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Global/Header';
import Footer from './components/Global/Footer';
import Copyright from './components/Global/pages/Copyright'
import PrivacyPolicy from './components/Global/pages/PrivacyPolicy'
import ReturnPolicy from './components/Global/pages/ReturnPolicy'
import AllProduct from './components/Global/pages/AllProduct'
import DisclaimerWarranties from './components/Global/pages/DisclaimerWarranties'
import Register from './components/Global/pages/Register'
import TermsOfUse from './components/Global/pages/TermsOfUse'
import Login from './components/Global/pages/Login'
import ProfessorInfo from './components/Global/pages/ProfessorInfo'
import Index from './Index'
import ComingSoon from './components/Global/pages/ComingSoon'
import SingleProduct from './components/Global/pages/SingleProduct'
import About from './components/Global/pages/About'
import StudentRegister from './components/Global/pages/StudentRegister'
import TeacherRegister from './components/Global/pages/TeacherRegister'
import StudentDashboard from './components/Student/StudentDashboard'


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
              <Route exact path="/disclaimer-warranties" component={DisclaimerWarranties} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/terms-of-use" component={TermsOfUse} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/professor-info" component={ProfessorInfo} />
              <Route exact path="/index" component={Index} />
              <Route exact path="/coming-soon" component={ComingSoon} />
              <Route exact path="/single-product" component={SingleProduct} />
              <Route exact path="/about" component={About} />
              <Route exact path="/student-register" component={StudentRegister} />
              <Route exact path="/teacher-register" component={TeacherRegister} />
              <Route exact path="/student-dashboard" component={StudentDashboard} />
            </Switch>
          <Footer />
        </div>
     </Router>
    )
  }
}

export default App;
