import { createBrowserRouter } from "react-router-dom";

import { BROWSERROUTES } from "../constants/browserRoutes";
import { Home, SignIn, SignUp } from "../constants/elements";

const routes = [
  {
    path: "/",
    element: <Home />,
    children: [],
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
];

export const router = createBrowserRouter(routes);

//? this import is the older version of App.js

// import React from "react";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// const Index = () => {
//   const routeComponents = routes.map(({ path, element }, key) => {
//     return <Route exact path={path} element={element} key={key} />;
//   });

//   return (
//     <Router>
//       <Routes>{routeComponents}</Routes>
//     </Router>
//   );
// };

// export default Index;

// const routes = [
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/signin",
//     element: <SignIn />,
//   },
//   {
//     path: "/signup",
//     element: <SignUp />,
//   },
// ];
