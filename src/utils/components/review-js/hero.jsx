import React from "react";
import "../../../styles/component/review-css/hero.css";

import HeroImage from "../../../img/review/barinstorm.webp";

const ReviewHero = () => {
	return (
		<>
			<div className="review-hero_info">
				<div className="review_img">
					<img src={HeroImage} alt="Tech brainstorming" />
					<div className="review-hero_container">
						<h1 className="review-hero_text">
							industry-leading <br />
							courses. Life <br />
							changing results.
						</h1>
						<p className="review-hero_description">
							CodeWalker is reprogramming higher education to
							create the most diverse generation of software
							engineers, CTOs, and founders through our
							industry-vetted courses and career support centered
							on the needs of Black, Latino/a, Indigenous, and
							low-income students.
						</p>
						<div className="button">
							<button className="review-hero_button btn">
								<a href="/">Donate Now</a>
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ReviewHero;
