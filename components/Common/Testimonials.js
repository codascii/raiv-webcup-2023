import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

const testimonialsData = [
	{
		image: "/images/clients/client1.jpg",
		name: "Olivier Thomas",
		designation: "Ingénieur commercial",
		feedbackText:
			"Onirix est vraiment un outil fascinant. Mes enfants me parlaient d'intelligence artificiel mais je n'avais pas une idée claire de ce que c'était.",

		rating: [
			{
				iconName: "bx bxs-star",
			},
			{
				iconName: "bx bxs-star",
			},
			{
				iconName: "bx bxs-star",
			},
			{
				iconName: "bx bxs-star",
			},
			{
				iconName: "bx bxs-star",
			},
		],
	},
	{
		image: "/images/clients/client2.jpg",
		name: "Catherine Dhufaud",
		designation: "Fleuriste",
		feedbackText:
			"Je faisais des rêves récurrents sans vraiment savoir ce que cela voulait dire. L'intelligence artificielle Onirix m'a aidé à y voir plus claire.'",

		rating: [
			{
				iconName: "bx bxs-star",
			},
			{
				iconName: "bx bxs-star",
			},
			{
				iconName: "bx bxs-star",
			},
			{
				iconName: "bx bxs-star",
			},
			{
				iconName: "bx bxs-star",
			},
		],
	},
	{
		image: "/images/clients/client3.jpg",
		name: "Samuel Chan",
		designation: "Directeur général",
		feedbackText:
			"J'apprécie vraiment Onirix. Je l'utilise depuis que j'ai appris son existance par un collègue, qui a trouvé sa vocation grace à Onirix.",

		rating: [
			{
				iconName: "bx bxs-star",
			},
			{
				iconName: "bx bxs-star",
			},
			{
				iconName: "bx bxs-star",
			},
			{
				iconName: "bx bxs-star",
			},
			{
				iconName: "bx bxs-star",
			},
		],
	},
	{
		image: "/images/clients/client4.jpg",
		name: "Émilie Bodichon",
		designation: "Psychologue",
		feedbackText:
			"Je remercie l'institut internationale des rêves de nous avoir mit à disposition Onirix. Cette IA nous aide à mieux comprendre nos rêves.",

		rating: [
			{
				iconName: "bx bxs-star",
			},
			{
				iconName: "bx bxs-star",
			},
			{
				iconName: "bx bxs-star",
			},
			{
				iconName: "bx bxs-star",
			},
			{
				iconName: "bx bxs-star",
			},
		],
	},
];

const Testimonials = () => {
	return (
		<>
			<section className="client-area ptb-100">
				<div className="container">
					<div className="section-title">
						<span>Témoignages</span>
						<h2>Ce qu'en pense nos utilisateurs</h2>
					</div>

					<Swiper
						spaceBetween={25}
						navigation={true}
						autoplay={{
							delay: 6500,
							disableOnInteraction: true,
							pauseOnMouseEnter: true,
						}}
						breakpoints={{
							0: {
								slidesPerView: 1,
							},
							768: {
								slidesPerView: 2,
							},
							992: {
								slidesPerView: 3,
							},
						}}
						modules={[Navigation, Autoplay]}
						className="testimonials-slide"
					>
						{testimonialsData &&
							testimonialsData.slice(0, 10).map((value, i) => (
								<SwiperSlide key={i}>
									<div className="single-client">
										<i className="quotes flaticon-left-quotes-sign"></i>
										<p>{value.feedbackText}</p>

										<ul>
											{value.rating.map((value, i) => (
												<li key={i}>
													<i
														className={
															value.iconName
														}
													></i>
												</li>
											))}
										</ul>

										<div className="client-img">
											<img
												src={value.image}
												alt="Image"
											/>
											<h3>{value.name}</h3>
											<span>{value.designation}</span>
										</div>
									</div>
								</SwiperSlide>
							))}
					</Swiper>
				</div>
			</section>
		</>
	);
};

export default Testimonials;
