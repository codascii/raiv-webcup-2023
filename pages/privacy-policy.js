import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Politique de confidentialité"
        homePageUrl="/"
        homePageText="Accueil"
        activePageText="Politique de confidentialité"
      />

      <div className="text-container ptb-100">
        <div className="container">
          <h3>Accueil</h3>

          <p>
          La protection de la vie privée des utilisateurs est importante pour nous. 
          Cette politique de confidentialité 
          explique comment nous collectons, utilisons,
           partageons et protégeons les informations 
           personnelles que vous nous fournissez.

          </p>

          <h3>Collecte d'informations</h3>
          <p>
          Nous pouvons collecter des informations personnelles
           telles que votre nom, votre adresse électronique,
            votre adresse physique et votre numéro de téléphone
             lorsque vous utilisez nos services ou interagissez avec nous. 
            Nous pouvons également collecter des informations sur votre utilisation
             de nos services, telles que 
          les pages que vous consultez et les actions que vous effectuez.
          </p>
          <h3>Utilisation des informations</h3>
          <p>
          Nous utilisons les informations que nous collectons pour fournir, 
          maintenir, protéger et améliorer nos services, pour développer de 
          nouveaux services et pour vous contacter.
           Nous pouvons également utiliser les informations pour personnaliser 
           les publicités que vous voyez en fonction de vos intérêts.

          </p>

          <h3>Partage des informations</h3>
          <p>
          Nous ne vendrons jamais vos informations personnelles à des tiers.
           Nous pouvons partager vos informations avec des fournisseurs 
           de services tiers qui travaillent pour nous pour fournir des services, 
           tels que l'hébergement de notre site web ou l'envoi d'e-mails en notre nom. 
           Nous pouvons également partager vos informations 
           si nous sommes tenus de le faire par la loi ou en réponse à une demande légale.

          </p>
          <h3>Protection des informations</h3>
          <p>
         
            Nous prenons des mesures pour protéger les informations que nous collectons et stockons,
             y compris des mesures de sécurité physique, électronique et procédurale. 
             Toutefois, malgré nos efforts,
              aucune mesure de sécurité n'est parfaite ou infaillible 
              et nous ne pouvons pas garantir la sécurité de vos informations.

          </p>
          <h3>Modifications de la politique de confidentialité</h3>
          <p>
            Nous pouvons modifier cette politique de confidentialité à tout moment. 
            Si nous apportons des modifications importantes à cette politique,
             nous vous en informerons en affichant un avis sur notre site web 
             ou en vous envoyant un e-mail.

          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
