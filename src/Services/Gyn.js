import Carousel from 'react-bootstrap/Carousel';
import "../styles/Gyn.css"
import Hnav from '../Components/Hnav';
import Mfooter from '../Components/Mfooter';


function Gyn() {
    return (
        <>
            <Hnav></Hnav>
            <Carousel fade className='yie'>
                <Carousel.Item>
                    <img src='/Gynaecologist/Gyn.jpg' height={"500px"} width={"100%"} alt="error" />
                    <Carousel.Caption>
                        <div className='Gyn'>
                            <h1>
                                Gynaecology
                            </h1>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='/Gynaecologist/pr2.jpg' height={"500px"} width={"100%"} alt="error" />
                    <Carousel.Caption>
                        <div className='Gyn'>
                            <h1>
                                Gynaecology
                            </h1>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='/Gynaecologist/pr3.jpg' height={"500px"} width={"100%"} alt="error" />
                    <Carousel.Caption>
                        <div className='Gyn'>
                            <h1>
                                Gynaecology
                            </h1>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className='konte'>
                <div className='pic'>
                    <img src='/Gynaecologist/pr1.jpg' alt="error" />
                </div>
                <div className='cont'>
                    <h1>Gynaecology</h1>
                </div>
            </div>
            <div className='kontr'>
                <div className='contesk'>
                    <p>Gynecology comprises of both medicine as well as surgical fields.
                        Gynecologists use a range of diagnostic and therapeutic procedures. Some of the procedures that are widely used in gynecology include:
                        Hysterectomy or removal of the uterus,
                        Ovary removal,
                        Removal of fallopian tubes during surgery,
                        Taking cone biopsies from the inner walls of the uterus if cancer of the womb is suspected,
                        Colposcopy and hysteroscopy, where the insides of the uterus are viewed using endoscope like instruments,
                        Taking biopsy or tissue samples from the cervix, if cancer is suspected,
                        Taking routine Pap smears from the cervix in order to diagnose and detect cervix cancer,
                        Ultrasound examination of the reproductive organs,
                        Laparoscopy or visualizing the inner abdominal organs of the female reproductive system and diagnosis and removal of cysts and infections from the ovaries and fallopian tubes,
                        Removal of uterus fibroids,
                        Diagnosis and treatment of sexually transmitted infections,
                        Diagnosis problems with menstruation like absence, heavy bleeding, irregular or no-onset of menstruation etc.


                    </p>
                </div>
            </div>
            <div className='konke'>
                <div className='oic'>
                    <img src='/Gynaecologist/kil.jpg' alt="error" />
                </div>
                <div className='oic'>
                    <img src='/Gynaecologist/kpo.jpg' alt="error" />
                </div>
                <div className='oic'>
                    <img src='/Gynaecologist/poi.jpg' alt="error" />
                </div>
            </div>
            <Mfooter></Mfooter>
        </>
    );
}

export default Gyn;