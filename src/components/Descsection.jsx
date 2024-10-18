import '../css/desc.css';
function Descsection() {
    return (
        <>
            <section className="desc" id="feature">
                <div className="container">
                    <div className="row justify-content-around">

                        <div className="d-flex flex-column justify-content-center ml-lg-auto mr-lg-5 col-lg-5 col-md-6 col-12">
                            <h2 className="mb-3 text-white fw-bold" data-aos="fade-up">New to the Fitness 247?</h2>

                            <h6 className="mb-4 text-white" data-aos="fade-up">Your membership is up to 2 months FREE ($62.50 per month)</h6>

                            <p data-aos="fade-up" data-aos-delay="200">Fitness 247 is free HTML template by for your commercial website. Bootstrap v4.2.1 Layout. Feel free to use it.</p>

                            <a href="#" className="btn custom-btn bg-color mt-3" data-aos="fade-up" data-aos-delay="300" data-toggle="modal" data-target="#membershipForm">Become a member today</a>
                        </div>

                        <div className="mr-lg-auto mt-3 col-lg-4 col-md-6 col-12">
                            <div className="about-working-hours">
                                <div>

                                    <h2 className="mb-4 text-white" data-aos="fade-up" data-aos-delay="500">Working hours</h2>

                                    <strong className="d-block text-white" data-aos="fade-up" data-aos-delay="600">Sunday : Closed</strong>

                                    <strong className="mt-3 d-block text-white"  data-aos="fade-up" data-aos-delay="700">Monday - Friday</strong>

                                    <p data-aos="fade-up" data-aos-delay="800">7:00 AM - 10:00 PM</p>

                                    <strong className="mt-3 d-block text-white" data-aos="fade-up" data-aos-delay="700">Saturday</strong>

                                    <p data-aos="fade-up" data-aos-delay="800">6:00 AM - 4:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
        </section>
        <div class="modal fade" id="membershipForm" tabindex="-1" role="dialog" aria-labelledby="membershipFormLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">

                    <div class="modal-content">
                        <div class="modal-header">

                            <h2 class="modal-title" id="membershipFormLabel">Membership Form</h2>

                            <button type="button" class="close border-0 bg-transparent" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div class="modal-body">
                            <form class="membership-form webform" role="form">
                                <input type="text" class="form-control" name="cf-name" placeholder="John Doe" />

                                <input type="email" class="form-control" name="cf-email" placeholder="Johndoe@gmail.com" />

                                <input type="tel" class="form-control" name="cf-phone" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />

                                <textarea class="form-control" rows="3" name="cf-message" placeholder="Additional Message"></textarea>

                                <button type="submit" class="form-control" id="submit-button" name="submit">Submit Button</button>

                               
                            </form>
                        </div>

                        <div class="modal-footer"></div>

                    </div>
                </div>
            </div>
        </>
    );
}
export default Descsection;