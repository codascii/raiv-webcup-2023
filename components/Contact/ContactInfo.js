import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-contact-info">
                <i className="bx bx-envelope"></i>
                <h3>Envoyez-nous un email:</h3>
                <p>
                  <a href="mailto:hello@jumpx.com">contact@institutinternational.com</a>
                </p>
                <p>
                  <a href="mailto:info@jumpx.com">assistance@institutinternational.com</a>
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-contact-info">
                <i className="bx bx-phone-call"></i>
                <h3>Appelez-nous :</h3>
                <p>
                  Tel. + <a href="tel:12318005678990">(262) 269  52 47 85</a>
                </p>
                <p>
                  Tel. + <a href="tel:12415235679874">(262) 269 52 48 86</a>
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-contact-info">
                <i className="bx bx-location-plus"></i>
                <h3>MAYOTTE</h3>
                <p>123, rue des étoiles 97600 Mamoudzou, MAYOTTE</p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-contact-info">
                <i className="bx bx-support"></i>
                <h3>Chat en direct</h3>
                <p>chat en direct avec notre entreprise 24h/24 et 7j/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
