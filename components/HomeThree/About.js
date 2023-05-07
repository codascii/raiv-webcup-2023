import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <>
      <section className="about-area pt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div 
                className="about-img"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <img src="/images/about-img-three.png" alt="Image" />
              </div>
            </div>

            <div className="col-lg-6">
              <div 
                className="about-content"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="500"
              >
                <span>C'est quoi Onirix ?</span>
                <h2>
                ONIRIX : L'IA avancée qui décrypte le sens caché de vos rêves pour prédire l'avenir
                </h2>
                <p>
                ONIRIX est une intelligence artificielle avancée développée par l'Institut International des Rêves pour aider les gens à mieux comprendre la signification et les implications de leurs rêves. En utilisant une combinaison de techniques d'apprentissage automatique et de traitement du langage naturel, ONIRIX est capable d'analyser des milliers de descriptions de rêves et de détecter des modèles et des tendances qui peuvent fournir des indices sur l'avenir.
                </p>

                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      <li>
                        <i className="flaticon-checked"></i>
                        Innovant
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        Gratuit a vis
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        Puissant
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <ul>
                      <li>
                        <i className="flaticon-checked"></i>
                        Infaillible
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        Assitance 24/7
                      </li>
                      <li>
                        <i className="flaticon-checked"></i>
                        Empilement optimisé
                      </li>
                    </ul>
                  </div>
                </div>

                <Link href="/dreams-prediction" className="default-btn">
                  Essayer Onirix
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
