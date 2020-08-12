/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <section className="text-center mb-3 py-3" id="About-Us">
          <div className="container">
            <div className="row">
              <div className="col">
                <h2 className="display-1 mb-4">About Us</h2>
                <p className="lead about-font">
                  Collegeshala is a community driven EduTech platform that aims
                  to cater to the 20 million non-engineering, non-medical
                  students of the country. We provide access to exclusively
                  curated course content , a chance to mitigate your queries and
                  access to peer communities .
                </p>
                <p className="lead highlight-para">
                  "Our vision is to become the face of this 20 million strong
                  community who are India's future."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Teams Section */}
        <section id="About-Team" className="text-center">
          <div className="container">
            <div>
              <div className="row mb-5">
                <div className="col">
                  <h2 className="display-4 purple-color">Founding Team</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="card text-center mb-5">
                    <div className="card-body">
                      <img
                        src={require("../../../assets/img/Fazal.jfif")}
                        alt=""
                        className="img-fluid rounded-circle mb-3"
                      />
                      <h3>Mohamed Fazal Mustafa</h3>
                      <h5 className="text-muted mb-3">CEO</h5>
                      <a
                        href="https://www.linkedin.com/in/md-fazal-mustafa-ba5265129/"
                        className="btn btn-outline-dark mb-5"
                      >
                        Visit Profile{" "}
                        <i className="fab fa-linkedin text-muted"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card text-center mb-5">
                    <div className="card-body">
                      <img
                        src={require("../../../assets/img/Shouradeep.jpeg")}
                        alt=""
                        className="img-fluid rounded-circle mb-3"
                      />
                      <h3>Shouradeep Chakraborty</h3>
                      <h5 className="text-muted mb-3">Founder, COO</h5>
                      <a
                        href="https://www.linkedin.com/in/shouradeep-chakraborty-7b345a191/"
                        className="btn btn-outline-dark"
                      >
                        Visit Profile{" "}
                        <i className="fab fa-linkedin text-muted"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card text-center mb-5">
                    <div className="card-body">
                      <img
                        src={require("../../../assets/img/Upmanyu Chatterjee.jfif")}
                        alt=""
                        className="img-fluid rounded-circle mb-3"
                      />
                      <h3>Upmanyu Chaterjee</h3>
                      <h5 className="text-muted mb-3">Managing Partner</h5>
                      <a
                        href="https://www.linkedin.com/in/upamanyu-chatterjee-a7220b172/"
                        className="btn btn-outline-dark mb-5"
                      >
                        Visit Profile{" "}
                        <i className="fab fa-linkedin text-muted"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="Tech-team">
              <div className="row mb-5">
                <div className="col">
                  <h2 className="display-4 purple-color">Tech Team</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="card text-center mb-5">
                    <div className="card-body">
                      <img
                        src={require("../../../assets/img/Richard.jfif")}
                        alt=""
                        className="img-fluid rounded-circle mb-3"
                      />
                      <h3>Richard Rozario</h3>
                      <h5 className="text-muted mb-3">
                        Front-End Web Developer
                      </h5>
                      <a
                        href="https://www.linkedin.com/in/richard-rozario-bb528b129/"
                        className="btn btn-outline-dark"
                      >
                        Visit Profile{" "}
                        <i className="fab fa-linkedin text-muted"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="card text-center mb-5">
                    <div className="card-body">
                      <img
                        src={require("../../../assets/img/Mujtaba1.JPG")}
                        alt=""
                        className="img-fluid rounded-circle mb-4"
                      />
                      <h3>Mujtaba Basheer</h3>
                      <h5 className="text-muted mb-3">
                        Back-end Web developer
                      </h5>
                      <a
                        href="https://www.linkedin.com/in/mujtaba-basheer-41b41a18b/"
                        className="btn btn-outline-dark"
                      >
                        Visit Profile{" "}
                        <i className="fab fa-linkedin text-muted"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="card text-center mb-5">
                    <div className="card-body">
                      <img
                        src={require("../../../assets/img/Faiz1.jfif")}
                        alt=""
                        className="img-fluid rounded-circle mb-3"
                      />
                      <h3>Faiz Shah</h3>
                      <h5 className="text-muted mb-3">
                        Front-End Web Developer
                      </h5>
                      <a
                        href="https://www.linkedin.com/in/faiz-shah-0b5955189/"
                        className="btn btn-outline-dark"
                      >
                        Visit Profile{" "}
                        <i className="fab fa-linkedin text-muted"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="card text-center mb-5">
                    <div className="card-body">
                      <img
                        src={require("../../../assets/img/Rupdeep.jpg")}
                        alt=""
                        className="img-fluid rounded-circle mb-3"
                      />
                      <h3>Rupdeep Saha</h3>
                      <h5 className="text-muted mb-3">
                        Front-End Web Developer
                      </h5>
                      <a
                        href="https://www.linkedin.com/in/rupdeep-saha-400793183"
                        className="btn btn-outline-dark"
                      >
                        Visit Profile{" "}
                        <i className="fab fa-linkedin text-muted"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="Tech-team">
              <div className="row mb-5">
                <div className="col">
                  <h2 className="display-4 purple-color">Marketing Team</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <div className="card text-center mb-5">
                    <div className="card-body">
                      <img
                        src={require("../../../assets/img/Anik.jfif")}
                        alt=""
                        className="img-fluid rounded-circle mb-3"
                      />
                      <h3 className="mb-3">Anik Sarkar</h3>
                      <h5 className="text-muted mb-3">
                        Director of Outreach Services
                      </h5>
                      <a
                        href="https://www.linkedin.com/in/anik-sarkar-13916b16b/"
                        className="btn btn-outline-dark"
                      >
                        Visit Profile{" "}
                        <i className="fab fa-linkedin text-muted"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card text-center mb-5">
                    <div className="card-body">
                      <img
                        src={require("../../../assets/img/Simran.jfif")}
                        alt=""
                        className="img-fluid rounded-circle mb-3"
                      />
                      <h3 className="mb-3">Simran Keshari</h3>
                      <h5 className="text-muted mb-3">
                        Brand Identity Developer
                      </h5>
                      <a
                        href="https://www.linkedin.com/in/simran-keshari-99807b170/"
                        className="btn btn-outline-dark"
                      >
                        Visit Profile{" "}
                        <i className="fab fa-linkedin text-muted"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card text-center mb-5">
                    <div className="card-body">
                      <img
                        src={require("../../../assets/img/Supratim.jfif")}
                        alt=""
                        className="img-fluid rounded-circle mb-3"
                      />
                      <h3 className="mb-3">Supratim Mitra</h3>
                      <h5 className="text-muted mb-3">
                        Marketing Lead
                      </h5>
                      <a
                        href="https://www.linkedin.com/in/supratim-mitra-10418719a/"
                        className="btn btn-outline-dark"
                      >
                        Visit Profile{" "}
                        <i className="fab fa-linkedin text-muted"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card text-center mb-5">
                    <div className="card-body">
                      <img
                        src={require("../../../assets/img/Tansi.jpeg")}
                        alt=""
                        className="img-fluid rounded-circle mb-3"
                      />
                      <h3 className="mb-3">Tansi Agarwal</h3>
                      <h5 className="text-muted mb-3">
                        Marketing Lead
                      </h5>
                      <a
                        href="https://www.linkedin.com/in/tansi-agarwal-596a5a1b0/"
                        className="btn btn-outline-dark"
                      >
                        Visit Profile{" "}
                        <i className="fab fa-linkedin text-muted"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card text-center mb-5">
                    <div className="card-body">
                      <img
                        src={require("../../../assets/img/Srejeeta.jpeg")}
                        alt=""
                        className="img-fluid rounded-circle mb-3"
                      />
                      <h3 className="mb-3">Srejeeta Ghosh</h3>
                      <h5 className="text-muted mb-3">
                        Marketing Lead
                      </h5>
                      <a
                        href="https://www.linkedin.com/in/sreejeeta-ghosh-0a44191a8/"
                        className="btn btn-outline-dark"
                      >
                        Visit Profile{" "}
                        <i className="fab fa-linkedin text-muted"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card text-center mb-5">
                    <div className="card-body">
                      <img
                        src={require("../../../assets/img/Divya.jpeg")}
                        alt=""
                        className="img-fluid rounded-circle mb-3"
                      />
                      <h3 className="mb-3">Divya Agarwal</h3>
                      <h5 className="text-muted mb-3">
                        Community Outreach Coordinator
                      </h5>
                      <a
                        href="#"
                        className="btn btn-outline-dark"
                      >
                        Visit Profile{" "}
                        <i className="fab fa-linkedin text-muted"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="card text-center mb-5">
                    <div className="card-body">
                      <img
                        src={require("../../../assets/img/Awdditia.jpeg")}
                        alt=""
                        className="img-fluid rounded-circle mb-3"
                      />
                      <h3 className="mb-3">Awdditia Chaterjee</h3>
                      <h5 className="text-muted mb-3">
                        Marketing Lead
                      </h5>
                      <a
                        href="https://www.linkedin.com/in/awdditia-chatterjee-53aa08176/"
                        className="btn btn-outline-dark"
                      >
                        Visit Profile{" "}
                        <i className="fab fa-linkedin text-muted"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default About;