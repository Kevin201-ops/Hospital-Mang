import { Carousel } from 'react-bootstrap';
import React from 'react'
import Hnav from '../Components/Hnav'
import "../styles/wwa.css"
import Mfooter from '../Components/Mfooter'

function Wwa() {
    return (
        <>
            <Hnav></Hnav>
            <Carousel fade className='pit'>
                <Carousel.Item>
                    <img src='./joke.jpg' width="100%" alt='error' className='rik' />
                    <Carousel.Caption>
                        <div className='wwa'>
                            <h1>
                                ABOUT US
                            </h1>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='./kol.jpg' width={"100%"} alt='error' className='uil' />
                    <Carousel.Caption>
                        <div className='wwa'>
                            <h1>
                                ABOUT US
                            </h1>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='/joke.jpg' width={"100%"} alt='error' className='yil' />
                    <Carousel.Caption>
                        <div className='wwa'>
                            <h1>
                                ABOUT US
                            </h1>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className='kontq'>
                <div className='pic'>
                    <img src='/joke.jpg' alt='error' />
                </div>
                <div className='www'>
                    <h1>About Us</h1>
                </div>
            </div>
            <div className='kontro'>
                <div className='conteso'>
                    <p>We are a group of four individuals behind this brilliant piece. We were tasked to build a hospital management system as part of our end of year activity.
                        This contains most neccessary informations about a hospital of which you can access from the comfort of your homes without even having to set foot there.
                        We hope you would like our little project
                    </p>
                </div>
            </div>
            <div className='konkq'>
                <div className='qic'>
                    <img src='pr5.jpg' alt='error' />
                </div>
                <div className='qic'>
                    <img src='pr5.jpg' alt='error' />
                </div>
                <div className='qic'>
                    <img src='pr5.jpg' alt='error' />
                </div>
            </div>
            <Mfooter></Mfooter>
        </>
    )
}

export default Wwa