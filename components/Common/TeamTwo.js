import React from "react";

const teamData = [
	{
		image: "/images/team/team5.png",
		name: "Anthony Larchal",
		designation: "Biologiste",
		aosDelay: "100",

		socialLinks: [
			{
				iconName: "bx bxl-facebook",
				url: "https://facebook.com/",
			},
			{
				iconName: "bx bxl-twitter",
				url: "https://twitter.com/",
			},
			{
				iconName: "bx bxl-linkedin",
				url: "https://linkedin.com/",
			},
			{
				iconName: "bx bxl-pinterest-alt",
				url: "https://pinterest.com/",
			},
		],
	},
	{
		image: "/images/team/team6.png",
		name: "Jacques Laurence",
		designation: "Manager division scientifique",
		aosDelay: "200",

		socialLinks: [
			{
				iconName: "bx bxl-facebook",
				url: "https://facebook.com/",
			},
			{
				iconName: "bx bxl-twitter",
				url: "https://twitter.com/",
			},
			{
				iconName: "bx bxl-linkedin",
				url: "https://linkedin.com/",
			},
			{
				iconName: "bx bxl-pinterest-alt",
				url: "https://pinterest.com/",
			},
		],
	},
	{
		image: "/images/team/team7.png",
		name: "Éloïse Marta",
		designation: "Directrice de la communication",
		aosDelay: "300",

		socialLinks: [
			{
				iconName: "bx bxl-facebook",
				url: "https://facebook.com/",
			},
			{
				iconName: "bx bxl-twitter",
				url: "https://twitter.com/",
			},
			{
				iconName: "bx bxl-linkedin",
				url: "https://linkedin.com/",
			},
			{
				iconName: "bx bxl-pinterest-alt",
				url: "https://pinterest.com/",
			},
		],
	},
];

const TeamTwo = () => {
	return (
		<>
			<section className="team-area pb-70 pt-70">
				<div className="container">
					<div className="section-title">
						<span>Membre de l'équipe</span>
						<h2>L'équipe de l'institut international des rêves</h2>
						<p>
							L'équipe de ONIRIX est composée d'experts en
							intelligence artificielle, en apprentissage
							automatique et en traitement du langage naturel.
							Leur mission est d'aider les utilisateurs à mieux
							comprendre la signification de leurs rêves et les
							implications qui en découlent.
						</p>
					</div>

					<div className="row justify-content-center">
						{teamData &&
							teamData.slice(0, 3).map((value, i) => (
								<div
									className="col-lg-4 col-sm-6"
									data-aos="fade-up"
									data-aos-duration="1200"
									data-aos-delay={value.aosDelay}
									key={i}
								>
									<div className="single-team active">
										<div className="team-single-img">
											<img
												src={value.image}
												alt="Image"
											/>

											<div className="team-img">
												<img
													src="/images/team/team-shape.png"
													alt="Image"
												/>
											</div>
										</div>

										<div className="team-content">
											<h3>{value.name}</h3>
											<span>{value.designation}</span>

											<ul>
												{value.socialLinks.map(
													(value, i) => (
														<li key={i}>
															<a
																href={value.url}
																target="_blank"
															>
																<i
																	className={
																		value.iconName
																	}
																></i>
															</a>
														</li>
													)
												)}
											</ul>
										</div>
									</div>
								</div>
							))}
					</div>
				</div>
			</section>
		</>
	);
};

export default TeamTwo;
