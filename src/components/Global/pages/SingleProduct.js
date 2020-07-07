import React, { Component } from 'react'

class SingleProduct extends Component {
  render() {
    return (
      <div>
        <div class="single-page-container">
    <div class="navigation">
      Home / Course Name /
      <span id="custom-red">Note Name</span>
    </div>
  </div>

  <div class="single-page-container">
    <div class="title-area">
      <h1 class="heading-title" id="custom-purple">Note Name</h1>
      <ul class="heading-title-menu">
        <li>
        </li>
        <li>
        </li>
      </ul>
    </div>
    <div class="below-title-area">
      <div class="single-product-page-rating">
        <span id="upload-area">&#x20B9 <span class="price-of-book">45</span></span>
      </div>
    </div>


    <div class=" course-and-suggested-area">
      <div class="row">
        <div class="col-12 col-md-6 notes-image-area notes-image">
          <button type="button" class="btn preview-btn">Preview</button>
          <input type="button" value="Buy Now" class="buy-now-btn" />
          <input type="button" value="Add to Cart" class="add-to-cart-btn" />
        </div>
        <div class="col-12 col-md-6">
          <div class="suggested-products-area">
            <h1 class="suggested-products-heading">
              <span id="custom-red">Suggested Products</span>
            </h1>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-12 col-md-6">
        <div class="single-product-prof-details-area">
          <img src="./assets/images/single-product-page/prof-vector.png" class="single-product-prof-vector" alt="" />
          <div class="single-product-prof-details">
            <a href="#" class="custom-links">
              <h2 class="suggested-page-prof-details-heading" id="custom-red">
              </h2>
            </a>
            <a href="#" class="custom-links">
              <h4 class="suggested-page-university-name" id="custom-purple">
                University Name
              </h4>
            </a>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="single-product-user-comments-area">
          <p class="single-product-user-comments-heading"><i class="fas fa-user-circle"></i> <span id="custom-red">User
              name/Anonymous</span></p>
          <form action="">
            <div class="form-group">
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                placeholder="Enter your comments here"></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>

  </div>
      </div>
    )
  }
}

export default SingleProduct;