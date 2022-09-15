// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// export const router = createBrowserRouter([]);

// ? thiis import is the older version of App.js

import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { BROWSERROUTES } from "../constants/browserRoutes";
import { Home, SignIn, SignUp } from "../constants/elements";

const Index = () => {
  const routeComponents = routes.map(({ path, element }, key) => {
    return <Route exact path={path} element={element} key={key} />;
  });

  return (
    <Router>
      <Routes>{routeComponents}</Routes>
    </Router>
  );
};

export default Index;

const routes = [
  {
    path: BROWSERROUTES.HOME,
    element: <Home />,
  },
  {
    path: BROWSERROUTES.SIGNIN,
    element: <SignIn />,
  },
  {
    path: BROWSERROUTES.SIGNUP,
    element: <SignUp />,
  },
];
