import React, { useEffect, useState } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ServiceDetailsContent from "../components/ServiceDetails/ServiceDetailsContent";
import Footer from "../components/Layouts/Footer";

const servicesDetailData = [
	{
		key: "psychologie",
		image: "psychologie",
		secondaryImage: "psyco-miniature",
		title: "La psychologie",
		subtitle:
			"Comprendre le pouvoir de la psychologie pour interpréter les rêves avec Onirix",
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
		image: "UI-UX",
		secondaryImage: "UI-UX-miniature",
		title: "UI/UX Design",
		subtitle:
			"Onirix : une expérience utilisateur fluide et intuitive pour l'analyse des rêves grâce à un design UI/UX bien pensé",
		content: [
			"Onirix est une plateforme d'analyse de rêves qui offre une expérience utilisateur fluide et intuitive grâce à un design UI/UX bien pensé. L'équipe de conception de Onirix a pris en compte tous les détails pour rendre l'utilisation de la plateforme facile et agréable pour les utilisateurs.",
			"L'interface utilisateur de Onirix est claire et bien organisée, avec une navigation facile à comprendre pour les utilisateurs. Le design est minimaliste et épuré, avec des couleurs apaisantes pour encourager la détente et la réflexion. Les boutons et les icônes sont également clairement étiquetés pour éviter toute confusion ou malentendu.",
			"En ce qui concerne l'expérience utilisateur, Onirix est conçu pour être accessible et facile à utiliser, même pour les débutants. Les processus d'inscription et de création de profil sont simples et rapides, avec des instructions claires pour guider les utilisateurs tout au long du processus. Les utilisateurs peuvent facilement ajouter des descriptions de rêves, visualiser des analyses et recevoir des prédictions grâce à l'interface conviviale de Onirix.",
			"En somme, le design UI/UX de Onirix est bien pensé pour offrir une expérience utilisateur agréable et facile à utiliser, tout en offrant des fonctionnalités de pointe pour l'analyse des rêves. L'objectif est de rendre l'analyse des rêves accessible à tous, et le design de Onirix y contribue grandement.",
		],
		secondaryContent: ["Ergonomie", "Expérience utilisateur"],
	},
	{
		key: "creativity",
		image: "creativiter",
		secondaryImage: "creativiter-miniature",
		title: "La créativité",
		subtitle: "Libérez votre créativité avec l'IA avancée d'ONIRIX",
		content: [
			"Onirix est une plateforme qui encourage la créativité dans l'interprétation et l'analyse des rêves. En effet, l'objectif de Onirix est de permettre aux utilisateurs d'explorer leur monde intérieur et de découvrir des aspects d'eux-mêmes qu'ils ne connaissaient peut-être pas.",
			"Pour stimuler la créativité, Onirix propose des outils d'analyse de rêves avancés, qui permettent de détecter des modèles et des tendances dans les rêves des utilisateurs. Ces outils sont conçus pour offrir des analyses approfondies qui peuvent aider les utilisateurs à interpréter leurs rêves de manière plus créative.",
			"Onirix encourage également la créativité en permettant aux utilisateurs de partager leurs rêves avec d'autres personnes et de recevoir des commentaires constructifs de la part de la communauté. Cela peut être utile pour encourager l'imagination et la réflexion créative.",
			"En outre, Onirix propose des fonctionnalités uniques qui permettent aux utilisateurs d'explorer leur créativité de manière plus approfondie. Par exemple, les utilisateurs peuvent utiliser des images, des sons et d'autres éléments multimédias pour enrichir leur expérience de rêve et stimuler leur créativité.",
			"En somme, Onirix est une plateforme qui encourage la créativité dans l'analyse et l'interprétation des rêves. Grâce à des outils avancés et des fonctionnalités uniques, Onirix permet aux utilisateurs d'explorer leur monde intérieur de manière plus créative et stimulante.",
		],
		secondaryContent: ["Innovation", "Intelligence artificielle"],
	},
	{
		key: "marketing",
		image: "marketing",
		secondaryImage: "marketin-miniature",
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
		image: "production",
		secondaryImage: "production-miniature",
		title: "L'ingénierie de production",
		subtitle:
			"De l'élaboration à la production: comment Onirix déploie son IA avancée pour aider les utilisateurs à comprendre leurs rêves",
		content: [
			"La mise en production d'ONIRIX est une étape cruciale dans le processus de développement de cette intelligence artificielle. Après des mois de développement, de tests et d'itérations, il est enfin temps de mettre ONIRIX à la disposition du public.",
			"La mise en production implique plusieurs étapes importantes, telles que la configuration de l'infrastructure nécessaire pour exécuter ONIRIX, la préparation de la base de données pour stocker les données de rêve, la mise en place de la sécurité pour protéger les informations des utilisateurs et la préparation de l'interface utilisateur pour une utilisation facile et intuitive.",
			"Une fois que toutes ces étapes sont terminées, ONIRIX est prêt à être lancé. Cependant, cela ne signifie pas que le travail est terminé. La mise en production est un processus continu qui nécessite une surveillance constante et des mises à jour régulières pour assurer le bon fonctionnement de l'IA.",
			"Le processus de mise en production peut être complexe et nécessite une grande expertise en matière de développement et d'infrastructure informatique. C'est pourquoi ONIRIX travaille en étroite collaboration avec des experts du domaine pour s'assurer que chaque étape est effectuée de manière optimale.",
			"Le succès de la mise en production dépend également de l'adoption et de la satisfaction des utilisateurs. ONIRIX s'efforce donc de fournir une expérience utilisateur exceptionnelle en offrant un support client de qualité, en écoutant les commentaires des utilisateurs et en apportant des améliorations continues à l'IA.",
			"En somme, la mise en production d'ONIRIX est une étape cruciale pour offrir aux utilisateurs une expérience de rêve unique. Elle exige une planification minutieuse, une grande expertise technique et un engagement continu envers l'amélioration et la satisfaction des utilisateurs.",
		],
		secondaryContent: ["Psychologie", "Langue"],
	},
	{
		key: "research",
		image: "searching",
		secondaryImage: "searching-miniature",
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
