import React from 'react'
import "../styles/Partners.css"

function Partners() {
    return (
        <section className="w3l-clients py-5" id="clients">
            <div className="header">
                <h2>SPONSORS</h2>
            </div>
            <div className="call">
                <div className="container">
                    <div className="company-logos">
                        <div className="logos">

                            <div className="jip">
                                <img src="/Workwith/rx.png" alt='error' className="img-fluid" />
                            </div>
                            <div className="kip">
                                <img src="/Workwith/Accra Medical Center.png" alt='error' className="img-fluid" />
                            </div>
                        
                            <div className="rip">
                                <img src="/Workwith/national health.png" alt='error' className="img-fluid" />
                            </div>
                            <div className="lip">
                                <img src="/Workwith/sme.png" alt='error' className="img-fluid" />
                            </div>
            
                            <div className="pol">
                                <img src="/Workwith/afi.png" alt='error' className="img-fluid" />
                            </div>
                            
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Partners
