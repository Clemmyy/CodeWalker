import React from "react";

import Header from "../utils/components/home-js/header";
import MobileNav from "../utils/components/home-js/mobile";
import Footer from "../utils/footer";

import ContactHero from "../utils/components/contact-js/hero";
import ContactPage from "../utils/components/contact-js/contact";

const Contact = () => {
	return (
		<div className="contact">
			<nav>
				<Header />
				<MobileNav />
			</nav>
			<main>
				<section className="contact-hero container">
					<ContactHero />
				</section>
				<section className="contact-page section container">
					<ContactPage />
				</section>
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default Contact;
