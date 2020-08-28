import React, { createContext, useReducer } from "react";

//initializing the state

const initState = {
  items: [
    {
      id: 1,
      text: "Cash",
      transictionType: "income-transiction",
      transiction: "200",
    },
    {
      id: 2,
      text: "Cash",
      transictionType: "expense-transiction",
      transiction: "-200",
    },
    {
      id: 3,
      text: "Cash",
      transictionType: "income-transiction",
      transiction: "200",
    },
    {
      id: 4,
      text: "Cash",
      transictionType: "expense-transiction",
      transiction: "-200",
    },
  ],
};

// creating the context

export const GlobalContext = createContext();

//Provider

export const GlobalProvider = ({ children }) => {
  //   const [state, dispatch] = useReducer(AppReducer, initState);

  return (
    <GlobalContext.Provider value={{ ...initState }}>
      {/* {console.log(childern)} */}
      {children}
    </GlobalContext.Provider>
  );
};
