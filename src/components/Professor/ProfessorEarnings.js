/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";

import Navbar from "../Global/Navbar";
import Footer from "../Global/Footer";
import ProfessorNav from "../Global/ProfessorNav";
import ProfessorBreadcrumb from "../Professor/ProfessorBreadcrumb";
import { mail } from "./../../js/email";

import { getToken, signout } from "./../../js/auth";

let profName = "hi";

const ProfessorEarnings = () => {
  return (
    <React.Fragment>
      <Navbar />
      <ProfessorBreadcrumb breadcrumbs={"Your Earnings"} />
      {/* <div className="container pt-4">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <Link to="/professor-account">Professor's Name</Link>
            </li>
            <li
              className="breadcrumb-item active"
              id="current-active"
              aria-current="page"
            >
              Notes Upload
            </li>
          </ol>
        </nav>
      </div> */}
      <ProfessorNav />
      <Upload />
      <Footer />
    </React.Fragment>
  );
};

class Upload extends React.Component {
  state = {
    fullName: "",
    amountEarnedRecord: "",
    email: "",
    college: "",
    university: "",
    myUploads: "",
    phoneNo: "",
    original: {},
    credits: "",
    creditsToRedeem: "",
  };

  handleCredits(event) {
    const credits = event.target.value;
    // console.log(credits);
    this.setState({ creditsToRedeem: credits });
  }

  async redeemCredits() {
    const { creditsToRedeem, credits } = this.state;
    const token = await getToken();
    // console.log(creditsToPurchase);
    try {
      if (creditsToRedeem < 0 || (creditsToRedeem * 10) % 10 !== 0) {
        alert("Please enter a valid number!");
        return;
      } else if (creditsToRedeem > credits) {
        alert("Credits to redeem cannot be greater than current credits!");
        return;
      }
      const amount = creditsToRedeem * 10;
      mail(amount, token);
    } catch (error) {
      console.error(error);
      alert("Oops! There was an error :-/");
    }
  }

  setData() {
    const original = this.state;
    delete original.original;
    this.setState({ original });
  }

  discardChanges(event) {
    event.preventDefault();
    this.setData(this.state.original);
  }

  async update(event) {
    event.preventDefault();
    const data = this.state;
    delete data.original;
    delete data.email;
    const token = await getToken();
    // console.log({ idToken: token });

    axios({
      method: "POST",
      url: "https://api.collegeshala.com/updatestudentaccount",
      headers: {
        authorization: token,
      },
      data: JSON.stringify({
        AccessToken: token,
        params: data,
      }),
    })
      .then(({ data }) => {
        console.log(data);
        alert("Details updated successfully!");
        this.componentDidMount();
      })
      .catch((err) => console.error(err));
  }

  logout() {
    signout();
    navigate("/login");
  }

  async componentDidMount() {
    const token = await getToken();
    // console.log({ idToken: token });
    axios({
      method: "POST",
      url: "https://api.collegeshala.com/professordetails",
      headers: {
        authorization: token,
      },
    })
      .then(({ data }) => {
        console.log({ professorDetails: data.Item });
        const {
          fullName,
          email,
          college,
          university,
          myUploads,
          phoneNo,
          credits,
          amountEarnedRecord,
        } = data.Item;
        this.setState({
          fullName,
          credits,
          email,
          college,
          university,
          myUploads,
          phoneNo,
          amountEarnedRecord,
        });
        profName = fullName;
        console.log(profName);
        this.setData();
      })
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <div>
        <section id="earning-credits-section" className="py-4">
          <div className="container">
            <div className="row">
              <div className="col">
                <h2 className="display-5">TOTAL EARNINGS:</h2>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-4">
                <p className="lead purple-color">
                  Credits:{" "}
                  <span id="credits" className="red-color">
                    {this.state.credits}
                  </span>
                </p>
              </div>
              <div className="col-md-4">
                <p className="lead purple-color">
                  Equivalent Amount:{" "}
                  <span id="amount" className="red-color">
                    {this.state.credits}
                  </span>
                </p>
              </div>
              <div className="col-md-4">
                <a
                  href="#"
                  data-toggle="modal"
                  data-target="#redeem-btn"
                  className="btn custom-earning-button"
                >
                  <span>
                    Redeem Now <i className="fas fa-arrow-right" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Redeem Now Modal */}
        <div
          className="modal fade"
          id="redeem-btn"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Redeem your Credits
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">
                      Enter Credits
                    </label>
                    <input
                      type="number"
                      id="credits-redeem"
                      className="form-control"
                      placeholder="Enter the amount of Credits"
                      value={this.state.creditsToRedeem}
                      onChange={(e) => this.handleCredits(e)}
                    />
                  </div>
                  <p>1 credits = Rs 10</p>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  id="redeem-now"
                  className="btn btn-primary"
                  onClick={this.redeemCredits.bind(this)}
                >
                  Redeem Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <section id="earning-details-section" className="mt-5">
          <div className="container">
            <div className="row">
              <div className="col">
                <h2 className="display-5">DETAILS OF NOTES SOLD:</h2>
              </div>
            </div>
            <div id="transactions" className="row mt-3">
              {/* transaction details go here */}

              {
                // eslint-disable-next-line eqeqeq
                this.state.amountEarnedRecord.length === 0 ? (
                  <h2>
                    <br />
                    No earnings to display
                  </h2>
                ) : (
                  this.state.amountEarnedRecord.map((note, index) => {
                    return (
                      <div className="col-md-6">
                        <div className="card mb-4">
                          <div className="card-body pb-3">
                            <div className="row">
                              <div className="col-lg-3">
                                <img
                                  src={require("../../assets/img/pdf_logo.svg")}
                                  alt="pdf logo"
                                  className="img-fluid"
                                />
                              </div>
                              <div className="col-lg-9">
                                <a href>
                                  <h4 className="purple-color">
                                    Note ID: ${"{"}
                                    earning.notesPurchased[0].noteId
                                    {"}"}
                                  </h4>
                                </a>
                                {/*
                            <div class="row">
                                <div class="col">
                                <p class="bold"><i class="fas fa-user-circle"></i> <b><span id="prof-name"><a href="#">By Prof.
                                        ${state.prof_name}</a></span></b></p>
                                </div>
                            </div>
                        */}
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-12">
                                <div>
                                  <p className="text-muted">
                                    Selling Price:{" "}
                                    <b>
                                      <span className="text-dark">
                                        ${"{"}
                                        earning.notesPurchased[0].amountEarned *
                                        10 / 6{"}"} credits
                                      </span>
                                    </b>
                                  </p>
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div>
                                  <p className="lead purple-color">
                                    Total Credits:{" "}
                                    <span className="red-color">
                                      ${"{"}
                                      earning.notesPurchased[0].amountEarned
                                      {"}"}
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )
              }

              {/* Transaction div */}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ProfessorEarnings;
