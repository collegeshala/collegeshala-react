import React, { Component } from 'react'
import Navbar from "../Navbar";
import Footer from "../Footer";

class ReturnPolicy extends Component {
  render() {
    return (
      <body>
        <Navbar />
        <div>
          <div class="container text-center py-3">
            <h2>RETURN POLICY</h2>
            <div class="text-left">
              <p>If you have received a damaged or defective product or if it is not as described, you can raise a replacement request on the website within the applicable Returns Policy period or within 3 days of receiving the product. In the rare event of the replacement being defective/damaged or not as described on the product page, a full refund will be provided once we receive the product.</p>
            </div>
          </div>
          <div class="container text-center py-3">
            <h2>RETURN PROCESSING</h2>
            <div class="text-left">
              <p>If you're facing any issues with a product purchased at LectureNotes or its subsidiary, we shall help by verifying and trying to resolve your product issue as part of the return verification process. The Issue resolution steps may be shared with you as self-help, or with assistance overcall or a Collegeshala (or partner) personnel may visit your place. The seller will arrange for a replacement if the issue has not been resolved. In case the product is not in stock or has been permanently discontinued, the refund for the entire product or part(s) of the product will be provided by the seller.<br/><br/>
                In case of the return of a product, the buyer has to arrange for the shipping of the received package after proper packaging. Once the seller receives the package and in proper condition, a replacement or refund process will begin.
                </p>
            </div>
          </div>
          <div class="container text-center py-3">
            <h2>CANCELLATION POLICY</h2>
            <div class="text-left">
              <p>Order once placed cannot be cancelled. A replacement can be requested on receiving defective or not as the described product.</p>
            </div>
          </div>
        </div>
        <Footer />
      </body>
    )
  }
}

export default ReturnPolicy;