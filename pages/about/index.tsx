import React from "react";
import NavLayout from "../../components/NavLayout";

export default function About() {


    return (
        <React.Fragment>
            <NavLayout>
                <section className="bg-home-1" id="home" style={{padding: "150px 0px 50px 0"}}>
                    <div className="home-bg-overlay"></div>
                    <div className="home-center" style={{padding : "0 100px", color: "#FFF"}}>
                        <div className="home-desc-center" style={{display:"block"}}>
                            <div className="container" style={{textAlign: "center"}}>
                                <h1>About Us</h1>
                                <div style={{border: "2px solid #28a745",
                                    width: 50,
                                    margin: "0 auto"}}>

                                </div>

                            </div>
                        </div>
                       {/* <div>
                            <p style={{margin: "50px 0 0 0"}}>Last updated on January 12th, 2021</p>
                        </div>*/}
                    </div>

                </section>
                <section className="section bg-light" style={{paddingTop: "50px"}}>
                    <div className="home-center" style={{padding : "0 100px", color: "#000"}}>
                       {/* <h2>Introduction and Terms of Use</h2>*/}
                      {/*  <div style={{border: "2px solid #28a745",
                            width: 50,}}>
                        </div>*/}
                        <p style={{margin: "25px 0 0 0",}}>
                            Iiiana Studio is a Software Services company focused in providing softwares that help drive businesses and individuals into the neo-digital space.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}></p>
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