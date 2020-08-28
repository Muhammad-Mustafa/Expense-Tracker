import React from "react";
import { GlobalProvider } from "./context/GlobalState";
import App from "./App";

const App1 = () => {
  return (
    <GlobalProvider>
      <App />
    </GlobalProvider>
  );
};

export default App1;
