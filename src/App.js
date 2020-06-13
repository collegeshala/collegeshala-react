import React from "react";
import { Router } from "@reach/router";

// AUTH IMPORTS
import Login from "./components/Global/pages/Login";

// STUDENT IMPORTS
import StudentMaterials from "./components/Student/StudentMaterials";
import StudentRegister from "./components/Global/pages/StudentRegister";
import StudentTransactions from "./components/Student/StudentTransactions";
import StudentAccount from "./components/Student/StudentAccount";

const App = () => {
  return (
    <Router>
      {/* STUDENT ROUTES */}
      <StudentRegister path="/student-register" />
      <StudentMaterials path="/student-materials" />
      <StudentTransactions path="/student-transactions" />
      <StudentAccount path="/student-account" />

      {/* AUTH ROUTES */}
      <Login path="/login" />
    </Router>
  );
};

export default App;
