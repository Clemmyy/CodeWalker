import React from "react";
import "../../../styles/component/review-css/donation.css";

const Donation = () => {
	return (
		<>
			<div className="donation_main">
				<h1 className="donation_h1">support our mission</h1>
				<div>
					<button className="donation_button btn">
						<a href="/">Donate Now</a>
					</button>
				</div>
			</div>
		</>
	);
};

export default Donation;
