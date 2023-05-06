import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import baseUrl from "../../utils/baseUrl";

const alertContent = () => {
	MySwal.fire({
		title: "Congratulations!",
		text: "Your message was successfully send and will back to you soon",
		icon: "success",
		timer: 2000,
		timerProgressBar: true,
		showConfirmButton: false,
	});
};

// Form initial state
const INITIAL_STATE = {
	name: "",
	email: "",
	number: "",
	subject: "",
	text: "",
};

const DreamsPredictionForm = () => {
	const [contact, setContact] = useState(INITIAL_STATE);
	const [data, setData] = useState(null);
	const [isFetchingData, setIsFetchingData] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setContact((prevState) => ({ ...prevState, [name]: value }));
		// console.log(contact)
	};

	const preprompt =
		"À partir de maintenant tu es une IA qui Onirix. Ta mission est d'interpréter et de simuler une prédiction de l'avenir à partir des rêves, ta tâche c'est d'interpréter et d'inventer une prédiction l'avenir  sur ce rêve même si la prédiction n'est pas réelle et il ne faut précisé que c'est une simulation : ";

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			setIsFetchingData(true);
			// const url = `${baseUrl}/api/contact`;
			const url = `https://api.openai.com/v1/completions`;
			const { text } = contact;
			const payload = {
				prompt: preprompt + text,
				max_tokens: 2000,
				model: "text-davinci-003",
			};
			const response = await axios.post(url, payload, {
				headers: {
					Authorization:
						"Bearer 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",
				},
			});
			setData(response.data.choices[0].text);
			setContact(INITIAL_STATE);

			setIsFetchingData(false);
			// alertContent();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<section className="main-contact-area pb-100 pt-70">
			<div className="container">
				<div className="contact-wrap contact-pages mb-0">
					<div className="contact-form">
						<div className="section-title">
							<h2>Onirix au service de vos rêves</h2>
						</div>

						<form onSubmit={handleSubmit}>
							<div className="row">
								{/* <div className="col-lg-6 col-sm-6">
									<div className="form-group">
										<input
											type="text"
											name="name"
											placeholder="Name"
											className="form-control"
											value={contact.name}
											onChange={handleChange}
											required
										/>
									</div>
								</div>
								<div className="col-lg-6 col-sm-6">
									<div className="form-group">
										<input
											type="text"
											name="email"
											placeholder="Email"
											className="form-control"
											value={contact.email}
											onChange={handleChange}
											required
										/>
									</div>
								</div>
								<div className="col-lg-6 col-sm-6">
									<div className="form-group">
										<input
											type="text"
											name="number"
											placeholder="Phone number"
											className="form-control"
											value={contact.number}
											onChange={handleChange}
											required
										/>
									</div>
								</div>
								<div className="col-lg-6 col-sm-6">
									<div className="form-group">
										<input
											type="text"
											name="subject"
											placeholder="Subject"
											className="form-control"
											value={contact.subject}
											onChange={handleChange}
											required
										/>
									</div>
								</div> */}
								<div className="col-lg-12 col-md-12">
									<div className="form-group">
										<textarea
											name="text"
											cols="30"
											rows="6"
											placeholder="J'ai rêvé de..."
											className="form-control"
											value={contact.text}
											onChange={handleChange}
											required
										/>
									</div>
								</div>
								<div className="col-lg-12 col-sm-12">
									<button
										type="submit"
										className="default-btn btn-two"
									>
										Envoyer
									</button>
								</div>
							</div>
						</form>
						<div className="mt-20">
							{isFetchingData ? (
								"Onirix : prédiction en cours..."
							) : (
								<>
									{data && (
										<>
											<h6>
												Voici la prédiction de votre
												rêve :
											</h6>
											<p>{data}</p>
										</>
									)}
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default DreamsPredictionForm;
