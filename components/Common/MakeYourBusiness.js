import React from "react";
import Link from "next/link";

const MakeYourBusiness = () => {
	return (
		<>
			<section className="business-area ptb-100">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<div className="business-content">
								<h2>
									Découvrez pourquoi des milliers de clients
									satisfaits nous font confiance
								</h2>
							</div>

							<div className="single-business">
								<i className="flaticon-chip"></i>
								<h3>
									L'IA va automatiser l'amélioration de la
									cybersécurité
								</h3>
								<p>
									Onirix utilise l'IA pour renforcer la
									sécurité des données en détectant les
									menaces potentielles et en bloquant les
									attaques avant qu'elles ne se produisent
								</p>
							</div>

							<div className="single-business">
								<i className="flaticon-blockchain"></i>
								<h3>Une communauté avec une mission unique</h3>
								<p>
									Rejoignez notre communauté Onirix avec une
									mission unique : utiliser l'IA pour explorer
									les rêves et découvrir de nouveaux horizons.
								</p>
							</div>

							{/* <div className="business-btn">
                <Link href="/about-2" className="default-btn">
                  Know Details
                </Link>
              </div> */}
						</div>

						<div className="col-lg-6">
							<div className="row">
								<div
									className="col-lg-6 col-sm-6 counter-nth"
									data-aos="fade-up"
									data-aos-duration="1200"
									data-aos-delay="100"
								>
									<div className="single-counter">
										<h2>
											<span className="target">95%</span>
										</h2>
										<p>Projet réalisé</p>
									</div>
								</div>

								<div
									className="col-lg-6 col-sm-6 counter-nth"
									data-aos="fade-up"
									data-aos-duration="1200"
									data-aos-delay="200"
								>
									<div className="single-counter">
										<h2>
											<span className="target">90%</span>
										</h2>
										<p>Designe</p>
									</div>
								</div>

								<div
									className="col-lg-6 col-sm-6 counter-nth"
									data-aos="fade-up"
									data-aos-duration="1200"
									data-aos-delay="300"
								>
									<div className="single-counter">
										<h2>
											<span className="target">85%</span>
										</h2>
										<p>Clients satisfaits</p>
									</div>
								</div>

								<div
									className="col-lg-6 col-sm-6 counter-nth"
									data-aos="fade-up"
									data-aos-duration="1200"
									data-aos-delay="400"
								>
									<div className="single-counter">
										<h2>
											<span className="target">
												8024010
											</span>
										</h2>
										<p>Clients</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default MakeYourBusiness;
