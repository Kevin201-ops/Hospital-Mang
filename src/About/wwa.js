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
                    <img src='/intro/intro1.jpg' width="100%" alt='error' className='rik' />
                    <Carousel.Caption>
                        <div className='wwa'>
                            <h1>
                                ABOUT US
                            </h1>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='/intro/intro2.jpg' width={"100%"} alt='error' className='uil' />
                    <Carousel.Caption>
                        <div className='wwa'>
                            <h1>
                                ABOUT US
                            </h1>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='/intro/intro3.jpg' width={"100%"} alt='error' className='yil' />
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
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                </div>
            </div>
            <div className='konkq'>
                <div className='qic'>
                    <img src='./joke.jpg' alt='error' />
                </div>
                <div className='qic'>
                    <img src='./joke.jpg' alt='error' />
                </div>
                <div className='qic'>
                    <img src='/joke.jpg' alt='error' />
                </div>
            </div>
            <Mfooter></Mfooter>
        </>
    )
}

export default Wwa


