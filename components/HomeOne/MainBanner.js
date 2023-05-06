import React from "react";
import Link from "next/link";

const MainBanner = () => {
  return (
    <>
      <section className="main-banner-area main-banner-area-one">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="banner-text">
                <h1
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  Institut Internationnal des rêves
                </h1>

                <p
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  Et si vos rêves ne se limitaient pas à être de simples illusions de l'esprit ? Et s'ils étaient capables
de prédire l'avenir ? 
                </p>

                <div 
                  className="banner-btn"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  <Link href="/about-1" className="default-btn">
                    Learn More
                  </Link>

                  <Link href="/contact" className="default-btn">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              {/* Main Image */}
              <div className="banner-main-img banner-one-main-img">
                <img src="/images/home-one/main-img1.png" alt="Image" />
              </div>

              {/* Banner Shape Images */}
              <div className="banner-img">
                <img
                  className="animate__animated animate__fadeInUp animate__fast"
                  src="/images/home-one/shape1.png"
                  alt="Image"
                />
                <img
                  className="animate__animated animate__fadeInUp animate__fast"
                  src="/images/home-one/shape2.png"
                  alt="Image"
                />
                <img
                  className="animate__animated animate__fadeInRight animate__fast"
                  src="/images/home-one/shape3.png"
                  alt="Image"
                />
                <img
                  className="animate__animated animate__fadeInRight animate__fast"
                  src="/images/home-one/shape4.png"
                  alt="Image"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="over-shape">
          <img src="/images/home-one/shape/animate1.png" alt="Image" />
          <img src="/images/home-one/shape/animate2.png" alt="Image" />
          <img src="/images/home-one/shape/animate3.png" alt="Image" />
        </div>

        <div className="white-shape">
          <img src="/images/home-one/bottom-shape.png" alt="Image" />
        </div>
      </section>
    </>
  );
};

export default MainBanner;
