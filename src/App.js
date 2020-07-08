import React from "react";
import $ from 'jquery';
import Popper from "popper.js";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import "./assets/css/style.css";
import { Router } from "@reach/router";

// AUTH IMPORTS
import Login from "./components/Global/pages/Login";
import StudentRegister from "./components/Global/pages/StudentRegister";
import TeacherRegister from "./components/Global/pages/TeacherRegister";
import Register from "./components/Global/pages/Register";

// STUDENT IMPORTS
import StudentMaterials from "./components/Student/StudentMaterials";
import StudentTransactions from "./components/Student/StudentTransactions";
import StudentAccount from "./components/Student/StudentAccount";
import Cart from "./components/Student/Cart";

// PROFESSOR IMPORTS
import ProfessorAccount from "./components/Professor/ProfessorAccount";

// GLOBAL IMPORTS
import Homepage from "./Homepage";
import About from "./components/Global/pages/About";
import DisclaimerWarranties from "./components/Global/pages/DisclaimerWarranties";
import ProfessorInfo from "./components/Global/pages/ProfessorInfo";
import TermsOfUse from "./components/Global/pages/TermsOfUse";
import ProfessorUpload from "./components/Professor/ProfessorUpload";

const App = () => {
  return (
    <Router>
      {/* STUDENT ROUTES */}
      <StudentMaterials path="/student-materials" />
      <StudentTransactions path="/student-transactions" />
      <StudentAccount path="/student-account" />
      <Cart path="/cart" />

      {/* PROFESSOR ROUTES */}
      <ProfessorAccount path="/professor-account" />
      <ProfessorUpload path="/professor-upload" />

      {/* AUTH ROUTES */}
      <StudentRegister path="/student-register" />
      <TeacherRegister path="/teacher-register" />
      <Login path="/login" />
      <Register path="/register" />

      {/* GLOBAL ROUTES */}
      <Homepage path="/" />
      <About path="/about" />
      <DisclaimerWarranties path="/disclaimer-warranties" />
      <ProfessorInfo path="/professor-info" />
      <TermsOfUse path="/terms-of-use" />
    </Router>
  );
};

export default App;

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Header from "./components/Global/Header";
// import Footer from "./components/Global/Footer";
// import Copyright from "./components/Global/pages/Copyright";
// import PrivacyPolicy from "./components/Global/pages/PrivacyPolicy";
// import ReturnPolicy from "./components/Global/pages/ReturnPolicy";
// import AllProduct from "./components/Global/pages/AllProduct";
// import ComingSoon from "./components/Global/pages/ComingSoon";
// import SingleProduct from "./components/Global/pages/SingleProduct";

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <div className="App">
//           <Header />
//           <Switch>
//             <Route exact path="/copyright" component={Copyright} />
//             <Route exact path="/privacypolicy" component={PrivacyPolicy} />
//             <Route exact path="/returnpolicy" component={ReturnPolicy} />
//             <Route exact path="/all-product" component={AllProduct} />
//             <Route exact path="/coming-soon" component={ComingSoon} />
//             <Route exact path="/single-product" component={SingleProduct} />
//           </Switch>
//           <Footer />
//         </div>
//       </Router>
//     );
//   }
// }
