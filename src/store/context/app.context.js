import React from 'react';

const AppContext = React.createContext();

export function AppContextProvider({ children }) {
  const [userDetails, setUserDetails] = React.useState({});

  const setUserData = (data) => {
    if (data) {
      setUserDetails(data);
    } else {
      setUserDetails(null);
    }
  };

  React.useEffect(() => {
    const userData = localStorage.getItem('user');
    userData && setUserDetails(JSON.parse(userData));
  }, []);

  return (
    <AppContext.Provider
      value={{
        userDetails,
        // @Todo remove below variables after completion 2.0
        setUserDetails: setUserData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = React.useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext can only be used inside AppProvider');
  }
  return context;
}
