import React from "react";

import Header from "../utils/components/home-js/header";
import MobileNav from "../utils/components/home-js/mobile";
import Footer from "../utils/footer";

import Hero from "../utils/components/home-js/hero";
import AboutDetails from "../utils/components/home-js/about-details";
import ServiceDetails from "../utils/components/home-js/services-details";
import ReviewDetails from "../utils/components/home-js/review-details";

const Home = () => {
	return (
		<div>
			<nav>
				<Header />
				<MobileNav />
			</nav>
			<main>
				<section className="hero container">
					<Hero />
				</section>
				<section
					className="about-details section container"
					id="about-details"
				>
					<AboutDetails />
				</section>
				<section
					className="service-details section container"
					id="service-details"
				>
					<ServiceDetails />
				</section>
				<section className="review-details section container">
					<ReviewDetails />
				</section>
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default Home;
