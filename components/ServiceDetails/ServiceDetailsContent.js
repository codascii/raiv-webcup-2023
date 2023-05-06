import React from "react";
import ServiceSidebar from "./ServiceSidebar";
import AskQuestionForm from "./AskQuestionForm";

const ServiceDetailsContent = ({ service }) => {
	return (
		<>
			<section className="service-details-area ptb-100">
				<div className="container">
					<div className="row">
						<div className="col-lg-8">
							<div className="service-details-wrap">
								<div className="service-img">
									<img
										src={`/images/services-details/${service.image}.jpg`}
										alt="Image"
									/>
								</div>

								<h3>{service.subtitle}</h3>
								<p></p>

								{service.content.length > 0 &&
									service.content.map((paragraph, index) => (
										<p key={index}>{paragraph}</p>
									))}

								<div className="car-service-list-wrap">
									<div className="row align-items-center">
										<div className="col-lg-6 col-md-6">
											<div className="service-list-img">
												<img
													src={`/images/services-details/${service.secondaryImage}.jpg`}
													alt="Image"
												/>
											</div>
										</div>

										<div className="col-lg-6 col-md-6">
											<div className="car-service-list">
												{service.secondaryContent
													.length > 0 && (
													<ul>
														{service.secondaryContent.map(
															(text, index) => (
																<li key={index}>
																	<i className="bx bx-check"></i>
																	{text}
																</li>
															)
														)}
													</ul>
												)}
											</div>
										</div>
									</div>
								</div>

								<AskQuestionForm />
							</div>
						</div>

						<div className="col-lg-4">
							<ServiceSidebar />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ServiceDetailsContent;
