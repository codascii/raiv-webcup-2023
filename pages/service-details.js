import React, { useEffect, useState } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ServiceDetailsContent from "../components/ServiceDetails/ServiceDetailsContent";
import Footer from "../components/Layouts/Footer";

const servicesDetailData = [
	{
		key: "psychologie",
		image: "",
		secondaryImage: "",
		title: "La psychologie",
		subtitle: "",
		content: [
			"La psychologie est une branche de la science qui étudie le comportement humain et les processus mentaux. Elle a pour objectif de comprendre comment les gens pensent, ressentent, agissent et interagissent avec leur environnement. La psychologie peut aider les individus à mieux comprendre leur propre comportement et à trouver des moyens de s'adapter aux défis de la vie.",
			"Onirix utilise des techniques de psychologie pour aider les utilisateurs à interpréter les significations de leurs rêves. Les rêves sont souvent considérés comme un reflet de l'inconscient et peuvent offrir des aperçus précieux sur les désirs, les peurs et les préoccupations qui peuvent être difficiles à comprendre dans l'état de veille.",
			"En utilisant une combinaison de techniques d'apprentissage automatique et de traitement du langage naturel, Onirix est capable d'analyser des milliers de descriptions de rêves et de détecter des modèles et des tendances qui peuvent fournir des indices sur l'avenir. La psychologie peut aider à interpréter ces modèles et à fournir des conseils pratiques sur la façon de gérer les problèmes de la vie quotidienne.",
			"En outre, la psychologie est également utile pour aider les utilisateurs à mieux comprendre leur propre comportement et à identifier les schémas comportementaux qui peuvent être préjudiciables à leur bien-être. Par exemple, Onirix peut aider à identifier les rêves récurrents qui suggèrent une tendance à l'anxiété ou à la dépression, ce qui peut aider la personne à rechercher une aide professionnelle pour traiter ces problèmes.",
			"En somme, la psychologie est une discipline essentielle pour comprendre le comportement humain et la signification des rêves. Onirix utilise ces connaissances pour aider les utilisateurs à mieux comprendre leur propre comportement et à trouver des moyens de s'adapter aux défis de la vie.",
		],
		secondaryContent: ["Psychologie", "Langue"],
	},
	{
		key: "ui-ux-design",
		image: "",
		secondaryImage: "",
		title: "UI/UX Design",
		subtitle: "",
		content: [],
		secondaryContent: ["Ergonomie", "Expérience utilisateur"],
	},
	{
		key: "creativity",
		image: "",
		secondaryImage: "",
		title: "La créativité",
		subtitle: "",
		content: [],
		secondaryContent: ["Innovation", "Intelligence artificielle"],
	},
	{
		key: "marketing",
		image: "",
		secondaryImage: "",
		title: "Marketing",
		subtitle:
			"Comment ONIRIX utilise-t-il le marketing pour atteindre plus de personnes ?",
		content: [
			"ONIRIX propose des solutions de marketing innovantes en utilisant l'intelligence artificielle et l'analyse de données pour aider les entreprises à mieux comprendre leurs clients et à atteindre leurs objectifs de vente. Grâce à une combinaison de techniques d'apprentissage automatique et de traitement du langage naturel, ONIRIX peut analyser des données clients en temps réel pour fournir des insights précieux sur leurs préférences, leurs besoins et leurs comportements d'achat.",
			"En utilisant ces informations, ONIRIX peut aider les entreprises à élaborer des stratégies de marketing personnalisées et efficaces pour atteindre leur public cible. Par exemple, ONIRIX peut aider une entreprise à cibler les clients potentiels avec des publicités spécifiques basées sur leurs préférences, leurs habitudes d'achat et leurs comportements en ligne.",
			"ONIRIX peut également aider les entreprises à optimiser leur site web et leur expérience utilisateur grâce à des analyses approfondies de l'interface utilisateur et de l'expérience utilisateur. En utilisant des techniques d'analyse de l'expérience utilisateur et de la navigation, ONIRIX peut aider les entreprises à identifier les points faibles de leur site web et à améliorer leur expérience utilisateur pour attirer et fidéliser leurs clients.",
			"Enfin, ONIRIX peut aider les entreprises à suivre et à mesurer l'efficacité de leurs campagnes de marketing en temps réel, en leur fournissant des données précises et en temps réel sur l'engagement des clients, les conversions et les retours sur investissement. Cela permet aux entreprises de prendre des décisions éclairées et d'ajuster leur stratégie de marketing en temps réel pour obtenir des résultats optimaux.",
		],
		secondaryContent: ["Communication", "Marketing d'affiliation"],
	},
	{
		key: "ingeniering",
		image: "",
		secondaryImage: "",
		title: "L'ingénierie de production",
		subtitle: "",
		content: [],
		secondaryContent: ["Psychologie", "Langue"],
	},
	{
		key: "research",
		image: "",
		secondaryImage: "",
		title: "La recherche",
		subtitle:
			"Trouvez des réponses à vos rêves grâce à l'algorithme de recherche intelligent d'Onirix",
		content: [
			"L'algorithme de recherche de ONIRIX est l'un des piliers fondamentaux de la plateforme. Grâce à des techniques d'apprentissage automatique et de traitement du langage naturel, cet algorithme est capable d'analyser des milliers de descriptions de rêves et de trouver des correspondances avec d'autres rêves similaires.",
			"Le processus de recherche commence par l'analyse du texte brut de la description du rêve. L'algorithme utilise ensuite des techniques de traitement du langage naturel pour extraire des éléments clés tels que des mots-clés, des expressions et des thèmes récurrents. Ensuite, l'algorithme compare ces éléments à une vaste base de données de rêves précédemment analysés, en recherchant des correspondances et des similarités.",
			"Le système de recommandation de ONIRIX est également alimenté par cet algorithme de recherche avancé. Lorsqu'un utilisateur entre une description de rêve, l'algorithme analyse les mots-clés et les thèmes et suggère des rêves similaires qui pourraient aider à mieux comprendre le sens du rêve.",
			"L'un des avantages de l'algorithme de recherche de ONIRIX est sa capacité à apprendre en temps réel. Plus les utilisateurs entrent de descriptions de rêves dans la base de données, plus l'algorithme devient précis et efficace dans ses recommandations et ses recherches.",
			"En résumé, l'algorithme de recherche de ONIRIX est un outil puissant qui permet d'analyser et de trouver des correspondances entre des milliers de descriptions de rêves. Cela permet à la plateforme de fournir des résultats pertinents et précis, tout en continuant d'apprendre et de s'adapter en temps réel.",
		],
		secondaryContent: ["Recherche & Développement", "Langue"],
	},
];

export default function ServiceDetails() {
	const [service, setService] = useState(null);

	useEffect(() => {
		const params = new URLSearchParams(window.location.search);

		const currentService = servicesDetailData.find(
			(item) => item.key === params.get("service")
		);
		setService(currentService);
	}, []);

	return (
		<>
			<Navbar />

			{service && (
				<>
					<PageBanner
						pageTitle={`Détail du service : ${service.title}`}
						homePageUrl="/"
						homePageText="Accueil"
						activePageText={service.title}
					/>

					<ServiceDetailsContent service={service} />
				</>
			)}

			<Footer />
		</>
	);
}
