import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-top-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div
                className="single-widget"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <Link href="/" className="logo">
                  <img src="/images/white-logo.png" alt="Image" />
                </Link>

                <p>
                L'Institut International des Rêves est une initiative ambitieuse visant à explorer et à comprendre le monde des rêves. Le but de l'institut est de rassembler des chercheurs, des experts et des personnes intéressées par les rêves du monde entier pour étudier la signification et l'importance des rêves dans nos vies.
                </p>

                <ul className="social-icon">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.pinterest.com/" target="_blank">
                      <i className="bx bxl-pinterest-alt"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="single-widget"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <h3>Services</h3>
                <ul>
                  <li>
                    <Link href="/service-details">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      La psycologie
                    </Link>
                  </li>
                  <li>
                    <Link href="/service-details">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      UI/UX Design
                    </Link>
                  </li>
                  <li>
                    <Link href="/service-details">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      La créativité 
                    </Link>
                  </li>
                  <li>
                    <Link href="/service-details">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      marketing
                    </Link>
                  </li>
                  <li>
                    <Link href="/service-details">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      L'ingénierie de Production
                    </Link>
                  </li>
                  <li>
                    <Link href="/service-details">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      la recherche
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="single-widget"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <h3>Liens importants</h3>

                <ul>
                  <li>
                    <Link href="/about">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      A propos de nous
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="/services">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      Services
                    </Link>
                  </li> */}
                  {/* <li>
                    <Link href="/pricing">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      Tarification
                    </Link>
                  </li> */}
                  <li>
                    <Link href="/team">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      Equipe
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      Support
                    </Link>
                  </li>
                  <li>
                    <Link href="/testimonials">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      Témoignages
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="single-widget"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="500"
              >
                <h3>Informations</h3>

                <ul className="information">
                  <li className="address">
                    <i className="flaticon-call"></i>
                    <span>Téléphones</span>
                    +262 269 52 47 85
                  </li>

                  <li className="address">
                    <i className="flaticon-envelope"></i>
                    <span>Adress mail</span>
                    contact@institutinternational.com
                  </li>

                  <li className="address">
                    <i className="flaticon-maps-and-flags"></i>
                    <span>Address</span>
                    123, rue des étoiles 97600 Mamoudzou, MAYOTTE 
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-shape">
          <img src="/images/shape/footer-shape-one.png" alt="Image" />
          <img src="/images/shape/footer-shape-two.png" alt="Image" />
        </div>
      </footer>

      {/* Footer Bottom Area   */}
      <footer className="footer-bottom-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="copy-right">
                <p>Droit d'auteur &copy; {currentYear} Tous les droits sont Réservés</p>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="privacy">
                <ul>
                  <li>
                    <Link href="/terms-conditions">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">Politique de confidentialite</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="designed">
                <p>
                  Designed By <i className="bx bx-heart"></i>{" "}
                  <a href="https://raivnumerique.mayotte.webcup.hodi.host/" target="_blank">
                    RAIV & HOUMADEV
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
