import React from "react";

import Header from "../utils/components/home-js/header";
import MobileNav from "../utils/components/home-js/mobile";
import Footer from "../utils/footer";

import ServiceHero from "../utils/components/service-js/hero";
import Courses from "../utils/components/service-js/courses";
import Motivation from "../utils/components/service-js/motive";

const Service = () => {
	return (
		<div className="service">
			<nav>
				<Header />
				<MobileNav />
			</nav>
			<main>
				<section className="service-hero container">
					<ServiceHero />
				</section>
				<section className="courses section container">
					<Courses />
				</section>
				<section className="motivation section container">
					<Motivation />
				</section>
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default Service;
