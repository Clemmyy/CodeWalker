import React from "react";

import Header from "../utils/components/home-js/header";
import MobileNav from "../utils/components/home-js/mobile";
import Footer from "../utils/footer";

import AboutHero from "../utils/components/about-js/hero";
import Details1 from "../utils/components/about-js/details-1";
import Details2 from "../utils/components/about-js/details-2";
import Senior from "../utils/components/about-js/senior-team";
import Staff from "../utils/components/about-js/staff";

const About = () => {
	return (
		<div className="about">
			<nav>
				<Header />
				<MobileNav />
			</nav>
			<main>
				<section className="about-hero container">
					<AboutHero />
				</section>
				<section className="about-details_1 section container">
					<Details1 />
				</section>
				<section className="about-details_2 section container">
					<Details2 />
				</section>
				<section className="about-senior_team section container">
					<Senior />
				</section>
				<section className="about-staff section container">
					<Staff />
				</section>
			</main>
			<footer className="footer container">
				<Footer />
			</footer>
		</div>
	);
};

export default About;
