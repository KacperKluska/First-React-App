import React, { useState } from "react";

export const NameContext = React.createContext("");

export const NameContextProvider = (props) => {
  const [name, setName] = useState("");

  return (
    <NameContext.Provider value={[name, setName]}>
      {props.children}
    </NameContext.Provider>
  );
};
