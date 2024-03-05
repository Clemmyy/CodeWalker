import React from "react";
import "../../../styles/component/about-css/details-2.css";

import Employee from "../../../img/about/businessman.png";
import School from "../../../img/about/school.png";
import Student from "../../../img/about/graduating-student.png";
import Globe from "../../../img/about/world-globe.png";
import ROI from "../../../img/about/return.png";

const Details2 = () => {
	return (
		<>
			<div className="details2_info1">
				<h2>What we do</h2>
				<h1>Technological excellence for all</h1>
				<p>
					Our Model meets the needs of underrepresented CS students
					seeking meaningful tech careers, colleges seeking help
					filling the gaps between education and job offers for
					students, and tech employers seeking excellent, diverse,
					job-ready talent. Our programming cultivates “demand”
					through employer partnerships in the tech industry, and
					“supply” of trained students seeking internships and
					full-time roles, with our represented college partners
					serving a crucial role at the center of this work.
				</p>
			</div>
			<div className="details2_info2">
				<div className="details2_boxes">
					<img src={Student} alt="student" />
					<h1>Students</h1>
					<p>
						Through intensive technical training, mentorship,
						comprehensive career services, and employer connections,
						students get the access, exposure, and community they
						need to successfully navigate the tech industry and
						jumpstart their career, at no cost to them.
					</p>
				</div>
				<div className="details2_boxes">
					<img src={School} alt="school" />
					<h1>Colleges</h1>
					<p>
						In working with CS professors, our programming helps
						partner colleges supplement their curriculum with the
						industry skills, knowledge, and network students need to
						succeed in the highest levels of the tech industry.
					</p>
				</div>
				<div className="details2_boxes">
					<img src={Employee} alt="employee" />
					<h1>Employers</h1>
					<p>
						CodeWalker employer partners gain access to diverse,
						excellent engineers at scale. CodePath offers a range of
						partnership options to help employers build their brand
						with our student community and fill internship programs
						and full-time roles with the best of the best.
					</p>
				</div>
			</div>
			<div className="details2_info3">
				<h2>impact</h2>
				<h1>16,000 students and counting</h1>
				<p>
					Since our founding in 2021 as a nonprofit, CodeWalker has
					helped thousands of students across more than 290 campuses
					persist in their CS journeys and thrive in technology
					careers.
				</p>
				<div className="details3_main">
					<div className="details3_boxes">
						<img src={Globe} alt="global network" />
						<h2>Reach and Impact</h2>
						<div className="mini-box">
							<h3>16,000+</h3>
							<p>college students enrolled into our programs</p>
						</div>
						<div className="mini-box">
							<h3>72%</h3>
							<p>
								identify as low-income or underrepresented
								minorities
							</p>
						</div>
						<div className="mini-box">
							<h3>290+</h3>
							<p>
								network of international-based colleges and
								universities where students are taking a
								CodeWalker course
							</p>
						</div>
					</div>
					<div className="details3_boxes">
						<img src={ROI} alt="ROI" />
						<h2>ROI and Outcomes</h2>
						<div className="mini-box">
							<h3>70%</h3>
							<p>
								increase in successful software engineering job
								or internship placement after taking a
								CodeWalker course
							</p>
						</div>
						<div className="mini-box">
							<h3>$59,000</h3>
							<p>
								average salary one year after graduation in
								full-time technical roles
							</p>
						</div>
						<div className="mini-box last">
							<h3>Meta, Amex, Amazon</h3>
							<p>
								The top 3 employers where CodeWalker alumni
								attain technical employment are Amazon, Meta,
								and Amex
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Details2;
