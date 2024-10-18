import '../css/herosection.css';
function Herosection() {
    return (
        <>
            <section className="hero d-flex flex-column justify-content-center align-items-center" id="home">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-8 col-md-10 mx-auto col-12">
                            <div className="hero-text mt-5 text-center">

                                <h6 data-aos="fade-up" data-aos-delay="300">new way to build a healthy lifestyle!</h6>

                                <h1 className="text-white" data-aos="fade-up" data-aos-delay="500">Upgrade your body at Fitness 247 Fitness</h1>

                                <a href="#feature" className="btn custom-btn border-0 mt-3 fw-bold" data-aos="fade-up" data-aos-delay="600" id="getstartedbutton">Get started</a>

                                <a href="#about" className="btn custom-btn bordered mt-3 ms-4" data-aos="fade-up" data-aos-delay="700">learn more</a>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
            
        </>
    );
}


export default Herosection;