import React from "react";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
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

// UTILITY IMPORTS
import SingleProductPage from "./components/Global/pages/SingleProductPage";
import AllProduct from "./components/Global/pages/AllProduct";

// GLOBAL IMPORTS
import Homepage from "./Homepage";
import About from "./components/Global/pages/About";
import ComingSoon from "./components/Global/pages/ComingSoon";
import DisclaimerWarranties from "./components/Global/pages/DisclaimerWarranties";
import ProfessorInfo from "./components/Global/pages/ProfessorInfo";
import TermsOfUse from "./components/Global/pages/TermsOfUse";
import PrivacyPolicy from "./components/Global/pages/PrivacyPolicy";
import ReturnPolicy from "./components/Global/pages/ReturnPolicy";
import Copyright from "./components/Global/pages/Copyright";
import ProfessorUpload from "./components/Professor/ProfessorUpload";
import ProfessorEarnings from "./components/Professor/ProfessorEarnings";

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
      <ProfessorEarnings path="/professor-earnings" />

      {/* AUTH ROUTES */}
      <StudentRegister path="/student-register" />
      <TeacherRegister path="/teacher-register" />
      <Login path="/login" />
      <Register path="/register" />

      {/* UTILITY ROUTES */}
      <SingleProductPage path="/single-product" />
      <AllProduct path="/all-product" />

      {/* GLOBAL ROUTES */}
      <Homepage path="/" />
      <About path="/about" />
      <ComingSoon path="/coming-soon" />
      <Copyright path="/copyright" />
      <PrivacyPolicy path="/privacy-policy" />
      <ReturnPolicy path="/return-policy" />
      <DisclaimerWarranties path="/disclaimer-warranties" />
      <ProfessorInfo path="/professor-info" />
      <TermsOfUse path="/terms-of-use" />
    </Router>
  );
};

export default App;
