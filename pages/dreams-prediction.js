import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactFormStyleTwo from "../components/Contact/ContactFormStyleTwo";
import Footer from "../components/Layouts/Footer";
import DreamsPredictionForm from "../components/DreamsPredictionForm/DreamsPredictionForm";
import DreamsPredictionContainer from "../components/DreamsPredictionForm/DreamsPredictionContainer";

export default function DreamsPrediction() {
	return (
		<>
			<Navbar />

			<PageBanner
				pageTitle="Onirix prédiction"
				homePageUrl="/"
				homePageText="Accueil"
				activePageText="Institut international des rêves"
			/>

			{/* <ContactInfo /> */}

			<DreamsPredictionForm />

			{/* <Footer /> */}
		</>
	);
}
