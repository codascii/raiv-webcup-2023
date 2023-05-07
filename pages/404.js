import React from "react";
import Link from "next/link";

const CustomError = () => {
	return (
		<>
			<div className="error-area">
				<div className="d-table">
					<div className="d-table-cell">
						<div className="error-content-wrap">
							<h1>
								4 <span>0</span> 4
							</h1>
							<h3>Oops, petit Onirixon !</h3>
							<p>
								Cette page ne figure pas dans mon petit coffret.
							</p>

							<Link href="/" className="default-btn btn-two">
								Institut international des rêves
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CustomError;
