/* eslint-disable no-unused-expressions */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";
import axios from "axios";

import token from "./api_key";

class StudentTransactions extends React.Component {
  state = {
    transactions: [],
    length: 0,
    credits: 0,
  };

  componentDidMount() {
    axios({
      method: "POST",
      url: "https://api.collegeshala.com/studentdetails",
      headers: {
        authorization: token,
      },
    })
      .then(({ data }) => {
        // console.log(data.Item.creditsPurchaseRecord);
        this.setState({
          transactions: data.Item.creditsPurchaseRecord,
          credits: data.Item.credits,
          length: data.Item.creditsPurchaseRecord.length,
        });
      })
      .catch((err) => console.error(err));
  }

  render() {
    const { transactions, length, credits } = this.state;
    const arr1 = transactions.slice(0, parseInt(length / 2));
    const arr2 = transactions.slice(parseInt(length / 2));

    return (
      <Fragment>
        <section id="students-buy-credits" className="container mt-5">
          <div className="row">
            <div className="col-12 col-md-4 p-2 ml-3 mb-3">
              <h4 id="balance-credits">Balance Credits - {credits}</h4>
            </div>
            <div className="col-12 col-md-4">
              <a
                href="#"
                data-toggle="modal"
                data-target="#buy-credits-btn"
                className="btn custom-buy-credits-button"
              >
                <span>
                  Buy Credits
                  <i className="fas fa-arrow-right"></i>
                </span>
              </a>
            </div>
          </div>
        </section>

        <div
          className="modal fade"
          id="buy-credits-btn"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Buy Credits
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="buyCredits">Enter Number of Credits</label>
                    <input
                      type="number"
                      className="form-control"
                      id="buyCredits"
                      aria-describedby="emailHelp"
                      placeholder="Enter Credits Amount"
                    />
                    <br />
                    <p id="buyCredits" className="pl-1">
                      Note: 1 credit equals 10 Rupees
                    </p>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Go Back
                </button>
                <button
                  id="buy-credits"
                  type="button"
                  className="btn btn-primary"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <section className="my-5" id="my-transaction">
          <div className="container">
            <div className="row">
              <div id="col1" className="col">
                {/* about half the cards go here */}
                {arr1.map((transaction, index) => (
                  <div className="card" key={transaction.paymentid}>
                    <div className="card-body pb-3">
                      <div className="row">
                        <div className="col-12 col-md-6">
                          <p className="text-center">
                            Credits purchased: ${transaction.creditsPurchased}
                          </p>
                          <p className="text-center">
                            Cost: &#8377 ${transaction.cost / 100}
                          </p>
                        </div>
                        <div className="col-12 col-md-6">
                          <p className="text-center">
                            Payment Id: ${transaction.paymentid}
                          </p>
                          <p className="text-center">
                            Date and Time: $
                            {transaction.timestamp.substring(0, 10)}, $
                            {transaction.timestamp.substring(11, 19)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div id="col2" className="col">
                {/* other cards go here */}
                {arr2.map((transaction, index) => (
                  <div className="card" key={transaction.paymentid}>
                    <div className="card-body pb-3">
                      <div className="row">
                        <div className="col-12 col-md-6">
                          <p className="text-center">
                            Credits purchased: ${transaction.creditsPurchased}
                          </p>
                          <p className="text-center">
                            Cost: &#8377 ${transaction.cost / 100}
                          </p>
                        </div>
                        <div className="col-12 col-md-6">
                          <p className="text-center">
                            Payment Id: ${transaction.paymentid}
                          </p>
                          <p className="text-center">
                            Date and Time: $
                            {transaction.timestamp.substring(0, 10)}, $
                            {transaction.timestamp.substring(11, 19)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default StudentTransactions;
