import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";

export default function TermsConditions() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Terms & Conditions"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Terms & Conditions"
      />

      <div className="text-container ptb-100">
        <div className="container">
          
          <h3>Conditions générales d'utilisation</h3>
          <p>
          Merci de lire attentivement ces conditions générales d'utilisation avant d'utiliser nos services. 
          En utilisant nos services, vous acceptez d'être lié par ces conditions générales. 
          Si vous n'acceptez pas ces conditions générales, veuillez ne pas utiliser nos services.
          </p>

    <h3>Utilisation des services</h3>
    <p>Nos services sont destinés à un usage personnel et non commercial.
       Vous ne pouvez pas utiliser nos services à des fins illégales ou non autorisées.
    </p>

    <h3>Contenu</h3>
    <p>
      Tous les contenus affichés sur nos services, y compris, mais sans s'y limiter,
       les textes, les images, les logos, les marques de commerce et les logiciels, 
       sont la propriété de notre entreprise ou de nos partenaires. Vous ne pouvez pas reproduire,
        distribuer, modifier ou vendre tout ou partie de ce contenu sans notre autorisation écrite.

    </p>

    <h3>Utilisation des données</h3>
   <p> Nous collectons et utilisons des données à des fins statistiques et d'amélioration de nos services. 
       Nous ne vendrons jamais vos données à des tiers. 
       Nous nous engageons à protéger vos données conformément à notre politique de confidentialité.
  </p>
    <h3>Responsabilité</h3>
    <p>Nous ne sommes pas responsables des dommages directs, 
      indirects, accessoires ou consécutifs découlant de l'utilisation de nos services. 
      Nous nous réservons le droit de suspendre ou de résilier 
      votre utilisation de nos services à tout moment, sans préavis.
   </p>
    <h3>Modifications des conditions générales</h3>
    <p>    Nous pouvons modifier ces conditions générales à tout moment 
      en affichant une nouvelle version sur notre site web. 
      Votre utilisation continue de nos services après la publication de ces
       modifications constitue votre acceptation de ces modifications.
   </p>
   <h3> Droit applicable</h3>
   <p>Ces conditions générales sont régies par les lois du pays ou la région et t
    out litige découlant de ces conditions générales sera soumis à la 
    compétence exclusive des tribunaux.
  </p>

          
        </div>
      </div>

      <Footer />
    </>
  );
}
