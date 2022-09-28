import React from "react";

//components
import Routes from "./routes/index";
import ErrorBoundary from "components/Error/ErrorBoundary";

const App = () => {
  return (
    <ErrorBoundary>
      <Routes />
    </ErrorBoundary>
  );
};

export default App;
