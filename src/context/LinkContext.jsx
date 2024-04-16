import { createContext, useState } from "react";

export const LinkContext = createContext();

export const LinkContextProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState();

  return (
    <LinkContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </LinkContext.Provider>
  );
};
