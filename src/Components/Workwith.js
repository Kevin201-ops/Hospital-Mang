import "../styles/Workwith.css";
import React from 'react'

function Workwith() {
  return (
      <section className="w3l-features py-5" id="work">
          <div className="call-w3 py-lg-5 py-md-4">
              <div className="container">
                  <div className="row main-cont-wthree-2">
                      <div className="col-lg-6 feature-grid-left" >
                          <h3 className="title-big mb-md-4 mb-2">Who we Work with</h3>
                          <p className="text-para">We have been working with these noble institutions for more than over 50+ years and we have been inspired by their works and ethics in this medical field</p>
                      </div>
                      <div className="col-lg-6 feature-grid-right mt-lg-0 mt-5">
                          <div className="call-grids-w3 d-grid">
                              
                                  <div className="icon">
                                      <img src="/Workwith/nyaho.png" alt="error" className="img-fluid"/>
                                  </div>
                                
                                  <div className="icon">
                                      <img src="/Workwith/trust.png" alt="error" className="img-fluid"/>
                                  </div>
                                  
                                  <div className="icon">
                                      <img src="/Workwith/Accra Medical Center.png" alt="error" className="img-fluid"/>
                                  </div>
                                
                                  <div className="icon ">
                                  <img src="/Workwith/UG.png" alt="error" className="legon"/>
                                  </div>
                                
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  )
}

export default Workwith
