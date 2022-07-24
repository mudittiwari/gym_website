import '../css/contact.css'
function Contactsection() {
    return (
        <>
            <section className="contact section" id="contact">
                <div className="container">
                    <div className="row">

                        <div className="ml-auto col-lg-5 col-md-6 col-12">
                            <h2 className="mb-4 pb-2" data-aos="fade-up" data-aos-delay="200">Feel free to ask anything</h2>

                            <form action="#" method="post" className="contact-form webform" data-aos="fade-up" data-aos-delay="400" role="form">
                                <input type="text" className="form-control" name="cf-name" placeholder="Name" />

                                    <input type="email" className="form-control" name="cf-email" placeholder="Email" />

                                        <textarea className="form-control" rows="5" name="cf-message" placeholder="Message"></textarea>

                                        <button type="submit" className="form-control" id="submit-button" name="submit">Send Message</button>
                                    </form>
                                </div>

                                <div className="mx-auto mt-4 mt-lg-0 mt-md-0 col-lg-5 col-md-6 col-12">
                                    <h2 className="mb-4" data-aos="fade-up" data-aos-delay="600">Where you can <span>find us</span></h2>

                                    <p data-aos="fade-up" data-aos-delay="800"><i className="fa fa-map-marker mr-1"></i> 120-240 Rio de Janeiro - State of Rio de Janeiro, Brazil</p>
                                    {/* <!-- How to change your own map point
	1. Go to Google Maps
	2. Click on your location point
	3. Click "Share" and choose "Embed map" tab
	4. Copy only URL and paste it within the src="" field below
--> */}
                                    <div className="google-map" data-aos="fade-up" data-aos-delay="900">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14150.726338652752!2d76.60659969999999!3d27.54134985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39729b517cdc9839%3A0xa586c6902a59e9aa!2sD%20Mart!5e0!3m2!1sen!2sin!4v1658664685734!5m2!1sen!2sin" width="1920" height="250" style={{"border":"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
                                    </div>
                                </div>

                        </div>
                    </div>
            </section>
        </>
    );
}

export default Contactsection;