import React from "react";

class ProfessorInfo extends React.Component {
  render() {
    return (
      <div>
        <section id="heading mt-3">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 m-auto">
                <h3 className="display-3 purple-color">
                  Course <span className="red-color">Advisors</span>
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* Carousel Slider */}

        <div className="container" id="custom-carousel">
          <div className="row">
            <div className="col-sm-6 m-auto">
              <div id="slider1" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li
                    className="active"
                    data-target="#slider1"
                    data-slide-to="0"
                  ></li>
                  <li data-target="#slider1" data-slide-to="1"></li>
                  <li data-target="#slider1" data-slide-to="2"></li>
                  <li data-target="#slider1" data-slide-to="3"></li>
                  <li data-target="#slider1" data-slide-to="4"></li>
                  <li data-target="#slider1" data-slide-to="5"></li>
                  <li data-target="#slider1" data-slide-to="6"></li>
                </ol>

                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={require("../../../assets/img/teacherCarousal/professor_1.jpeg")}
                      alt="First slide"
                      className="d-block img-fluid custom-img"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={require("../../../assets/img/teacherCarousal/professor_2.jpeg")}
                      alt="Second slide"
                      className="d-block img-fluid custom-img"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={require("../../../assets/img/teacherCarousal/professor_3.jpeg")}
                      alt="Third slide"
                      className="d-block img-fluid custom-img"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={require("../../../assets/img/teacherCarousal/professor_4.jpeg")}
                      alt="Fourth slide"
                      className="d-block img-fluid custom-img"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={require("../../../assets/img/teacherCarousal/professor_5.jpeg")}
                      alt="Fifth slide"
                      className="d-block img-fluid custom-img"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={require("../../../assets/img/teacherCarousal/professor_6.jpeg")}
                      alt="Sixth slide"
                      className="d-block img-fluid custom-img"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={require("../../../assets/img/teacherCarousal/professor_7.jpeg")}
                      alt="Seventh slide"
                      className="d-block img-fluid custom-img"
                    />
                  </div>
                </div>

                <a
                  href="#slider1"
                  className="carousel-control-prev"
                  data-slide="prev"
                >
                  <span className="carousel-control-prev-icon"></span>
                </a>
                <a
                  href="#slider1"
                  className="carousel-control-next"
                  data-slide="next"
                >
                  <span className="carousel-control-next-icon"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfessorInfo;
