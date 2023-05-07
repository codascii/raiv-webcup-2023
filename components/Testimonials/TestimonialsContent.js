import React from "react";

const testimonialsData = [
  {
    image: "/images/clients/client1.jpg",
    name: "Alain Delon",
    designation: "Développeur web",
    feedbackText:
      "Le développement web est un domaine dans lequel on se voit progresser au fil du temps, on sent que l’on passe des paliers.",

    rating: [
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
    ],
  },
  {
    image: "/images/clients/client2.jpg",
    name: "Catherine Jackson",
    designation: "Directeur général d'IT",
    feedbackText:
      "Je pense que l'IA est une technologie prometteuse qui peut aider les entreprises à être plus efficaces et plus innovantes.",

    rating: [
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
    ],
  },
  {
    image: "/images/clients/client3.jpg",
    name: "Louix Delaroute",
    designation: "UI/UX Designer",
    feedbackText:
      "L'IA a certainement amélioré l'efficacité et la personnalisation de nos conceptions, mais elle a également créé de nouveaux défis .",

    rating: [
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
    ],
  },
  {
    image: "/images/clients/client4.jpg",
    name: "Justine Sarkozy",
    designation: "ReactJS Developer",
    feedbackText:
      "En tant que développeur ReactJS, j'ai travaillé sur projets qui ont intégré l'IA pour améliorer la convivialité et la performance de nos applications.",

    rating: [
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
    ],
  },
  {
    image: "/images/clients/client5.jpg",
    name: "Didier Roguero",
    designation: "UI/UX Designer",
    feedbackText:
      "L'IA a certainement amélioré l'efficacité et la personnalisation de nos conceptionspour de nouveaux défis",

    rating: [
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
    ],
  },
  {
    image: "/images/clients/client6.jpg",
    name: "Hector Simon",
    designation: "Optimisation pour les moteurs de recherche",
    feedbackText:
      "En tant que spécialiste du référencement, j'ai travaillé sur des projets qui ont utilisé l'IA pour améliorer les performances SEO des sites web.",

    rating: [
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
    ],
  },
  {
    image: "/images/clients/client7.jpg",
    name: "Davide Dev",
    designation: "UI/UX Designer",
    feedbackText:
      "En tant que web designer, j'ai travaillé sur des projets qui ont intégré l'IA pour améliorer la convivialité et la performance des sites web. ",

    rating: [
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
    ],
  },
  {
    image: "/images/clients/client8.jpg",
    name: "Herver Lefevre",
    designation: "Developpeur PHP",
    feedbackText:
      "En tant que développeur chez HP, j'ai l'occasion de travailler sur l'IA pour améliorer l'efficacité et la convivialité de nos produits.",

    rating: [
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
    ],
  },
  {
    image: "/images/clients/client9.jpg",
    name: "Valantin Dubois",
    designation: "PDG fondateur",
    feedbackText:
      "L'IA pour automatiser nos opérations,cette technologie peut améliorer considérablement la précision et la rentabilité de nos activités.",

    rating: [
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
      {
        iconName: "bx bxs-star",
      },
    ],
  },
];

const TestimonialsContent = () => {
  return (
    <>
      <section className="client-area inner-client-page ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            {testimonialsData &&
              testimonialsData.map((value, i) => (
                <div className="col-lg-4 col-sm-6" key={i}>
                  <div className="single-client">
                    <i className="quotes flaticon-left-quotes-sign"></i>
                    <p>{value.feedbackText}</p>

                    <ul>
                      {value.rating.map((value, i) => (
                        <li key={i}>
                          <i className={value.iconName}></i>
                        </li>
                      ))}
                    </ul>

                    <div className="client-img">
                      <img src={value.image} alt="Image" />
                      <h3>{value.name}</h3>
                      <span>{value.designation}</span>
                    </div>
                  </div>
                </div>
              ))}

            {/* Pagination */}
            <div className="col-lg-12">
              <div className="page-navigation-area">
                <nav aria-label="Page navigation example text-center">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link page-links">
                        <i className="bx bx-chevrons-left"></i>
                      </a>
                    </li>

                    <li className="page-item active">
                      <a className="page-link">1</a>
                    </li>
                    <li className="page-item">
                      <a className="page-link">
                        <i className="bx bx-chevrons-right"></i>
                      </a>
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

export default TestimonialsContent;
