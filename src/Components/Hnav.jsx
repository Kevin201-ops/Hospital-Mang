import "../styles/Hnav.css"
import { Component, u } from "react"
import Formcomp from "./Formcomp";



class Hnav extends Component {




    state = { clicked: false };
    handleClick = () => {
        this.setState({
            clicked:
                !this.state.clicked
        })
    }



    render() {

        const { sign } = this.state;


        return (
            <>
                <div className="control">
                    <div className="showcaser">
                        <div className="navbar-toppest">
                            <ul className="lefti">
                                <li>
                                    <a href="#">Accra, Ghana</a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className=" fa-solid fa-business-time"></i>Mon - Sun: 8:00am - 10:00pm
                                    </a>
                                </li>
                                <li>
                                    <a href='https://maps.app.goo.gl/f8EqZvA4o6STq5jd6' target='blank'> <i className="fa-solid fa-map-location-dot"></i>412 Medicom Ghana</a>
                                </li>
                                <li>
                                    <a href='tel:0506647499'> <i className="fa-solid fa-phone"></i> 050-664-7499</a>
                                </li>
                                <li>
                                    <a href='mailto:mediconghana.gmail.com'><i className="fa-solid fa-envelope"></i> mediconghana@gmail.com</a>
                                </li>

                            </ul>
                        </div>
                        <nav>

                            <a href="#" className="brand-left">
                                <img src="./logoo.png" alt="logo" width={"80%"} height={"60px"} />
                            </a>

                            <div>
                                <ul id="navbar" className=
                                    {this.state.clicked ? "#navbar active" : "#navbar"}>
                                    <li><a className="active" href="/">Home</a></li>
                                    <li className="services-drop"><a href="#">About Us <span className="ser-arrow-down">&#x25BC;</span>
                                    </a>
                                        <ul className="dropdown-contentt" id="services-drop">
                                            <li><a href="/Wwa">Who We Are</a></li>

                                            <li><a href="/Faq">FAQ</a></li>
                                        </ul>
                                    </li>
                                    <li class="services-drop"><a href="#">Services <span class="ser-arrow-down">&#x25BC;</span>
                                    </a>
                                        <ul class="dropdown-content" id="services-drop">
                                            <li><a href="/Pc">Primary Care</a></li>
                                            <li><a href="/Ped">Paediatrics</a></li>
                                            <li><a href="/Dent">Dentistry</a></li>
                                            <li><a href="/Derm">Dermatology</a></li>
                                            <li><a href="/Gyn">Gynaecology</a></li>
                                            <li><a href="/Covid">Covid-19 Test</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="/Workers">Staff</a>
                                    </li>
                                    <li>
                                        <a href="/Contact">Contact</a>
                                    </li>
                                    <li class="services-drop"><a href="#">Affiliated Parterners <span class="ser-arrow-down">&#x25BC;</span>
                                    </a>
                                        <ul class="dropdown-contentz" id="services-drop">

                                            <li><a href="https://accramed.com/" target="_blank">Accra Medical Center</a></li>
                                            <li><a href="https://thetrusthospital.com/" target="_blank">The Trust Hospital</a></li>
                                            <li><a href="https://nyahomedical.com/" target="_blank">Nyaho Medical Center</a></li>
                                            <li><a href="https://ugmedicalcentre.org/" target="_blank">UG Medical Center</a></li>
                                        </ul>
                                    </li>
                                    <Formcomp />

                                </ul>


                            </div>


                            <div id="mobile" onClick={this.handleClick}>
                                <i id="bar"
                                    className={this.state.clicked ?
                                        'fas fa-times' : 'fas fa-bars'}>
                                </i>
                            </div>

                        </nav >
                    </div>
                </div>
            </>
        )
    }
}

export default Hnav;