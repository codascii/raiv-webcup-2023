import React from "react";
import Link from "next/link";

const About = () => {
	return (
		<>
			<section className="about-area pt-100">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<div className="about-img">
								<img src="/images/about-img.png" alt="Image" />
							</div>
						</div>

						<div className="col-lg-6">
							<div className="about-content">
								<span>À propos de nous</span>
								<h2>
									Nous complétons chaque projet avec des soins
									supplémentaires dont le client a besoin
								</h2>
								<p>
									Analyse des rêves : L'institut offre une
									analyse de rêves personnalisée, dans
									laquelle des experts en rêves examinent les
									rêves des clients et fournissent des
									interprétations et des conseils sur leur
									signification.
								</p>

								<div className="row">
									<div className="col-lg-6 col-sm-6">
										<ul>
											<li>
												<i className="flaticon-checked"></i>
												Mise en cache avancée
											</li>
											<li>
												<i className="flaticon-checked"></i>
												Applications avancées Illimitées
											</li>
											<li>
												<i className="flaticon-checked"></i>
												PHP 7 prêt pour le tranfert
											</li>
										</ul>
									</div>

									<div className="col-lg-6 col-sm-6">
										<ul>
											<li>
												<i className="flaticon-checked"></i>
												PHP prêts à vous servir
											</li>
											<li>
												<i className="flaticon-checked"></i>
												Un Soutien supplémentaire
												gratuit 24/7
											</li>
											<li>
												<i className="flaticon-checked"></i>
												Pile optimisée
											</li>
										</ul>
									</div>
								</div>

								<Link href="/about" className="default-btn">
									En savoir plus
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
