import React from "react";
import Link from "next/link";

const WhatWeOffer = () => {
	const openTabSection = (evt, tabNmae) => {
		let i, tabcontent, tablinks;
		tabcontent = document.getElementsByClassName("tabs_item");
		for (i = 0; i < tabcontent.length; i++) {
			tabcontent[i].style.display = "none";
		}

		tablinks = document.getElementsByTagName("li");
		for (i = 0; i < tablinks.length; i++) {
			tablinks[i].className = tablinks[i].className.replace(
				"current",
				""
			);
		}

		document.getElementById(tabNmae).style.display = "block";
		evt.currentTarget.className += "current";
	};

	return (
		<>
			<section className="industries-area pb-100 mt-100">
				<div className="container">
					<div className="section-title">
						<span>les avancées</span>
						<h2>Nos recherches scientifiques</h2>
						<p>
						Notre équipe de scientifiques a mené des recherches approfondies dans différents domaines, pour développer Onirix, une IA sophistiquée et complète.
						</p>
					</div>

					<div className="tab industries-list-tab">
						<div className="row align-items-center">
							<div className="col-lg-3">
								{/* Tabs navs */}
								<ul className="tabs">
									<li
										className="current"
										onClick={(e) =>
											openTabSection(e, "tab1")
										}
									>
										<span>
											<i className="flaticon-machine-learning"></i>
											<h3>La neurologie</h3>
											{/* <p>All kind of industry</p> */}
										</span>
									</li>

									<li
										onClick={(e) =>
											openTabSection(e, "tab2")
										}
									>
										<span>
											<i className="flaticon-artificial-intelligence"></i>
											<h3>La psychologie humaine</h3>
											{/* <p>All kind of industry</p> */}
										</span>
									</li>

									<li
										onClick={(e) =>
											openTabSection(e, "tab3")
										}
									>
										<span>
											<i className="flaticon-health"></i>
											<h3>La médecine</h3>
											{/* <p>All kind of industry</p> */}
										</span>
									</li>

									<li
										onClick={(e) =>
											openTabSection(e, "tab4")
										}
									>
										<span>
											<i className="flaticon-automation"></i>
											<h3>La programation</h3>
											{/* <p>All kind of industry</p> */}
										</span>
									</li>
								</ul>
							</div>

							<div className="col-lg-9">
								<div className="tab_content">
									{/* Tab item #1 */}
									<div id="tab1" className="tabs_item">
										<div className="row align-items-center">
											<div className="col-lg-6">
												<div className="industries-img left-img">
													<img
														src="/images/offer1.png"
														alt="Image"
													/>
												</div>
											</div>

											<div className="col-lg-6">
												<div className="industries-content">
													<h3>La neurologie</h3>
													<p>
													L'étude de la neurologie a permis aux scientifiques de mieux comprendre le fonctionnement du cerveau et de la mémoire
													</p>
													<p>
													En effet, la mémoire joue un rôle clé dans la formation des rêves et l'interprétation de ceux-ci.
													</p>
													<p>En comprenant les processus neuronaux impliqués dans la formation et la consolidation de la mémoire, les scientifiques ont pu développer des algorithmes d'apprentissage automatique qui permettent à Onirix d'analyser et de reconnaître les motifs de rêve et de les interpréter de manière cohérente.</p>

													{/* <div className="row">
														<div className="col-lg-6 col-sm-6">
															<ul className="industries-item">
																<li>
																	<i className="flaticon-checked"></i>
																	Opportunities
																</li>
																<li>
																	<i className="flaticon-checked"></i>
																	Creating
																</li>
																<li>
																	<i className="flaticon-checked"></i>
																	Industries
																</li>
															</ul>
														</div>

														<div className="col-lg-6 col-sm-6">
															<ul className="industries-item">
																<li>
																	<i className="flaticon-checked"></i>
																	Security
																</li>
																<li>
																	<i className="flaticon-checked"></i>
																	Highest
																</li>
																<li>
																	<i className="flaticon-checked"></i>
																	Priority
																</li>
															</ul>
														</div>
													</div>

													<div className="text-center">
														<Link
															href="/services"
															className="default-btn"
														>
															Discover More
														</Link>
													</div> */}
												</div>
											</div>
										</div>
									</div>

									{/* Tab item #2 */}
									<div id="tab2" className="tabs_item">
										<div className="row  align-items-center">
											<div className="col-lg-6">
												<div className="industries-content">
													<h3>La psychologie humaine</h3>
													<p>
													la psychologie humaine a permis de comprendre les différentes phases du sommeil et de la rêverie, ce qui a permis de développer Onirix en tant qu'outil d'interprétation des rêves.
													</p>
													<p>
													En comprenant mieux les mécanismes et les motifs des rêves, Onirix peut aider les utilisateurs à mieux comprendre leurs propres rêves et à en tirer des informations utiles.
													</p>
													<p>De plus, l'étude de la psychologie a permis de développer des techniques de communication avec l'utilisateur qui permettent à Onirix de fournir des interprétations personnalisées et pertinentes.</p>

													{/* <div className="row">
														<div className="col-lg-6 col-sm-6">
															<ul className="industries-item">
																<li>
																	<i className="flaticon-checked"></i>
																	Security
																</li>
																<li>
																	<i className="flaticon-checked"></i>
																	Highest
																</li>
																<li>
																	<i className="flaticon-checked"></i>
																	Priority
																</li>
															</ul>
														</div>

														<div className="col-lg-6 col-sm-6">
															<ul className="industries-item">
																<li>
																	<i className="flaticon-checked"></i>
																	Opportunities
																</li>
																<li>
																	<i className="flaticon-checked"></i>
																	Creating
																</li>
																<li>
																	<i className="flaticon-checked"></i>
																	Industries
																</li>
															</ul>
														</div>
													</div>

													<div className="text-center">
														<Link
															href="/services"
															className="default-btn"
														>
															Discover More
														</Link>
													</div> */}
												</div>
											</div>

											<div className="col-lg-6">
												<div className="industries-img right-img">
													<img
														src="/images/offer2.png"
														alt="Image"
													/>
												</div>
											</div>
										</div>
									</div>

									{/* Tab item #3 */}
									<div id="tab3" className="tabs_item">
										<div className="row  align-items-center">
											<div className="col-lg-6">
												<div className="industries-img left-img">
													<img
														src="/images/offer3.png"
														alt="Image"
													/>
												</div>
											</div>

											<div className="col-lg-6">
												<div className="industries-content">
													<h3>La médecine</h3>
													<p>
													La médecine a contribué à la création d'Onirix en fournissant des connaissances sur le fonctionnement du corps humain et sur la façon dont les maladies et les troubles peuvent affecter le sommeil et les rêves.
													</p>
													<p>
													Cette compréhension a permis aux scientifiques de concevoir des modèles d'IA qui peuvent aider à diagnostiquer et à traiter des troubles du sommeil, ainsi qu'à interpréter les rêves de manière plus précise et efficace.
													</p>
													<p>Elle peut aider les professionnels de la santé à interpréter les rêves de leurs patients atteints de troubles du sommeil, et à ajuster leur traitement en conséquence.</p>

													{/* <div className="row">
														<div className="col-lg-6 col-sm-6">
															<ul className="industries-item">
																<li>
																	<i className="flaticon-checked"></i>
																	Creating
																</li>
																<li>
																	<i className="flaticon-checked"></i>
																	Consectetur
																</li>
																<li>
																	<i className="flaticon-checked"></i>
																	Adipisicing
																</li>
															</ul>
														</div>

														<div className="col-lg-6 col-sm-6">
															<ul className="industries-item">
																<li>
																	<i className="flaticon-checked"></i>
																	Artificial
																</li>
																<li>
																	<i className="flaticon-checked"></i>
																	Industry
																</li>
																<li>
																	<i className="flaticon-checked"></i>
																	Opportunities
																</li>
															</ul>
														</div>
													</div> 

													<div className="text-center">
														<Link
															href="/services"
															className="default-btn"
														>
															Discover More
														</Link>
													</div>*/}
												</div>
											</div>
										</div>
									</div>

									{/* Tab item #4 */}
									<div id="tab4" className="tabs_item">
										<div className="row  align-items-center">
											<div className="col-lg-6">
												<div className="industries-content">
													<h3>La programmation</h3>
													<p>
													La recherche en programmation a permis de développer Onirix en fournissant des algorithmes d'apprentissage automatique et de traitement du langage naturel, qui sont des composants clés de l'IA.
													</p>
													<p>
													Ces algorithmes ont été utilisés pour entraîner l'IA à comprendre les rêves et à les interpréter de manière précise et cohérente.
													</p>
													<p>La recherche en programmation continue également de jouer un rôle important dans l'amélioration et la mise à jour constante d'Onirix pour répondre aux besoins changeants des utilisateurs.</p>

													{/* <div className="row">
														<div className="col-lg-6 col-sm-6">
															<ul className="industries-item">
																<li>
																	<i className="flaticon-checked"></i>
																	Opportunities
																</li>
																<li>
																	<i className="flaticon-checked"></i>
																	Creating
																</li>
																<li>
																	<i className="flaticon-checked"></i>
																	Industries
																</li>
															</ul>
														</div>

														<div className="col-lg-6 col-sm-6">
															<ul className="industries-item">
																<li>
																	<i className="flaticon-checked"></i>
																	Security
																</li>
																<li>
																	<i className="flaticon-checked"></i>
																	Highest
																</li>
																<li>
																	<i className="flaticon-checked"></i>
																	Priority
																</li>
															</ul>
														</div>
													</div>

													<div className="text-center">
														<Link
															href="/services"
															className="default-btn"
														>
															Discover More
														</Link>
													</div> */}
												</div>
											</div>

											<div className="col-lg-6">
												<div className="industries-img right-img">
													<img
														src="/images/offer4.png"
														alt="Image"
													/>
												</div>
											</div>
										</div>
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

export default WhatWeOffer;
