import Hnav from "../Components/Hnav";
import Mfooter from "../Components/Mfooter";
import "../styles/Insights.css"
function Insights() {
    return (
        <>
            <Hnav></Hnav>
            <div>
                <section id="blog" className="py-3">
                    <div className="wrapper">
                        <div className="header">
                            <span></span>
                            <h4>News blog</h4>
                        </div>
                        <div className="blog-info">
                            <h2><span className="text-secondary">Latest News</span></h2>
                            <a href="/">BACK</a>
                        </div>
                        <div className="blog-card">
                            <div className="card">
                                <div className="card-header">
                                    <img src="/news/teenagepreg.jpg" alt="error" />
                                </div>
                                <div className="card-body">
                                   
                                    <h4> Increase <br /> In Teenage Pregnacy</h4>
                                    <div className="footer">
                                        <small>January 7, 2024 /5 comments</small>
                                        <small>Read  more</small>
                                        <a href="https://www.webmd.com/baby/teen-pregnancy-medical-risks-and-realities#:~:text=Teenage%20pregnancy%20is%20when%20a,have%20dropped%20steadily%20since%201990." target="_blank"><i className="fa-solid fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <img src="/news/accidents.jpg" alt="error" />
                                </div>
                                <div className="card-body">
                                    
                                    <h4>Increase in  <br /> Accidents</h4>
                                    <div className="footer">
                                        <small>January 4, 2022 /5 comments</small>
                                        <small>Read  more</small>
                                        <a href="https://www.statista.com/statistics/1197163/road-traffic-deaths-and-injuries-in-ghana/#:~:text=Transportation%2Drelated%20deaths%20and%20injuries%20in%20Ghana%202022&text=In%20the%20first%20half%20of,compared%20to%20the%20previous%20month." target="_blank"><i className="fa-solid fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <img src="/news/malaria.jpg" alt="error" />
                                </div>
                                <div className="card-body">
                                    
                                    <h4>High rate in<br /> Malaria Diseases</h4>
                                    <div className="footer">
                                        <small>January 3, 2022 /5 comments</small>
                                        <small>Read  more</small>
                                        <a href="https://www.severemalaria.org/countries/ghana" target="_blank"><i className="fa-solid fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <img src="/news/covid.jpg" alt="error" />
                                </div>
                                <div className="card-body">
                                    
                                    <h4>Covid-19<br /> Outbreak</h4>
                                    <div className="footer">
                                        <small>January 3, 2022 /5 comments</small>
                                        <small>Read  more</small>
                                        <a href="https://www.ghs.gov.gh/covid19/latest.php" target="_blank"><i className="fa-solid fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <img src="/news/sti.jpg" alt="error" />
                                </div>
                                <div className="card-body">
                                    
                                    <h4>High rate in <br /> Sexually transmitted diseases</h4>
                                    <div className="footer">
                                        <small>January 3, 2022 /5 comments</small>
                                        <small>Read  more</small>
                                        <a href="https://www.cdc.gov/std/general/default.htm" target="_blank"><i className="fa-solid fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header">
                                    <img src="/news/pollution.jpg" alt="error" />
                                </div>
                                <div className="card-body">
                                    
                                    <h4>Environmental <br /> Pollutions</h4>
                                    <div className="footer">
                                        <small>January 3, 2022 /5 comments</small>
                                        <small>Read  more</small>
                                        <a href="http://dicf.unepgrid.ch/ghana/pollution#:~:text=Air%2C%20water%2C%20and%20waste%20pollution,5%20levels%20exceeding%20WHO%20guidelines." target="_blank"><i className="fa-solid fa-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </section>
            </div>
            <Mfooter></Mfooter>
        </>

    );
};
export default Insights