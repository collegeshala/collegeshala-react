import React, { Component } from 'react'
import Navbar from "../Navbar";
import Footer from "../Footer";

class Copyright extends Component {
  render() {
    return (
      <body>
        <Navbar />
        <div class="container text-center py-3">
          <h2>COPYRIGHT POLICY</h2>
          <div className="text-left">
            <p>All pages, data, and graphics presented on this website are the property of Collegeshala or the Author of the content as specified.<br/><br/>
              The pages and contents may not be redistributed or reproduced in any way, shape, or form without the written permission of Collegeshala or the Author of the content.<br/><br/>
              Collegeshala respects the copyrights, trademarks and intellectual property of others and we expect this from other users. If you find any information that is owned by you or any content that violates your intellectual property rights, please contact us at collegeshala2020@gmail.com with all necessary documents/information that authenticates your authority on your property.<br/><br/>
              For all other policies, please read our Terms of use.
              </p>
          </div>
       </div>
       <Footer />
    </body>
    )
  }
}

export default Copyright;