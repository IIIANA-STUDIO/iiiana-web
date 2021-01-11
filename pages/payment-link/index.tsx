import React from "react";
import NavLayout from "../../components/NavLayout";

export default function Home() {


    return (
        <React.Fragment>
            <NavLayout>
                <section className="bg-home-1" id="home">
                    <div className="home-bg-overlay"></div>
                    <div className="home-center">
                        <div className="home-desc-center">
                            <div className="container">
                                <div className="row vertical-content">
                                    <div className="col-lg-6">
                                        <div className="home-content">
                                            <h3 className="home-title">PAYMENT LINK PAGE DUMMY</h3>

                                            <div className="mt-5">
                                                {/* <a href="" className="btn btn-white btn-round">Get Started <i
                                                className="mdi mdi-arrow-right"></i></a> */}
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



                <section className="footer">
                    <div className="footer-bg-overlay"></div>
                    <div className="container">

                        <div className="footer-content">
                            <div className="d-flex flex-row justify-content-center align-content-center align-items-center">
                                <img src="assets/logo/logo-dark.png" alt="" height="50"/>
                            </div>

                            <div className="d-flex flex-row justify-content-center align-content-center align-items-center mt-4 text-center">
                                <span className='text-white-50'>IIIANA STUDIO PVT. LTD, H NO – 60 + , KANGKAN NAGAR, WML J LANE, DIBRUGARH, ASSAM, INDIA, 786003</span>
                            </div>

                            {/* <div className="col-lg-8">
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
                        </div> */}
                        </div>
                        <div className="row mt-4">
                            <div className="col-lg-12">
                                <p className="footer-alt text-center text-white-50 mb-0">2019 © IIIana. Design by
                                    IIIANA STUDIO</p>
                            </div>
                        </div>

                    </div>

                </section>

            </NavLayout>
        </React.Fragment>
    )
}
