import React from "react";
import "../../../styles/component/about-css/senior-team.css";

import Founder from "../../../img/about/founder.jpg";
import COO from "../../../img/about/coo.jpg";
import CTO from "../../../img/about/cto.jpg";
import CLO from "../../../img/about/clo.jpg";
import VPofMarketing from "../../../img/about/vp-mark.jpg";
import VPofFinanaceAndHR from "../../../img/about/vp-fnhr.jpg";

const Senior = () => {
	return (
		<>
			<div className="senior">
				<h1 className="s-title">Our team</h1>
				<div className="senior-team">
					<div className="senior_description-h1">
						<h1>senior management team</h1>
					</div>
					<div className="senior_description-p">
						Our team is diverse in background and experience but
						united under one vision: A world in which all people,
						regardless of background, socioeconomic status, race, or
						gender, have the access and opportunity to reach their
						full potential in the tech industry.
					</div>
				</div>
				<div className="members">
					<div className="senior_boxes">
						<img src={Founder} alt="Founder of CodeWalker" />
						<h1 className="name">Mpho Mohlakwana</h1>
						<h3 className="job_des">Founder & CEO</h3>
					</div>
					<div className="senior_boxes">
						<img
							className="lazy"
							src={COO}
							alt="Chief Operating Officer"
						/>
						<h1 className="name">Justin Scott</h1>
						<h3 className="job_des">Chief Operating Officer</h3>
					</div>
					<div className="senior_boxes">
						<img
							className="lazy"
							src={CTO}
							alt="Chief Technical Officer"
						/>
						<h1 className="name">Harvey Specter</h1>
						<h3 className="job_des">Chief Technical Officer</h3>
					</div>
					<div className="senior_boxes">
						<img
							className="lazy"
							src={CLO}
							alt="Chief Learning Officer"
						/>
						<h1 className="name">Rachel Zane</h1>
						<h3 className="job_des">Chief Learning Officer</h3>
					</div>
					<div className="senior_boxes">
						<img
							className="lazy"
							src={VPofMarketing}
							alt="Vice President of Marketing"
						/>
						<h1 className="name">Mary Ross</h1>
						<h3 className="job_des">Vice President of Marketing</h3>
					</div>
					<div className="senior_boxes">
						<img
							className="lazy"
							src={VPofFinanaceAndHR}
							alt="Vice President of Finance and HR"
						/>
						<h1 className="name">Clara Kirby</h1>
						<h3 className="job_des">
							Vice President of Finance and HR
						</h3>
					</div>
				</div>
			</div>
			<div className="staff"></div>
		</>
	);
};

export default Senior;
