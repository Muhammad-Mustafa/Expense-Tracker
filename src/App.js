import React, { useState, useContext } from "react";
import "./App.css";

import { GlobalContext } from "./context/GlobalState";

function App() {
  const context = useContext(GlobalContext);

  const [text, setText] = useState("");
  const [transiction, setTransiction] = useState("");

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  const onChangeNumber = (e) => {
    setTransiction(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(text, transiction);
  };

  const { items } = context;
  console.log(items);

  return (
    <div className="App">
      <div className="container">
        <div className="box-container">
          <h1 className="heading">Expense Tracker App</h1>
          <br />
          <div className="balance">
            <h3>Your Balance</h3>
            <h1>$260.00</h1>
          </div>

          <div className="income-expense">
            <div className="income">
              <h3>Income</h3>
              <h1 style={{ color: "green" }}>$100</h1>
            </div>
            <div className="expense">
              <h3>expense</h3>
              <h1 style={{ color: "red" }}>$100</h1>
            </div>
          </div>
          <br />
          <div className="history">
            <h1>History</h1>
          </div>
          {items.map((item) => {
            return (
              <div className={item.transictionType}>
                <p>{item.text}</p>
                <p>{item.transiction}</p>
              </div>
            );
          })}

          <div className="transiction">
            <h1>Add new Transiction </h1>
            <div>
              <form className="form" onSubmit={submitHandler}>
                <label>
                  Text
                  <br />
                </label>
                <input
                  type="text"
                  className="input"
                  required
                  placeholder="Enter your Text"
                  onChange={(e) => onChangeText(e)}
                />

                <br />
                <label>Amount + for Income and - for expense</label>
                <input
                  type="number"
                  required
                  placeholder="Enter the Amount"
                  className="input"
                  onChange={(e) => onChangeNumber(e)}
                />
                <input className="submit" type="submit" value="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
