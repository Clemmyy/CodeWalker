import React from "react";
import "../../../styles/component/service-css/hero.css";

import HeroPic from "../../../img/service/robb.webp";

const ServiceHero = () => {
	return (
		<>
			<div className="service-hero_main">
				<div className="service-hero_info1">
					<div className="info1_text">
						<h1 className="service_title">
							Career-Ready <br /> <strong>Courses</strong> for{" "}
							<br /> Technological Excellence
						</h1>
						<p className="service_description">
							At CodeWalker, our courses go beyond theory. They’re
							created for college students like you, developed by
							software engineers, are applicable to the real-world
							scenarios you’ll experience once hired—and are
							designed to prepare you for a successful tech
							career. Most of all, they’re provided at no cost.
							Everyone should have access to software engineering
							careers, no matter their background.
						</p>
						<p className="service_description">
							Browse our course catalog below.
						</p>
					</div>
					<div className="info1_img">
						<img src={HeroPic} alt="Hero" />
					</div>
				</div>
			</div>
		</>
	);
};

export default ServiceHero;
