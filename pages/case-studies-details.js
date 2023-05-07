import React, { useEffect, useState } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import CaseStudiesDetailsContent from "../components/CaseStudiesDetails/CaseStudiesDetailsContent";
import CTA from "../components/Common/CTA";
import Footer from "../components/Layouts/Footer";

const caseStudiesDetailData = [
	{
		key: "gagner",
		image: "image-ai2",
		title: "Elle a gagné 2 prix avec son film créé avec Midjourney : Anna Apter nous explique sa démarche",
		subtitle: "",
		content: [
			"Imaginez un enfant qui fête ses treize ans dans un monde où tous les visages autour de lui n'existent pas. » Les enfants du court-métrage Imagine d'Anna Apter n'existent pas. La réalisatrice française a adopté un parti pris artistique : pour parler de l'artificialité de nos vies connectées, elle a utilisé une intelligence artificielle.",
			"Comme beaucoup, elle a découvert les capacités des IA récemment, lors du développement de Midjourney et de ChatGPT. « Ça m'a effrayé autant que ça m'a fasciné. Je trouvais ça fou », confie la réalisatrice et scénariste à Numerama. « Je me suis demandée ce que je pouvais faire de créatif, comment je pouvais créer quelque chose à partir de ça. »",
			"Le résultat est étonnant, fascinant. En partie perturbant. Imagine met en scène l'artificialité de nos vies à travers plusieurs niveaux de lecture — les images présentées, le texte et l'usage de l'IA pour concevoir l'œuvre –, tout en apportant plus de questions que de réponses. La démarche d'Anna Apter a d'ailleurs conquis le Nikon Film Festival, lors de son édition 2023 : Imagine a remporté le Prix de la critique et le Prix de la mise en scène.",
			"« J'étais très étonnée de recevoir un prix. Je m'y attendais pas, mais alors vraiment pas », confie Anna Apter. « Je n'ai jamais communiqué sur mes réseaux sur le fait que je l'avais soumis au Nikon et je ne pensais pas du tout qu'il serait remarqué. Il y avait 2 250 films. Je pensais qu'il serait perdu dans les méandres du Nikon Film Festival. »",
			"Elle est reconnaissante aussi que le jury ait su percevoir la part de l'IA… c'est-à-dire, surtout, la part de l'humaine dans le travail artistique de l'ensemble. Il lui tenait à cœur de « ne pas laisser la machine créer complètement quelque chose de A à Z ». À l'heure où les IA chamboulent des métiers, notamment dans l'art, la question est importante. Mais contrairement aux idées reçues, la réalisatrice ne s'est pas contentée d'appuyer sur un bouton : Imagine n'est pas le travail d'une IA, mais le travail d'une humaine ayant utilisé une IA.",
		],
	},
	{
		key: "tuer",
		image: "image-ai3",
		title: "Une IA « qui essaie de vous tuer dès qu'elle le peut » : Tesla étrillé par le cofondateur d'Apple",
		subtitle: "",
		content: [
			"Une IA peut-elle chercher à nous tuer ? C'est oui d'après Steve Wozniak, cofondateur d'Apple, visant spécifiquement celle développée par Tesla pour la conduite autonome. Dans un entretien télévisé diffusé sur CNN le 3 mai, l'intéressé s'est montré assez offensif contre Tesla et a dressé un portrait peu flatteur d'Elon Musk.",
			"Pourtant, la question initiale visait juste à savoir s'il avait déjà discuté avec Elon Musk. Mais si le début de réponse semble assez favorable, les critiques sur les méthodes utilisées par Tesla arrivent assez vite.",
			"Steve Wozniak a probablement quelques rancœurs contre le constructeur automobile américain, ou simplement contre son fantasque patron. Au point de lancer un sacré pavé dans la marre quand il affirme en direct à la télé : « J'ai vraiment cru en ces possibilités, alors qu'on est très loin de la réalité. Et si vous voulez un exemple criant d'une IA qui déconne, revendique tout et son contraire et essaie de vous tuer à la moindre occasion, achetez une Tesla. »",
			"Interview de Steve Wozniak sur CNN. // Source : capture vidéo CNN Il est difficile de dire si ses propos sont un peu ironiques ou s'il vise vraiment à taper là où cela fait mal. Comme le rappel le média Electrek, Steve Wozniak a acheté une Tesla Model S peu après son lancement aux États-Unis, en 2013. Il connaît donc bien les produits de la marque pour les avoir utilisés pendant plusieurs années. Malgré son achat, le cofondateur d'Apple confie qu'il n'a jamais eu l'occasion de discuter avec Elon Musk. Après cette interview, on peut douter que cela puisse se faire un jour entre les deux hommes.",
			"Steve Wozniak particulièrement déçu par les promesses de conduite autonome. À l'époque, a-t-il dit dans son interview à CNN, il a été séduit par le discours d'Elon Musk concernant la conduite autonome : « J'ai cru à ce qu'il disait : qu'une voiture traverserait le pays d'elle-même d'ici à la fin de l'année 2016. »",
		],
	},
	{
		key: "IA",
		image: "image-ai1",
		title: "La technologie émergente",
		subtitle: "",
		content: [
			"La technologie émergente de l'intelligence artificielle, ou IA, croise plusieurs techniques simulant les processus cognitifs humains. Existant depuis les années 60, la recherche s'est développée récemment au point de multiplier les applications: voitures autonomes, diagnostics médicaux, assistants personnels, finance algorithmique, robots industriels, jeux vidéo... L'explosion de la puissance de calcul des machines a fait basculer l'IA, dans les années 2010, d'un classique de science-fiction à une réalité de plus en plus proche, devenue enjeu scientifique majeur. Deep-learning, algorithmes de réseaux néronaux ou encore ordinateurs quantiques: autant d'espoirs pour les transhumanistes, autant de craintes pour de nombreuses personnalités du monde high-tech -dont Stephen Hawking, Bill Gates ou Elon Musk- qui pointent les risques éthiques d'une IA rendue trop autonome ou consciente, et le fragile équilibre bénéfices-risques sur l'emploi.",
		],
	},
	{
		key: "technologie",
		image: "services-details",
		title: "L'IA générative a déjà des cas d'usages avérés autour de l'expérience client",
		subtitle:
			"Le vendeur de voitures d'occasion CarMax utilise OpenAI pour résumer les avis clients",
		content: [
			"OpenAI est une entreprise spécialisée dans l'intelligence artificielle générative, qui a déjà trouvé des cas d'usage dans diverses industries. L'un de ses premiers clients est CarMax, un revendeur de voitures d'occasion basé aux États-Unis, qui a utilisé l'API OpenAI pour générer des résumés d'avis clients sur son site Web. Grâce à l'automatisation de la création de contenu, CarMax a pu rationaliser la création de résumés textuels pour ses pages de recherche de voitures, fournissant rapidement aux clients un contenu significatif qui améliore également le classement des pages dans les moteurs de recherche.",
			"En utilisant l'API OpenAI, CarMax a pu créer des résumés de milliers de commentaires en quelques mois seulement, ce qui aurait pris près de 11 ans en utilisant leur processus manuel existant. De plus, la qualité des résumés était meilleure que prévu, avec un taux d'approbation des contenus de 80%. L'application de l'intelligence artificielle générative dans ce cas d'usage a permis à CarMax de mieux organiser, publier et mettre à jour une énorme quantité de données et d'informations, ce qui a amélioré l'expérience client et le référencement du site Web.",
			"En utilisant l'API OpenAI basée sur le Cloud, CarMax a pu accéder à des modèles à grande échelle tels que GPT-3 et Codex pour générer du contenu pour ses pages Web de recherche d'automobiles. Par exemple, la page Kia Sorento 2018 contient plusieurs sections de texte générées par l'intelligence artificielle, dont les sections « Nouveauté cette année » et « Versions Kia Sorento 2018 », le résumé de l'article et un résumé en deux phrases des avis des clients. Cela a permis à CarMax de fournir des informations pertinentes aux clients sur leur inventaire, tout en améliorant l'expérience utilisateur et en réduisant les coûts de création de contenu.",
			"Dans l'ensemble, l'utilisation de l'intelligence artificielle générative pour la rédaction de contenus a permis à CarMax de rationaliser ses processus de création de contenu, d'améliorer l'expérience client et d'augmenter le classement de ses pages de recherche de voitures dans les moteurs de recherche. Ce cas d'usage montre que l'application de l'intelligence artificielle générative peut être bénéfique pour les entreprises qui ont besoin de créer du contenu à grande échelle tout en réduisant les coûts de production.",
		],
	},
];

export default function CaseStudiesDetails() {
	const [caseStudy, setCaseStudy] = useState(null);
	const [caseImage, setCaseImage] = useState("");

	useEffect(() => {
		const params = new URLSearchParams(window.location.search);

		const currentCase = caseStudiesDetailData.find(
			(item) => item.key === params.get("case")
		);
		setCaseStudy(currentCase);
		setCaseImage(params.get("img"));
	}, []);

	return (
		<>
			<Navbar />

			{caseStudy && (
				<>
					<PageBanner
						pageTitle={caseStudy.title}
						homePageUrl="/"
						homePageText="Accueil"
						activePageText="Étude de cas"
					/>

					<CaseStudiesDetailsContent
						caseStudy={caseStudy}
						caseImage={caseImage}
					/>
				</>
			)}

			<CTA />

			<Footer />
		</>
	);
}
