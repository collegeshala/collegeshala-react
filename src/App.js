import React from "react";
import { Router } from "@reach/router";

// AUTH IMPORTS
import Login from "./components/Global/pages/Login";
import StudentRegister from "./components/Global/pages/StudentRegister";

// STUDENT IMPORTS
import StudentMaterials from "./components/Student/StudentMaterials";
import StudentTransactions from "./components/Student/StudentTransactions";
import StudentAccount from "./components/Student/StudentAccount";
import Cart from "./components/Student/Cart";

// GLOBAL IMPORTS
import Index from "./Index";

const App = () => {
  return (
    <Router>
      {/* STUDENT ROUTES */}
      <StudentMaterials path="/student-materials" />
      <StudentTransactions path="/student-transactions" />
      <StudentAccount path="/student-account" />
      <Cart path="/cart" />

      {/* AUTH ROUTES */}
      <StudentRegister path="/student-register" />
      <Login path="/login" />

      {/* GLOBAL ROUTES */}
      <Index path="/" />
    </Router>
  );
};

export default App;
