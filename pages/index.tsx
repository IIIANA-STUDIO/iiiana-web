/*import Link from 'next/link'*/
import Layout from '../components/Layout'
import React, {useState} from "react";
import firebase from "firebase";

export default function Home() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [sub, setSub] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    return (
        <React.Fragment>
            <Layout>
                <section className="bg-home-1" id="home">
                    <div className="home-bg-overlay"></div>
                    <div className="home-center">
                        <div className="home-desc-center">
                            <div className="container">
                                <div className="row vertical-content">
                                    <div className="col-lg-6">
                                        <div className="home-content">
                                            <h3 className="home-title">Creating neo-age financial solutions just for you</h3>
                                            {/* <p className="home-desc line-height_1_8 mt-4 text-white-50">A digital web design
                                            studio creating modern & engaging online experiences</p> */}
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

                <section className="section bg-light" id="services">
                    <div className="container">
                        <div className="row vertical-content">
                            <div className="col-lg-4">
                                <div className="mt-4">
                                    <h4 className="services-title line-height_1_4">IIIANA STUDIOS will soon introduce you to -</h4>
                                    {/* <p className="text-muted mt-3 line-height_1_8 f-15">Contrary to popular belief not
                                    simply random text It has piece</p> */}
                                    <div className="mt-5">
                                        <a href="#contact" className="btn btn-custom btn-round">Know More <i
                                            className="mdi mdi-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="services-box p-5 btn-round mt-4 shadow" style={{background: 'linear-gradient(to bottom, #f37335, #fdc830)'}}>
                                    <div className="services-icon">
                                        <img src="assets/logo/hornbill-colored.svg" className="img-fluid" alt="" style={{objectFit: 'cover', width: '100%'}}/>
                                    </div>
                                    <div className='d-flex flex-row justify-content-center align-content-center align-items-center'>
                                        <h5 className="mt-4 pt-2">Payment Gateway</h5>
                                    </div>
                                    {/* <p className="text-muted mt-4 mb-0">Passage you need sure there anything embarrassing
                                    hidden all the generators is Internet repeat predefined open chunks necesary making
                                    first Internet.</p> */}
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="services-box p-5 btn-round mt-4" style={{background: 'linear-gradient(to right, #5e02f5, #3e0b91)'}}>
                                    <div className="services-icon">
                                        <img src="assets/logo/hornbill-dark-bg.svg" className="img-fluid" alt="" style={{objectFit: 'cover', width: '100%'}}/>
                                    </div>
                                    <div className='d-flex flex-row justify-content-center align-content-center align-items-center'>
                                        <h5 className="mt-4 pt-2 text-white">Digital Wallet</h5>
                                    </div>

                                    {/* <p className="text-muted mt-4 mb-0">Vestibullum pretium conggue Morrfrbi quam commodo
                                    justo at viverra viverra orrci Pellentesque habitant morbi tristique senectus et
                                    netus et malesuada.</p> */}
                                </div>
                            </div>

                        </div>
                    </div>
                </section>


                <section className="section counter" id='pricing'>
                    <div className="container">

                        <div className="row">
                            <div className="col-lg-12">
                                <h1 className="title-heading text-center text-white">Build your dream business application today</h1>
                                <h3 className='title-desc text-center text-capitalize text-white-50' style={{textTransform: 'uppercase'}}>transform your business for the digital age</h3>
                                <p className="title-desc text-center text-white-50 mt-4">
                                    Throw away paper forms, no more email approvals, stop chasing people, get insights and reports at your fingertip by building apps to solve your everyday operational challenges in business.
                                </p>
                            </div>
                        </div>

                        <div className="row mt-5" id="counter">
                            <div className="col-lg-3">
                                <div className="counter-box text-center mt-5">
                                    <div className="counter-icon">
                                        <i className="mdi mdi-check-circle-outline"></i>
                                    </div>
                                    <span className=" mt-3 text-white" style={{fontSize: 20, fontWeight: 600}}>Get the BEST BUSINESS SOLUTION from our solution consultant</span>
                                </div>
                            </div>

                            <div className="col-lg-3">
                                <div className="counter-box text-center mt-5">
                                    <div className="counter-icon">
                                        <i className="mdi mdi-forum-outline"></i>
                                    </div>
                                    <span className=" mt-3 text-white" style={{fontSize: 20, fontWeight: 600}}>Get the BEST CUSTOMER EXPERIENCE with our transparent CX model</span>
                                </div>
                            </div>

                            <div className="col-lg-3">
                                <div className="counter-box text-center mt-5">
                                    <div className="counter-icon">
                                        <i className="mdi mdi-star-outline"></i>
                                    </div>
                                    <span className=" mt-3 text-white" style={{fontSize: 20, fontWeight: 600}}>Get QUALITY TESTED delivery of products</span>
                                </div>
                            </div>

                            <div className="col-lg-3">
                                <div className="counter-box text-center mt-5">
                                    <div className="counter-icon">
                                        <i className="mdi mdi-heart-outline"></i>
                                    </div>
                                    <span className=" mt-3 text-white" style={{fontSize: 20, fontWeight: 600}}>We aim to add you to our HAPPY list of customers</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>


                <section className="section">
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
                                    <p className="text-muted mt-4"> - Have an exciting business idea, but unsure about market validation?</p>
                                    <p className="text-muted mt-4"> - Have a business that you want to scale using technology, but lack the expertise?</p>
                                    <p className="text-muted mt-4"> - Technology would scale your business, but maintaining an in-house tech team is
                                        expensive?</p>
                                    <div className="mt-5">
                                        <a href="#contact" className="btn btn-custom  btn-round">Connect with us <i
                                            className="mdi mdi-arrow-right"></i></a>
                                    </div>
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
                                {/* <p className="title-desc text-center text-muted mt-4">Tentesque habitant morbi tristique
                                senectus et netus malesuada fames turpis egestas quisque congue felis euismod Vestibulum
                                ac vitae fringilla.</p> */}
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
                                                           type="text" value={name} onChange={event => setName(event.target.value)}/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group mt-2">
                                                    <input name="email" id="email" className="form-control"
                                                           placeholder="Email" type="email" value={email} onChange={event => setEmail(event.target.value)}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group mt-2">
                                                    <input className="form-control" id="subject" placeholder="Subject"
                                                           type="text" value={sub} onChange={event => setSub(event.target.value)}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group mt-2">
                                                <textarea name="comments" id="comments" value={message} onChange={event => setMessage(event.target.value)}
                                                          className="form-control" placeholder="Message"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            {loading && <div className="col-lg-12 mt-3 text-center">
                                                <a href="javascript:;"
                                                   onClick={() => {
                                                       setLoading(true)
                                                       const sendMessage = firebase.functions().httpsCallable('senMail')
                                                       sendMessage({name,
                                                           email,
                                                           subject: sub,
                                                           message})
                                                           .then(value => {
                                                               console.log(value)
                                                               setEmail('')
                                                               setMessage('')
                                                               setName('')
                                                               setSub('')
                                                               setLoading(false)
                                                           }).catch(error => {
                                                           console.log(error)
                                                           setLoading(false)
                                                       })
                                                   }}
                                                   className="btn btn-sm btn-custom btn-round">Send</a>
                                            </div>}
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

            </Layout>
        </React.Fragment>
    )
}
