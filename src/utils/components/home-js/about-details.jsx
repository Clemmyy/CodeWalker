import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/component/home-css/about-details.css";

const AboutDetails = () => {
	return (
		<>
			<div className="about-details_content">
				<h2 className="about-details_title">Who are we?</h2>
				<p className="about-details_description d1">
					Hi there! We are CodeWalker, a programming school. We cater
					for <strong>beginners</strong>, if you're new to programming
					and coding and you wish to acquire the skills to be the
					best, <strong>intermediates</strong> who have experience in
					programming and are looking to enhance their learning and{" "}
					<strong>professionals</strong> who know the ins and outs of
					the programming world.
				</p>
				<p className="about-details_description d2">
					For more information of if you want to know us even more,{" "}
					<br /> please visit our <Link to="/about">About Us.</Link>
				</p>
			</div>
		</>
	);
};

export default AboutDetails;
