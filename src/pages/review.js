import React from "react";

import Header from "../utils/components/home-js/header";
import MobileNav from "../utils/components/home-js/mobile";
import Footer from "../utils/footer";

import ReviewHero from "../utils/components/review-js/hero";
import Impact from "../utils/components/review-js/impact";
import Donation from "../utils/components/review-js/donation";

const Review = () => {
	return (
		<div className="review">
			<nav>
				<Header />
				<MobileNav />
			</nav>
			<main>
				<section className="review-hero container">
					<ReviewHero />
				</section>
				<section className="impact section container">
					<Impact />
				</section>
				<section className="donation container">
					<Donation />
				</section>
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default Review;
