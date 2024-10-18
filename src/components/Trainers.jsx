import trainerone from '../assets/trainerone.jpg';
import trainetwo from '../assets/trainertwo.jpg';
import '../css/trainers.css';
function Trainers()
{
    return (
        <section className="about section" id="about">
               <div className="container">
                    <div className="row">

                            <div className="mt-lg-5 mb-lg-0 mb-4 col-lg-5 col-md-10 mx-auto col-12">
                                <h2 className="mb-4" data-aos="fade-up" data-aos-delay="300">Hello, we are Fitness 247</h2>

                                <p data-aos="fade-up" data-aos-delay="400">You are NOT allowed to redistribute this HTML template downloadable ZIP file on any template collection site. You are allowed to use this template for your personal or business websites.</p>

                                <p data-aos="fade-up" data-aos-delay="500">If you have any question regarding, you can immediately. Thank you.</p>

                            </div>

                            <div className="ml-lg-auto col-lg-3 col-md-6 col-12" data-aos="fade-up" data-aos-delay="700">
                                <div className="team-thumb">
                                    <img src={trainetwo} className="img-fluid" alt="Trainer" />

                                    <div className="team-info d-flex flex-column">

                                        <h3>Mary Yan</h3>
                                        <span>Yoga Instructor</span>

                                        <ul className="social-icon mt-3">
                                            <li><a href="#" className="fa fa-twitter"></a></li>
                                            <li><a href="#" className="fa fa-instagram"></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="mr-lg-auto mt-5 mt-lg-0 mt-md-0 col-lg-3 col-md-6 col-12" data-aos="fade-up" data-aos-delay="800">
                                <div className="team-thumb">
                                    <img src={trainerone} className="img-fluid" alt="Trainer" />

                                    <div className="team-info d-flex flex-column">

                                        <h3>Catherina</h3>
                                        <span>Body trainer</span>

                                        <ul className="social-icon mt-3">
                                            <li><a href="#" className="fa fa-instagram"></a></li>
                                            <li><a href="#" className="fa fa-facebook"></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                    </div>
               </div>
     </section>
    );
}

export default Trainers;