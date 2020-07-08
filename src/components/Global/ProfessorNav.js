import React from "react";
import { Link } from "@reach/router";

const ProfessorNav = () => {
  const changeCurrent = (val) => {
    document.getElementById("current-active").textContent = val;
  };

  return (
    <div className="container student-dash-nav">
      <div className="row">
        <div
          onClick={(e) => changeCurrent("My Account")}
          className="col-sm text-center"
        >
          <Link to="/professor-account">My Account</Link>
          {/* <a href="./my-account.html">My Account</a> */}
        </div>
        <div
          onClick={(e) => changeCurrent("My Uploads")}
          className="col-sm text-center"
        >
          <Link to="/professor-upload">My Uploads</Link>
          {/* <a href="./student-dashboard.html">My Materials</a> */}
        </div>
        <div
          onClick={(e) => changeCurrent("My Earnings")}
          className="col-sm text-center"
        >
          <Link to="/professor-earnings">My Earnings</Link>
          {/* <a href="./my-transaction.html">My Transactions</a> */}
        </div>
        <div
          onClick={(e) => changeCurrent("Q/A Forum")}
          className="col-sm text-center"
        >
          <Link to="/student-qa">Q/A Forum</Link>
          {/* <a href="./coming-soon.html">Q/A Forum</a> */}
        </div>
      </div>
    </div>
  );
};

export default ProfessorNav;
