import React from "react";
import Link from "next/link";

const servicesData = [
	{
		iconName: "flaticon-chip",
		title: "En psychologie",
		shortText:
			"Notre intélligence artificielle pourrait aider à interpréter les rêves pour des besions thérapeutique.",
		aosDelay: "100",
	},
	{
		iconName: "flaticon-vr",
		title: "La créativité",
		shortText:
			"Onirix pourrait être utilisé comme source d'inspiration pour les écrivains, les artistes et les cinéastes.",
		aosDelay: "200",
	},
	{
		iconName: "flaticon-blockchain",
		title: "La sécurité",
		shortText:
			"L'intelligence articifielle peut être utilisé afin de prévenir des accidents ou des catastrophes naturelles.",
		aosDelay: "300",
	},
	{
		iconName: "flaticon-target",
		title: "En marketing",
		shortText:
			"Permettre une meilleure compréhension des préférences et des désirs des consommateurs.",
		aosDelay: "400",
	},
	{
		iconName: "flaticon-choice",
		title: "Les statistiques",
		shortText:
			"Notre IA permet d'alimenter des bases de données pour réaliser des statistiques sur les rêves.",
		aosDelay: "500",
	},
	{
		iconName: "flaticon-deep-learning",
		title: "La recherche",
		shortText:
			"Rechercher scientifiquement et étudier les processus mentaux impliqués dans la production des rêves.",
		aosDelay: "600",
	},
];

const Services = () => {
	return (
		<section className="offer-area pt-100 pb-70">
			<div className="container">
				<div className="section-title">
					<span>Domaines d'applications</span>
					<h2>D'autres domaines d'applications pour Onirix</h2>
					<p>
						En plus de son fonctionnement d'origine, d'autres
						domaines d'applications pourraient être envisagés afin
						d'exploiter au mieux les capacités de cette IA, et ainsi
						répondre à un large éventail de besoins.
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
								<div className="single-offer">
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
