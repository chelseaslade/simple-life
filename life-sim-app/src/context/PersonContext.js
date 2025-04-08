import React, { createContext, useState } from "react";

export const PersonContext = createContext();

export const PersonProvider = ({ children }) => {
  const [person, setPerson] = useState(null);

  return (
    <PersonContext.Provider value={{ person, setPerson }}>
      {children}
    </PersonContext.Provider>
  );
};

