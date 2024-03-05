import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/component/home-css/review-details.css";

import Amazon from "../../../img/home/Amazon.svg";
import Amex from "../../../img/home/AMEX.svg";
import IBM from "../../../img/home/IBM.svg";
import Morgan from "../../../img/home/JPMorgan.svg";
import Meta from "../../../img/home/Meta.svg";

const ReviewDetails = () => {
	return (
		<>
			<div className="review-details_content">
				<h2 className="review-details_title">Our Impact</h2>
				<div className="review-details_container">
					<div className="review_wrapper1">
						<p className="review-details_description p1">
							A recent survey of our alumni* shows CodeWalker
							helps students land top tech roles and salaries that
							drive lasting economic mobility.
						</p>
						<div className="review-details_percent">70%</div>
						<p className="review-details_description p2">
							increase in successful job or internship placement
							was reported by alumni overall after taking a
							CodeWalker course.
						</p>
						<div className="review-details_percent">83%</div>
						<p className="review-details_description p3">
							increase in successful job or internship placement
							among Black, Latino/a, and Indigenous alumni overall
							after taking a CodeWalker course.
						</p>
					</div>
					<div className="review_wrapper2">
						<h2>Top 5 employers of CodeWalker Graduates</h2>
						<div className="review-details_box b1">
							<div className="nums">
								<div className="hash">#</div>
								<div className="num">1</div>
							</div>
							<div className="logo">
								<img src={Amazon} alt="amazon" />
							</div>
						</div>

						<div className="review-details_box b2">
							<div className="nums">
								<div className="hash">#</div>
								<div className="num">2</div>
							</div>
							<div className="logo">
								<img
									src={IBM}
									alt="International Business Machines"
								/>
							</div>
						</div>

						<div className="review-details_box b3">
							<div className="nums">
								<div className="hash">#</div>
								<div className="num">3</div>
							</div>
							<div className="logo">
								<img src={Amex} alt="American Express" />
							</div>
						</div>

						<div className="review-details_box b4">
							<div className="nums">
								<div className="hash">#</div>
								<div className="num">4</div>
							</div>
							<div className="logo">
								<img src={Morgan} alt="JP Morgan" />
							</div>
						</div>

						<div className="review-details_box b5">
							<div className="nums">
								<div className="hash">#</div>
								<div className="num">5</div>
							</div>
							<div className="logo">
								<img src={Meta} alt="Meta" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="review-details-bottom_cont">
				<div className="bottom_cont">
					<h4>But that's not where our impact ends.</h4>
					<button className="bottom-btn btn">
						<Link to="/review">More Info</Link>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-6 h-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
							/>
						</svg>
					</button>
				</div>
				<div className="review-details-facts">
					<div className="facts_box">
						<div className="number">70%</div>
						<p className="facts_description">
							of alumni say CodePath helped prepare them for a
							technical internship.
						</p>
					</div>
					<div className="facts_box">
						<div className="number">72%</div>
						<p className="facts_description">
							of alumni say CodePath helped them land their job.
						</p>
					</div>
					<div className="facts_box">
						<div className="number">75%</div>
						<p className="facts_description">
							of alumni say CodePath increased confidence in their
							tech skills.
						</p>
					</div>
					<div className="facts_box">
						<div className="number">69%</div>
						<p className="facts_description">
							of BLI alumni say they aspire to be a tech founder.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default ReviewDetails;
