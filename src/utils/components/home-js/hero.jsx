import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/component/home-css/hero.css";

const Hero = () => {
	console.log("Hero");
	return (
		<>
			<div className="hero-welcome">
				<h2 className="hero-h2">Hello and welcome to</h2>
			</div>
			<h1 className="hero-h1">
				<span className="hero-span">C</span>
				<span className="hero-span">O</span>
				<span className="hero-span">D</span>
				<span className="hero-span">E</span>
				<span className="hero-span">W</span>
				<span className="hero-span">A</span>
				<span className="hero-span">L</span>
				<span className="hero-span">K</span>
				<span className="hero-span">E</span>
				<span className="hero-span">R</span>
			</h1>
			<div className="hero-description">
				<p>
					We are a programming school aimed at helping one become the
					best programer they can be. We specialize in{" "}
					<strong>FrontEnd & BackEnd</strong> web development and many
					more exciting and innovative courses.
				</p>
				<button className="btn hero-btn">
					<Link to="/about">More Info</Link>
				</button>
			</div>
		</>
	);
};

export default Hero;
