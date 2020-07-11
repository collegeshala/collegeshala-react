/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { navigate } from "@reach/router";
import axios from "axios";

import Navbar from "../Global/Navbar";
import Footer from "../Global/Footer";
import ProfessorNav from "../Global/ProfessorNav";
import Loader from "./../Global/Loader";
import ProfessorBreadcrumb from "../Professor/ProfessorBreadcrumb";
import { mail } from "./../../js/email";

import { getToken, signout } from "./../../js/auth";

let creditsDisplay = 0;

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
    amountEarnedRecord: [],
    email: "",
    college: "",
    university: "",
    myUploads: "",
    phoneNo: "",
    original: {},
    credits: 0,
    creditsToRedeem: "",
    isLoading: true,
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
          isLoading: false,
        });
        // console.log(this.state.amountEarnedRecord.length);
      })
      .catch((err) => console.error(err));
  }

  render() {
    return this.state.isLoading ? (
      <Loader />
    ) : (
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
                    {this.state.credits * 10}
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
        <section id="earning-details-section" className="mt-2">
          <div className="container">
            <div className="row">
              <div className="col">
                <h2 className="display-5">DETAILS OF NOTES SOLD:</h2>
              </div>
            </div>

            {/* transaction details go here */}
            <div className="row mt-3">
              {this.state.amountEarnedRecord.length == 0 ? (
                <h2>No earnings to display</h2>
              ) : (
                this.state.amountEarnedRecord.map((recordObj) => {
                  const { studentEmail, timestamp, notesPurchased } = recordObj;
                  const date = new Date(Date.parse(timestamp)).toDateString();
                  return notesPurchased.map(({ amountEarned, noteId }) => (
                    <div class="col-md-6">
                      <div class="card mb-4">
                        <div class="card-body pb-3">
                          <div class="row">
                            <div class="col-lg-3">
                              <img
                                src={require("./../../assets/img/pdf_logo.svg")}
                                alt=""
                                class="img-fluid"
                              />
                            </div>
                            <div class="col-lg-9">
                              <a href="">
                                <h4 class="purple-color">Note ID: {noteId}</h4>
                              </a>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col-md-12">
                              <div>
                                <p class="text-muted">
                                  Selling Price:{" "}
                                  <b>
                                    <span class="text-dark">
                                      {(amountEarned * 10) / 6} credits
                                    </span>
                                  </b>
                                </p>
                              </div>
                            </div>
                            <div class="col-md-12">
                              <div>
                                <p class="lead purple-color">
                                  Total Credits:{" "}
                                  <span class="red-color">{amountEarned}</span>
                                </p>
                              </div>
                            </div>
                            <div class="col-md-12">
                              <div>
                                <p class="lead purple-color">
                                  Bought by:{" "}
                                  <span class="red-color">{studentEmail}</span>
                                </p>
                              </div>
                            </div>
                            <div class="col-md-12">
                              <div>
                                <p class="lead purple-color">
                                  Date: <span class="red-color">{date}</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ));
                })
              )}
            </div>
            {/* Transaction div */}
          </div>
        </section>
      </div>
    );
  }
}

export default ProfessorEarnings;
