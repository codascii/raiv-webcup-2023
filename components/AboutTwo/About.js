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
								<img
									src="/images/about-img-institut.png"
									alt="Image"
								/>
							</div>
						</div>

						<div className="col-lg-6">
							<div className="about-content">
								<span>À propos de nous</span>
								<h2>
									La naissance d'une vocation scientifique
									stimulante
								</h2>
								<p>
									Nous sommes animés par une vocation très
									forte. Celle de rechercher des réponses au
									fonctionnement de la nature humaine. Parce
									que comprendre l'humain c'est comprendre le
									monde dans lequel nous évoluons. Nous sommes
									tous des acteurs pendant notre passage sur
									le planète Terre.
								</p>

								<div className="row">
									<div className="col-lg-6 col-sm-6">
										<ul>
											<li>
												<i className="flaticon-checked"></i>
												Neuroscience avancée
											</li>
											<li>
												<i className="flaticon-checked"></i>
												Thérapie par le sommeil
											</li>
											<li>
												<i className="flaticon-checked"></i>
												Traitement de pathologie grave
											</li>
										</ul>
									</div>

									<div className="col-lg-6 col-sm-6">
										<ul>
											<li>
												<i className="flaticon-checked"></i>
												Orienté par l'innovation
											</li>
											<li>
												<i className="flaticon-checked"></i>
												Des scientifique chevronés
											</li>
											<li>
												<i className="flaticon-checked"></i>
												Des médecins très impliqués
											</li>
										</ul>
									</div>
								</div>

								{/* <Link href="/about-1" className="default-btn">
									Learn More
								</Link> */}
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
