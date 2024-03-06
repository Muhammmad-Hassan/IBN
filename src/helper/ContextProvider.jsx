import React, { useState } from "react";
import Context from "./Context";

const ContextProvider = ({ children }) => {
  const [active, setActive] = useState(false);
  const [printval , setPrintVale] = useState(false)

  return (
    <Context.Provider value={{ active, setActive  ,printval, setPrintVale}}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
