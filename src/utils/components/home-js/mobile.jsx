import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/component/home-css/mobile.css";

// import mobileNavigation from "../mobile.js";
// import lightMode from "../dark-mode.js";

const MobileNav = () => {
	// mobileNavigation()
	// lightMode()
	const lightMode = () => {
		const themeToggleBtn = document.querySelectorAll("#theme-toggle");

		const theme = localStorage.getItem("theme");

		theme && document.body.classList.add(theme);

		const handleThemeToggle = () => {
			document.body.classList.toggle("light-mode");
			if (document.body.classList.contains("light-mode")) {
				localStorage.setItem("theme", "light-mode");
			} else {
				localStorage.removeItem("theme");
				document.body.removeAttribute("class");
			}
		};

		themeToggleBtn.forEach((btn) => {
			btn.addEventListener("click", handleThemeToggle);
		});
	};

	return (
		<div class="mobile-nav">
			<nav>
				<ul class="mobile-nav__menu">
					<li>
						<Link className="mobile-nav__link" to="/">
							Home
						</Link>
					</li>
					<li>
						<Link className="mobile-nav__link" to="/about">
							About
						</Link>
					</li>
					<li>
						<Link className="mobile-nav__link" to="/services">
							Services
						</Link>
					</li>
					<li>
						<Link className="mobile-nav__link" to="/review">
							Review
						</Link>
					</li>
					<li>
						<Link className="mobile-nav__link" to="/contact">
							Contact
						</Link>
					</li>
					<li class="mobile-nav__link-line"></li>
					<li>
						<button
							onClick={lightMode}
							id="theme-toggle"
							class="mobile-nav__sun"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
							>
								<path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
							</svg>
						</button>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default MobileNav;
