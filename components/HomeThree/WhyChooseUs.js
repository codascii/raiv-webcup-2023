import React from "react";

const whyChooseUsData = [
  {
    no: "01",
    iconName: "flaticon-technical-support",
    title: "Une sécurité sûre",
    shortText:
      "La sécurité de l'AI Onirix est d'une importance primordiale pour garantir la confidentialité et l'intégrité des données traitées. (AES 256)",
    aosDelay: "100",
  },
  {
    no: "02",
    iconName: "flaticon-shield",
    title: "Soutien technique",
    shortText:
      "notre équipe est là pour vous aider. Nous sommes disponibles 24 heures sur 24, 7 jours sur 7.",
    aosDelay: "200",
  },
  {
    no: "03",
    iconName: "flaticon-support",
    title: "Assistance en ligne",
    shortText:
      "Notre équipe d'assistance en ligne est là pour vous aider avec toutes vos questions et problèmes liés à l'utilisation de l'IA Onirix",
    aosDelay: "300",
  },
  {
    no: "04",
    iconName: "flaticon-technical-support",
    title: "Essai gratuit",
    shortText:
      "Inscrivez-vous dès maintenant et bénéficiez d'un accès complet à toutes les fonctionnalités de notre logiciel d'IA de pointe.",
    aosDelay: "400",
  },
  {
    no: "05",
    iconName: "flaticon-shield",
    title: "Technologie avancée",
    shortText:
      "La technologie avancée repousse les limites de ce qui est possible, en utilisant des techniques innovantes pour résoudre des problèmes complexes et pour améliorer la qualité de vie des gens",
    aosDelay: "500",
  },
  {
    no: "06",
    iconName: "flaticon-support",
    title: "Tarification compétitive",
    shortText:
      "Nous proposons une tarification compétitive pour notre offre de service AI Onirix, avec des prix abordables pour permettre à tout le monde de bénéficier des avantages de notre technologie avancée.",
    aosDelay: "600",
  },
];

const WhyChooseUs = () => {
  return (
    <>
      <section className="choose-ue-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span>Why Choose Us</span>
            <h2>
            La qualité de l'Intelligence Artificielle à votre service
            </h2>
            <p>
            Notre offre de service AI Onirix met à votre disposition une technologie d'intelligence artificielle de qualité supérieure pour vous aider à comprendre les significations et les implications de vos rêves. Grâce à une combinaison de techniques d'apprentissage automatique et de traitement du langage naturel, l'IA Onirix fournit une analyse précise et fiable de vos rêves pour vous aider à mieux comprendre votre avenir.
            </p>
          </div>

          <div className="row align-items-center">
            {whyChooseUsData &&
              whyChooseUsData.slice(0, 6).map((value, i) => (
                <div
                  className="col-lg-6"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay={value.aosDelay}
                  key={i}
                >
                  <div className="choose-card">
                    <span>
                      {value.no} <i className={value.iconName}></i>
                    </span>
                    <h3>{value.title}</h3>
                    <p>{value.shortText}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
