import Carousel from 'react-bootstrap/Carousel';
import "../styles/Pc.css"
import Hnav from '../Components/Hnav';
import Mfooter from '../Components/Mfooter';


function Pc() {
    return (
        <>
            <Hnav></Hnav>
            <Carousel fade className='lil'>
                <Carousel.Item>
                    <img src='./Primary Care/mai.jpg' height={"500px"} width={"100%"} alt="error" />
                    <Carousel.Caption>
                        <div className='Pc'>
                            <h1>
                                Primary Care
                            </h1>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='/Primary Care/oli.jpg' height={"500px"} width={"100%"} alt="error" />
                    <Carousel.Caption>
                        <div className='Pc'>
                            <h1>
                                Primary Care
                            </h1>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='/Primary Care/noi.jpg' height={"500px"} width={"100%"} alt="error" />
                    <Carousel.Caption>
                        <div className='Pc'>
                            <h1>
                                Primary Care
                            </h1>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className='konto'>
                <div className='pic'>
                    <img src='/Primary Care/pr4.jpg' alt="error" />
                </div>
                <div className='cont'>
                    <h1>Primary Care</h1>
                </div>
            </div>
            <div className='kontr'>
                <div className='contesk'>
                    <p>The main purpose of primary care is to improve the health of the public by providing easy access to medical care.
                        It also focuses on the whole individual rather than on the illness of a specific organ, system or disease.
                        It aims to improve their entire health and wellbeing by preventing or solving any health problems that may be present or potentially present.
                        Primary care practitioners are responsible for the ongoing health of their patients by preventing, diagnosing early and managing common health conditions.
                        An important aspect of their work is making referrals to specialists as and when needed.
                        patients should feel comfortable to discuss any signs or symptoms that they may be experiencing.
                        They should be free to share the complications and adverse effects of any treatment they are taking. They should also be ready to accept advice and recommendations from their practitioner accordingly.

                    </p>
                </div>
            </div>
            <div className='konko'>
                <div className='pic'>
                    <img src='/Primary Care/pyi.jpg' alt="error" />
                </div>
                <div className='pic'>
                    <img src='/Primary Care/lop.jpg' alt="error" />
                </div>
                <div className='pic'>
                    <img src='/Primary Care/ui.jpg' alt="error" />
                </div>
            </div>
            <Mfooter></Mfooter>
        </>
    );
}

export default Pc;