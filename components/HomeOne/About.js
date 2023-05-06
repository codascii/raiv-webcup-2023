import React from "react";
import Link from "next/link";

const About = () => {
	return (
		<>
			<section className="about-area pb-100">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<div
								className="about-img"
								data-aos="fade-in"
								data-aos-duration="1200"
								data-aos-delay="100"
							>
								<img src="/images/about-img.png" alt="Image" />
							</div>
						</div>

						<div className="col-lg-6">
							<div
								className="about-content"
								data-aos="fade-in"
								data-aos-duration="1200"
								data-aos-delay="200"
							>
								<span>Rêve ou avenir</span>
								<h2>
									Chaque rêve est analysé avec une attention
									particulière aux besoins de l'utilisateur
								</h2>
								<p>
									À l'Institut International des Rêves, nous
									considérons que chaque rêve est unique et
									que son interprétation doit être
									personnalisée tout en prévenant les risques
									psychologique de utilisateur
								</p>

								<div className="row">
									<div className="col-lg-6 col-sm-6">
										<ul>
											<li>
												<i className="flaticon-checked"></i>
												Analyse approfondie
											</li>
											<li>
												<i className="flaticon-checked"></i>
												Réponses détaillées
											</li>
											<li>
												<i className="flaticon-checked"></i>
												Interprétation et explication
											</li>
										</ul>
									</div>

									<div className="col-lg-6 col-sm-6">
										<ul>
											<li>
												<i className="flaticon-checked"></i>
												Prédiction réaliste
											</li>
											<li>
												<i className="flaticon-checked"></i>
												Pas de stockage des données
												personnelles
											</li>
											<li>
												<i className="flaticon-checked"></i>
												Service gratuit
											</li>
										</ul>
									</div>
								</div>

								<Link href="/onirix" className="default-btn">
									En savoir plus sur Onirix{" "}
									<i className="bx bx-log-in-circle"></i>
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
