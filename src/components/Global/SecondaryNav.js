import React from "react";
import { Link } from "@reach/router";

class SecondaryNav extends React.Component {
  state = {};

  render() {
    return (
      <div class="container student-dash-nav">
        <div class="row">
          <div class="col-sm text-center">
            <Link to="/student-account">My Account</Link>
            {/* <a href="./my-account.html">My Account</a> */}
          </div>
          <div class="col-sm text-center">
            <Link to="/student-materials">My Materials</Link>
            {/* <a href="./student-dashboard.html">My Materials</a> */}
          </div>
          <div class="col-sm text-center">
            <Link to="/student-transactions">My Transactions</Link>
            {/* <a href="./my-transaction.html">My Transactions</a> */}
          </div>
          <div class="col-sm text-center">
            <Link to="/student-qa">Q/A Forum</Link>
            {/* <a href="./coming-soon.html">Q/A Forum</a> */}
          </div>
        </div>
      </div>
    );
  }
}

export default SecondaryNav;
