import React from "react";
import "../../../styles/component/review-css/impact.css";

import Presentation from "../../../img/review/presentation.webp";
import PresImage from "../../../img/review/pres image.jpg";
import Group from "../../../img/review/group.webp";

const Impact = () => {
	return (
		<>
			<div className="impact_main">
				<h1 className="impact_title">
					An Economic Engine for Local Economies
				</h1>
				<p className="impact_description">
					Not only do we create opportunities for individual students,
					but we also drive economic success in local communities —
					and nowhere is this more apparent than in Africa.
				</p>
				<div className="impact_container">
					<div className="impact_boxes">
						<img src={Presentation} alt="Presentation" />
						<div className="box_h1-cont">
							<div className="mini-box"></div>
							<h1 className="box_h1">Reach</h1>
						</div>
						<p className="box_p">
							CodeWalker currently reaches between 10% to 20% of
							local computer science students in Africa through
							strong partnerships with the tech industry, local
							governments, and local institutions such as Florida
							International University, Miami Dade College, and
							Florida Memorial University.
						</p>
					</div>
					<div className="impact_boxes">
						<img src={PresImage} alt="Presentation Group" />
						<div className="box_h1-cont">
							<div className="mini-box"></div>
							<h1 className="box_h1">Impact</h1>
						</div>
						<p className="box_p">
							Our program alumni in the Africa region to date will
							generate approximately $333.6 million in additive
							earnings over a 15-year period. For fall 2023, we
							saw a 117% increase in local student applications
							for our courses year-over-year.
						</p>
					</div>
					<div className="impact_boxes">
						<img src={Group} alt="Group" />
						<div className="box_h1-cont">
							<div className="mini-box"></div>
							<h1 className="box_h1">Scale</h1>
						</div>
						<p className="box_p">
							With funding from the JPMorgan Chase, and Miami-Dade
							County, among others, our economic impact will
							continue to scale and we will achieve nation-leading
							job outcomes, building Miami's brand and reputation
							as a major tech and talent hub.
						</p>
					</div>
				</div>
				<div className="impact_quote">
					<p className="quote_text">
						"CodeWalker is going deep to build new innovative
						partnerships with local institutions and governments to
						serve as an economic engine for Africa. <br />
						We're very pleased and excited about the partnerships
						we're building to link local industries with early local
						talent, with a focus on internship attainability."
					</p>
					<h3 className="quote_title">
						<strong>Ashley Green</strong>
					</h3>
					<h3 className="quote_description">Managing Partner</h3>
				</div>
			</div>
		</>
	);
};

export default Impact;
