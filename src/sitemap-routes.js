import React from "react";
import { Route } from "react-router";

import StudentMaterials from "./components/Student/StudentMaterials";

export default (
  <Route>
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
    <SingleProductPage path="/single-product/:noteId" />
    <AllProduct path="/all-product" />
    <Pdf path="/pdf/:noteId" />

    {/* GLOBAL ROUTES */}
    <Homepage path="/" />
    <Blogs path="/blogs" />
    <About path="/about" />
    <ComingSoon path="/coming-soon" />
    <Copyright path="/copyright" />
    <PrivacyPolicy path="/privacy-policy" />
    <ReturnPolicy path="/return-policy" />
    <DisclaimerWarranties path="/disclaimer-warranties" />
    <ProfessorInfo path="/professor-info" />
    <TermsOfUse path="/terms-of-use" />
  </Route>
);
