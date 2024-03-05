import React from "react";
import "../../../styles/component/contact-css/contact.css";

import Logo from "../../../img/contact/logo-3.png";

const ContactPage = () => {
	return (
		<>
			<div className="contact-page_main">
				<div className="main_container">
					<div className="contact-page_item">
						<div className="contact-page_contact">
							<div className="first-text">Let's get in touch</div>
							<img src={Logo} alt="logo" className="image" />
							<div className="social-links">
								<span className="second-text">
									Connect with us:
								</span>
								<ul className="social-media">
									<li>
										<a href="/">
											<i class="bx bxl-facebook"></i>
										</a>
									</li>
									<li>
										<a href="/">
											<i class="bx bxl-twitter"></i>
										</a>
									</li>
									<li>
										<a href="/">
											<i class="bx bxl-linkedin"></i>
										</a>
									</li>
									<li>
										<a href="/">
											<i class="bx bxl-github"></i>
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="contact-page_submit-form">
							<h4 className="third-text text-4">Contact Us</h4>
							<form action="">
								<div className="input-box">
									<input type="text" className="input" required/>
									<label htmlFor="">Name </label>
								</div>
								<div className="input-box">
									<input type="email" className="input" required/>
									<label htmlFor="">Email </label>
								</div>
								<div className="input-box">
									<input type="tel" className="input" required/>
									<label htmlFor="">Phone</label>
								</div>
								<div className="input-box">
									<textarea
                                        className="input" required
										name=""
										id="message"
										cols="30"
										rows="10"
									></textarea>
									<label htmlFor="">Message</label>
								</div>
                                <button className="form-btn" type="submit">
                                    Submit
                                </button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ContactPage;
