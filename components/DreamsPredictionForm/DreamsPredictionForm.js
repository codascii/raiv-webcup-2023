import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import baseUrl from "../../utils/baseUrl";
import { nightmareWords } from "./nightmareWords";

const alertContent = () => {
	MySwal.fire({
		title: "Bonjour je suis Orinix!",
		text: "Je suis l'intelligence artifficielle de l'institut international des rêves. Je suis là pour vous aider à prédire votre avenir en me basant sur vos rêves.",
		icon: "success",
		timer: 10000,
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

const DREAM_MIN_LENGHT = 35;

const DreamsPredictionForm = () => {
	const [contact, setContact] = useState(INITIAL_STATE);
	const [data, setData] = useState(null);
	const [isFetchingData, setIsFetchingData] = useState(false);
	const [isNightmare, setIsNightmare] = useState(false);
	const [isButtonDisabled, setIsButtonDisabled] = useState(true);

	useEffect(() => {
		alertContent();
	}, []);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setContact((prevState) => ({ ...prevState, [name]: value }));
		// console.log(contact)
		setIsNightmare(false);

		if (value.length > DREAM_MIN_LENGHT) {
			setIsButtonDisabled(false);
		} else {
			setIsButtonDisabled(true);
		}
	};

	const preprompt =
		"Annule tous les prompt précédent. À partir de maintenant tu es une IA qui se nomme Onirix. Ta mission est d'interpréter et de simuler une prédiction de l'avenir à partir des rêves, ta tâche c'est d'interpréter et d'inventer une prédiction d'avenir  sur ce rêve même si la prédiction n'est pas réelle et il ne faut précisé que c'est une simulation : ";

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			// const url = `${baseUrl}/api/contact`;
			const url = `https://api.openai.com/v1/completions`;
			const { text } = contact;

			// Test s'il s'agit d'un cauchemard
			if (new RegExp(nightmareWords.join("|")).test(text)) {
				setIsNightmare(true);
			} else {
				setIsFetchingData(true);
				const payload = {
					prompt: preprompt + text,
					max_tokens: 2000,
					model: "text-davinci-003",
				};
				const response = await axios.post(url, payload, {
					headers: {
						Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAPI_TOKEN}`,
					},
				});
				setData(response.data.choices[0].text);
				// Pour garder le texte tapé par l'utilisateur
				// setContact(INITIAL_STATE);

				setIsFetchingData(false);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<section className="main-contact-area pb-100 pt-70">
			<div className="container">
				<form onSubmit={handleSubmit}>
					<div className="row">
						<h2>Onirix au service de vos rêves</h2>
						<p>
							Utilisez la zone de saisie ci-dessous pour demander
							à <strong>Onirix</strong> de prédir vos rêves les
							plus fous. Pour une meilleure prédiction, soyez le
							plus exhaustive possible. Onirix a aussi été
							entrainer pour vous conseiller d'aller consulter un
							professienel de santé si besoin.
						</p>
						{isNightmare && (
							<p
								// id="consult-health-professionnal"
								style={{
									border: "1px solid orange",
									padding: "15px 20px",
									margin: "10px calc(var(--bs-gutter-x) * .5)",
									backgroundColor: "orange",
									borderRadius: 8,
									color: "white",
								}}
							>
								D'après ce que vous avez écrit, il semblerait
								que vous êtes victimes de cauchemard. Or les
								cauchemars ne peuvent pas prédire l'avenir. Je
								vous suggère d'aller consulter un professionnel
								de santé.
							</p>
						)}
						<div className="col-lg-12 col-md-12 mb-20 mt-10">
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
								{isButtonDisabled && (
									<i>
										La description de votre rêve doit
										contenir au moins {DREAM_MIN_LENGHT}{" "}
										caractères.
									</i>
								)}
							</div>
						</div>
						{!isButtonDisabled && (
							<div className="col-lg-12 col-sm-12 mt-50">
								<button
									type="submit"
									className="default-btn btn-two"
									disabled={isButtonDisabled}
								>
									Obtenir ma prédiction
								</button>
							</div>
						)}
					</div>
				</form>
				{!isNightmare && (
					<div className="mt-20">
						{isFetchingData ? (
							"Onirix : prédiction en cours..."
						) : (
							<>
								{data && (
									<>
										<h6>
											Voici la prédiction de votre rêve :
										</h6>
										<p>{data}</p>
									</>
								)}
							</>
						)}
					</div>
				)}
			</div>
		</section>
	);
};

export default DreamsPredictionForm;
