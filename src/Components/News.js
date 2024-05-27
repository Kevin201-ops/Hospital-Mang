import React from 'react'
import "../styles/Insights.css"
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div>
        <section id="blog" className="py-3">
          <div className="wrapper">
            <div className="header">
              <span></span>
              <h4>News blog</h4>
            </div>
            <div className="blog-info">
              <h2>Read Our Latest News</h2>
              <Link className="text-black bg-[#55BA53] px-3 py-2 rounded-md w-[100px] absolute right-2"to={"/Insights"}>view all here!</Link>
              
            </div>
            <div className="blog-card">
              <div className="card">
                <div className="card-header">
                  <img src="/news/teenagepreg.jpg" alt='error' />
                </div>
                <div className="card-body">
                  {/* <span className="tag tag-yellow">Business</span> */}
                  <h4> Increase <br /> In Teenage Pregnacy</h4>
                  <div className="footer">
                    <small>January 7, 2024 /5 comments</small>
                    <small>Read  more</small>
                    <a href="https://www.webmd.com/baby/teen-pregnancy-medical-risks-and-realities#:~:text=Teenage%20pregnancy%20is%20when%20a,have%20dropped%20steadily%20since%201990." target="_blank"><i className="fa-solid fa-arrow-right"></i></a>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <img src="/news/accidents.jpg" alt='error' />
                </div>
                <div className="card-body">
                  {/* <span className="tag tag-yellow">Marketig</span> */}
                  <h4>Increase in  <br /> Accidents</h4>
                  <div className="footer">
                    <small>January 4, 2022 /5 comments</small>
                    <small>Read  more</small>
                    <a href="https://www.statista.com/statistics/1197163/road-traffic-deaths-and-injuries-in-ghana/#:~:text=Transportation%2Drelated%20deaths%20and%20injuries%20in%20Ghana%202022&text=In%20the%20first%20half%20of,compared%20to%20the%20previous%20month." target="_blank"><i className="fa-solid fa-arrow-right"></i></a>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <img src="/news/sti.jpg" alt='error' />
                </div>
                <div className="card-body">
                  {/* <span className="tag tag-yellow">HealthCare</span> */}
                  <h4>High rate in <br /> Sexually transmitted diseases</h4>
                  <div className="footer">
                    <small>January 3, 2022 /5 comments</small>
                    <small>Read  more</small>
                    <a href="https://www.cdc.gov/std/general/default.htm" target="_blank"><i className="fa-solid fa-arrow-right"></i></a>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <img src="/news/pollution.jpg" alt='error' />
                </div>
                <div className="card-body">
                  {/* <span className="tag tag-yellow">HealthCare</span> */}
                  <h4>Environmental <br /> Pollutions</h4>
                  <div className="footer">
                    <small>January 3, 2022 /5 comments</small>
                    <small>Read  more</small>
                    <a href="http://dicf.unepgrid.ch/ghana/pollution#:~:text=Air%2C%20water%2C%20and%20waste%20pollution,5%20levels%20exceeding%20WHO%20guidelines." target="_blank"><i className="fa-solid fa-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      


    </>

  );
};

export default Footer;