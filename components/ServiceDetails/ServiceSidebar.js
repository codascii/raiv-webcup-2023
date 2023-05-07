import React from "react";
import Link from "next/link";

const ServiceSidebar = () => {
	return (
		<>
			<div className="service-sidebar-area">
				<div className="service-list">
					<h3 className="service-details-title">Catégories</h3>
					<ul>
						<li>
							<Link href="/service-details">
								Technologie
								<i className="bx bx-check"></i>
							</Link>
						</li>
						<li>
							<Link href="/service-details">
								Astuces
								<i className="bx bx-check"></i>
							</Link>
						</li>
						<li>
							<Link href="/service-details">
								AI & IT
								<i className="bx bx-check"></i>
							</Link>
						</li>
						<li>
							<Link href="/service-details">
								Solution
								<i className="bx bx-check"></i>
							</Link>
						</li>
					</ul>
				</div>

				<div className="service-list">
					<h3 className="service-details-title">Contact Info</h3>
					<ul>
						<li>
							<a
								href="tel:+262 269 52 47 85"
								style={{ display: "inline" }}
							>
								+262 269 52 47 85
							</a>
							<i className="bx bx-phone-call bx-rotate-270"></i>
						</li>
						<li>
							<a
								href="mailto:contact@institutinternational.com"
								style={{ display: "inline" }}
							>
								contact@institutinternational.com
							</a>
							<i className="bx bx-envelope"></i>
						</li>
						<li>
							123 rue des étoiles, 97600 Mamoudzou, Mayotte
							<i className="bx bx-location-plus"></i>
						</li>
						<li>
							9h00 - 20h00
							<i className="bx bx-time"></i>
						</li>
					</ul>
				</div>

				{/* <div className="service-list">
          <h3 className="service-details-title">Download Brochures</h3>
          <ul>
            <li>
              <Link href="#">
                PDF File (1)
                <i className="bx bxs-cloud-download"></i>
              </Link>
            </li>
            <li>
              <Link href="#">
                PDF File (2)
                <i className="bx bxs-cloud-download"></i>
              </Link>
            </li>
            <li>
              <Link href="#">
                PDF File (3)
                <i className="bx bxs-cloud-download"></i>
              </Link>
            </li>
            <li>
              <Link href="#">
                PDF File (4)
                <i className="bx bxs-cloud-download"></i>
              </Link>
            </li>
          </ul>
        </div> */}
			</div>
		</>
	);
};

export default ServiceSidebar;
