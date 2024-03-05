import React from "react";
import "../../../styles/component/about-css/hero.css";
import Coding from "../../../img/about/coding.webp";
import Coding2 from "../../../img/about/Coding-2.jpg";

const AboutHero = () => {
	return (
		<>
			<div className="about-hero_section">
				<div className="about-hero_first">
					<h1 className="title">Our Mission</h1>
					<p className="about-hero_p1">
						CodeWalker is reprogramming higher education to create
						the most diverse generation of engineers, CTOs, and
						founders. We deliver industry-vetted courses and career
						support centered on the needs of Black, Latino/a,
						Indigenous, and low-income students. Our students train
						with senior engineers, intern at top companies, and rise
						together to become the tech leaders of tomorrow.
					</p>
					<p className="about-hero_p2">
						With over 15,000 students and alumni from 470 colleges
						now working at 1, 024 companies, we are reshaping the
						tech workforce and the industries of the future.
					</p>
				</div>
				<div className="about-hero_second">
					<div className="images">
						<img className="image_1" src={Coding} alt="coders" />
						<img className="image_2" src={Coding2} alt="coding 2" />
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutHero;
