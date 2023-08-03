import React from "react";
import BreadCrumb from "../Components/BreadCrumb";
import Meta from "../Components/Meta";
import Container from "../Components/Container";

const PrivacyPolicy = () => {
    return (
        <>
            <Meta title={"Privacy Policy"} />
            <BreadCrumb title="Privacy Policy" />
            <Container class1="policy-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-12">
                        <div className="policy">

                            <h2 className="privacy">Privacy Policy</h2><br/>

                            The AmazeKart application and website (“Platform”) are made available to you by PRIY4NSHU  
                            Private Limited and/or its affiliates (hereinafter may be referred to as the “Company”, “we”, “us”, 
                            and “our”) respect your privacy and is committed to protecting it through its compliance with its 
                            privacy policy.<br/>

                            This policy may change from time to time, your continued use of the Company's Services
                            after it makes any change is deemed to be acceptance of those changes, so please check
                            the policy periodically for updates.<br /><br />

                            <h5>1. Applicability of the Policy</h5>

                            1.1. This policy applies only to the information the Company collects through its Services,
                            in email, text and other electronic communications sent through or in connection with its Services.<br />
                            1.2. This Policy does not apply to the information that you provide to, or that is
                            collected by, any third-party, that you use in connection with its services. The Company
                            encourages you to consult directly with such third parties about their privacy practices.<br /><br />

                            <h5>2. Collection of the information</h5>

                            2.1. Some of our Services may be used without revealing any personal information, and for
                            other Services, personal information is required. We may also collect ‘Non-Personal Information’
                            (i.e., information that cannot be used to identify you). Non-Personal Information includes
                            information like the web pages that you have viewed. In order to access certain features and
                            benefits on our Services, you may need to submit ‘Personally Identifiable Information’ i.e.,
                            information that can be used to identify you.<br />
                            2.2. The Company collects several types of information from and about users of our Services,
                            including: (i) Your Personally Identifiable Information- Personally Identifiable Information is the
                            information that can be associated with a specific person and could be used to identify that specific
                            person whether from that data, or from the data and other information that we have, or is likely
                            to have access to. We do not consider Personally Identifiable Information to include information
                            that has been made anonymous or aggregated so that it can no longer be used to identify a specific
                            person, whether in combination with other information or otherwise.<br /><br />

                            <h5>3. Use of the information</h5>

                            We use the information we collect from and about you for a variety of purposes, including:<br />

                            3.1. For purchase and delivery of products and services. We use your personal information to take,
                            handle and fulfil orders, deliver products and services, process payments, and communicate with you
                            about orders, products and services, and promotional offers.<br />

                            3.2. To provide, troubleshoot, and improve the Services. We use your personal information to provide
                            functionality, analyze performance, fix errors, and improve the usability and effectiveness of the
                            Services.<br />

                            3.3. For recommendations and personalization. We use your personal information to recommend features,
                            products, and services that might be of interest to you, identify your preferences, and personalize
                            your experience with the Services. We may also share your preferences, or the Services availed by you
                            with your network followers on the Company for marketing and other promotional activities of our Services<br />

                        </div>
                    </div>
                </div>
            </Container >
        </>
    );
};

export default PrivacyPolicy;
