import React from 'react'
import "../styles/Mfooter.css"

function Mfooter() {
    return (
        <>
            <div className='Main-footer'>
                <div className="top-footer">
                    <div className='top'>
                        <h4>Location</h4>
                        <p><i className="fa-solid fa-map-location-dot"></i><a href='https://maps.app.goo.gl/f8EqZvA4o6STq5jd6' target='blank'> 28 Cola Street, Adjacent Societe <br></br>Generale Bank, Accra, Kokomlemle</a></p>
                        <p><i className="fa-solid fa-phone"></i> <a href='tel:0506647499'> 050-664-7499,</a>
                            <a href='tel:0591902777'> 059-190-2777,</a><br></br>
                            <a href='tel:0548444793'> 054-844-4793,</a>
                            <a href='tel:0549555651'> 054-955-5651</a>
                        </p>
                        <p><i className="fa-solid fa-envelope"></i><a href='mailto:mediconghana.gmail.com'> mediconghana@gmail.com</a></p>
                    </div>
                    <div className='middle'>
                        <h4>Our Facilities</h4>

                        <p><a href='/Pc'>Primary Care</a></p>
                        <p><a href='/Ped'>Paediatrics</a></p>
                        <p><a href='/Dent'>Dentistry</a></p>
                        <p><a href='/Derm'>Dermatology</a></p>
                        <p><a href='Gyn'>Gynaecology</a></p>
                        <p><a href='Covid'>Covid-19 Test</a></p>

                    </div>
                    <div className='semi-middle'>
                        <h4>Useful Links</h4>
                        <p><a href="/wwa">About us</a></p>
                        <p><a href="/Faq">FAQ</a></p>
                        <p><a href="/Insights">News</a></p>
                    </div>
                    <div className='downny'>
                        <h4>Hours of Operation</h4>
                        <p>Patients-ward:  24/7</p>
                        <p>Dentistry: 8am-3pm</p>
                        <p>Dermatologist: 10am-5pm</p>
                        <p>Covid-19-Test: 8am-1pm</p>
                    </div>
                </div>

            </div>
            <div className='down-footer'>
                <div className='icon-footer'>
                    <i className="fab fa-linkedin one"></i>
                    <i className="fab fa-facebook-f two"></i>
                    <i className="fab fa-twitter three"></i>
                    <i className="fab fa-instagram "></i>
                </div>
                <div className='cprit'>
                    <p>&copy; 2024 Copyright Medicon <br></br>
                    All Rights Reserved.</p>
                </div>
            </div>

        </>
    )
}

export default Mfooter

