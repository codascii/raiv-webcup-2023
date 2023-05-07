import React from "react";
import Link from "next/link";

const servicesData = [
	{
		iconName: "flaticon-chip",
		title: "Intelligence artificielle ",
		shortText:
			"Utilisez Onirix pour découvrir des insights profonds et prédire l'avenir en décodant vos rêves.",
		aosDelay: "100",
	},
	{
		iconName: "flaticon-vr",
		title: "Réalité augmenter",
		shortText:
			"Onirix est une intelligence artificielle avancée qui utilise la réalité augmentée pour aider à interpréter les rêves des utilisateurs. ",
		aosDelay: "200",
	},
	{
		iconName: "flaticon-blockchain",
		title: "Big data",
		shortText:
			"Onirix utilise la big data pour fournir des analyses approfondies et des prédictions précises sur les rêves.",
		aosDelay: "300",
	},
	{
		iconName: "flaticon-target",
		title: "Image AI",
		shortText:
			"DALL-E 2, combiné avec Onirix, permet de générer des images uniques à partir de descriptions de rêves.",
		aosDelay: "400",
	},
	{
		iconName: "flaticon-choice",
		title: "Simple d'utilisation",
		shortText:
			"Onirix : Simplicité d'utilisation pour une analyse de rêves fiable.",
		aosDelay: "500",
	},
	{
		iconName: "flaticon-deep-learning",
		title: "Machine Learning",
		shortText:
			"Onirix utilise le Machine Learning pour analyser des milliers de rêves et détecter des tendances.",
		aosDelay: "600",
	},
];

const Services = () => {
	return (
		<section className="offer-area pt-100 pb-70">
			<div className="container">
				<div className="section-title">
					<span>Services</span>
					<h2>
						Technologies de pointe utilisées dans la conception de
						l'Intelligence Artificielle Onirix
					</h2>
					<p>
						La conception de l'IA Onirix est basée sur une
						combinaison de technologies de pointe, notamment le
						Machine Learning, la blockchain et le traitement
						d'images. Cette synergie technologique nous permet de
						fournir une analyse précise et fiable des rêves pour
						aider nos utilisateurs à mieux comprendre les
						significations cachées de leurs rêves.
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
									<h3>{value.title}</h3>
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
