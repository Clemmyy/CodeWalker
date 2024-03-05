import React from "react";
import "../../../styles/component/about-css/staff.css";

import Director1 from "../../../img/about/sd-1.jpg";
import Director2 from "../../../img/about/sd-2.jpg";
import Director3 from "../../../img/about/sd-3.jpg";
import Director4 from "../../../img/about/sd-4.jpg";
import Director5 from "../../../img/about/sd-5.jpg";
import GrantManager from "../../../img/about/grants-manager.jpg";
import PCManager from "../../../img/about/pc-manager.jpg";
import AccountingManager from "../../../img/about/acc-manager.jpg";
import OutCoord from "../../../img/about/outreach-manager.webp";
import CurriculumDev from "../../../img/about/car-dev.jpg";
import SeniorCurriculumDev from "../../../img/about/senior-dev-car.jpg";
import SeniorExecAssoc from "../../../img/about/SEA.jpg";
import FinanceAssoc from "../../../img/about/fin-ass.jpg";
import DirCommRelat from "../../../img/about/dir-community relations.jpg";
import DirProductEngin from "../../../img/about/dir-product engineer.jpg";

import ManagePartner from "../../../img/about/managing partner.jpg";
import VicePres from "../../../img/about/vp.jpg";
import Principal from "../../../img/about/principal.jpg";
import CDO from "../../../img/about/cdo.jpg";
import Founder from "../../../img/about/founder.jpg";

const Staff = () => {
	return (
		<>
			<div className="staff">
				<h1 className="title">Staff</h1>
				<div className="staff_container">
					<div className="staff_boxes">
						<div className="staff_info">
							<img src={Director1} alt="Director 1" />
							<h1 className="name">Jordan Ash</h1>
							<p className="job_des">Director</p>
						</div>
					</div>
					<div className="staff_boxes">
						<div className="staff_info">
							<img src={Director2} alt="Director 2" />
							<h1 className="name">Hannah Brie</h1>
							<p className="job_des">Director</p>
						</div>
					</div>
					<div className="staff_boxes">
						<div className="staff_info">
							<img src={Director3} alt="Director 3" />
							<h1 className="name">Karen Mathews</h1>
							<p className="job_des">Director</p>
						</div>
					</div>
					<div className="staff_boxes">
						<div className="staff_info">
							<img src={Director4} alt="Director 4" />
							<h1 className="name">Joshua Jacobs</h1>
							<p className="job_des">Director</p>
						</div>
					</div>
					<div className="staff_boxes">
						<div className="staff_info">
							<img src={Director5} alt="Director 5" />
							<h1 className="name">Veron Micah</h1>
							<p className="job_des">Director</p>
						</div>
					</div>
					<div className="staff_boxes">
						<div className="staff_info">
							<img src={GrantManager} alt="Grants Manager" />
							<h1 className="name">Kemy Muando</h1>
							<p className="job_des">Grants Manager</p>
						</div>
					</div>
					<div className="staff_boxes">
						<div className="staff_info">
							<img
								src={PCManager}
								alt="Public and Culture Manager"
							/>
							<h1 className="name">Jack Stevens</h1>
							<p className="job_des">
								Public and Culture Manager
							</p>
						</div>
					</div>
					<div className="staff_boxes">
						<div className="staff_info">
							<img
								src={AccountingManager}
								alt="Accounting Manager"
							/>
							<h1 className="name">Emma Hayes</h1>
							<p className="job_des">Accounting Manager</p>
						</div>
					</div>
					<div className="staff_boxes">
						<div className="staff_info">
							<img src={OutCoord} alt="Outreach Coordinator" />
							<h1 className="name">Michael Ryan</h1>
							<p className="job_des">Outreach Coordinator</p>
						</div>
					</div>
					<div className="staff_boxes">
						<div className="staff_info">
							<img
								src={CurriculumDev}
								alt="Curriculum Developer"
							/>
							<h1 className="name">Barbra Daniels</h1>
							<p className="job_des">Curriculum Developer</p>
						</div>
					</div>
					<div className="staff_boxes">
						<div className="staff_info">
							<img
								src={SeniorCurriculumDev}
								alt="Senior Curriculum Developer"
							/>
							<h1 className="name">Samuel Kinsey</h1>
							<p className="job_des">
								Senior Curriculum Developer
							</p>
						</div>
					</div>
					<div className="staff_boxes">
						<div className="staff_info">
							<img
								src={SeniorExecAssoc}
								alt="Senior Executive Associate"
							/>
							<h1 className="name">Keith Moore</h1>
							<p className="job_des">
								Senior Executive Associate
							</p>
						</div>
					</div>
					<div className="staff_boxes">
						<div className="staff_info">
							<img src={FinanceAssoc} alt="Finance Associate" />
							<h1 className="name">Sam Peace</h1>
							<p className="job_des">Finance Associate</p>
						</div>
					</div>
					<div className="staff_boxes">
						<div className="staff_info">
							<img
								src={DirCommRelat}
								alt="Director of Community Relations"
							/>
							<h1 className="name">Munesushe Ndlovu</h1>
							<p className="job_des">
								Director of Community Relations
							</p>
						</div>
					</div>
					<div className="staff_boxes">
						<div className="staff_info">
							<img
								src={DirProductEngin}
								alt="Director of Product Engineering"
							/>
							<h1 className="name">Gabriel Walter</h1>
							<p className="job_des">
								Director of Product Engineering
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="bod">
				<div className="bod_title">
					Board of <br /> Directors
				</div>
				<div className="bod_container">
					<div className="bod_info">
						<img src={ManagePartner} alt="Managing Partner" />
						<h1 className="name">Ashley Green</h1>
						<p className="job_des">Managing Partner</p>
					</div>
					<div className="bod_info">
						<img
							src={VicePres}
							alt="Vice President of CodeWalker"
						/>
						<h1 className="name">Doug Richards</h1>
						<p className="job_des">Vice President of CodeWalker</p>
					</div>
					<div className="bod_info">
						<img src={Principal} alt="Principal" />
						<h1 className="name">Veronica White</h1>
						<p className="job_des">Principal</p>
					</div>
					<div className="bod_info">
						<img
							src={CDO}
							alt="Chief Diversity Office, President"
						/>
						<h1 className="name">Mathew Borchard</h1>
						<p className="job_des">
							Chief Diversity Office & President
						</p>
					</div>
					<div className="bod_info">
						<img src={Founder} alt="Founder of CodeWalker" />
						<h1 className="name">Mpho Mohlakwana</h1>
						<p className="job_des">Founder & CEO</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Staff;
