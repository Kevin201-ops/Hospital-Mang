import Carousel from 'react-bootstrap/Carousel';
import "../styles/Derm.css"
import Hnav from '../Components/Hnav';
import Mfooter from '../Components/Mfooter';


function Derm() {
    return (
        <>
            <Hnav></Hnav>
            <Carousel fade className='yiy'>
                <Carousel.Item>
                    <img src='/Dermatology/Derm.jpg'  width={"100%"} alt="error" className='der'/>
                    <Carousel.Caption>
                        <div className='Derm'>
                            <h1>
                                Dermatology
                            </h1>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='/Dermatology/am.jpg' width={"100%"} alt="error" className='dem' />
                    <Carousel.Caption>
                        <div className='Derm'>
                            <h1>
                                Dermatology
                            </h1>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='/Dermatology/at.jpg' width={"100%"} alt="error" className='dea' />
                    <Carousel.Caption>
                        <div className='Derm'>
                            <h1>
                                Dermatology
                            </h1>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className='konty'>
                <div className='pic'>
                    <img src='/Dermatology/dermk.jpg' alt="error" />
                </div>
                <div className='cont'>
                    <h1>Dermatology</h1>
                </div>
            </div>
            <div className='kontr'>
                <div className='contesk'>
                    <p>Dermatology is the medical discipline that is concerned with the diagnosis and treatment of diseases of the skin, hair, and nails in both children and adults.
                        Specialists in dermatology are called dermatologists.
                        The skin is the largest and most visible organ of the body. It reflects the health of the body and acts as a barrier against injury and bacteria.
                        Skin disorders are the fourth most frequent cause of all human disease, affecting between 30-70% of people worldwide. Most people develop some type of skin disease during their life,
                        from infants to the elderly, and this is one of the leading reasons to seek medical advice in all societies.
                        A dermatologist is a medical doctor who specializes in conditions that affect the skin, hair, and nails. Whether it’s rashes, wrinkles, psoriasis, or melanoma, no one understands your skin, hair, and nails better than a board-certified dermatologist.
                        Dermatologists also understand that a skin condition can have a serious impact on your health and well-being. Sometimes, a skin condition is a sign of a serious underlying health issue, and your dermatologist may be the first one to notice it. For example, signs of diabetes and heart disease can show up on the skin.
                    </p>
                </div>
            </div>
            <div className='konky'>
                <div className='pic'>
                    <img src='/Dermatology/edsr.jpg' alt="error" />
                </div>
                <div className='pic'>
                    <img src='/Dermatology/dermh.jpg' alt="error" />
                </div>
                <div className='pic'>
                    <img src='/Dermatology/edsr.jpg' alt="error" />
                </div>
            </div>
            <Mfooter></Mfooter>
        </>
    );
}

export default Derm;