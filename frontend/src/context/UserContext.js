import React, { createContext, useContext, useState } from "react";

// Create a context
const UserContext = createContext();

// Create a provider component to wrap your app and provide the email state
export function UserProvider({ children }) {
  const [userEmail, setUserEmail] = useState(null);

  return (
    <UserContext.Provider value={{ userEmail, setUserEmail }}>
      {children}
    </UserContext.Provider>
  );
}

// Create a custom hook to access the email and setUserEmail functions
export function useUser() {
  return useContext(UserContext);
}
