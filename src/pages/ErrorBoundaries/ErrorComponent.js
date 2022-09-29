import React from "react";

//component
import ErrorBoundary from "components/Error/ErrorBoundary";
import BuggyCounter from "components/Error/BuggyCounter";

const ErrorComponent = () => {
  return (
    <ErrorBoundary>
      <BuggyCounter />
    </ErrorBoundary>
  );
};

export default ErrorComponent;
