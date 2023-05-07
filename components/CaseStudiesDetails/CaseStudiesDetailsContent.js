import React from "react";

const CaseStudiesDetailsContent = ({ caseStudy, caseImage }) => {
	return (
		<>
			<section className="service-details-area ptb-100">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-9">
							<div className="service-details-wrap">
								<div className="service-img">
									<img
										src={`/images/services-details/${caseStudy.image}.jpg`}
										alt="Image"
									/>
								</div>

								<h3>{caseStudy.subtitle}</h3>
								{caseStudy.content.length > 0 &&
									caseStudy.content.map((text, index) => (
										<p key={index}>{text}</p>
									))}

								<div className="car-service-list-wrap">
									<div className="row align-items-center">
										<div className="col-lg-6 col-md-6">
											<div className="service-list-img">
												<img
													src={`/images/cases/${caseImage}.png`}
													alt="Image"
												/>
											</div>
										</div>

										<div className="col-lg-6 col-md-6">
											<div className="car-service-list">
												<ul>
													<li>
														<i className="bx bx-check"></i>
														Intelligence
														artificielle générative
													</li>
													<li>
														<i className="bx bx-check"></i>
														Résumés textuels
													</li>
													<li>
														<i className="bx bx-check"></i>
														API basée sur le Cloud
													</li>
													<li>
														<i className="bx bx-check"></i>
														Automatisation de
														l'expérience client
													</li>
													<li>
														<i className="bx bx-check"></i>
														Moteurs de recherche
														Internet
													</li>
												</ul>
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

export default CaseStudiesDetailsContent;
