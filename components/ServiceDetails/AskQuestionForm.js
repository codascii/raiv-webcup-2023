import React from "react";

const AskQuestionForm = () => {
	return (
		<>
			<div className="ask-question">
				<h3>Posez-nous votre question</h3>
				<form id="contactForm">
					<div className="row">
						<div className="col-lg-6 col-sm-6">
							<div className="form-group">
								<input
									type="text"
									name="name"
									id="name"
									className="form-control"
									required
									placeholder="Nom"
								/>
							</div>
						</div>

						<div className="col-lg-6 col-sm-6">
							<div className="form-group">
								<input
									type="email"
									name="email"
									id="email"
									className="form-control"
									required
									placeholder="Adresse E-mail"
								/>
							</div>
						</div>

						<div className="col-lg-6 col-sm-6">
							<div className="form-group">
								<input
									type="text"
									name="phone_number"
									id="phone_number"
									required
									className="form-control"
									placeholder="Numéro de téléphone"
								/>
							</div>
						</div>

						<div className="col-lg-6 col-sm-6">
							<div className="form-group">
								<input
									type="text"
									name="msg_subject"
									id="msg_subject"
									className="form-control"
									required
									placeholder="Sujet"
								/>
							</div>
						</div>

						<div className="col-lg-12 col-md-12">
							<div className="form-group">
								<textarea
									name="message"
									className="form-control"
									id="message"
									cols="30"
									rows="5"
									required
									placeholder="Écrivez votre message"
								></textarea>
							</div>
						</div>

						<div className="col-lg-12 col-md-12">
							<button
								type="submit"
								className="default-btn btn-two"
							>
								<span className="label">Envoyer</span>
							</button>
						</div>
					</div>
				</form>
			</div>
		</>
	);
};

export default AskQuestionForm;
