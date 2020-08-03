import React, { Component } from 'react'
import Navbar from '../Navbar'
import Footer from "../Footer";

const Blog = (props) => (
  <div class="col-lg-4 col-md-6">
    <div class="card mb-5">
      <img src={props.blog.image_path} alt="" class="card-img-top card-custom-image"/>
      <div class="card-body">
        <h5 class="card-title">{props.blog.title}</h5>
        <p class="card-text mb-1">{props.blog.author}</p>
        <p class="card-text text-muted">{props.blog.date}</p>
        <a href={props.blog.link} target="_blank" class="btn btn-primary btn-block">Read More</a>
      </div>
    </div>
  </div>
);

class Blogs extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      // Add the latest blog object at the top-most position of the blogs array.
      // Continue to do this till a function is added which automatically positions the trendiest blog at the top.
      // Follow this rule strictly till the above condition is satisfied, after which you can delete this comment. 
      blogs: [
        {
          title: "The Fake Trio",
          author: "CollegeShala",
          date: "August 2, 2020",
          link: "https://medium.com/@collegeshala2020/the-fake-trio-ec6704e0c9ce",
          image_path: require("../../../assets/img/Blogs/blog_10.jpg")
      },
      {
          title: "With Love, Veronica",
          author: "CollegeShala",
          date: "August 2, 2020",
          link: "https://medium.com/@collegeshala2020/with-love-veronica-73ecfd7b8740",
          image_path: require("../../../assets/img/Blogs/blog_9.jpg")
      },
      {
          title: "Her Unfinished Love",
          author: "CollegeShala",
          date: "July 30, 2020",
          link: "https://medium.com/@collegeshala2020/her-unfinished-love-61b799f4ddd2",
          image_path: require("../../../assets/img/Blogs/blog_8.jpeg")
      },
      {
          title: "Afterlife",
          author: "CollegeShala",
          date: "July 27, 2020",
          link: "https://medium.com/@collegeshala2020/afterlife-4d266158d8f2",
          image_path: require("../../../assets/img/Blogs/blog_7.jpeg")
      },
      {
          title: "Sachin",
          author: "CollegeShala",
          date: "July 27, 2020",
          link: "https://medium.com/@collegeshala2020/sachin-2018e4737ce0",
          image_path: require("../../../assets/img/Blogs/blog_6.jpeg")
      },
      {
          title: "Rejuvenation of Existence",
          author: "CollegeShala",
          date: "July 27, 2020",
          link: "https://medium.com/@collegeshala2020/rejuvenation-of-existence-f5ef27d34384",
          image_path: require("../../../assets/img/Blogs/blog_5.jpeg")
      },
      {
        title: "Ways to Make Studying a Lot More Fun",
        author: "CollegeShala",
        date: "July 6, 2020",
        link: "https://medium.com/@collegeshala2020/ways-to-make-studying-fun-cbce702bed42",
        image_path: require("../../../assets/img/Blogs/blog_4.jfif")
      },
      {
        title: "Advantages of Sharing Study Materials Online",
        author: "CollegeShala",
        date: "July 6, 2020",
        link: "https://medium.com/@collegeshala2020/advantages-of-sharing-study-materials-online-6524a51fd564",
        image_path: require("../../../assets/img/Blogs/blog_3.jfif")
      },
      {
        title: "How To Take Study Notes in an Effective Way",
        author: "CollegeShala",
        date: "July 6, 2020",
        link: "https://medium.com/@collegeshala2020/how-to-take-study-notes-in-an-effective-way-e5d0baf9a8f0",
        image_path: require("../../../assets/img/Blogs/blog_2.jfif")
      },
      {
        title: "Avoiding Distractions While Studying",
        author: "Aashi Kumari",
        date: "June 18, 2020",
        link: "https://medium.com/@collegeshala2020/avoiding-distractions-while-studying-7646df1f810a?sk=0d1400ef58f2d24efba217cf2bfa74d1",
        image_path: require("../../../assets/img/Blogs/blog_collegeshala.jpeg")
      }
    ]
    }
  }
  render() {
    return (
      <div>
        <Navbar />
        <section id="Blog-section">
          <div class="container">
            <div class="row text-center">
              <div class="col">
                <h2 class="display-3 mb-4 pt-3"><span class="purple-color">Blogs</span></h2>
              </div>
            </div>
            <div class="row">
              {
                this.state.blogs.map((blog) => (
                  <Blog blog={blog} />
                ))
              }
            </div>
          </div>
        </section>
        <Footer />
      </div>
    )
  }
}

export default Blogs;
