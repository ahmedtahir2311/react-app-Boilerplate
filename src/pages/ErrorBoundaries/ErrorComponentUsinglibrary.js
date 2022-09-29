import React from "react";
import { ErrorBoundary } from "react-error-boundary";

import BuggyCounter from "components/Error/BuggyCounter";

function ErrorFallback({ error, resetErrorBoundary }) {
  console.log(error);
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

const ErrorComponentUsinglibrary = () => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // reset the state of your app so the error doesn't happen again
      }}
    >
      <BuggyCounter />
    </ErrorBoundary>
  );
};

export default ErrorComponentUsinglibrary;
