import React, { createContext, useReducer } from "react";
import { transictionReducer } from "../reducers/transictionReducer";

//initializing the state

let initState = {
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
  income: 0,
  expense: 0,
  totalBalance: 0,
};

// creating the context

export const GlobalContext = createContext();

//Provider

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(transictionReducer, initState);
  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {/* {console.log(childern)} */}
      {children}
    </GlobalContext.Provider>
  );
};
