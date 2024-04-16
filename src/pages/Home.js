import React from "react";
import "../styles/Home.css";
import "../styles/Footer.css";
import Hnav from "../Components/Hnav";
import IndividualIntervalsExample from "../Components/Homebg"
import Mang from "../Components/Mang";
import Video from "../Components/Video";
import Workwith from "../Components/Workwith";
import Partners from "../Components/Sponsors";
import Footer from "../Components/News";
import Mfooter from "../Components/Mfooter";


function Home() {
  return (
    <>
      <Hnav />
      <IndividualIntervalsExample />
      <div className="tot">
        <h1>Our Main Objectives</h1>
      </div>
      <section id="services" class="bg-light py-3">
        <div className="services-wrapper">
          <div className="items">

            <div className="item1">
              <h3>
                We provide quality health services to improve patient outcomes
              </h3>
            </div>


            <div className="item2">
              <h3>
                Efficient access to specialized emergency medical services
              </h3>
            </div>


            <div className="item3">
              <h3>
                Working together to find new and better ways to care
              </h3>
            </div>

            <div className="item4">
              <h3>
                Delivering world leading research and innovation
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section id="sect" >
        <div className="left-sidee">
          <div className="imageee">
            <img src="./1.jpg" alt="error" />
          </div>
        </div>
        <div className="right-sidee">
          <div className="pil">
            <h2>Why Choose Medicom</h2>
          </div>
          <div className="cardss">
            <div className="card-groupp">
              <div className="cardd">
                <div className="card-contentt">
                  <h3 className="card-titlee">Experienced Experts</h3>
                  <p>Medicom has five branches with state-of-the-art facilities and committed specialists for the optimum healthcare experience.</p>
                </div>
              </div>
              <div className="cardd">
                <div className="card-contentt">
                  <h3 className="card-titlee" >Experienced Experts</h3>
                  <p>Medicom has five branches with state-of-the-art facilities and committed specialists for the optimum healthcare experience.</p>
                </div>
              </div>
            </div>
            <div className="card-groupp">
              <div className="cardd">
                <div className="card-contentt">
                  <h3 className="card-titlee">Experienced Experts</h3>
                  <p>Medicom has five branches with state-of-the-art facilities and committed specialists for the optimum healthcare experience.</p>
                </div>
              </div>
              <div className="cardd">
                <div className="card-contentt">
                  <h3 className="card-titlee" >Experienced Experts</h3>
                  <p>Medicom has five branches with state-of-the-art facilities and committed specialists for the optimum healthcare experience.</p>
                </div>
              </div>
            </div>
            <div className="card-groupp">
              <div className="cardd">
                <div className="card-contentt">
                  <h3 className="card-titlee">Experienced Experts</h3>
                  <p>Medicom has five branches with state-of-the-art facilities and committed specialists for the optimum healthcare experience.</p>
                </div>
              </div>
              <div className="cardd">
                <div className="card-contentt">
                  <h3 class="card-titlee" >Experienced Experts</h3>
                  <p>Medicom has five branches with state-of-the-art facilities and committed specialists for the optimum healthcare experience.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <Video></Video>
      <section id="blogg" className="py-3">
        <div className="wrapper">
          <div className="header">
            <span></span>
            <h4>Our Services</h4>
          </div>
          <div className="blog-info">

            <a href="/Sexten">All Services!</a>
          </div>
          <div className="blog-card">
            <div className="card">
              <div className="card-header">
                <img src="/Dentistry/Dent.jpg" alt="error" />
              </div>
              <div className="card-body">
                <h4>Dentistry <br /></h4>
                <small>Dentistry, the profession concerned with the prevention and treatment of oral disease, including diseases of the teeth</small>
                <div className="footer">
                  <small>Read more</small>
                  <a href="/Dent"><i className="fa-solid fa-arrow-right"></i></a>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <img src="/Dermatology/Derm.jpg" alt="error" />
              </div>
              <div className="card-body">
                <h4>Dermatology <br /></h4>
                <small>Dermatology is the medical discipline that is concerned with the diagnosis and treatment of diseases of the skin</small>
                <div className="footer">
                  <small>Read more</small>
                  <a href="/Derm"><i className="fa-solid fa-arrow-right"></i></a>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <img src="/Primary Care/Pc.jpg" alt="error" />
              </div>
              <div className="card-body">
                <h4>Primary care<br /> </h4>
                <small>Primary care is to improve the health of the public by providing easy access to medical care</small>
                <div className="footer">
                  <small>Read more</small>
                  <a href="/Pc"><i className="fa-solid fa-arrow-right"></i></a>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <img src="/Paediatrics/ped1.jpg" alt="error" />
              </div>
              <div className="card-body">
                <h4>Paediatrics <br /> </h4>
                <small>A paediatrician manages physical, mental, and emotional well-being of the children under their care at every stage of development, in both sickness and health.</small>
                <div className="footer">
                  <small>Read more</small>
                  <a href="/Ped"><i className="fa-solid fa-arrow-right"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Mang></Mang>
      <Footer></Footer>
      <Workwith></Workwith>
      <Partners></Partners>
      <Mfooter></Mfooter>
    </>


  );
}



export default Home;
