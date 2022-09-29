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

// ======================================BeneFITS OF using Library==================================

// useErrorHandler(error?: unknown)
// React's error boundaries feature is limited in that the boundaries can only handle errors thrown during React's lifecycles. To quote the React docs on Error Boundaries:

// Error boundaries do not catch errors for:

// Event handlers (learn more)
// Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)
// Server side rendering
// Errors thrown in the error boundary itself (rather than its children)
// This means you have to handle those errors yourself, but you probably would like to reuse the error boundaries you worked hard on creating for those kinds of errors as well. This is what useErrorHandler is for.

// There are two ways to use useErrorHandler:

// const handleError = useErrorHandler(): call handleError(theError)
// useErrorHandler(error): useful if you are managing the error state yourself or get it from another hook.
// Here's an example:

// import { useErrorHandler } from 'react-error-boundary'

// function Greeting() {
//   const [greeting, setGreeting] = React.useState(null)
//   const handleError = useErrorHandler()

//   function handleSubmit(event) {
//     event.preventDefault()
//     const name = event.target.elements.name.value
//     fetchGreeting(name).then(
//       newGreeting => setGreeting(newGreeting),
//       handleError,
//     )
//   }

//   return greeting ? (
//     <div>{greeting}</div>
//   ) : (
//     <form onSubmit={handleSubmit}>
//       <label>Name</label>
//       <input id="name" />
//       <button type="submit">get a greeting</button>
//     </form>
//   )
// }
// Note, in case it's not clear what's happening here, you could also write handleSubmit like this:

// function handleSubmit(event) {
//   event.preventDefault()
//   const name = event.target.elements.name.value
//   fetchGreeting(name).then(
//     newGreeting => setGreeting(newGreeting),
//     error => handleError(error),
//   )
// }
// Alternatively, let's say you're using a hook that gives you the error:

// import { useErrorHandler } from 'react-error-boundary'

// function Greeting() {
//   const [name, setName] = React.useState('')
//   const {greeting, error} = useGreeting(name)
//   useErrorHandler(error)

//   function handleSubmit(event) {
//     event.preventDefault()
//     const name = event.target.elements.name.value
//     setName(name)
//   }

//   return greeting ? (
//     <div>{greeting}</div>
//   ) : (
//     <form onSubmit={handleSubmit}>
//       <label>Name</label>
//       <input id="name" />
//       <button type="submit">get a greeting</button>
//     </form>
//   )
// }
// In this case, if the error is ever set to a truthy value, then it will be propagated to the nearest error boundary.

// In either case, you could handle those errors like this:

// const ui = (
//   <ErrorBoundary FallbackComponent={ErrorFallback}>
//     <Greeting />
//   </ErrorBoundary>
// )
// And now that'll handle your runtime errors as well as the async errors in the fetchGreeting or useGreeting code.
