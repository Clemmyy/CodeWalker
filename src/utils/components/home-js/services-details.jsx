import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/component/home-css/services-details.css";

const ServiceDetails = () => {
	return (
		<div>
			<div className="service-details_content">
				<h2 className="service-details_title">What we offer?</h2>
				<p className="service-details_description">
					At CodeWalker, our courses go beyond theory. They’re created
					for college students like you, developed by software
					engineers, and are applicable to the real-world scenarios
					you’ll experience once hired—and are designed to prepare you
					for a successful tech career. Most of all, they’re provided
					at reasonable costs.
				</p>
				<p className="service-details_description">
					Browse our course catalog below.
				</p>
			</div>
			<div className="service-details_container">
				<h3>Apply Now</h3>

				<div className="service-details_wrapper">
					<div className="box">
						<h1 className="box_title">Cybersecurity</h1>
						<h4 className="box_cost">
							<strong>Cost:</strong> R15 000.00
						</h4>
						<h4 className="box_timeline">
							<strong>Timeline:</strong> 10 WEEKS
						</h4>
						<h4 className="box_duration">
							<strong>Commitment:</strong> 5 - 10 hours per week
						</h4>
						<h4 className="box_skill">
							<strong>Skill level:</strong> Beginner and
							Intermediate
						</h4>
						<p className="box_description">
							Explore the complex field of digital security with
							the Cybersecurity pathway! Learn about real-world
							tools and attacks, empowering you to confidently
							discuss the basics of different areas of
							cybersecurity. Next, deep dive into the world of
							blue team security, using industry-proven techniques
							to detect, analyze, and respond to security threats.
						</p>
						<button className="service-btn btn">
							<a href="/">Apply Now</a>
						</button>
					</div>

					<div className="service-hr"></div>

					<div className="box">
						<h1 className="box_title">IOS Development</h1>
						<h4 className="box_cost">
							<strong>Cost:</strong> R21 000.00
						</h4>
						<h4 className="box_timeline">
							<strong>Timeline:</strong> 10 WEEKS
						</h4>
						<h4 className="box_duration">
							<strong>Commitment:</strong> 7 - 10 hours per week
						</h4>
						<h4 className="box_skill">
							<strong>Skill level:</strong> Intermediate and
							Professional
						</h4>
						<p className="box_description">
							Experience building iOS applications from scratch
							using Apple's native IDE (Xcode) and programming
							language (Swift) in a project-based journey of iOS
							development. Build your own custom app by the end of
							the semester. You'll begin by creating engaging user
							interfaces (UIs), then connect that UI with logic
							and cloud-based APIs to build out anything you can
							imagine.
						</p>
						<button className="service-btn btn">
							<a href="/">Apply Now</a>
						</button>
					</div>
				</div>
			</div>
			<button className="service-btn btn b1">
				<Link to='/services'>More Offers</Link>
			</button>
		</div>
	);
};

export default ServiceDetails;
