import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

import About from "./pages/about";
import Contact from "./pages/contact";
import Review from "./pages/review";
import Service from "./pages/service";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "about",
		element: <About />,
	},
	{
		path: "services",
		element: <Service />,
	},
	{
		path: "review",
		element: <Review />,
	},
	{
		path: "contact",
		element: <Contact />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
