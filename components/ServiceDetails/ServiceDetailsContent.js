import React from "react";
import ServiceSidebar from "./ServiceSidebar";
import AskQuestionForm from "./AskQuestionForm";

const ServiceDetailsContent = () => {
  return (
    <>
      <section className="service-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="service-details-wrap">
                <div className="service-img">
                  <img
                    src="/images/services-details/services-details.jpg"
                    alt="Image"
                  />
                </div>

                <h3>Service de stockage</h3>
                <p>
                 
                </p>

                <p>
                Contrairement à la croyance populaire, le Lorem Ipsum n'est pas un simple texte aléatoire.
                  texte aléatoire. Il trouve son origine dans un ouvrage de littérature latine classique de 45 av.
                  de 45 av. J.-C., ce qui lui confère plus de 2000 ans d'existence. Richard
                  McClintock, professeur de latin au Hampden-Sydney College en
                  Virginie, a recherché l'un des mots latins les plus obscurs.
                  Traduit avec www.DeepL.com/Translator (version gratuite)
                </p>

                <p>
                Il existe de nombreuses variantes de passages de Lorem Ipsum
                  disponibles, mais la majorité d'entre eux ont été altérés d'une manière ou d'une autre, par des
                  par de l'humour ou des mots choisis au hasard qui n'ont pas l'air
                  qui n'ont pas l'air crédibles. Si vous devez utiliser un passage de
                  Lorem, vous devez vous assurer qu'il n'y a rien.
                </p>

                <div className="car-service-list-wrap">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                      <div className="service-list-img">
                        <img
                          src="/images/services-details/services-details2.png"
                          alt="Image"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="car-service-list">
                        <ul>
                          <li>
                            <i className="bx bx-check"></i>
                            Nettoyage et entretien du compartiment moteur
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            Nettoyage des panneaux de porte
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            Garniture en plastique améliorée
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            Surface de peinture décapée à l'argile
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            Traitement des jantes en alliage à l'intérieur et à l'extérieur
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <AskQuestionForm />
              </div>
            </div>

            <div className="col-lg-4">
              <ServiceSidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailsContent;
