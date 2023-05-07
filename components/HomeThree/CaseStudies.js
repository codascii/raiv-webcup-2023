import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const CaseStudies = () => {
	return (
		<>
			<section className="case-area pb-100">
				<div className="container">
					<div className="section-title">
						<span>Études</span>
						<h2>Nos études de cas récentes</h2>
					</div>

					<Swiper
						spaceBetween={25}
						pagination={{
							clickable: true,
						}}
						autoplay={{
							delay: 6500,
							disableOnInteraction: true,
							pauseOnMouseEnter: true,
						}}
						breakpoints={{
							0: {
								slidesPerView: 1,
							},
							576: {
								slidesPerView: 2,
							},
							992: {
								slidesPerView: 3,
							},
						}}
						modules={[Pagination, Autoplay]}
						className="case-top-wrap"
					>
						<SwiperSlide>
							<div className="case-wrap">
								<div className="single-case">
									<img
										src="/images/cases/case1.png"
										alt="Image"
										className="w-100"
									/>

									<Link
										href="/case-studies-details"
										className="link-icon"
									>
										<i className="bx bx-plus"></i>
									</Link>
								</div>

                <h3>
                  <Link href="/case-studies-details">
                  Avez-vous peur que...
                  </Link>
                </h3>
              </div>
            </SwiperSlide>

						<SwiperSlide>
							<div className="case-wrap">
								<div className="single-case">
									<img
										src="/images/cases/case2.png"
										alt="Image"
										className="w-100"
									/>

									<Link
										href="/case-studies-details"
										className="link-icon"
									>
										<i className="bx bx-plus"></i>
									</Link>
								</div>

                <h3>
                  <Link href="/case-studies-details">IA et Retail : comment...</Link>
                </h3>
              </div>
            </SwiperSlide>

						<SwiperSlide>
							<div className="case-wrap">
								<div className="single-case">
									<img
										src="/images/cases/case3.png"
										alt="Image"
										className="w-100"
									/>

									<Link
										href="/case-studies-details"
										className="link-icon"
									>
										<i className="bx bx-plus"></i>
									</Link>
								</div>

                <h3>
                  <Link href="/case-studies-details">Onirix fait preuve de plus...</Link>
                </h3>
              </div>
            </SwiperSlide>

						<SwiperSlide>
							<div className="case-wrap">
								<div className="single-case">
									<img
										src="/images/cases/case4.png"
										alt="Image"
										className="w-100"
									/>

									<Link
										href="/case-studies-details"
										className="link-icon"
									>
										<i className="bx bx-plus"></i>
									</Link>
								</div>

                <h3>
                  <Link href="/case-studies-details">
                  L’IA générative a déjà...
                  </Link>
                </h3>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;
