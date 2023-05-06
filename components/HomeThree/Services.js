import React from "react";
import Link from "next/link";

const servicesData = [
  {
    iconName: "flaticon-chip",
    title: "Robotics & Drones",
    shortText:
      "Lorem consectetur ipsum dolor sit amet, adipiscing elit, do eiusmod tempor incididunt sed.",
    viewDetails: "/service-details",
    aosDelay: "100",
  },
  {
    iconName: "flaticon-vr",
    title: "Virtually Reality",
    shortText:
      "Lorem consectetur ipsum dolor sit amet, adipiscing elit, do eiusmod tempor incididunt sed.",
    viewDetails: "/service-details",
    aosDelay: "200",
  },
  {
    iconName: "flaticon-blockchain",
    title: "Blockchain Project",
    shortText:
      "Lorem consectetur ipsum dolor sit amet, adipiscing elit, do eiusmod tempor incididunt sed.",
    viewDetails: "/service-details",
    aosDelay: "300",
  },
  {
    iconName: "flaticon-target",
    title: "Image Processing",
    shortText:
      "Lorem consectetur ipsum dolor sit amet, adipiscing elit, do eiusmod tempor incididunt sed.",
    viewDetails: "/service-details",
    aosDelay: "400",
  },
  {
    iconName: "flaticon-choice",
    title: "Order Management",
    shortText:
      "Lorem consectetur ipsum dolor sit amet, adipiscing elit, do eiusmod tempor incididunt sed.",
    viewDetails: "/service-details",
    aosDelay: "500",
  },
  {
    iconName: "flaticon-deep-learning",
    title: "Machine Learning",
    shortText:
      "Lorem consectetur ipsum dolor sit amet, adipiscing elit, do eiusmod tempor incididunt sed.",
    viewDetails: "/service-details",
    aosDelay: "600",
  },
];

const Services = () => {
  return (
    <section className="offer-area pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <span>Services</span>
          <h2>Technologies de pointe utilisées dans la conception de l'Intelligence Artificielle Onirix</h2>
          <p>
          La conception de l'Intelligence Artificielle Onirix utilise des technologies de pointe telles que le machine learning, la blockchain et le traitement d'image pour fournir une expérience utilisateur avancée. Ces technologies permettent à Onirix d'analyser et de comprendre les rêves de manière précise et fiable, tout en garantissant la sécurité et la confidentialité des données grâce à la blockchain. Le traitement d'image permet également d'améliorer la précision de l'analyse des rêves en identifiant les éléments clés des images associées aux rêves.
          </p>
        </div>

        <div className="row justify-content-center">
          {servicesData &&
            servicesData.slice(0, 6).map((value, i) => (
              <div
                className="col-lg-4 col-sm-6"
                key={i}
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay={value.aosDelay}
              >
                <div className="single-offer rounded-5">
                  <i className={value.iconName}></i>
                  <h3>
                    <Link href={value.viewDetails}>{value.title}</Link>
                  </h3>
                  <p>{value.shortText}</p>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Shape Images */}
      <div className="offer-shape">
        <img src="/images/shape/services-shape/1.png" alt="Image" />
        <img src="/images/shape/services-shape/2.png" alt="Image" />
        <img src="/images/shape/services-shape/3.png" alt="Image" />
        <img src="/images/shape/services-shape/4.png" alt="Image" />
        <img src="/images/shape/services-shape/5.png" alt="Image" />
        <img src="/images/shape/services-shape/6.png" alt="Image" />
      </div>
    </section>
  );
};

export default Services;
