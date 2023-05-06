import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import CaseStudiesDetailsContent from "../components/CaseStudiesDetails/CaseStudiesDetailsContent";
import CTA from "../components/Common/CTA";
import Footer from "../components/Layouts/Footer";

export default function CaseStudiesDetails() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="L’IA générative a déjà des cas d’usages avérés autour de l’expérience client"
        homePageUrl="/"
        homePageText="Home"
        activePageText="L’IA générative"
      />

      <CaseStudiesDetailsContent />

      <CTA />

      <Footer />
    </>
  );
}
