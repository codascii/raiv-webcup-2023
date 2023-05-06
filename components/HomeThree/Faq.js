import React from "react";
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemPanel,
	AccordionItemButton,
} from "react-accessible-accordion";

const Faq = () => {
	return (
		<>
			<section className="faq-area pt-100 pb-100">
				<div className="container">
					<div className="section-title">
						<span>FAQ</span>
						<h2>Questions fréquentes</h2>
					</div>

					<div className="row align-items-center">
						<div className="col-lg-8">
							<div className="faq-accordion">
								<Accordion preExpanded={["a"]}>
									<AccordionItem uuid="a">
										<AccordionItemHeading>
											<AccordionItemButton>
											Comment fonctionne Onirix pour décrypter les rêves ?
											</AccordionItemButton>
										</AccordionItemHeading>

										<AccordionItemPanel>
											<p>
											Onirix utilise une combinaison de techniques d'apprentissage automatique et de traitement du langage naturel pour analyser les descriptions de rêves et détecter des modèles et des tendances.
											</p>
										</AccordionItemPanel>
									</AccordionItem>

									<AccordionItem uuid="b">
										<AccordionItemHeading>
											<AccordionItemButton>
											Est-ce que mes données sont sécurisées avec Onirix ?
											</AccordionItemButton>
										</AccordionItemHeading>

										<AccordionItemPanel>
											<p>
											Oui, Onirix utilise des mesures de sécurité de pointe, y compris la blockchain, pour protéger les données de ses utilisateurs contre les menaces potentielles.
											</p>
										</AccordionItemPanel>
									</AccordionItem>

									<AccordionItem uuid="c">
										<AccordionItemHeading>
											<AccordionItemButton>
											Quel est le niveau de précision des analyses de rêve fournies par Onirix ?
											</AccordionItemButton>
										</AccordionItemHeading>
										<AccordionItemPanel>
											<p>
											Onirix fournit des analyses de rêve précises et fiables grâce à son utilisation de technologies avancées de l'IA et de l'apprentissage automatique.
											</p>
										</AccordionItemPanel>
									</AccordionItem>

									<AccordionItem uuid="d">
										<AccordionItemHeading>
											<AccordionItemButton>
											Combien coûte l'utilisation d'Onirix ?
											</AccordionItemButton>
										</AccordionItemHeading>
										<AccordionItemPanel>
											<p>
											Les tarifs pour l'utilisation d'Onirix dépendent du plan choisi, mais nous proposons des prix abordables pour permettre à tous de bénéficier des avantages de notre technologie avancée.
											</p>
										</AccordionItemPanel>
									</AccordionItem>

									<AccordionItem uuid="e">
										<AccordionItemHeading>
											<AccordionItemButton>
											Comment puis-je intégrer Onirix dans mon entreprise ou mon site web ?
											</AccordionItemButton>
										</AccordionItemHeading>
										<AccordionItemPanel>
											<p>
											Contactez notre équipe commerciale pour discuter des options d'intégration et des solutions sur mesure pour répondre à vos besoins spécifiques.
											</p>
										</AccordionItemPanel>
									</AccordionItem>
								</Accordion>
							</div>
						</div>

						<div className="col-lg-4">
							<div className="faq-img">
								<img src="/images/faq-img.png" alt="Image" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Faq;
