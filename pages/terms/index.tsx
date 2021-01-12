import React from "react";
import NavLayout from "../../components/NavLayout";/*
import "./terms.modules.css"*/

export default function Home() {


    return (
        <React.Fragment>
            <NavLayout>
                <section className="bg-home-1" id="home" style={{padding: "150px 0px 50px 0"}}>
                    <div className="home-bg-overlay"></div>
                    <div className="home-center" style={{padding : "0 100px", color: "#FFF"}}>
                        <div className="home-desc-center" style={{display:"block"}}>
                            <div className="container" style={{textAlign: "center"}}>
                                    <h1>Terms & Conditions</h1>
                                    <div style={{border: "2px solid #28a745",
                                        width: 50,
                                        margin: "0 auto"}}>

                                    </div>

                            </div>
                        </div>
                        <div>
                            <p style={{margin: "50px 0 0 0"}}>Last updated on January 12th, 2021</p>
                        </div>
                    </div>

                </section>
                <section className="section bg-light" style={{paddingTop: "50px"}}>
                    <div className="home-center" style={{padding : "0 100px", color: "#000"}}>
                        <h2>Introduction and Terms of Use</h2>
                        <div style={{border: "2px solid #28a745",
                            width: 50,}}>
                        </div>
                    <p style={{margin: "25px 0 0 0",}}>
                        The terms and conditions contained hereinafter ("TERMS OF USE") shall apply to the use of the website www.razorpay.com and any other linked pages, products, software(s), API keys, features, content or application services (including but without limitation to any mobile application services) in connection therewith, offered from time to time by Razorpay Software Private Limited ("RAZORPAY" or "WE" or "OUR" or "US") (collectively, "WEBSITE").
                    </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            Any person logging on to or using the Website (even when such person does not avail of any services provided in the Website ("SERVICES")) (hereinafter referred to as a "USER", "SELLER", "YOU" or "CLIENT") shall be presumed to have read these Terms of Use (which includes the Privacy Policy, separately put up on the Website) and unconditionally and irrevocably accepted the terms and conditions set out herein (these Terms of Use). These Terms of Use, together with the rest of the Policies (defined below), constitute a binding and enforceable agreement between the User and Razorpay. These Terms of Use do not alter in any way the terms or conditions of any other written agreement you may have with Razorpay for other services.

                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            THE USER UNDERSTANDS AND UNCONDITIONALLY ACKNOWLEDGES THAT EVEN THOUGH THE USER MAY BE ALLOWED TO EXECUTE TRANSACTIONS ON THE PLATFORM OF RAZORPAY, THE FUNDS SHALL NOT BE SETTLED TO THE ACCOUNT OF SUCH USER PENDING COMPLETION OF KYC OBLIGATIONS ON THE PART OF THE USER IN ACCORDANCE WITH THE RBI'S KYC GUIDELINES (DEFINED BELOW). FURTHER, UPON NON-COMPLETION OF KYC OBLIGATIONS ON THE PART OF THE USER, AS MENTIONED ABOVE, TO THE SATISFACTION OF RAZORPAY, WE RESERVE THE RIGHT TO NOT RELEASE THE SETTLEMENT AMOUNTS TO THE USER AND MAY EVENTUALLY REVERSE THE FUNDS TO THE ACCOUNT FROM WHERE SUCH PAYMENT ORIGINATED.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            Please read the terms set out hereunder carefully before agreeing to the same. If you do not agree to these Terms of Use (including any referenced policies or guidelines), please immediately terminate your use of the Website. You can accept the Terms of Use by:
                        </p>
                        <ul style={{listStylePosition: "outside"}}>
                            <li style={{margin: "25px 0 0 0"}}>
                                Clicking to accept or agree to the Terms of Use, where this option is made available to you by Razorpay in the User interface for any particular Service; or
                            </li>
                            <li style={{margin: "25px 0 0 0"}}>
                                Accessing, testing or actually using the Services. In this case, you understand and agree that Razorpay will treat your use of the Services as acceptance of the Terms of Use from that point onwards.
                            </li>
                        </ul>
                        <p style={{margin: "25px 0 0 0"}}>
                            For the purpose of these Terms of Use, wherever the context so requires, the term "User" shall mean and include any natural or legal person who has agreed to these Terms of Use on behalf of itself or any other legal entity.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            It is clarified that the Privacy Policy (that is provided separately), form an integral part of these Terms of Use and should be read contemporaneously with the Terms of Use. Illegality or unenforceability of one or more provisions of these Terms of Use shall not affect the legality and enforceability of the other terms of the Terms of Use. For avoidance of doubt, if any of the provisions becomes void or unenforceable, the rest of the provisions of these Terms of Use shall be binding upon the User.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            The Terms of Use may be revised or altered by us at our sole discretion at any time without any prior intimation to the User. The latest Terms of Use will be posted here. Any such changes by Razorpay will be effective immediately. By continuing to use this Website or to access the Services / usage of our Services after changes are made, you agree to be bound by the revised/ amended Terms of Use and such amendments shall supersede all other terms of use previously accepted by the User. You are solely responsible for understanding and complying with all applicable laws of your specific jurisdiction, including but not limited to the provisions of the RBI Guidelines on Regulation of Payment Aggregators and Payment Gateways, Payment and Settlement Systems Act, 2007, Prevention of Money Laundering Act, 2002, Know Your Customer (KYC) / Anti-Money Laundering (AML) / Combating Financing of Terrorism (CFT) guidelines issued by the Department of Regulation, RBI (the "KYC GUIDELINES") etc., that may be applicable to you in connection with your business and use of our Services.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}></p>
                    </div>

                    <div className="home-center" style={{padding : "0 100px", color: "#000"}}>
                        <h2>Provision of the Services being offered by Razorpay</h2>
                        <div style={{border: "2px solid #28a745",
                            width: 50,}}>
                        </div>
                        <p style={{margin: "25px 0 0 0"}}>
                            Subject to these Terms of Use, Merchant Onboarding Policy, KYC Policy, Disputes and Grievance Redressal Policy and Privacy Policy (collectively, "POLICIES"), Razorpay offers the Services set forth in Schedule I herein.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            Schedule I also contains descriptions and process flows of all Services that are offered to Users. These descriptions and process flows are set out in Part A to Part G in Schedule I.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            Razorpay is constantly evolving in order to provide the best possible experience and information to its Users. You acknowledge and agree that the form and nature of the Services which Razorpay provides may change from time to time without any prior notice to you.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            As part of this continuing process, you acknowledge and agree that Razorpay may stop (permanently or temporarily) providing the Services (or any features within the Services) to you or to Users generally at Razorpay's sole discretion, without any prior notice. You may stop using the Services at any point of time. You do not need to specifically inform Razorpay when you stop using the Services.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            You acknowledge and agree that if Razorpay disables access to your account, you may be prevented from accessing the Services, your account details or any files or other content which is contained in your account, and Razorpay shall intimate you regarding the same.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            Razorpay reserves the right to delete your User information stored in your account including but not limited to all or any personal information or any sensitive personal data or information ("SPDI") stored in your User account. Alternately, a User may notify us if they do not wish that we retain or use the personal information or SPDI by contacting the Grievance Officer (as provided below). However, in such a case, we may not be able to provide you some or all of our Services.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            You acknowledge and agree that while Razorpay may not currently have set a fixed upper limit on the number of transmissions you may send or receive through the Services, such fixed upper limits may be set by Razorpay at any time, solely at Razorpay's discretion.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            By using our Services you agree that Razorpay disclaims any liability or authenticity of any information that may have become outdated since the last time that particular piece of information was updated. Razorpay reserves the right to make changes and corrections to any part of the content of this Website at any time without any prior notice to you. Unless stated otherwise, all pictures and information contained on this Website are believed to be in the public domain as either promotional materials, publicity photos, photoshoot rejects or press media stock. Please contact the Grievance Officer by an e-mail if you are the copyright owner of any content on this Website and you think the use of the above material violates the terms of the applicable Copyright law in any manner. In your request, please indicate the exact URL of the webpage to enable us to locate the same. We will endeavour to address your concerns and take necessary steps, if required. Please note that all images displayed on the Website have been digitised by Razorpay. No other party is authorised to reproduce or republish these digital versions in any format whatsoever without the prior written permission of Razorpay.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            Razorpay acknowledges and represents that it is and shall remain Payment Card Industry Data Security Standard ("PCI DSS") certified. Further, Razorpay shall maintain compliance with PCI DSS Standard or other comparable industry standards governing physical/ logical security cardholder data across Razorpay environment and ensure that the card holder's data is secured in accordance with the standards.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}></p>
                    </div>

                    <div className="home-center" style={{padding : "0 100px", color: "#000"}}>
                        <h2>Use of the Services by User</h2>
                        <div style={{border: "2px solid #28a745",
                            width: 50,}}>
                        </div>
                        <p style={{margin: "25px 0 0 0"}}>
                            In order to access certain Services, you may be required to open a User account with Razorpay by providing information about yourself (such as identification or contact details) as part of the registration process ("REGISTRATION DATA") for the Services, or as part of your continued use of the Services. You agree that any Registration Data you give to Razorpay will always be accurate, correct, complete and up to date. If you provide any information that is untrue, inaccurate, incomplete, or not current or if we have reasonable grounds to suspect that such information is in violation of applicable law or not in accordance with the Terms of Use (whether wholly or in part), we reserve the right to reject your registration and/ or indefinitely suspend or terminate your User account and refuse to provide you access to the Website. Further, you agree to indemnify and keep us indemnified from and against all claims resulting from the use of any detail/ information/ Registration Data that you post and/ or supply to us. We shall be entitled to remove any such detail/ information/ Registration Data posted by you without any prior intimation to you.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            Notwithstanding anything else contained in any other agreement involving you and Razorpay and/ or any other third party, in order to ensure that we are not violating any right that you might have in your Registration Data, you hereby grant to us a non-exclusive, worldwide, perpetual, irrevocable, royalty-free, sub-licensable right to exercise the copyright, publicity, and database rights (but no other rights) that you have in the Registration Data, in any media now or in future known, with respect to your Registration Data solely to enable us to use such Registration Data that you have supplied to us.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            Any amendment or rectification of your Registration Data in the User account can be carried out by accessing the "User account" section on the Website. You may choose to delete any or all of your User content/ information or even the User account at any time. Processing such deletion may take some time, but the same shall be done by Razorpay. We may maintain backup of all User content for such time as may be required under applicable laws and for operational purposes of Razorpay. You are solely responsible for maintaining the confidentiality of your account and password and for any activity that occurs in or through your account. We will not be liable to any person for any loss or damage which may arise as a result of any failure on your part to protect your login ID or password or any other credential pertaining to your account. You should take all necessary steps to ensure that the password is kept confidential and secure. In case you have any reason to believe that your password has become known to anyone else, or if the password is being, or is likely to be, used in an unauthorised manner, you should inform us immediately at security@razorpay.com. In the event of any dispute between two or more parties as to ownership of any particular account with Razorpay, you agree that Razorpay shall be the sole arbitrator for such dispute and that Razorpay's decision in this regard will be final and binding on you.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            You understand and undertake that you shall be solely responsible for your Registration Data and User content and undertake to, neither by yourself nor by permitting any third party to host, display, upload, modify, publish, transmit, update or share any information that:
                        </p>
                        <ul style={{listStylePosition: "outside"}}>
                            <li style={{margin: "25px 0 0 0", }}>
                                Belongs to another person and to which you do not have any right to;
                            </li>
                            <li style={{margin: "25px 0 0 0"}}>
                                Is grossly harmful, harassing, blasphemous, defamatory, obscene, pornographic, pedophilic, seditious, libelous, invasive of another's privacy, hateful, or racially, ethnically objectionable, disparaging, relating or encouraging money laundering or gambling, or otherwise unlawful in any manner whatsoever;
                            </li>
                            <li style={{margin: "25px 0 0 0"}}>
                                Harms minors in any way;
                            </li>
                            <li style={{margin: "25px 0 0 0"}}>
                                Infringes any patent, trademark, copyright or other proprietary rights of any person or entity anywhere in the world;
                            </li>
                            <li style={{margin: "25px 0 0 0"}}>
                                Violates any law for the time being in force;
                            </li>
                            <li style={{margin: "25px 0 0 0"}}>
                                Deceives or misleads the addressee about the origin of such messages or communicates any information which is grossly offensive or menacing in nature;
                            </li>
                            <li style={{margin: "25px 0 0 0"}}>
                                Impersonates another person;
                            </li>
                            <li style={{margin: "25px 0 0 0"}}>
                                Contains software viruses or any other computer code, files or programs designed to interrupt, destroy or limit the functionality of any computer resource;
                            </li>
                            <li style={{margin: "25px 0 0 0"}}>
                                Threatens the unity, integrity, defense, security or sovereignty of India, friendly relations with foreign states, or public order or causes incitement to the commission of any cognizable offence or prevents investigation of any offence or is insulting to any other nation; or
                            </li>
                            <li style={{margin: "25px 0 0 0"}}>
                                Is illegal in any other way.
                            </li>
                        </ul>

                        <p style={{margin: "25px 0 0 0"}}>
                            You agree and understand that Razorpay reserves the right to remove and/or edit such detail/ information. If you come across any information as mentioned above on the Website, you are requested to immediately contact our Grievance officer.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            You agree to use the Services only for purposes that are permitted by (a) these Terms of Use and (b) any applicable law, regulation or generally accepted practices or guidelines in the relevant jurisdictions.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            You agree to use the data owned by Razorpay (as available on the Website or through any other means like API(s) etc.) only for personal purposes and not for any commercial use unless agreed to by Razorpay in writing.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            You agree not to access (or attempt to access) any of the Services by any means other than through the interface that is provided by Razorpay, unless you have been specifically allowed to do so in a separate agreement with Razorpay. You specifically agree not to access (or attempt to access) any of the Services through any automated means (including use of scripts or web crawlers) and shall ensure that you comply with the instructions set out in any robots.txt file present on the Services.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            You agree that you will not engage in any activity that interferes with or disrupts the Services (or the servers and networks which are connected to the Services) on this Website.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            Unless you have been specifically permitted to do so in a separate agreement with Razorpay, you agree that you will not reproduce, duplicate, copy, sell, trade or resell the Services for any purpose.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            You agree that you are solely responsible for (and that Razorpay has no responsibility to you or to any third party for) any breach of your obligations under the Terms of Use and for the consequences (including any loss or damage which Razorpay may suffer) of any such breach. You further agree to the use of your data by us in accordance with the Privacy Policy.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            Razorpay may share any Content (defined hereinafter) generated by the User or their Registration Data with governmental and regulatory agencies who are lawfully authorised for investigative, protective and cyber security activities. Such information may be transferred for the purposes of verification of identity, or for prevention, detection, investigation, prosecution pertaining to cyber security incidents and punishment of offences under any law for the time being in force.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            If you have opted for use of Razorpay's 'subscriptions' product by virtue of which your customers have set up a standing instruction ("RECURRING PAYMENT INSTRUCTION") to charge his/ her chosen payment method (such as credit card, debit card or bank account) as per the billing cycle communicated by you to Razorpay, then you consent that the relevant amount will be charged to such payment method as per the billing cycle communicated to Razorpay. You agree that Razorpay shall continue to charge the relevant amount to the relevant customer's chosen payment method as per such billing cycle until you or the customer terminates the Recurring Payment Instruction.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            You further agree that if the customer revokes his/ her consent to the Recurring Payment Instruction then you shall inform us of the revocation in writing for us to cease processing the Recurring Payment Instruction forthwith upon the revocation but no later than 7 (seven) days prior to the next instance of charge to the customer. If such intimation of revocation of Recurring Payment Instruction is made less than 7 (seven) days prior to the next instance of charge to the customer or is not made at all, Razorpay shall not be liable for any charge applied to the customer for that month pursuant to the revocation or not be liable at all, as applicable. You agree to make good any losses suffered by us on account of demands or claims from customers arising as a consequence of your failure in notifying us about a customer's revocation of the Recurring Payment Instruction.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}></p>
                    </div>

                    <div className="home-center" style={{padding : "0 100px", color: "#000"}}>
                        <h2>Eligibility</h2>
                        <div style={{border: "2px solid #28a745",
                            width: 50,}}>
                        </div>
                        <p style={{margin: "25px 0 0 0"}}>
                            Any person who is above eighteen (18) years of age and competent to contract under the applicable laws is eligible to access or visit the Website or avail the Services displayed therein. Your use or access of the Website shall be treated as your representation that you are competent to contract and if you are registering as a business entity, then you represent and warrant that you have the authority to bind such business entity to the Terms of Use. Without generality of the foregoing, use of the Website is available only to persons who can form a legally binding contract under the Indian Contract Act, 1872 and any amendments thereto.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            The User represents and warrants that it will be financially responsible for all of User's usage (including the purchase of any Service) and access of the Website. The User shall also be responsible for use of User's account by others. The Terms of Use shall be void where prohibited by applicable laws, and the right to access the Website shall automatically stand revoked in such cases.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}></p>
                    </div>


                    <div className="home-center" style={{padding : "0 100px", color: "#000"}}>
                        <h2>Content in the Services </h2>
                        <div style={{border: "2px solid #28a745",
                            width: 50,}}>
                        </div>
                        <p style={{margin: "25px 0 0 0"}}>
                            For the purposes of these Terms of Use, the term "CONTENT" includes, without limitation, information, data, text, logos, photographs, videos, audio clips, animations, written posts, articles, comments, software, scripts, graphics, themes and interactive features generated, provided or otherwise made accessible on or through the Services.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            You should be aware that Content presented to you as part of the Services, including but not limited to advertisements in the Services and sponsored Content within the Services may be protected by intellectual property rights which are owned by the sponsors or advertisers who provide that Content to Razorpay (or by other persons or companies on their behalf). You may not modify, rent, lease, loan, sell, distribute or create derivative works based on this Content (either in whole or in part) unless you have been specifically told that you may do so by Razorpay or by the owners of that Content, in writing and in a separate agreement.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            Razorpay reserves the right (but shall have no obligation) to pre-screen, review, flag, filter, modify, refuse or remove any or all Content from any Service.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            Razorpay reserves the right to moderate, publish, re-publish, and use all User generated contributions and comments (including but not limited to reviews, profile pictures, comments, likes, favorites, votes) posted on the Website as it deems appropriate (whether in whole or in part) for its product(s), whether owned or affiliated. Razorpay is not liable to pay royalty to any User for re-publishing any content across any of its platforms.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            If you submit any material on the Website, you agree thereby to grant Razorpay the right to use, moderate, publish any such work worldwide for any of its product(s), whether owned or affiliated.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            You understand that by using the Services you may be exposed to Content that you may find offensive, indecent or objectionable and that, in this respect, your use of the Services will be at your own risk.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            You agree that you are solely responsible for (and that Razorpay has no responsibility to you or to any third party for) any Content that you create, transmit or display while using the Services and for the consequences of your actions (including any loss or damage which Razorpay may suffer) by doing so.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}></p>
                    </div>

                    <div className="home-center" style={{padding : "0 100px", color: "#000"}}>
                        <h2>Proprietary Rights </h2>
                        <div style={{border: "2px solid #28a745",
                            width: 50,}}>
                        </div>
                        <p style={{margin: "25px 0 0 0"}}>
                            You acknowledge and agree that Razorpay (or Razorpay's licensors) owns all legal and proprietary right, title and interest in and to the Services, including any intellectual property rights which subsist in the Services (whether those rights happen to be registered or not, and wherever in the world those rights may exist). You further acknowledge that the Services may contain information which is designated confidential by Razorpay and that you shall not disclose such information without Razorpay's prior written consent.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            Unless you have agreed otherwise in writing with Razorpay, nothing in the Terms of Use gives you a right to use any of Razorpay's trade names, trademarks, service marks, logos, domain names, and other distinctive brand features.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            Unless you have been expressly authorized to do so in writing by Razorpay, you agree that in using the Services, you will not use any trade mark, service mark, trade name, logo of any company or organization in a way that is likely or intended to cause confusion about the owner or authorized User of such marks, names or logos.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}></p>
                    </div>

                    <div className="home-center" style={{padding : "0 100px", color: "#000"}}>
                        <h2>Compliance with anti-bribery and anti-corruption laws</h2>
                        <div style={{border: "2px solid #28a745",
                            width: 50,}}>
                        </div>
                        <p style={{margin: "25px 0 0 0"}}>
                            User agrees and unconditionally undertakes to comply with all applicable commercial and public anti-bribery and anti-corruption laws (including but not limited to the provisions of Foreign Corrupt Practices Act, 1977, UK Bribery Act, 2010, Prevention of Corruption Act, 1988, Prevention of Money Laundering Act, 2002, Foreign Contribution (Regulation) Act, 2010, and any amendments thereto) which prohibit the User, its/ his/ her officials, representatives, agents or any other person associated with or acting on behalf of such User from giving, offering, promising to offer, receiving/ accepting or acting in any other manner so as to induce a payment, gift, hospitality or anything of value (either directly or indirectly) whether from within the country or from abroad to government officials, publics servants, regulatory bodies, judicial authorities, persons in positions of authority, elected or contesting electoral candidates, political parties or office bearers thereof or any other third party or person in order to obtain an improper commercial/business advantage of any kind. Government Officials include any government employee, candidate for public office, an employee of government - owned or government -- controlled companies, public international organisation and political parties. User also agrees not to give, offer, pay, promise or authorise to give or pay, directly or through any other person, anything of value to anybody for the purpose of inducing or rewarding any favourable action or influencing a decision in favour of the User. The User also unconditionally agrees and undertakes that it is compliant with and shall do/ undertake all acts necessary to continue to be compliant with the provisions of 'The Know Your Customer (KYC) / Anti-Money Laundering (AML) / Combating Financing of Terrorism (CFT) guidelines issued by the Department of Regulation', RBI, as amended from time to time.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}></p>
                    </div>

                    <div className="home-center" style={{padding : "0 100px", color: "#000"}}>
                        <h2>Compliance with mandates of the OFAC</h2>
                        <div style={{border: "2px solid #28a745",
                            width: 50,}}>
                        </div>
                        <p style={{margin: "25px 0 0 0"}}>
                            User undertakes that it shall, during the use of the Services, be in compliance with the mandates of OFAC and acknowledges that the User has not directly or indirectly lent, contributed or otherwise made available funds to any of its affiliates, joint venture partners or any other person or entity for the purpose of financing the activities of any person currently subject to the OFAC Specially Designated Nationals List (SDN), Consolidated Sanctions List and the Additional OFAC Sanctions List, as amended from time to time. For the purpose of this paragraph 7, OFAC means the Office of Foreign Assets Control constituted under the laws of the United States of America.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}></p>
                    </div>

                    <div className="home-center" style={{padding : "0 100px", color: "#000"}}>
                        <h2>Exclusion of Warranties</h2>
                        <div style={{border: "2px solid #28a745",
                            width: 50,}}>
                        </div>
                        <p style={{margin: "25px 0 0 0"}}>
                            Nothing in these Terms of Use, including this paragraph 8, shall exclude or limit your warranty or liability for losses unless they are excluded or limited by applicable law. Some jurisdictions do not allow the exclusion of certain warranties or conditions or the limitation or exclusion of liability for loss or damage caused by negligence, breach of contract or breach of implied terms, or incidental or consequential damages. Accordingly, only the limitations which are lawful in your jurisdiction will apply to you and our liability will be limited to the maximum extent permitted by law. Razorpay disclaims any implied warranty for Services and any use thereof.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            You expressly understand and agree that your use of the Services is at your sole risk and that the Services are provided on an "as is" and "as available" basis.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            In particular, Razorpay, its subsidiaries and affiliates, and its licensors do not represent or warrant to you that:
                        </p>
                        <ul style={{listStylePosition: "outside"}}>
                            <li style={{margin: "25px 0 0 0"}}>
                                The information or Contents provided on the Website are accurate, complete and updated;
                            </li>
                            <li style={{margin: "25px 0 0 0"}}>
                                Your use of the Services will meet your requirements;
                            </li>
                            <li style={{margin: "25px 0 0 0"}}>
                                Your use of the Services will be uninterrupted, timely, secure or free from error;
                            </li>
                            <li style={{margin: "25px 0 0 0"}}>
                                Any information obtained by you as a result of your use of the Services will be accurate or reliable; and
                            </li>
                            <li style={{margin: "25px 0 0 0"}}>
                                That defects in the operation or functionality of any software provided to you as part of the Services will be corrected.
                            </li>
                        </ul>
                        <p style={{margin: "25px 0 0 0"}}>
                            Any material downloaded or otherwise obtained through the use of the Services is done at your own discretion and risk and that you will be solely responsible for any damage to your computer system or other device or loss of data that results from the download of any such material.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            No advice or information, whether oral or written, obtained by you from Razorpay or from the use of Services shall create any warranty not expressly stated in these Terms of Use.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            Razorpay further expressly disclaims all warranties and conditions of any kind, whether express or implied, including, but not limited to the implied warranties and conditions of merchantability, fitness for a particular purpose and non-infringement.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}></p>
                    </div>

                    <div className="home-center" style={{padding : "0 100px", color: "#000"}}>
                        <h2>Representations and Warranties of User/ seller</h2>
                        <div style={{border: "2px solid #28a745",
                            width: 50,}}>
                        </div>
                        <p style={{margin: "25px 0 0 0"}}>The User/ seller hereby represents and warrants:</p>
                        <ul style={{listStylePosition: "outside"}}>
                            <li style={{margin: "25px 0 0 0"}}>
                                That User/ seller, in case of a natural person, is at least 18 years old with a conscious mind fit and proper to enter into this agreement (the "Policies"), is a resident of India with valid credentials and is an entity who is legally eligible to carry out or operate a business in India;
                            </li>
                            <li style={{margin: "25px 0 0 0"}}>
                                That the all the information and documents pertaining to his/ her identity and address proof, as submitted for the purpose of know your client (KYC) verification with Razorpay are true and genuine and are not fabricated or doctored in any way whatsoever;That the User shall hold and keep Razorpay, its promoters, directors, employees, officials, agents, subsidiaries, affiliates and representatives harmless from any liabilities arising in connection with any incidental or intentional discrepancy that is found to be there in the documents submitted by such User for the purpose of KYC formalities;
                            </li>
                            <li style={{margin: "25px 0 0 0"}}>
                                That any incidental or upfront liability arising in connection with User's/ seller's KYC formalities for the purpose of availing the services of Razorpay shall be the absolute responsibility and repercussion of the User and neither Razorpay nor any of its affiliates or office bearers shall be responsible in any way for any reason including for ascertaining the veracity of the KYC documents submitted by such User with Razorpay;
                            </li>
                            <li style={{margin: "25px 0 0 0"}}>
                                That User/ seller shall be solely responsible for understanding and complying with any and all applicable laws relevant to the User and their business, and any liability, whether pecuniary or otherwise, arising from any non-compliance of such applicable laws shall be at the sole cost and risk of such User;
                            </li>
                            <li style={{margin: "25px 0 0 0"}}>
                                That the User shall ensure that its IT systems and infrastructure are compliant with the mandates of PCI-DSS and Payment Application-Data Security Standard, as applicable to it;
                            </li>
                            <li style={{margin: "25px 0 0 0"}}>
                                That the User/ seller shall operate and conduct his/ her business as per declaration provided by such User to Razorpay at the time of onboarding of such User by Razorpay and shall promptly report any change/ deviation/ addition/ deletion in the scope of business activities of such User to Razorpay;
                            </li>
                            <li style={{margin: "25px 0 0 0"}}>
                                That all data, information, inventions, intellectual properties (including patents, trademarks, copyrights, design and trade secrets), know-how, new uses and processes, and any other intellectual property right, asset or form, including, but not limited to, analytical methods, procedures and techniques, research, procedure manuals, financial information, computer technical expertise, software for the purpose of availing of services of Razorpay and any updates or amendments thereto is and shall be the sole intellectual property of Razorpay and should in no way be construed to grant any rights and/ or title to the User in such intellectual property of Razorpay;
                            </li>
                            <li style={{margin: "25px 0 0 0"}}>
                                That User/ seller shall not store any customer card and such related date in any form or manner whatsoever on their websites/ servers;
                            </li>
                            <li style={{margin: "25px 0 0 0"}}>
                                That it shall be the exclusive responsibility of the User to ensure that the correct line of business of the User is declared under merchant category code (MCC) pertaining to the User and that Razorpay reserves the right to withhold settlements and/ or suspend transactions of the User in case of any mismatch or violation in its MCC declaration; and
                            </li>
                            <li style={{margin: "25px 0 0 0"}}>
                                That the User/ seller shall accord adequate and timely co-operation in allowing Razorpay or
                            </li>
                        </ul>
                        <p style={{margin: "25px 0 0 0"}}>it's appointed agencies or regulators to conduct audits, including for compliance with the Policies and provisions of applicable laws.</p>
                        <p style={{margin: "25px 0 0 0"}}></p>
                    </div>

                    <div className="home-center" style={{padding : "0 100px", color: "#000"}}>
                        <h2>Indemnity</h2>
                        <div style={{border: "2px solid #28a745",
                            width: 50,}}>
                        </div>
                        <p style={{margin: "25px 0 0 0"}}>
                            The User shall indemnify and hold Razorpay, its subsidiaries, affiliates, promoters, directors, employees, contractors, licensors and agents and any other related or third parties involved with Razorpay in any manner whatsoever, harmless from and against all losses arising from claims, demands, actions or other proceedings as a result of:
                        </p>
                        <ul style={{listStylePosition: "outside"}}>
                            <li style={{margin: "25px 0 0 0"}}>
                                Fraud, negligence and willful misconduct by the User in the use of the Services;
                            </li>
                            <li style={{margin: "25px 0 0 0"}}>
                                Violation of applicable laws in the use of the Services and/ or in the conduct of the business of the User, including but not limited to the legal provisions mentioned under paragraphs 6 and 7 hereinabove;
                            </li>
                            <li style={{margin: "25px 0 0 0"}}>
                                Breach of the User's confidentiality obligations under these Terms of Use;
                            </li>
                            <li style={{margin: "25px 0 0 0"}}>
                                Disputes raised by a User's customer in relation to a transaction where such dispute is not attributable to the Services;
                            </li>
                            <li style={{margin: "25px 0 0 0"}}>
                                Penalties, fines, charges, or any other actions as a result of breach or violation of any the User's representations and warranties; and
                            </li>
                            <li style={{margin: "25px 0 0 0"}}>
                                Fines, penalties and charges imposed by the Acquiring Bank, Card Payment Networks or any Governmental Authority on account of transactions on the User's website or platform that are in violation of applicable law.
                            </li>
                        </ul>
                        <p style={{margin: "25px 0 0 0"}}></p>
                    </div>


                    <div className="home-center" style={{padding : "0 100px", color: "#000"}}>
                        <h2>Limitation of Liability</h2>
                        <div style={{border: "2px solid #28a745",
                            width: 50,}}>
                        </div>
                        <p style={{margin: "25px 0 0 0"}}>
                            Subject to the overall provisions stated above, you expressly understand and agree that Razorpay, its subsidiaries, affiliates, promoters, directors, employees, agents and licensors shall not be liable to you for:
                        </p>
                        <ul style={{listStylePosition: "outside"}}>
                            <li style={{margin: "25px 0 0 0"}}>
                                Any direct, indirect, incidental, special, consequential, punitive or exemplary damages which may be incurred by you, however caused and under any theory of liability. This shall include, but not be limited to, any loss of profit (whether incurred directly or indirectly), any loss of goodwill or business reputation, any loss of data suffered, cost of procurement of substitute goods or Services, or other intangible loss;
                            </li>
                            <li style={{margin: "25px 0 0 0"}}>
                                Any loss or damage which may be incurred by you, including but not limited to loss or damage as a result of any reliance placed by you on the completeness, accuracy or existence of any advertising, or as a result of any relationship or transaction between you and any advertiser or sponsor whose advertisement appears on the Services;
                            </li>
                            <li style={{margin: "25px 0 0 0"}}>
                                The deletion of, corruption of, or failure to store, any content and other communications data maintained or transmitted by or through your use of the Services;
                            </li>
                            <li style={{margin: "25px 0 0 0"}}>
                                Your failure to provide Razorpay with accurate Registration Data; or
                            </li>
                            <li style={{margin: "25px 0 0 0"}}>
                                Your failure to keep your password or account details secure and confidential.
                            </li>
                        </ul>
                        <p style={{margin: "25px 0 0 0"}}>
                            The limitations on Razorpay's liability to you shall apply whether or not Razorpay has/ had been advised of or should have been aware of the possibility of any losses to you.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}></p>
                    </div>

                    <div className="home-center" style={{padding : "0 100px", color: "#000"}}>
                        <h2>Force Majeure</h2>
                        <div style={{border: "2px solid #28a745",
                            width: 50,}}>
                        </div>
                        <p style={{margin: "25px 0 0 0"}}>
                            Razorpay shall not be in breach of its obligation hereunder if it is delayed in the performance of, or is unable to perform (whether partially or fully) its obligations (provide the Services) as a result of the occurrence of a Force Majeure Event (defined below).
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            Force Majeure Event means any event, whatever be the origin, not within the reasonable control of Razorpay, which Razorpay is unable to prevent, avoid or remove or circumvent by the use of reasonable diligence. Force Majeure event shall include, but shall not be limited to, acts of god, acts, orders, directions of governmental/ regulatory/ judicial/ quasi-judicial/ law enforcement authorities/ agencies which hinders Razorpay from performing its obligations under any agreement, including these Terms of Use, with you, war, hostilities, invasion, armed conflict, act of foreign enemy, embargoes, riot, insurrection, labour stoppages, outages and downtimes systems failures experienced by a facility provider, revolution or usurped power, acts of terrorism, sabotage, nuclear explosion, earthquake, pandemic, epidemic, hacking or man in the middle attack or similar attacks/ intrusions, fires, typhoons, storms and other natural catastrophes.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            Any payment obligations of Razorpay, in case of a Force Majeure event, shall be limited by and be subject to the fulfillment of the payment obligations of the partners banks/ financial institutions, counterparties and any other parties involved in or intrinsically linked to the provision of the Services of Razorpay.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}></p>
                    </div>

                    <div className="home-center" style={{padding : "0 100px", color: "#000"}}>
                        <h2>Confidentiality</h2>
                        <div style={{border: "2px solid #28a745",
                            width: 50,}}>
                        </div>
                        <p style={{margin: "25px 0 0 0"}}>
                            The User may receive or have access to certain confidential and proprietary information, including without limitation, information belonging and/or relating to Razorpay and its affiliates, marketing prospects, contractors, officers, directors or shareholders, personal data of customers of the User, financial and operational information, billing records, business model and reports, computer systems and modules, secure websites, reporting systems, marketing strategies, operational plans, proprietary systems and procedures, trade secrets and other similar proprietary information, including technical "know-how", methods of operation, business methodologies, software, software and technology architecture, networks, any other information not generally available to the public, and any items in any form in writing or oral, clearly identified as confidential ("CONFIDENTIAL INFORMATION").
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            The User shall keep Confidential Information in confidence. The User shall use commercial, reasonable and necessary safety measures and steps to maintain the confidentiality and secrecy of the Confidential Information from public disclosure, and the User shall at all times maintain appropriate measures to protect the security and integrity of the Confidential Information. The User shall not, without Razorpay's prior written consent, divulge any of the Confidential Information to any third party other than the User's officers, employees, agents or representatives who have a need to know for the purposes of these Terms of Use. The User shall take all reasonable steps to ensure that all of its directors, managers, officers, employees, agents, independent contractors or other representatives comply with this paragraph 12 whenever they are in possession of Confidential Information as part of this Agreement. The User shall use the Confidential Information solely in furtherance of and in connection with the Services contemplated under these Terms of Use. The User further agrees that the Confidential Information will not be used by him/ her and his/ her representatives, in any way detrimental to the interests of Razorpay.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            The User hereby unconditionally and irrevocably agrees and undertakes to take all necessary measures to ensure that the User's website or any other computer system that is being used to effect Transactions by the usage of Services, do not store/ save any customer card or any other such related data. You further undertake that you shall be responsible for ensuring complete and absolutely privacy, anonymity and security of all customer data flowing through your systems during the usage of the Services by you.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            Exceptions: The aforesaid confidentiality obligations shall impose no obligation on the User with respect to any portion of Confidential Information which:
                        </p>
                        <ul style={{listStylePosition: "outside"}}>
                            <li style={{margin: "25px 0 0 0"}}>
                                Was at the time received or which thereafter becomes, through no act or failure on the part of the User, generally known or available to the public;
                            </li>
                            <li style={{margin: "25px 0 0 0"}}>
                                Was at the time of receipt, known to the User as evidenced by written documentation then rightfully in the possession of the User or Razorpay;
                            </li>
                            <li style={{margin: "25px 0 0 0"}}>
                                Was already acquired by the User from a third party who does not thereby breach an obligation of confidentiality to Razorpay and who discloses it to the User in good faith;
                            </li>
                            <li style={{margin: "25px 0 0 0"}}>
                                Was developed by the User without use of the Razorpay's Confidential Information in such development; or
                            </li>
                            <li style={{margin: "25px 0 0 0"}}>
                                Has been disclosed pursuant to the requirements of applicable law, any governmental/ regulatory authority, judicial/ quasi-judicial authority provided however, that Razorpay shall have been given a reasonable opportunity to resist disclosure and/or to obtain a suitable protective order.
                            </li>
                        </ul>
                        <p style={{margin: "25px 0 0 0"}}>
                            The User shall notify Razorpay immediately upon discovery of any unauthorized use or disclosure of Confidential Information or any other breach of this paragraph 12. The User will cooperate with Razorpay in every reasonable way to help Razorpay regain possession of such Confidential Information and prevent its further unauthorized use.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            Remedies: Parties acknowledge that irreparable damage may occur on breach of the terms and provisions set out in this paragraph 12. Accordingly, if the User breaches or threatens to breach any of the provisions set out in this paragraph 12, then Razorpay shall be entitled, without prejudice, to seek all the rights and remedies available to it under applicable law, including a temporary restraining order and an injunction restraining any breach of the provisions set out in this paragraph 12. Such remedies shall not be deemed to be exclusive but shall be in addition to all other remedies available under applicable law or in equity.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}></p>
                    </div>

                    <div className="home-center" style={{padding : "0 100px", color: "#000"}}>
                        <h2>Fraudulent Transactions</h2>
                        <div style={{border: "2px solid #28a745",
                            width: 50,}}>
                        </div>
                        <p style={{margin: "25px 0 0 0"}}>
                            Subject to paragraphs 14.2 and 14.3 below, if Razorpay is intimated, by the Acquiring Bank or a Card Payment Network, that a customer has reported an unauthorised debit of the customer's payment instrument ("FRAUDULENT TRANSACTION"), then Razorpay shall be entitled to suspend the settlement of the amount associated with the Fraudulent Transaction during the pendency of inquiries, investigations and resolution thereof by the Acquiring Bank or the Card Payment Network.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            Subject to paragraph 14.3 below, if the Fraudulent Transaction results in a Chargeback, then the Chargeback shall be resolved in accordance with the provisions relating to Chargeback as set out under these Terms of Use.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            If the amount in respect of a Fraudulent Transaction has already been settled to the User pursuant to these Terms of Use, any dispute arising in relation to the said Fraudulent Transaction, following settlement, shall be resolved in accordance with the RBI's notification RBI/DPSS/2019-20/174 DPSS.CO.PD.No.1810/02.14.008/2019-20, dated March 17, 2020, DBR.No.Leg.BC.78/09.07.005/2017-18, dated July 6, 2017 read with RBI's notification DBOD. LEG. BC 86/09.07.007/2001-02 dated April 8, 2002 and other notifications, circulars and guidelines issued by the RBI in this regard from time to time.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}></p>
                    </div>

                    <div className="home-center" style={{padding : "0 100px", color: "#000"}}>
                        <h2>Advertising</h2>
                        <div style={{border: "2px solid #28a745",
                            width: 50,}}>
                        </div>
                        <p style={{margin: "25px 0 0 0"}}>
                            Some of the Services are supported by advertising revenue and may display advertisements and promotions. These advertisements may be targeted to the content of information stored on the Services, queries made through the Services or other information.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            The manner, mode and extent of advertising by Razorpay on the Services are subject to change without any specific notice to you.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            In consideration for Razorpay granting you access to and use of the Services, you agree that Razorpay may place such advertising on the Services.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}></p>
                    </div>

                    <div className="home-center" style={{padding : "0 100px", color: "#000"}}>
                        <h2>Authorisation</h2>
                        <div style={{border: "2px solid #28a745",
                            width: 50,}}>
                        </div>
                        <p style={{margin: "25px 0 0 0"}}>
                            By accepting these Terms of Use, you authorise us to hold, receive, disburse and settle funds on your behalf. Your authorisation permits us to generate an electronic funds transfer between the payment system providers and the escrow account to process each payment transaction that you authorise.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            Thereafter, you authorise us to transfer the payments received from your buyers to the bank account designated by you for this purpose at the time of registration ("ACQUIRING BANK"). Your authorisation will remain in full force and effect until your Razorpay account is closed or terminated.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}></p>
                    </div>

                    <div className="home-center" style={{padding : "0 100px", color: "#000"}}>
                        <h2>Card Association Rules</h2>
                        <div style={{border: "2px solid #28a745",
                            width: 50,}}>
                        </div>
                        <p style={{margin: "25px 0 0 0"}}>
                            "CARD PAYMENT NETWORK RULES" refer to the written rules, regulations, releases, guidelines, processes, interpretations and other requirements (whether contractual or otherwise) imposed and adopted by the Card Payment Networks. These Card Payment Networks have infrastructure and processes to enable transaction authorisation. The Card Payment Networks require you to comply with all applicable guidelines, rules, and regulations formulated by them.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            The Card Payment Networks reserve the right to amend their guidelines, rules and regulations. We may be required to amend modify or change these Terms of Use pursuant to amendments to the Card Payment Network Rules and such amendments, if any, shall be deemed to be binding on the Users with immediate effect.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            You agree to fully comply with all programs, guidelines, requirements that may be published and/ or mandated by the Card Payment Networks. Notwithstanding our assistance in understanding the Card Payment Network Rules, you expressly acknowledge and agree that you are assuming the risk of compliance with all provisions of the Card Payment Network Rules, regardless of whether you are aware of or have access to those provisions. MasterCard, Visa and American Express make excerpts of their respective rules available on their internet sites.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            In the event that your non-compliance of Card Payment Network Rules, results in any fines, penalties or other amounts being levied on or demanded of us by a Card Payment Network, then without prejudice to our other rights hereunder, you shall forthwith reimburse us in an amount equal to the fines, penalties or other amount so levied or demanded or spent by us in any manner in relation to such fines, penalties and levies. If you fail to comply with your obligations towards the Card Payment Networks, Razorpay may suspend settlement or suspend/ terminate the Services forthwith.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}></p>
                    </div>

                    <div className="home-center" style={{padding : "0 100px", color: "#000"}}>
                        <h2>Settlements</h2>
                        <div style={{border: "2px solid #28a745",
                            width: 50,}}>
                        </div>
                        <p style={{margin: "25px 0 0 0"}}>
                            In consideration of the Services rendered by us, you shall pay Razorpay a fee ("FEE"). Razorpay reserves the right to revise the Fee periodically and will intimate you of any such change within reasonable time. Razorpay reserves the right to levy additional fees on transactions undertaken through corporate cards. This additional fee shall at least be 1% (one percent) of transaction amount, over and above applicable credit card fees. On receipt of the payments in the nodal account, we will endeavour to instruct the nodal bank to transmit the payments payable to the seller, after deducting our Fee, from the nodal account to the seller's designated bank account, within 3 (three) bank working days (or such other period as may be prescribed by the Reserve Bank of India from time to time) from completion of transaction. Subject to any other provisions of these Terms of Use and completion of transaction, the seller acknowledges that we will settle the payments only upon actual receipt of payments in the nodal account and upon reconciliation of the payments by the Acquiring Banks, our payment gateway and the nodal bank. The seller will bear and be responsible and liable for the payment of all relevant taxes in relation to the payments made under these Terms of Use.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            Sellers receive the amount (minus Razorpay's Fee) in their bank account within T+3 bank working days where T is defined as the date of intimation of the completion of the transaction. Razorpay shall be entitled to charge on the Fee, taxes applicable from time to time ("APPLICABLE TAXES"). It is agreed that any statutory variations in Applicable Taxes during the subsistence of this Agreement shall be borne by the User.Monthly invoices shall be raised by us in respect of the Fees charged for transactions processed during such month. Any reasonable dispute in respect of an amount (or a portion thereof) mentioned in an invoice must be communicated by the User via notice ("INVOICE DISPUTE NOTICE") within a reasonable period of time but no later than thirty (30) calendar days from the date of the invoice. Razorpay shall use good faith efforts to reconcile any reasonably disputed amounts within reasonable time from the receipt of the Invoice Dispute Notice.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            In respect of invoices received by the Client, it is agreed that if the User pays over applicable taxes under the Indian Income Tax laws and furnishes to us the TRACES certificate in respect of such taxes paid, then we shall reimburse to the User, on a quarterly basis, the amount in respect of such taxes paid.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            Once a payment is authenticated by payment service providers, money shall be moved to the escrow account and the first settlement shall be initiated only after all required documents (in hard copies) are received by Razorpay.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            All risks associated with the delivery of the goods or service will solely be that of the seller and not of Razorpay. Also, all disputes regarding quality, merchantability, non-delivery, delay in delivery or otherwise will be directly between the seller and the buyer without making Razorpay and/ or the payment service providers, a party to such disputes.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            Further, Razorpay also reserves the right to close, suspend, limit or put on hold the User's access to the account with Razorpay and/ or the funds available therein, including settlements pertaining to the User under inter alia the following scenarios:
                        </p>
                        <ul style={{listStylePosition: "outside"}}>
                            <li style={{margin: "25px 0 0 0"}}>
                                If such User's KYC credentials are found to be ingenuine or fake;
                            </li>
                            <li style={{margin: "25px 0 0 0"}}>
                                If the User makes incorrect or untrue disclosure of the nature of its business, resulting in a merchant category code violation;
                            </li>
                            <li style={{margin: "25px 0 0 0"}}>
                                For violation of any of the provisions of these "Terms of Use";
                            </li>
                            <li style={{margin: "25px 0 0 0"}}>
                                For violation of any of the provisions of any other agreement that the User has entered into or might enter into with Razorpay; and
                            </li>
                            <li style={{margin: "25px 0 0 0"}}>
                                For violation of any of the applicable laws by such User.
                            </li>
                        </ul>
                        <p style={{margin: "25px 0 0 0"}}>
                            Such right to close, suspend, limit or put on hold the User's access to the account with Razorpay shall continue till such time that such User submits genuine KYC documents or credentials to the satisfaction of the relevant authorities as per the extant rules, regulations or guidelines with regard to KYC, as well as to the satisfaction of Razorpay without prejudice to any other legal remedy that Razorpay is entitled to prefer as per applicable law.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}></p>
                    </div>

                    <div className="home-center" style={{padding : "0 100px", color: "#000"}}>
                        <h2>Prohibited Services</h2>
                        <div style={{border: "2px solid #28a745",
                            width: 50,}}>
                        </div>
                        <p style={{margin: "25px 0 0 0"}}>
                            You agree that you will not accept payments in connection with businesses, business activities or business practices, including but limited to the following:
                        </p>
                        <ul style={{listStylePosition: "outside"}}>
                            <li style={{margin: "25px 0 0 0"}}>
                                Adult goods and services which include pornography and other sexually suggestive materials (including literature, imagery and other media), escort or prostitution services, website access and/or website memberships of pornography or illegal sites;
                            </li>
                            <li style={{margin: "25px 0 0 0"}}>
                                Alcohol which includes alcohol or alcoholic beverages such as beer, liquor, wine, or champagne etc.;
                            </li>
                            <li style={{margin: "25px 0 0 0"}}>
                                Body parts which include organs or other body parts;
                            </li>
                            <li style={{margin: "25px 0 0 0"}}>
                                Bulk marketing tools which include email lists, software, or other products enabling unsolicited email messages (spam);
                            </li>
                            <li style={{margin: "25px 0 0 0"}}>
                                Cable descramblers and black boxes which include devices intended to obtain cable and satellite signals for free;
                            </li>
                            <li style={{margin: "25px 0 0 0"}}>
                                Child pornography which includes pornographic materials involving minors;
                            </li>
                            <li style={{margin: "25px 0 0 0"}}>
                                Copyright unlocking devices which include mod chips or other devices designed to circumvent copyright protection;
                            </li>
                            <li style={{margin: "25px 0 0 0"}}>
                                Copyrighted media which includes unauthorized copies of books, music, movies, and other licensed or protected materials;
                            </li>
                            <li style={{margin: "25px 0 0 0"}}>
                                Copyrighted software which includes unauthorized copies of software, video games and other licensed or protected materials, including OEM or bundled software;
                            </li>
                             <ul style={{listStylePosition: "outside"}}>
                                 <li style={{margin: "25px 0 0 0"}}>
                                     Counterfeit and unauthorized goods which include replicas or imitations of designer goods, items without a celebrity endorsement that would normally require such an association, fake autographs, counterfeit stamps, and other potentially unauthorized goods;
                                 </li>
                                 <li style={{margin: "25px 0 0 0"}}>
                                     Drugs and drug paraphernalia which include illegal drugs and drug accessories, including herbal drugs like marijuana, salvia and magic mushrooms etc.;
                                 </li>
                                 <li style={{margin: "25px 0 0 0"}}>
                                     Drug test circumvention aids which include drug cleansing shakes, urine test additives, and related items;
                                 </li>
                                 <li style={{margin: "25px 0 0 0"}}>
                                     Endangered species which include plants, animals or other organisms (including product derivatives) in danger of extinction;
                                 </li>
                                 <li style={{margin: "25px 0 0 0"}}>
                                     Gaming/ gambling which include lottery tickets, sports bets, memberships/ enrolment in online gambling sites, and related content;
                                 </li>
                                 <li style={{margin: "25px 0 0 0"}}>
                                     Government IDs or documents which include fake IDs, passports, diplomas, and noble titles;
                                 </li>
                                 <li style={{margin: "25px 0 0 0"}}>
                                     Hacking and cracking materials which include manuals, how-to guides, information, or equipment enabling illegal access to software, servers, website, or other protected property;
                                 </li>
                                 <li style={{margin: "25px 0 0 0"}}>
                                     Illegal goods which include materials, products, or information promoting illegal goods or enabling illegal acts;
                                 </li>
                                 <li style={{margin: "25px 0 0 0"}}>
                                     Miracle cures which include unsubstantiated cures, remedies or other items marketed as quick health fixes;
                                 </li>
                                 <li style={{margin: "25px 0 0 0"}}>
                                     Offensive goods which include literature, products or other materials that inter alia :
                                 </li>
                                  <ul style={{listStylePosition: "outside"}}>
                            <li style={{margin: "25px 0 0 0"}}></li>
                                      <li style={{margin: "25px 0 0 0"}}>
                                          Defame or slander any person or groups of people based on race, ethnicity, national origin, religion, sex, or other factors;
                                      </li>
                                      <li style={{margin: "25px 0 0 0"}}>
                                          Encourage or incite violent acts; or
                                      </li>
                                      <li style={{margin: "25px 0 0 0"}}>Promote intolerance or hatred.</li>
                                      <li style={{margin: "25px 0 0 0"}}>Offensive goods which include crime scene photos or items, such as personal belongings, associated with criminals;</li>
                                      <li style={{margin: "25px 0 0 0"}}>Pyrotechnic devices, combustibles, corrosives and hazardous materials which include explosives and related goods, toxic, flammable, and radioactive materials and substances;
                                      </li>
                                      <li style={{margin: "25px 0 0 0"}}>
                                          Regulated goods which include air bags, batteries containing mercury, freon or similar substances/ refrigerants, chemical/ industrial solvents, government uniforms, car titles, license plates, police badges and law enforcement equipment, lock-picking devices, pesticides, postage meters, recalled items, slot machines, surveillance equipment, goods regulated by government or other agency specifications;
                                      </li>
                                      <li style={{margin: "25px 0 0 0"}}>
                                          Securities which include government and/ or public sector unit bonds, stocks, debentures or related financial products;
                                      </li>
                                      <li style={{margin: "25px 0 0 0"}}>
                                          Tobacco and cigarettes which include cigarettes, cigars, chewing tobacco, and related products;
                                      </li>
                                      <li style={{margin: "25px 0 0 0"}}>
                                          Traffic devices which include radar detectors/ jammers, license plate covers, traffic signal changers, and related products;
                                      </li>
                                      <li style={{margin: "25px 0 0 0"}}>
                                          Weapons which include firearms, ammunition, knives, brass knuckles, gun parts, gun powder or explosive mixtures and other armaments;
                                      </li>
                                      <li style={{margin: "25px 0 0 0"}}>
                                          Wholesale currency which includes discounted currencies or currency exchanges;
                                      </li>
                                      <li style={{margin: "25px 0 0 0"}}>
                                          Live animals or hides/ skins/ teeth, nails and other parts etc. of animals;
                                      </li>
                                      <li style={{margin: "25px 0 0 0"}}>
                                          Multi-level marketing collection fees;
                                      </li>
                                      <li style={{margin: "25px 0 0 0"}}>
                                          Matrix sites or sites using a matrix scheme approach;
                                      </li>
                                      <li style={{margin: "25px 0 0 0"}}>
                                          Work-at-home approach and/ or work-at-home information;
                                      </li>
                                      <li style={{margin: "25px 0 0 0"}}>Drop-shipped merchandise;</li>
                                      <li style={{margin: "25px 0 0 0"}}>
                                          Any product or service which is not in compliance with all applicable laws and regulations whether federal, state, local or international, including the laws of India;
                                      </li>
                                      <li style={{margin: "25px 0 0 0"}}>The User providing services that have the potential of casting the payment gateway facilitators in a poor light and/ or that may be prone to buy and deny attitude of the cardholders when billed (e.g. adult material/ mature content/ escort services/ friend finders) and thus leading to chargeback and fraud losses;
                                      </li>
                                      <li style={{margin: "25px 0 0 0"}}>
                                          Businesses or website that operate within the scope of laws which are not absolutely clear or are ambiguous in nature (e.g. web-based telephony, website supplying medicines or controlled substances, website that promise online match-making);
                                      </li>
                                      <li style={{margin: "25px 0 0 0"}}>
                                          Businesses out rightly banned by law (e.g. betting & gambling/ publications or content that is likely to be interpreted by the authorities as leading to moral turpitude or decadence or incite caste/ communal tensions, lotteries/ sweepstakes & games of chance;
                                      </li>
                                      <li style={{margin: "25px 0 0 0"}}>
                                          Businesses dealing in intangible goods/ services (e.g. software download/ health/ beauty Products), and involved in pyramid marketing schemes or get-rich-quick schemes;
                                      </li>
                                      <li style={{margin: "25px 0 0 0"}}>
                                          Any other product or service, which in the sole opinion of either the Acquiring Bank, is detrimental to the image and interests of either of them/ both of them, as communicated by either of them/ both of them to the User from time to time. This shall be without prejudice to any other terms & conditions mentioned in these Terms of Use;
                                      </li>
                                      <li style={{margin: "25px 0 0 0"}}>Mailing lists;</li>
                                      <li style={{margin: "25px 0 0 0"}}>
                                          Virtual currency, cryptocurrency, prohibited investments for commercial gain or credits that can be monetized, re-sold or converted to physical or digital goods or services or otherwise exit the virtual world;
                                      </li>
                                      <li style={{margin: "25px 0 0 0"}}>
                                          Money laundering services;
                                      </li>
                                      <li style={{margin: "25px 0 0 0"}}>Database providers (for tele-callers);</li>
                                      <li style={{margin: "25px 0 0 0"}}>Bidding/ auction houses;</li>
                                      <li style={{margin: "25px 0 0 0"}}>Activities prohibited by the Telecom Regulatory Authority of India; and</li>
                                      <li style={{margin: "25px 0 0 0"}}>Any other activities prohibited by applicable law.</li>
                        </ul>
                        </ul>
                        </ul>
                        <p style={{margin: "25px 0 0 0"}}>
                            The above list is subject to additions/ amendments (basis changes/ amendments to applicable laws) by Razorpay without prior intimation to you.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}></p>
                    </div>

                    <div className="home-center" style={{padding : "0 100px", color: "#000"}}>
                        <h2>Transaction Disputes</h2>
                        <div style={{border: "2px solid #28a745",
                            width: 50,}}>
                        </div>
                        <p style={{margin: "25px 0 0 0"}}>
                            Transactions may be disputed anytime within up to 120 (one hundred twenty) days, from the date of transaction by a buyer, as per the Card Payment Network Rules. Disputes resolved in favour of a buyer may result in reversal of payment to such buyer ("CHARGEBACK"). In the event of rejection/ suspension of payments to the seller, chargebacks, refunds and/or any other dispute relating to the transactions contemplated under these Terms of Use ("DISPUTED TRANSACTION"), on any grounds whatsoever, we will forthwith notify the seller of the same.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            On such notification the seller will conduct an internal review of such matter and will, within 5 (five) working days from receipt of notification, respond to us in writing either:
                        </p>
                        <ul style={{listStylePosition: "outside"}}>
                            <li style={{margin: "25px 0 0 0"}}>
                                Requesting us to refund Refund Request the payment received by the seller in respect of such Disputed Transaction Refund Monies; or
                            </li>
                            <li style={{margin: "25px 0 0 0"}}>
                                Providing us with a statement explaining how the Disputed Transaction is not warranted, together with all documentary evidence in support of contesting such Disputed Transaction.
                            </li>
                        </ul>
                        <p style={{margin: "25px 0 0 0"}}>
                            All refunds shall be made to the original method of payment. In the event that the seller provides a Refund Request to us or fails to contest such Disputed Transaction within the aforesaid 5 (five) working days or contests Disputed Transaction without providing supporting documentation to us, payment service providers, Card Payment Network and/ or issuing institution's satisfaction, we will be entitled to recover the Refund Monies from credits subsequently made to the escrow account with respect to payments made by the seller's buyers.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            In the event that we are unable to recover the Refund Monies as aforesaid, due to the amounts credited to the escrow account being lower than the Refund Monies, Razorpay shall be entitled to recover such Refund Monies (or any part thereof) from the User by (i) raising a debit note in respect of such monies; and/ or (ii) setting-off the remaining Refund Monies against the future payables to the seller and refund the same to the respective buyers. The seller will be liable to make payment of the Refund Monies or part thereof which has not been recovered by us forthwith. It is hereby agreed and acknowledged by the parties that the Fees charged by us in respect of the Disputed Transaction will not be refunded or repaid by us to the seller, buyer or any other person. Further, the Chargeback will be provided within 1 (one) week of the transaction and maximum amount of the Chargeback payable by Razorpay to the buyer will be the value of the transaction only.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}></p>
                    </div>

                    <div className="home-center" style={{padding : "0 100px", color: "#000"}}>
                        <h2>Technical Issues & Delivery Policy</h2>
                        <div style={{border: "2px solid #28a745",
                            width: 50,}}>
                        </div>
                        <p style={{margin: "25px 0 0 0"}}>
                            In case of any technical issues, please raise a support ticket from your service dashboard or by emailing us at contact@razorpay.comto let us know of the same. We endeavour to deliver Service to you within 15 (fifteen) working days of bank approval, failing which you can terminate a transaction related to Service at any time and get a full refund.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}></p>
                    </div>

                    <div className="home-center" style={{padding : "0 100px", color: "#000"}}>
                        <h2>Governing Law, Settlement of Disputes and Jurisdiction</h2>
                        <div style={{border: "2px solid #28a745",
                            width: 50,}}>
                        </div>
                        <p style={{margin: "25px 0 0 0"}}>
                            These Terms of Use and any dispute or claim arising under it will be governed by and construed in accordance with the laws of India. The Users agree that any legal action or proceedings arising out of these Terms of Use or in connection with these Terms of Use may be brought EXCLUSIVELY in the competent courts/ tribunals having jurisdiction in Bengaluru, India and the Users irrevocably submit themselves to the jurisdiction of such courts/ tribunals.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}></p>
                    </div>
                    <div className="home-center" style={{padding : "0 100px", color: "#000"}}>
                        <h2>Privacy</h2>
                        <div style={{border: "2px solid #28a745",
                            width: 50,}}>
                        </div>
                        <p style={{margin: "25px 0 0 0"}}>
                            YOUR PRIVACY IS EXTREMELY IMPORTANT TO US. UPON ACCEPTANCE OF THESE TERMS OF USE YOU CONFIRM THAT YOU HAVE READ, UNDERSTOOD AND UNEQUIVOCALLY ACCEPTED OUR POLICIES, INCLUDING THE PROVISIONS OF OUR PRIVACY POLICY.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}></p>
                    </div>

                    <div className="home-center" style={{padding : "0 100px", color: "#000"}}>
                        <h2>Complaints and Regulatory and Customer Grievance Redressal**</h2>
                        <div style={{border: "2px solid #28a745",
                            width: 50,}}>
                        </div>
                        <p style={{margin: "25px 0 0 0"}}>
                            <strong style={{fontWeight: 400}}>ANY COMPLAINTS OR CONCERNS WITH REGARDS TO CONTENT OF THIS WEBSITE OR COMMENT OR BREACH OF THESE TERMS OF USE OR ANY INTELLECTUAL PROPERTY OF ANY USER, INSTANCES OF CUSTOMER GRIEVANCES, REGULATORY QUERIES AND CLARIFICATIONS SHALL BE INFORMED/ COMMUNICATED TO THE GRIEVANCE CUM NODAL OFFICER AT THE CO-ORDINATES MENTIONED BELOW IN WRITING OR BY WAY OF RAISING A GRIEVANCE TICKET THROUGH THE HYPERLINK MENTIONED BELOW:</strong>
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            <strong style={{fontWeight: 400}}>GRIEVANCE CUM NODAL OFFICER</strong>
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            <strong style={{fontWeight: 400}}>MR. RAJA MOHAMMED</strong>
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            <strong style={{fontWeight: 400}}>RAZORPAY SOFTWARE PRIVATE LIMITED</strong>
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            <strong style={{fontWeight: 400}}>ADDRESS: NO. 22, 1ST FLOOR, SJR CYBER, LASKAR-HOSUR ROAD, ADUGODI, BANGALORE- 560030</strong>
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            <strong style={{fontWeight: 400}}>PH: 080-46669555</strong>
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            <strong style={{fontWeight: 400}}>E-MAIL:</strong>  <a href="#">grievances@razorpay.com</a>
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            <strong style={{fontWeight: 400}}>GRIEVANCES PORTAL:</strong><a href="#"> https://razorpay.com/grievances/</a>
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            <strong style={{fontWeight: 400}}>SCHEDULE I - PART A</strong>
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            <strong style={{fontWeight: 400}}>PAYMENT GATEWAY</strong>
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            Razorpay's "Payment Gateway" product offers the Client a secure payment solution for their Platform and mobile app. It enables the Client to receive payments from customers using various payment methods during checkout. Client can access real-time data and insights on money flow to take informed business decisions.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            <strong style={{fontWeight: 400}}>SCHEDULE I - PART B</strong>
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            <strong style={{fontWeight: 400}}>SUBSCRIPTIONS</strong>
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>Razorpay's "Subscriptions" product provides the Client the platform to create and manage subscription plans for their customers with automated recurring transactions.</p>
                        <p style={{margin: "25px 0 0 0"}}>With this product the Client can:</p>
                        <ul style={{listStylePosition: "outside"}}>
                            <li style={{margin: "25px 0 0 0"}}>
                                Create multiple subscription plans for customers;
                            </li>
                            <li style={{margin: "25px 0 0 0"}}>
                                Automatically charge customers based on a billing cycle that they control;
                            </li>
                            <li style={{margin: "25px 0 0 0"}}>
                                Get instant alerts on payment activity as well as the status of subscriptions.
                            </li>
                        </ul>
                        <p style={{margin: "25px 0 0 0"}}>
                            <strong style={{fontWeight: 400}}>SCHEDULE I - PART C</strong>
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            <strong style={{fontWeight: 400}}> PAYMENT LINKS</strong>
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            With Razorpay's "Payment Links" product, the Client is empowered to collect payments from customers through securely generated web links. These links are shareable through SMS, email, WhatsApp and other social media.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            <strong style={{fontWeight: 400}}>SCHEDULE I - PART D</strong>
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            <strong style={{fontWeight: 400}}>PAYMENT PAGES</strong>
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            Razorpay's "Payment Pages" product lets the Client instantly build a fully-customizable page through which customers can make payments. Clients can easily create a payment page from the Dashboard and tie it to their site or app without any development effort.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            Clients can choose one of the templates or create from scratch. They can customize the payment form by adding logo and applying brand colors. Also, they can format description text, add media and enable sharing options. Client can add a pay button on the Platform and embed the payment page there.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            <strong style={{fontWeight: 400}}>SCHEDULE I - PART E</strong>
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            <strong style={{fontWeight: 400}}>INVOICES</strong>
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            Creating and sending GST-compliant invoices is now made simple by Razorpay's "Invoices" product. Client can generate and issue invoices to customers through email and SMS as a link, and receive payments.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            <strong style={{fontWeight: 400}}>SCHEDULE I - PART F</strong>
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            <strong style={{fontWeight: 400}}>ROUTE</strong>
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            <strong style={{fontWeight: 400}}>[INTRODUCTION]</strong>
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            Razorpay's "Route" product eases out the payment complexity that inherently arises while working with multiple vendors or accounts. It helps the Client to split payments between various third parties, sellers or bank accounts and manage settlements, refunds, and reconciliations singularly.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            <strong style={{fontWeight: 400}}>SCHEDULE I - PART G</strong>
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            <strong style={{fontWeight: 400}}>SMART COLLECT</strong>
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            Providing all customers the same bank account complicates the reconciliation process for businesses. Razorpay's smart collect product eliminates this by creating a new virtual account for every customer that the Client needs to receive payment from.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            Razorpay's "Smart Collect" product allows the Client to accept payments of large sums (via NEFT, RTGS and IMPS) through a virtual account. An account created by Razorpay, virtual account is linked to the Client's bank account.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            <strong style={{fontWeight: 400}}>SCHEDULE I - PART H</strong>
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            <strong style={{fontWeight: 400}}>RAZORPAYX</strong>
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            RazorpayX is a business banking platform that helps companies manage their finances and make timely payouts using an intuitive dashboard or powerful API. RazorpayX allows merchants add funds in multiple ways and make payouts to customers, vendors, or partners.
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            For RazorpayX current account terms and conditions, <a href="#">click here</a>
                        </p>
                        <p style={{margin: "25px 0 0 0"}}>
                            <strong style={{fontWeight: 400}}>I HEREBY CONFIRM THAT I HAVE READ THESE TERMS OF USE AND ACCEPT THEM.</strong>
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