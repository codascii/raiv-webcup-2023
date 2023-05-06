import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <>
      <section className="about-area pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div 
                className="about-img"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <img src="/images/about-img.png" alt="Image" />
              </div>
            </div>

            <div className="col-lg-6">
              <div 
                className="about-content"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <span>About Us</span>
                <h2>
                Chaque rêve est analyser avec une attention particulière aux besoins de l'utilisateur
                </h2>
                <p>
                Chez l'Institut International des Rêves, nous considérons que chaque rêve est unique et que son interprétation doit être personnalisée en fonction des besoins et des attentes de chaque utilisateur
                </p>

                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      <li>
                        <i className="flaticon-checked"></i>
                        Analyse approfondie
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        Réponses détaillées
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        Interprétation et explication
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      <li>
                        <i className="flaticon-checked"></i>
                        Prédiction réaliste
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        Pas de stockage des données personnelles
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        Service gratuit
                      </li>
                    </ul>
                  </div>
                </div>

                <Link href="/about-2" className="default-btn">
                  En savoir plus
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
