import React from "react";
import { RouterProvider } from "react-router-dom";

// import Routes from "./routes/index";

import { router } from "./routes/index";

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
