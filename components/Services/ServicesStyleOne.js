import React from "react";
import Link from "next/link";

const ServicesStyleOne = () => {
  return (
    <>
      <section className="features-area features-area-inner-style ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="single-features">
                <i className="flaticon-cloud-computing-1"></i>
                <h3>Données Scientifiques</h3>
                <p>
                Les données scientifiques font référence aux informations obtenues à partir de la méthode scientifique.
                 Elles sont collectées, analysées et interprétées de manière à obtenir des conclusions scientifiques fiables.
                  Les données scientifiques peuvent être obtenues à partir d'observations directes, de mesures, d'expériences, de simulations et de modélisation.
                </p>

                <Link href="/service-details" className="read-more-icon">
                  <span className="flaticon-right-arrow"></span>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-features">
                <i className="flaticon-engineer"></i>
                <h3>Ingénieur en Données</h3>
                <p>
                la maintenance de systèmes de gestion de données volumineuses et complexes. 
                Les ingénieurs en données utilisent une variété de technologies et d'outils pour collecter, 
                stocker, traiter et analyser des données à grande échelle, afin d'en extraire des informations utiles pour les entreprises et les organisations.
                </p>

                <Link href="/service-details" className="read-more-icon">
                  <span className="flaticon-right-arrow"></span>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-features">
                <i className="flaticon-success"></i>
                <h3> les défis de l'IA</h3>
                <p>
                'IA (intelligence artificielle) offre de nombreuses opportunités et avantages,
                 mais elle présente également des défis importants qui doivent être 
                 pris en compte pour assurer son utilisation éthique et responsable. 
                </p>

                <Link href="/service-details" className="read-more-icon">
                  <span className="flaticon-right-arrow"></span>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-features">
                <i className="flaticon-technical-support"></i>
                <h3>Sécurité</h3>
                <p>
                La sécurité est un sujet crucial dans le monde numérique actuel, 
                car les systèmes informatiques sont de plus en plus vulnérables aux attaques.
                </p>

                <Link href="/service-details" className="read-more-icon">
                  <span className="flaticon-right-arrow"></span>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-features">
                <i className="flaticon-shield"></i>
                <h3>Support technique</h3>
                <p>
                Le support technique est un service fourni pour aider les utilisateurs à résoudre des problèmes liés à des produits ou services.
                </p>

                <Link href="/service-details" className="read-more-icon">
                  <span className="flaticon-right-arrow"></span>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-features">
                <i className="flaticon-success"></i>
                <h3>Soutien en direct</h3>
                <p>
                Le soutien en direct est un service fourni pour aider les utilisateurs 
                en temps réel à résoudre des problèmes ou répondre à des questions.
                </p>

                <Link href="/service-details" className="read-more-icon">
                  <span className="flaticon-right-arrow"></span>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-features">
                <i className="flaticon-machine-learning"></i>
                <h3>l'industrie lourde</h3>
                <p>
                  L'industrie lourde est un secteur de l'industrie qui se caractérise
                   par la production de biens à grande échelle, généralement de nature physique ou matérielle
                </p>

                <Link href="/service-details" className="read-more-icon">
                  <span className="flaticon-right-arrow"></span>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-features">
                <i className="flaticon-artificial-intelligence"></i>
                <h3>Transport</h3>
                <p>
                Le transport est un secteur clé de l'économie mondiale qui comprend tous les modes de déplacement.
                </p>

                <Link href="/service-details" className="read-more-icon">
                  <span className="flaticon-right-arrow"></span>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-features">
                <i className="flaticon-health"></i>
                <h3>Soins et Santé</h3>
                <p>
                Les soins de santé sont un domaine qui englobe un large éventail de services 
                et de professions visant à promouvoir la santé,
                 prévenir les maladies et traiter les patients atteints de maladies ou de blessures
                </p>

                <Link href="/service-details" className="read-more-icon">
                  <span className="flaticon-right-arrow"></span>
                </Link>
              </div>
            </div>

            {/* Pagination */}
            <div className="col-lg-12">
              <div className="page-navigation-area">
                <nav aria-label="Page navigation example text-center">
                  <ul className="pagination">
                    <li className="page-item">
                      <Link href="#" className="page-link page-links">
                        <i className="bx bx-chevrons-left"></i>
                      </Link>
                    </li>

                    <li className="page-item active">
                      <Link href="#" className="page-link">
                        1
                      </Link>
                    </li>

                    <li className="page-item">
                      <Link href="#" className="page-link">
                        2
                      </Link>
                    </li>

                    <li className="page-item">
                      <Link href="#" className="page-link">
                        3
                      </Link>
                    </li>

                    <li className="page-item">
                      <Link href="#" className="page-link">
                        <i className="bx bx-chevrons-right"></i>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesStyleOne;
