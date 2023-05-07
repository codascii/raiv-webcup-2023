import React from "react";
import Link from "next/link";

const featuresData = [
	{
		iconName: "bx bx-shopping-bag",
		title: "Analyse des rêves",
		shortText:
			"L'institut offre une analyse de rêves personnalisée, dans laquelle Onirix examine les rêves des clients et fournissent des interprétations et des conseils sur leur signification",
		viewDetails: "/onirix",
		aosDelay: "100",
	},
	{
		iconName: "flaticon-engineer",
		title: "Prédiction de l'avenir",
		shortText:
			"Une nouvelle approche pour comprendre la signification des rêves et pour prédire l'avenir, en analysant les descriptions des rêves que fourni les utilisateur.",
		viewDetails: "/onirix",
		aosDelay: "200",
	},
	{
		iconName: "flaticon-success",
		title: "Recherche sur les rêves",
		shortText:
			"L'Institut International des Rêves mène des recherches sur les rêves pour découvrir de nouveaux domaines d'exploration wet pour mieux comprendre l'impact des rêves.",
		viewDetails: "/onirix",
		aosDelay: "300",
	},
];

const Features = () => {
	return (
		<>
			<div className="features-area pt-100 pb-70">
				<div className="container">
					<div className="row justify-content-center">
						{featuresData &&
							featuresData.slice(0, 3).map((value, i) => (
								<div
									className="col-lg-4 col-sm-6 p-0"
									data-aos="fade-up"
									data-aos-duration="1200"
									data-aos-delay={value.aosDelay}
									key={i}
								>
									<div className="single-features">
										<i className={value.iconName}></i>
										<h3>{value.title}</h3>
										<p>{value.shortText}</p>

										<Link
											href={value.viewDetails}
											className="read-more-icon"
										>
											<span className="flaticon-right-arrow"></span>
										</Link>
									</div>
								</div>
							))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Features;
