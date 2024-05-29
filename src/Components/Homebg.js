import Carousel from 'react-bootstrap/Carousel';
import "../styles/Indc.css"


function CarouselFadeExample() {
    
    return (
        <>
            
            <Carousel fade className='lok '>
                <Carousel.Item >
                    <img className="hot" src='/intro/intro1.jpg' width={"100%"} alt="error" />
                    <Carousel.Caption>
                        <div className='beg1'>
                            <h1>
                                Welcome To Medicom
                            </h1>
                            <h2>
                                We provide good expertise to guide you
                            </h2>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="hot" src='/intro/intro2.jpg'  width={"100%"} alt="error" />
                    <Carousel.Caption>
                        <div className='beg2'>
                            <h1>
                                Welcome To Medicom
                            </h1>
                            <h2>
                                We provide Good health care services to achieve excellent results
                            </h2>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="hot" src='/intro/intro3.jpg'  width={"100%"} alt="error" />
                    <Carousel.Caption>
                        <div className='beg3'>
                            <h1>
                                Welcome To Medicom
                            </h1>
                            <h2>
                                We provide you with personal assistance to aid you
                            </h2>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default CarouselFadeExample;