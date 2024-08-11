import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState({
    accessToken: localStorage.getItem('accessToken'),
    refreshToken: localStorage.getItem('refreshToken')
  });

  useEffect(() => {
    const handleStorageChange = () => {
      setAuthTokens({
        accessToken: localStorage.getItem('accessToken'),
        refreshToken: localStorage.getItem('refreshToken')
      });
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <AuthContext.Provider value={authTokens}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);


// import { createContext, useContext, useEffect } from 'react';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {

//   // Sincronize o estado dos tokens com o localStorage
//   useEffect(() => {
//     const handleStorageChange = () => {
//       localStorage.getItem('accessToken')
//       localStorage.getItem('refreshToken')
//     };

//     window.addEventListener('storage', handleStorageChange);
//     return () => {
//       window.removeEventListener('storage', handleStorageChange);
//     };
//   }, []);

//   return (
//     <AuthContext.Provider value={{ }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);






// import { createContext, useContext, useState, useEffect } from 'react';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [authTokens, setAuthTokens] = useState({
//     accessToken: localStorage.getItem('accessToken'),
//     refreshToken: localStorage.getItem('refreshToken'),
//   });

//   const login = (accessToken, refreshToken) => {
//     localStorage.setItem('accessToken', accessToken);
//     localStorage.setItem('refreshToken', refreshToken);
//     setAuthTokens({ accessToken, refreshToken });
//   };

//   const logout = () => {
//     localStorage.removeItem('accessToken');
//     localStorage.removeItem('refreshToken');
//     setAuthTokens(null);
//   };

//   const isLoggedIn = () => {
//     return authTokens && authTokens.accessToken && authTokens.refreshToken;
//   };

//   // Sincronize o estado dos tokens com o localStorage
//   useEffect(() => {
//     const handleStorageChange = () => {
//       setAuthTokens({
//         accessToken: localStorage.getItem('accessToken'),
//         refreshToken: localStorage.getItem('refreshToken'),
//       });
//     };

//     window.addEventListener('storage', handleStorageChange);
//     return () => {
//       window.removeEventListener('storage', handleStorageChange);
//     };
//   }, []);

//   return (
//     <AuthContext.Provider value={{ authTokens, login, logout, isLoggedIn }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);