/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, Fragment } from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";
import { getToken, isLoggedIn } from "../../../js/auth";
import notes from "./../../../assets/img/single-product-page/notes.png";

import Navbar from "../Navbar";
import Footer from "../Footer";
import Loader from "../Loader";

const SingleProductPage = () => {
  return (
    <Fragment>
      <Navbar />
      <SingleProduct />
      <Footer />
    </Fragment>
  );
};

class SingleProduct extends Component {
  state = {
    isLoading: true,
    chaptername: "",
    noteId: "",
    professorname: "",
    requiredCredits: "",
    universityname: "",
    subjectname: "",
    noteurl: "",
    note: "",
  };

  async componentDidMount() {
    const noteId = window.location.pathname.split("/")[2];
    axios({
      method: "POST",
      url: "https://api.collegeshala.com/getnotebyid",
      data: JSON.stringify({ noteId }),
    })
      .then(({ data }) => {
        // console.log(data.Item);
        this.setState({
          ...data.Item,
          isLoading: false,
        });
      })
      .catch((err) => {
        console.error(err.response);
        this.setState({
          isLoading: false,
        });
      });
  }

  async addToCart() {
    const { noteId: noteid } = this.state;
    const checkLogin = await isLoggedIn();
    try {
      if (checkLogin) {
        const token = await getToken();

        await axios({
          method: "POST",
          url: "https://api.collegeshala.com/addtocart",
          data: JSON.stringify({ noteid }),
          headers: {
            authorization: token,
          },
        });
        alert("Item added to cart successfully!");
      } else {
        const conf = window.confirm(
          "Please Sign Up first to add item to cart!\nRedirect to Login Page?"
        );
        if (conf) {
          navigate("/register");
        }
      }
    } catch (error) {
      console.error(error.response);
      const { data } = error.response;
      if (data.message && data.message == "Item already present in cart") {
        alert("Item already present in cart");
      }
    }
  }

  render() {
    return this.state.isLoading ? (
      <Loader />
    ) : (
      <div>
        <div className="single-page-container">
          <div className="navigation">
            <Link to="/">Home</Link> / {this.state.subjectname} /
            <span id="custom-red">{this.state.chaptername}</span>
          </div>
        </div>

        <div className="single-page-container">
          <div className="title-area">
            <h1 className="heading-title" id="custom-purple">
              {this.state.chaptername}
            </h1>
            <ul className="heading-title-menu">
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className="below-title-area">
            <div className="single-product-page-rating">
              <span id="upload-area">
                ₹{" "}
                <span className="price-of-book">
                  {this.state.requiredCredits * 10}
                </span>
              </span>
            </div>
          </div>

          <div className=" course-and-suggested-area">
            <div className="row">
              <div className="col-12 col-md-6 notes-image-area notes-image">
                <button
                  type="button"
                  className="btn preview-btn"
                  onClick={(event) => {
                    event.preventDefault();
                    console.log(this.state.noteurl);
                    navigate("/pdf/" + this.state.noteId, {
                      state: { noteUrl: this.state.noteurl, previewOnly: true },
                    });
                  }}
                >
                  Preview
                </button>
                <input
                  type="button"
                  value="Buy Now"
                  className="buy-now-btn"
                  onClick={() => {
                    alert(
                      "This feature is unavailable at present! Please add note to cart to buy it."
                    );
                  }}
                />
                <input
                  type="button"
                  value="Add to Cart"
                  className="add-to-cart-btn"
                  onClick={this.addToCart.bind(this)}
                />
              </div>
              <div className="col-12 col-md-6">
                <div className="suggested-products-area">
                  <h1 className="suggested-products-heading">
                    <span id="custom-red">Suggested Products</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-6">
              <div className="single-product-prof-details-area">
                <img
                  src={require("./../../../assets/img/single-product-page/prof-vector.png")}
                  className="single-product-prof-vector"
                  alt="professor vectors"
                />
                <div className="single-product-prof-details">
                  <a href="#" className="custom-links">
                    <h2
                      className="suggested-page-prof-details-heading"
                      id="custom-red"
                    >
                      {this.state.professorname}
                    </h2>
                  </a>
                  <a href="#" className="custom-links">
                    <h4
                      className="suggested-page-university-name"
                      id="custom-purple"
                    >
                      {this.state.universityname}
                    </h4>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="single-product-user-comments-area">
                <p className="single-product-user-comments-heading">
                  <i className="fas fa-user-circle"></i>{" "}
                  <span id="custom-red">User name/Anonymous</span>
                </p>
                <form action="">
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Enter your comments here"
                    ></textarea>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleProductPage;
