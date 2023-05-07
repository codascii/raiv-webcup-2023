import React, { useState } from "react";
import Link from "next/link";
import FsLightbox from "fslightbox-react";

const MainBanner = () => {
	// if toggler is updated when lightbox is closed it will open it
	const [toggler, setToggler] = useState(false);

	return (
		<>
			<FsLightbox
				toggler={toggler}
				sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
			/>

			<div className="main-banner-area main-banner-area-three">
				<div className="container-fluid">
					<div className="row">
						<div className="col-lg-6">
							<div className="banner-text">
								<h1
									data-aos="fade-down"
									data-aos-duration="1200"
									data-aos-delay="200"
								>
									ONIRIX est une intelligence artificielle
									avancée.
								</h1>

								<p
									data-aos="fade-down"
									data-aos-duration="1200"
									data-aos-delay="300"
								>
									Des rêves pour aider les gens à mieux
									comprendre la signification et les
									implications de leurs rêves.
								</p>

								<div
									className="banner-btn"
									data-aos="fade-down"
									data-aos-duration="1200"
									data-aos-delay="400"
								>
									<Link
										href="/dreams-prediction"
										className="default-btn"
									>
										Essayez Onirix
									</Link>

									{/* <div
										onClick={() => setToggler(!toggler)}
										className="default-btn active popup-youtube"
									>
										<i className="bx bx-play"></i> Comment
										ça marche?
									</div> */}
								</div>
							</div>
						</div>

						<div className="col-lg-6">
							{/* Main Image */}
							<div className="banner-main-img banner-one-main-img">
								<img
									src="/images/home-three/main-img3.png"
									alt="Image"
								/>
							</div>

							{/* Banner Shape Images */}
							<div className="banner-img">
								<img
									className="animate__animated animate__fadeInDown animate__fast"
									src="/images/home-three/shape1.png"
									alt="Image"
								/>
								<img
									className="animate__animated animate__fadeInDown animate__fast"
									src="/images/home-three/shape2.png"
									alt="Image"
								/>
							</div>
						</div>
					</div>
				</div>

				{/* Shape Images */}
				<div className="over-shape">
					<img
						src="/images/home-one/shape/animate1.png"
						alt="Image"
					/>
					<img
						src="/images/home-one/shape/animate1.png"
						alt="Image"
					/>
					<img
						src="/images/home-one/shape/animate2.png"
						alt="Image"
					/>
					<img
						src="/images/home-one/shape/animate2.png"
						alt="Image"
					/>
					<img
						src="/images/home-one/shape/animate3.png"
						alt="Image"
					/>
				</div>

				<div className="white-shape">
					<img
						src="/images/home-three/bottom-shape.png"
						alt="Image"
					/>
				</div>
			</div>
		</>
	);
};

export default MainBanner;
