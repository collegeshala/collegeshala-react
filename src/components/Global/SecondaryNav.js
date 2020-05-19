import React from "react";

class SecondaryNav extends React.Component {
  state = {};

  render() {
    return (
      <div class="container student-dash-nav">
        <div class="row">
          <div class="col-sm text-center">
            <a href="./my-account.html">My Account</a>
          </div>
          <div class="col-sm text-center">
            <a href="./student-dashboard.html">My Materials</a>
          </div>
          <div class="col-sm text-center">
            <a href="./my-transaction.html">My Transactions</a>
          </div>
          <div class="col-sm text-center">
            <a href="./coming-soon.html">Q/A Forum</a>
          </div>
        </div>
      </div>
    );
  }
}

export default SecondaryNav;
