import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";

const Footer = () => {
	return (
		<>
			<div className="footer_main">
				<div className="footer_info1">
					<div className="footer_text">
						Get connected with us on our social networks:
					</div>
					<div className="footer_link">
						<li>
							<a href="/">
								<i class="ri-facebook-fill"></i>
							</a>
						</li>
						<li>
							<a href="/">
								<i class="ri-twitter-x-fill"></i>
							</a>
						</li>
						<li>
							<a href="/">
								<i class="ri-google-fill"></i>
							</a>
						</li>
						<li>
							<a href="/">
								<i class="ri-instagram-fill"></i>
							</a>
						</li>
						<li>
							<a href="/">
								<i class="ri-linkedin-box-fill"></i>
							</a>
						</li>
						<li>
							<a href="/">
								<i class="ri-github-fill"></i>
							</a>
						</li>
					</div>
				</div>
				<div className="footer_info2">
					<div className="footer_child1 children">
						<h1 className="footer_title">CodeWalker</h1>
						<div className="footer_text-title">CodeWalker is</div>
					</div>
					<div className="footer_child2 children">
						<h1 className="footer_title">About Us</h1>
						<div className="footer_about-container">
							<Link to="/">Home</Link>
							<Link to="/about">About</Link>
							<Link to="/services">Service</Link>
							<Link to="/review">Review</Link>
							<Link to="/contact">Contact</Link>
						</div>
					</div>
					<div className="footer_child3 children">
						<h1 className="footer_title">Utilities</h1>
						<div className="child3_container">
							<h3>Courses</h3>
							<h3>More Info</h3>
							<h3>Affiliates</h3>
							<h3>Help</h3>
						</div>
					</div>
					<div className="footer_child4 ">
						<h1 className="footer_title">Contact</h1>
						<div className="footer_boxes">
							<i class="ri-home-2-fill"></i>
							<p>Johannesburg South, 2190, SA</p>
						</div>
						<div className="footer_boxes">
							<i class="ri-mail-line"></i>
							<p>codewalker@info.co.za</p>
						</div>
						<div className="footer_boxes">
							<i class="ri-phone-line"></i>
							<p>+27 11 090 3402</p>
						</div>
						<div className="footer_boxes">
							<i class="ri-printer-line"></i>
							<p>+27 69 389 4438</p>
						</div>
					</div>
				</div>
				<div className="footer_info3">
					<div className="info_container">
						<p>
							&copy; <strong id="year">2024</strong>{" "}
							<a href="/">Copyright</a> | All rights reserved |
							<a href="/"> Privacy Policy</a> |{" "}
							<a href="/">Terms of Service</a>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
