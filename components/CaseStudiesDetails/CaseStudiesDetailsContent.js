import React from "react";

const CaseStudiesDetailsContent = () => {
  return (
    <>
      <section className="service-details-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="service-details-wrap">
                <div className="service-img">
                  <img
                    src="/images/services-details/services-details.jpg"
                    alt="Image"
                  />
                </div>

                <h3>Le vendeur de voitures d’occasion CarMax utilise OpenAI pour résumer les avis clients</h3>
                <p>
                Les premiers cas d’usage d’OpenAI ou d’une intelligence artificielle générative concernent ainsi CarMax, un revendeur américain de milliers de voitures d’occasion, Beco, une marque indienne d’équipements pour la maison, Deephaven un éditeur de logiciel américain et Ada, un spécialiste de l’automatisation de l’expérience client. Premier point, l’intelligence artificielle générative aide à la rédaction de contenus destinés aux sites Web, aux publications sur les réseaux sociaux ou sur les blogs. CarMax, revendeur de voitures d’occasion fait appel à l’intelligence artificielle générative pour générer sur son site web les résumés des avis des clients sur les voitures afin que les internautes puissent les parcourir plus rapidement.


Dès mai 2022, avec Microsoft Azure OpenAI Service, CarMax a rationalisé la création de résumés textuels pour ses pages de recherche de voitures

Dès mai 2022, avec l’aide de Microsoft Azure OpenAI Service, CarMax a rationalisé la création de résumés textuels pour ses pages de recherche de voitures, fournissant rapidement aux clients un contenu significatif qui améliore également le classement des pages dans les moteurs de recherche.  Avec une portée nationale et 45 000 voitures disponibles à tout moment, CaMax doit faciliter les recherches des clients pour qu’ils trouvent exactement ce dont ils ont besoin. 

Les résultats des moteurs de recherche Internet doivent faire apparaître ce que les clients recherchent, et le site Web CarMax doit contenir des détails sur tout l’inventaire, des comparaisons précises de véhicules, des résumés pertinents des caractéristiques des modèles selon l’année et des avis d’autres clients.  Pour aider l’équipe en charge du contenu à organiser, publier et mettre à jour cette énorme quantité de données et d’informations, CarMax s’est tourné vers une solution basée sur l’intelligence artificielle.

CarMax fait appel à OpenAI depuis mai 2022 pour la rédaction de contenus web

Plusieurs sections de texte sont générées par intelligence artificielle

CarMax a choisi de travailler avec l’API OpenAI basée sur le Cloud, qui donne accès à des modèles à grande échelle tels que GPT-3 et Codex. Azure OpenAI Service aide CarMax à produire du contenu pour ses pages Web de recherche d’automobiles. Par exemple, la page Kia Sorento 2018 contient plusieurs sections de texte généré par l’intelligence artificielle, dont les sections « Nouveauté cette année » et « Versions Kia Sorento 2018 », le résumé de l’article et un résumé en deux phrases des avis des clients.


« Avec OpenAI Service, nous pouvons résumer tous ces avis en quelques phrases facilement lisibles, à grande échelle »

Le résumé des avis est le premier élément de contenu que CarMax a choisi de générer via OpenAI Service. « De plus en plus de clients sont préoccupés par ce que disent leurs pairs, ils veulent donc lire les critiques, mais il pourrait y en avoir des milliers pour une seule voiture » explique Sean Goetz, directeur des systèmes d’application chez CarMax. « Avec OpenAI Service, nous pouvons résumer tous ces avis en quelques phrases facilement lisibles, à grande échelle sur notre inventaire » se félicite-t-il.

Une fois que le service OpenAI a créé un élément de contenu, un employé de CarMax examine le texte pour s’assurer qu’il a un sens dans le contexte et qu’il correspond à la voix de la marque CarMax. « Notre objectif initial était des résumés d’avis clients pour 5 000 pages de voitures. En utilisant notre processus manuel existant, nous pensons qu’il aurait fallu 11 ans pour générer le contenu » dit-il. « Avec OpenAI Service, nous avons atteint cet objectif en quelques mois seulement. La qualité était meilleure que prévu après un peu de réglages, avec un taux d’approbation des contenus de 80 % » termine-t-il.

                </p>

                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classNameical Latin
                  literature from 45 BC, making it over 2000 years old. Richard
                  McClintock, a Latin professor at Hampden-Sydney College in
                  Virginia, looked up one of the more obscure Latin words.
                </p>

                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem, you to be sure there isn't anything.
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
                            Intelligence artificielle générative
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            Résumés textuels
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            API basée sur le Cloud
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            Automatisation de l'expérience client
                          </li>
                          <li>
                            <i className="bx bx-check"></i>
                            Moteurs de recherche Internet
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudiesDetailsContent;
