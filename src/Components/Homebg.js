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
                                We Deliver Quality
                            </h1>
                            <h2>
                                We are boutique fire desgined for Private Equality, Family Offices and Growth Stage Companies seeking to maximize result
                            </h2>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="hot" src='/intro/intro2.jpg'  width={"100%"} alt="error" />
                    <Carousel.Caption>
                        <div className='beg2'>
                            <h1>
                                Good Health Care Services
                            </h1>
                            <h2>
                                We are boutique fire desgined for Private Equality, Family Offices and Growth Stage Companies seeking to maximize result
                            </h2>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="hot" src='/intro/intro3.jpg'  width={"100%"} alt="error" />
                    <Carousel.Caption>
                        <div className='beg3'>
                            <h1>
                                Personal Assistance
                            </h1>
                            <h2>
                                We are boutique fire desgined for Private Equality, Family Offices and Growth Stage Companies seeking to maximize result
                            </h2>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default CarouselFadeExample;