import React from "react";
import "../../../styles/component/service-css/motive.css";

import Target from "../../../img/service/target.png";
import Portfolio from "../../../img/service/portfolio.png";
import Hacker from "../../../img/service/hacker.png";
import Community from "../../../img/service/community.png";

const Motivation = () => {
	return (
		<>
			<div className="motive_main">
				<h1 className="motive_title">
					Why you'll want to be a CodeWalker Student
				</h1>
				<div className="motive_container">
					<div className="motive_target motive_boxes">
						<img src={Target} alt="Target" />
						<h2 className="target_title">Hone Your Skills</h2>
						<p className="target_description">
							Our curriculum was originally designed for
							professional software engineers, and it continues to
							be refined by industry experts. Each semester-long
							CodeWalker course is conducted in a custom learning
							platform that leverages GitHub, and is designed so
							students learn the latest technologies and skills
							that companies are looking
						</p>
					</div>
					<div className="motive_portfolio motive_boxes">
						<img src={Portfolio} alt="Portfolio" />
						<h2 className="portfolio_title">
							Expand Your Portfolio
						</h2>
						<p className="portfolio_description">
							Expand your GitHub portfolio with work from
							CodeWalker courses, like fully functional mobile
							apps, Capture the Flag (CTF) and Security Shepherd
							assignments, and more.
						</p>
					</div>
					<div className="motive_hacker motive_boxes">
						<img src={Hacker} alt="Hacker" />
						<h2 className="hacker_title">
							Get Access to Today’s Tech Leaders
						</h2>
						<p className="hacker_description">
							As a student of CodeWalker, you’ll receive regular
							invites to attend industry panels and workshops,
							featuring companies like SpaceX, Salesforce,
							Walmart, and more. Past speakers include Dwana
							Franklin-Davis (MasterCard), Michael Seibel (Y
							Combinator), Nick Caldwell (Twitter), and Steve
							Huffman (Reddit). Additionally, the instructors you
							work with every week are accomplished, diverse
							software engineers with thriving careers at
							companies like Meta, Google, InstaCart and TikTok.
						</p>
					</div>
					<div className="motive_community motive_boxes">
						<img src={Community} alt="Community" />
						<h2 className="community_title">
							Join the Tech Community
						</h2>
						<p className="community_description">
							For CS students who are the first in their family to
							attend college, or the only one among their peers
							studying software engineering, the journey can feel
							especially daunting. CodeWalker has a vibrant online
							community of nearly 10,000 software engineers,
							computer science students, and alumni with diverse
							backgrounds who are eager to offer their support and
							encouragement. As a student, you’ll automatically
							join our Slack community, where you can ask any
							question you want and receive an answer quickly.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Motivation;
