import Carousel from 'react-bootstrap/Carousel';
import "../styles/Covid.css"
import Hnav from '../Components/Hnav';
import Mfooter from '../Components/Mfooter';


function Covid() {
    return (
        <>
            <Hnav></Hnav>
            <Carousel fade className='vit'>
                <Carousel.Item>
                    <img src='/Covid-19/Cov.jpg'  width={"100%"} alt="error" className='cov'/>
                    <Carousel.Caption>
                        <div className='Covid'>
                            <h1>
                                Covid-19 Test
                            </h1>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='/Covid-19/co1.jpg' width={"100%"} alt="error" className='cod'/>
                    <Carousel.Caption>
                        <div className='Covid'>
                            <h1>
                                Covid-19 Test
                            </h1>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='/Covid-19/cov4.jpg' width={"100%"} alt="error" className='coi' />
                    <Carousel.Caption>
                        <div className='Covid'>
                            <h1>
                                Covid-19 Test
                            </h1>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className='konta'>
                <div className='pic'>
                    <img src='/Covid-19/Cov.jpg' alt="error" />
                </div>
                <div className='cont'>
                    <h1>Covid-19 Test</h1>
                </div>
            </div>
            <div className='kontr'>
                <div className='contesk'>
                    <p>Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus.
                        Most people infected with the virus will experience mild to moderate respiratory illness and recover without requiring special treatment.
                        Anyone can get sick with COVID-19 and become seriously ill or die at any age.The virus can spread from an infected person’s mouth or nose in small liquid particles when they cough, sneeze, speak, sing or breathe. These particles range from larger respiratory droplets to smaller aerosols.
                        PCR tests are the “gold standard” for COVID-19 tests. They are a type of nucleic acid amplification test (NAAT), which are more likely to detect the virus than antigen tests.
                        Your sample will usually be taken by a healthcare provider and transported to a laboratory for testing. It may take up to 3 days to receive results.
                        Antigen tests* are rapid tests that usually produce results in 15-30 minutes. Positive results are very accurate and reliable.
                        A single PCR test can be used to confirm an antigen test result.

                    </p>
                </div>
            </div>
            <div className='konka'>
                <div className='fic'>
                    <img src='/Covid-19/co4.jpg' alt="error" />
                </div>
                <div className='fic'>
                    <img src='/Covid-19/co2.jpg' alt="error" />
                </div>
                <div className='fic'>
                    <img src='/Covid-19/co3.jpg' alt="error" />
                </div>
            </div>
            <Mfooter></Mfooter>
        </>
    );
}

export default Covid;