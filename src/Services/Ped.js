import Carousel from 'react-bootstrap/Carousel';
import "../styles/Ped.css"
import Hnav from '../Components/Hnav';
import Mfooter from '../Components/Mfooter';


function Ped() {
    return (
        <>
            <Hnav></Hnav>
            <Carousel fade className='yip'>
                <Carousel.Item>
                    <img src='/Paediatrics/Ped.jpg' height={"500px"} width={"100%"} alt="error" />
                    <Carousel.Caption>
                        <div className='Ped'>
                            <h1>
                                Paediatrics
                            </h1>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='/Paediatrics/ped1.jpg' height={"500px"} width={"100%"} alt="error" />
                    <Carousel.Caption>
                        <div className='Ped'>
                            <h1>
                                Paediatrics
                            </h1>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='/Paediatrics/ped2.jpg' height={"500px"} width={"100%"} alt="error" />
                    <Carousel.Caption>
                        <div className='Ped'>
                            <h1>
                                Paediatrics
                            </h1>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className='kontw'>
                <div className='pic'>
                    <img src='/Paediatrics/ped4.jpg' alt="error" />
                </div>
                <div className='cont'>
                    <h1>Paediatrics</h1>
                </div>
            </div>
            <div className='kontr'>
                <div className='contesk'>
                    <p>A paediatrician is a child's physician who provides not only medical care for children who are acutely or chronically ill but also preventive health services for healthy children.
                        A paediatrician manages physical, mental, and emotional well-being of the children under their care at every stage of development, in both sickness and health.
                        paediatrics is to reduce infant and child rate of deaths, control the spread of infectious disease, promote healthy lifestyles for a long disease-free life and help ease the problems of children and adolescents with chronic conditions.
                        Paediatrics is concerned not only about immediate management of the ill child but also long term effects on quality of life, disability and survival.
                        They have a wide range of responsibilities from conducting regular well-child checkups to diagnosing and treating illnesses, injuries and other health conditions.

                    </p>
                </div>
            </div>
            <div className='konkw'>
                <div className='wic1'>
                    <img src='/Paediatrics/ped3.jpg' alt="error" />
                </div>
                <div className='wic2'>
                    <img src='/Paediatrics/den1.jpg' alt="error" />
                </div>
                <div className='wic3'>
                    <img src='/Paediatrics/rg.jpg' alt="error" />
                </div>
            </div>
            <Mfooter></Mfooter>
        </>
    );
}

export default Ped;