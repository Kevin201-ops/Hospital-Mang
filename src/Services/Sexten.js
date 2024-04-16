import React from 'react'
import Hnav from '../Components/Hnav'
import Mfooter from '../Components/Mfooter'
import "../styles/Footer.css";
import { Link } from 'react-router-dom';

function Sexten() {
    return (
        <>
            <Hnav></Hnav>
            <section id="blogg" className="py-3">
                <div className="wrapper">
                    <div className="header">
                        <span></span>
                        <h4>Our Services Include</h4>
                    </div>

                    <div className='blog-info'>
                        <Link className='text-black bg-[#55BA53] px-3 py-2 rounded-md w-[100px] absolute right-2' to={"/"}>BACK</Link>
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
                                    <a href="/Derm"><i className=" fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <img src="/Covid-19/Cov.jpg" alt="error" />
                            </div>
                            <div className="card-body">
                                <h4>Covid-19 Test<br /> </h4>
                                <small>Antigen tests* are rapid tests that usually produce results in 15-30 minutes.</small>
                                <div className="footer">
                                    <small>Read more</small>
                                    <a href="/Covid"><i className="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <img src="/Gynaecologist/Gyn.jpg" alt="error" />
                            </div>
                            <div className="card-body">
                                <h4>Gynaecology<br /> </h4>
                                <small>Gynecology comprises of both medicine as well as surgical fields.</small>
                                <div className="footer">
                                    <small>Read more</small>
                                    <a href="/Gyn"><i className="fa-solid fa-arrow-right"></i></a>
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
                        <div className="card">
                            <div className="card-header">
                                <img src="/Primary Care/Pc.jpg" alt="error" />
                            </div>
                            <div className="card-body">
                                <h4>Primary Care <br /> </h4>
                                <small>Primary care is to improve the health of the public by providing easy access to medical care</small>
                                <div className="footer">
                                    <small>Read more</small>
                                    <a href="/Pc"><i className="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Mfooter></Mfooter>
        </>
    )
}

export default Sexten
