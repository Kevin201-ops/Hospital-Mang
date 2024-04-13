import Carousel from 'react-bootstrap/Carousel';
import "../styles/Dent.css"
import Hnav from '../Components/Hnav';
import Mfooter from '../Components/Mfooter';


function Dent() {
    return (
        <>
            <Hnav></Hnav>
            <Carousel fade className='uyp'>
                <Carousel.Item>
                    <img src='/Dentistry/Dent.jpg' height={"500px"} width={"100%"} alt="error" />
                    <Carousel.Caption>
                        <div className='Dent'>
                            <h1>
                                Dentistry
                            </h1>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='/Dentistry/pae1.jpg' height={"500px"} width={"100%"} alt="error" />
                    <Carousel.Caption>
                        <div className='Dent'>
                            <h1>
                                Dentistry
                            </h1>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='/Dentistry/pae4.jpg' height={"500px"} width={"100%"} alt="error" />
                    <Carousel.Caption>
                        <div className='Dent'>
                            <h1>
                                Dentistry
                            </h1>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className='kontp'>
                <div className='pic'>
                    <img src='/Dentistry/pea2.jpg' alt="error" />
                </div>
                <div className='cont'>
                    <h1>Dentistry</h1>
                </div>
            </div>
            <div className='kontr'>
                <div className='contesk'>
                    <p>Dentistry, the profession concerned with the prevention and treatment of oral disease, including diseases of the teeth and supporting structures and diseases of the soft tissues of the mouth.
                        Dentistry also encompasses the treatment and correction of malformation of the jaws, misalignment of the teeth, and birth anomalies of the oral cavity such as cleft palate.
                        In addition to general practice, dentistry includes many specialties and subspecialties, including orthodontics and dental orthopedics, pediatric dentistry, periodontics, prosthodontics, oral and maxillofacial surgery,
                        oral and maxillofacial pathology, endodontics, public health dentistry, and oral and maxillofacial radiology.
                        Dentists play a key role in the early detection of oral cancer and other systemic conditions of the body that manifest themselves in the mouth.
                        They often identify other health conditions, illnesses, and other problems that sometimes show up in the oral cavity before they are identified in other parts of the body.


                    </p>
                </div>
            </div>
            <div className='konkp'>
                <div className='jic'>
                    <img src='/Dentistry/pae3.jpg' alt="error" />
                </div>
                <div className='jic'>
                    <img src='/Dentistry/den4.jpg' alt="error" />
                </div>
                <div className='jic'>
                    <img src='/Dentistry/pae3.jpg' alt="error" />
                </div>
            </div>
            <Mfooter></Mfooter>
        </>
    );
}

export default Dent;