import React, {useState} from "react";
import NavLayout from "../../components/NavLayout";
import firebase from "firebase";

export default function Contact() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [sub, setSub] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)


    return (
        <React.Fragment>
            <NavLayout>
                <section className="bg-home-1" id="home" style={{padding: "150px 0px 50px 0"}}>
                    <div className="home-bg-overlay"></div>
                    <div className="home-center" style={{padding: "0 100px", color: "#FFF"}}>
                        <div className="home-desc-center" style={{display: "block"}}>
                            <div className="container" style={{textAlign: "center"}}>
                                <h1>Contact Us</h1>
                                <div style={{
                                    border: "2px solid #28a745",
                                    width: 50,
                                    margin: "0 auto"
                                }}>

                                </div>

                            </div>
                        </div>
                        {/* <div>
                            <p style={{margin: "50px 0 0 0"}}>Last updated on January 12th, 2021</p>
                        </div>*/}
                    </div>

                </section>
                <section className="section bg-light" style={{paddingTop: "50px"}}>
                    <div className="home-center" style={{padding: "0 100px", color: "#000"}}>
                        <div id="message"></div>
                        <div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group mt-2">
                                        <input name="name" id="name" className="form-control" placeholder="Name"
                                               type="text" value={name}
                                               onChange={event => setName(event.target.value)}/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group mt-2">
                                        <input name="email" id="email" className="form-control"
                                               placeholder="Email" type="email" value={email}
                                               onChange={event => setEmail(event.target.value)}/>
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
                                                <textarea name="comments" id="comments" value={message}
                                                          onChange={event => setMessage(event.target.value)}
                                                          className="form-control" placeholder="Message"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {!loading && <div className="col-lg-12 mt-3 text-center">
                                    <a href="javascript:;"
                                       onClick={() => {
                                           setLoading(true)
                                           const sendMessage = firebase.functions().httpsCallable('senMail')
                                           sendMessage({
                                               name,
                                               email,
                                               subject: sub,
                                               message
                                           })
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
                </section>


                <section className="footer">
                    <div className="footer-bg-overlay"></div>
                    <div className="container">

                        <div className="footer-content">
                            <div
                                className="d-flex flex-row justify-content-center align-content-center align-items-center">
                                <img src="assets/logo/logo-dark.png" alt="" height="50"/>
                            </div>

                            <div
                                className="d-flex flex-row justify-content-center align-content-center align-items-center mt-4 text-center">
                                <span className='text-white-50'>IIIANA STUDIO PVT. LTD, H NO – 60 + , KANGKAN NAGAR, WML J LANE, DIBRUGARH, ASSAM, INDIA, 786003</span>
                            </div>
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