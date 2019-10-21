import React from "react";
import HelmetUtils from "../../Helpers/HelmetUtils";

export default function Home() {
    return (
        <React.Fragment>
            <HelmetUtils/>
            <section className="bg-home-1" id="home">
                <div className="home-bg-overlay"></div>
                <div className="home-center">
                    <div className="home-desc-center">
                        <div className="container">
                            <div className="row vertical-content">
                                <div className="col-lg-6">
                                    <div className="home-content">
                                        <h3 className="home-title">We craft digital, graphic and dimensional
                                            thinking</h3>
                                        <p className="home-desc line-height_1_8 mt-4 text-white-50">A digital web design
                                            studio creating modern & engaging online experiences</p>
                                        <div className="mt-5">
                                            <a href="" className="btn btn-white btn-round">Get Started <i
                                                className="mdi mdi-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="home-img mt-4">
                                        <img src="assets/images/features/img-1.png" className="img-fluid" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container-fluid">
                            <div className="row">
                                <div className="home-shape mt-4">
                                    <img src="assets/images/shape-1.png" alt="" className="img-fluid mx-auto d-block"/>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="section bg-light" id="services">
                <div className="container">
                    <div className="row vertical-content">
                        <div className="col-lg-4">
                            <div className="mt-4">
                                <h4 className="services-title line-height_1_4">Why choose IIIana?</h4>
                                <p className="text-muted mt-3 line-height_1_8 f-15">Contrary to popular belief not
                                    simply random text It has piece</p>
                                <div className="mt-5">
                                    <a href="" className="btn btn-custom btn-round">Know More <i
                                        className="mdi mdi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="services-box bg-white p-5 btn-round mt-4">
                                <div className="services-icon">
                                    <img src="assets/images/icon/code-window.png" className="img-fluid" alt=""/>
                                </div>
                                <h5 className="mt-4 pt-2">Digital Design</h5>
                                <p className="text-muted mt-4 mb-0">Passage you need sure there anything embarrassing
                                    hidden all the generators is Internet repeat predefined open chunks necesary making
                                    first Internet.</p>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="services-box bg-white p-5 btn-round mt-4">
                                <div className="services-icon">
                                    <img src="assets/images/icon/drawing-tablet.png" className="img-fluid" alt=""/>
                                </div>
                                <h5 className="mt-4 pt-2">Strategy Solutions</h5>
                                <p className="text-muted mt-4 mb-0">Vestibullum pretium conggue Morrfrbi quam commodo
                                    justo at viverra viverra orrci Pellentesque habitant morbi tristique senectus et
                                    netus et malesuada.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="section" id="features">
                <div className="container">
                    <div className="row vertical-content">
                        <div className="col-lg-6">
                            <div className="features-img mt-4">
                                <img src="assets/images/features/img-2.png" className="img-fluid" alt=""/>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="features-content mt-4">
                                <h4 className="title-heading line-height_1_4">We help startups launch their
                                    products</h4>
                                <p className="text-muted mt-4">Praesent gravida nunc massa euismod id interdum velit
                                    ornare placerat orci specimen book condimentum tempus.</p>
                                <p className="text-muted mt-4">Sellentesque placerat non felis sit amet congue sagittis
                                    intedum arcu Nullam laoreet augue pageMaker including versions vitae blandit
                                    dolor.</p>
                                <div className="mt-5">
                                    <a href="" className="btn btn-custom  btn-round">Discover Now <i
                                        className="mdi mdi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section className="section counter">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="title-heading text-center text-white">Build your dream website today</h1>
                            <p className="title-desc text-center text-white-50 mt-4">Call to action pricing table is
                                really crucial to your for your business website. Make your bids stand-out with amazing
                                options.</p>
                        </div>
                    </div>

                    <div className="row mt-5" id="counter">
                        <div className="col-lg-3">
                            <div className="counter-box text-center mt-5">
                                <div className="counter-icon">
                                    <i className="mdi mdi-check-circle-outline"></i>
                                </div>
                                <h2 className="counter-count mt-3"><span className="counter-value"
                                                                         data-count="100">56</span>K</h2>
                                <p className="mt-3 text-white-50 mb-0">App Download</p>
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <div className="counter-box text-center mt-5">
                                <div className="counter-icon">
                                    <i className="mdi mdi-forum-outline"></i>
                                </div>
                                <h2 className="counter-count mt-3"><span className="counter-value"
                                                                         data-count="2679">1255</span></h2>
                                <p className="mt-3 text-white-50 mb-0">Feedback</p>
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <div className="counter-box text-center mt-5">
                                <div className="counter-icon">
                                    <i className="mdi mdi-star-outline"></i>
                                </div>
                                <h2 className="counter-count mt-3"><span className="counter-value"
                                                                         data-count="4.80">2.68</span>%</h2>
                                <p className="mt-3 text-white-50 mb-0">Users Rating</p>
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <div className="counter-box text-center mt-5">
                                <div className="counter-icon">
                                    <i className="mdi mdi-heart-outline"></i>
                                </div>
                                <h2 className="counter-count mt-3"><span className="counter-value"
                                                                         data-count="5000">2000</span>+</h2>
                                <p className="mt-3 text-white-50 mb-0">Happy User</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="section bg-light" id="pricing">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="title-heading text-center">Our Pricing</h1>
                            <p className="title-desc text-center text-muted mt-4">It is a long established fact that a
                                reader will be distracted by the readable content of a page when looking at its
                                layout.</p>
                        </div>
                    </div>

                    <div className="row mt-4">

                        <div className="col-lg-4">
                            <div className="pricing-box text-center p-5 mt-5">
                                <h4 className="pricing-plan text-uppercase">Economy plan</h4>
                                <h2 className="pricing-price mt-5 mb-0">Free</h2>
                                <p className="pricing-month mt-1">Per Month</p>
                                <div className="plan-features mt-5">
                                    <p>Bandwidth: <b>1GB</b></p>
                                    <p>Onlinespace: <b>50MB</b></p>
                                    <p>Support: <b>No</b></p>
                                    <p><b>1</b> Domain</p>
                                    <p><b>No</b> Hidden Fees</p>
                                </div>
                                <div className="mt-5">
                                    <a href="" className="btn btn-secondary btn-sm btn-round">Join Now</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="pricing-box-active text-center bg-white p-5 mt-5">
                                <h4 className="pricing-plan text-uppercase">Deluxe Plan</h4>
                                <h2 className="pricing-price mt-5 mb-0">$19.00</h2>
                                <p className="pricing-month mt-1">Per Month</p>
                                <div className="plan-features mt-5">
                                    <p>Bandwidth: <b>1GB</b></p>
                                    <p>Onlinespace: <b>50MB</b></p>
                                    <p>Support: <b>No</b></p>
                                    <p><b>1</b> Domain</p>
                                    <p><b>No</b> Hidden Fees</p>
                                </div>
                                <div className="mt-5">
                                    <a href="" className="btn btn-custom btn-sm btn-round">Join Now</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="pricing-box text-center p-5 mt-5">
                                <h4 className="pricing-plan text-uppercase">Ultimate Plan</h4>
                                <h2 className="pricing-price mt-5 mb-0">$29.00 <span></span></h2>
                                <p className="pricing-month mt-1">Per Month</p>
                                <div className="plan-features mt-5">
                                    <p>Bandwidth: <b>1GB</b></p>
                                    <p>Onlinespace: <b>50MB</b></p>
                                    <p>Support: <b>No</b></p>
                                    <p><b>1</b> Domain</p>
                                    <p><b>No</b> Hidden Fees</p>
                                </div>
                                <div className="mt-5">
                                    <a href="" className="btn btn-secondary btn-sm btn-round">Join Now</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="section bg-client" id="clients">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="title-heading text-center">What they've said</h1>
                            <p className="title-desc text-center text-muted mt-4">In an ideal world this website
                                wouldn’t exist, a client would acknowledge the importance of having web copy before the
                                design starts.</p>
                        </div>
                    </div>

                    <div className="row mt-5 justify-content-center">
                        <div className="col-lg-8">
                            <div id="owl-demo">

                                <div className="client-content text-center mt-4">
                                    <div className="clinet-img">
                                        <img src="assets/images/users/img-1.jpg" className="img-fluid rounded-circle" alt=""/>
                                    </div>
                                    <h5 className="mt-4">Raymond Sloan</h5>
                                    <p className="f-12">Web Developer</p>
                                    <p className="f-16 client-desc">"Aenean vehicula neque turpis at dictum purus
                                        malesuada Aenean risus ex sollicitudin nec pharetra in cursus aliquet."</p>
                                </div>

                                <div className="client-content text-center mt-4">
                                    <div className="clinet-img">
                                        <img src="assets/images/users/img-2.jpg" className="img-fluid rounded-circle" alt=""/>
                                    </div>
                                    <h5 className="mt-4">Mary Shriner</h5>
                                    <p className="f-12">Web Designer</p>
                                    <p className="f-16 client-desc">"Aenean vehicula neque turpis at dictum purus
                                        malesuada Aenean risus ex sollicitudin nec pharetra in cursus aliquet."</p>
                                </div>

                                <div className="client-content text-center mt-4">
                                    <div className="clinet-img">
                                        <img src="assets/images/users/img-3.jpg" className="img-fluid rounded-circle" alt=""/>
                                    </div>
                                    <h5 className="mt-4">Robert Garrett</h5>
                                    <p className="f-12">Web Developer</p>
                                    <p className="f-16 client-desc">"Aenean vehicula neque turpis at dictum purus
                                        malesuada Aenean risus ex sollicitudin nec pharetra in cursus aliquet."</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="client-logo pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="client-images">
                                <img src="assets/images/clients/1.png" alt="logo-img" className="mx-auto img-fluid d-block"/>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="client-images">
                                <img src="assets/images/clients/2.png" alt="logo-img" className="mx-auto img-fluid d-block"/>
                            </div>
                        </div>
                        <div className="col-lg-3 ">
                            <div className="client-images">
                                <img src="assets/images/clients/3.png" alt="logo-img" className="mx-auto img-fluid d-block"/>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="client-images">
                                <img src="assets/images/clients/4.png" alt="logo-img" className="mx-auto img-fluid d-block"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="title-heading text-center">Contact Us</h1>
                            <p className="title-desc text-center text-muted mt-4">Tentesque habitant morbi tristique
                                senectus et netus malesuada fames turpis egestas quisque congue felis euismod Vestibulum
                                ac vitae fringilla.</p>
                        </div>
                    </div>

                    <div className="row justify-content-center mt-5">
                        <div className="col-lg-10">
                            <div className="custom-form mt-3">
                                <div id="message"></div>
                                <div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group mt-2">
                                                <input name="name" id="name" className="form-control" placeholder="Name"
                                                       type="text"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group mt-2">
                                                <input name="email" id="email" className="form-control"
                                                       placeholder="Email" type="email"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group mt-2">
                                                <input className="form-control" id="subject" placeholder="Subject"
                                                       type="text"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group mt-2">
                                                <textarea name="comments" id="comments"
                                                          className="form-control" placeholder="Message"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 mt-3 text-center">
                                            <input id="submit" name="send"
                                                   className="submitBnt btn btn-custom btn-round" value="Send Message"
                                                   type="submit"/>
                                                <div id="simple-msg"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="footer">
                <div className="footer-bg-overlay"></div>
                <div className="container">

                    <div className="row footer-content">
                        <div className="col-lg-4">
                            <img src="assets/logo/logo-dark.png" alt="" height="50"/>
                        </div>

                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-3">
                                    <h5 className="f-18 text-white">Home</h5>
                                    <ul className="list-unstyled footer-link mt-3">
                                        <li><a href="">About us</a></li>
                                        <li><a href="">Careers</a></li>
                                        <li><a href="">Contact us</a></li>
                                    </ul>
                                </div>

                                <div className="col-lg-3">
                                    <h5 className="f-18 text-white">Services</h5>
                                    <ul className="list-unstyled footer-link mt-3">
                                        <li><a href="">Terms & Condition</a></li>
                                        <li><a href="">Jobs</a></li>
                                    </ul>
                                </div>

                                <div className="col-lg-3">
                                    <h5 className="f-18 text-white">Pricing</h5>
                                    <ul className="list-unstyled footer-link mt-3">
                                        <li><a href="">Business</a></li>
                                        <li><a href="">Bookmarks</a></li>
                                        <li><a href="">Contact</a></li>
                                    </ul>
                                </div>

                                <div className="col-lg-3">
                                    <h5 className="f-18 text-white">Contact</h5>
                                    <ul className="list-unstyled footer-link mt-3">
                                        <li><a href="">123-4556-789</a></li>
                                        <li><a href="">Your@mail.com</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-12">
                            <p className="footer-alt text-center text-white-50 mb-0">2019 © IIIana. Design by
                                IIIana Studios</p>
                        </div>
                    </div>

                </div>

            </section>

        </React.Fragment>
    )
}