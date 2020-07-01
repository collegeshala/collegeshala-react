import React, { Component } from 'react'

class AllProduct extends Component {
  render() {
    return (
      <div>
        <div class="container pt-4">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Library</a></li>
        <li class="breadcrumb-item active" aria-current="page">
          All Product
        </li>
      </ol>
    </nav>
  </div>

  <div class="container pt-1">
    <p class="results-found">
      <span id="custom-red">0</span> Result(s) found
    </p>
  </div>
  <div class="container notes-container">
    <h1 class="text-center mt-5 mb-5" id="custom-red no-notes">
    </h1>
  </div>
      </div>
    )
  }
}

export default AllProduct;