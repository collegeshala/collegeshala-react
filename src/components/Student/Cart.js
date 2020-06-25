/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";
import { Link } from "@reach/router";
import axios from "axios";

import { getToken } from "./../../js/auth";
import { checkout } from "./../../js/razorpay";

import Navbar from "../Global/Navbar";
import Footer from "../Global/Footer";

const Cart = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container pt-4">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="spa.html">Home</a>
            </li>
            <li className="breadcrumb-item">
              <Link to="/student-account">Student's Name</Link>
            </li>
            <li
              className="breadcrumb-item active"
              id="current-active"
              aria-current="page"
            >
              My Cart
            </li>
          </ol>
        </nav>
      </div>
      <CartPage />
      <Footer />
    </React.Fragment>
  );
};

class CartPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      total: 0,
      payment_id: "",
    };

    this.deleteNote = this.deleteNote.bind(this);
    this.checkoutCart = this.checkoutCart.bind(this);
  }

  async checkoutCart() {
    const token = await getToken();

    try {
      const resp = (
        await axios({
          method: "POST",
          url: "https://api.collegeshala.com/checkout",
          headers: {
            authorization: token,
          },
        })
      ).data;

      console.log(resp);
      if (resp.msg && resp.msg == "Insufficient credits") {
        console.log("insufficient");
        let creditsBalance = this.state.total - resp.creditsAvailable;
        let amt = creditsBalance * 10;
        checkout(amt)
          .then((data) => {
            console.log(data);
            this.setState({ payment_id: data.payment_id });
            this.checkoutCart();
          })
          .catch((err) => {
            console.error(err);
            alert("Oops! There was an error in payment :-/");
          });
      } else {
        alert("Notes purchased successfully!");
      }
    } catch (error) {
      console.error(error);
      alert("Oops! There was some error during checkout :-/");
      if (this.state.payment_id) {
        alert(
          "Please contact us with reference Payment-ID: " +
            this.state.payment_id
        );
      }
    }
  }

  async componentDidMount() {
    const token = await getToken();
    axios({
      method: "POST",
      url: "https://api.collegeshala.com/fetchcart",
      headers: {
        authorization: token,
      },
    })
      .then(({ data }) => {
        if (data == "No-items in cart") return;
        console.log(data.Responses.notes);
        let total = 0;
        const cart = data.Responses.notes.map((note) => {
          let parsed_note = {};
          for (let x in note) {
            parsed_note[x] = note[x].S || note[x].N * 1 || note[x].BOOL;
            if (x === "requiredCredits") {
              total += note.requiredCredits.N * 1;
            }
          }
          return parsed_note;
        });
        console.log(total);
        this.setState({
          notes: cart,
          total,
        });
      })
      .catch((err) => console.error(err));
  }

  async deleteNote(event) {
    event.preventDefault();
    const token = await getToken();
    const index = event.target.value;
    const { noteId, requiredCredits } = this.state.notes[index];
    let { notes, total } = this.state;
    notes.splice(index, 1);
    total -= requiredCredits;
    this.setState({ notes, total });
    axios({
      method: "POST",
      url: "https://api.collegeshala.com/remove-note-from-cart",
      headers: {
        authorization: token,
      },
      data: JSON.stringify({ noteId }),
    })
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
        alert("Oops! There was some error in deleting the note from cart.");
        this.componentDidMount();
      });
  }

  render() {
    return (
      <Fragment>
        <div className="container cart">
          {this.state.notes.length === 0 ? (
            <h1>Cart Empty</h1>
          ) : (
            this.state.notes.map((note, index) => (
              <div
                className="row notes-info-tab"
                id={note.noteId}
                key={note.noteId}
              >
                <a href="">
                  <div className="col-12 col-md-2">
                    <img
                      width="85"
                      height="85"
                      src={require("../../assets/img/pdf_logo.svg")}
                      className="all-prod-img rounded float-left"
                      alt="..."
                    />
                  </div>
                </a>
                <div className="col-12 col-md-8">
                  <a href="">
                    <h5>
                      <span id="custom-purple">{note.chaptername} </span> -{" "}
                      {note.subjectname}
                    </h5>
                  </a>
                  <div className="row">
                    <div className="col-12 col-md-4">
                      <a href="">
                        <h5>
                          <i className="fas fa-user-circle"></i>
                          {note.professorname}
                        </h5>
                      </a>
                    </div>
                    <div className="col-12 col-md-4">
                      <h5>
                        <i className="fas fa-graduation-cap"></i>
                        {note.universityname}
                      </h5>
                    </div>
                    <div className="col-12 col-md-4">
                      <h4>&#8377; {note.requiredCredits * 10}</h4>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-2 mt-3">
                  <button
                    type="button"
                    value={index}
                    className="btn btn-danger"
                    onClick={this.deleteNote}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {this.state.notes.length === 0 ? null : (
          <div className="container total-cart">
            <div id="box">
              <h5 className="cart-total-heading">Total price of the Cart</h5>
              <h1 className="cart-total-amount" id="custom-purple">
                <span>{this.state.total}</span>
                <span> credits</span>
              </h1>
              <button
                href="#"
                onClick={this.checkoutCart}
                className="checkout-btn-cart"
                id="custom-red"
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}

export default Cart;
