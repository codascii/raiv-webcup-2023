import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import About from "../components/AboutTwo/About";
import WhyChooseUs from "../components/AboutTwo/WhyChooseUs";
import MakeYourBusiness from "../components/Common/MakeYourBusiness";
import Testimonials from "../components/Common/Testimonials";
import PartnerSlider from "../components/Common/PartnerSlider";
import Footer from "../components/Layouts/Footer";
import TeamTwo from "../components/Common/TeamTwo";
import Partner from "../components/Common/Partner";

export default function About2() {
	return (
		<>
			<Navbar />

			<PageBanner
				pageTitle="À propos de l'Institut International des rêves"
				homePageUrl="/"
				homePageText="Accueil"
				activePageText="À propos"
			/>

			<About />
			<TeamTwo />
			<div className="pb-50">
				<Partner />
			</div>
			{/* <WhyChooseUs /> */}

			{/* <MakeYourBusiness /> */}

			<Testimonials />

			<PartnerSlider />

			<Footer />
		</>
	);
}
