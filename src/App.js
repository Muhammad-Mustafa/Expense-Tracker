import React, { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [expense, setExpense] = useState("");

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  const onChangeNumber = (e) => {
    setExpense(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(text, expense);
  };
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
          <div className="historyList">
            <p>Cash</p>
            <p>100</p>
          </div>

          <div className="transiction">
            <h1>Add new Transiction </h1>
            <div>
              <form
                className="form"
                onSubmit={(e) => {
                  submitHandler(e);
                }}
              >
                <label>
                  Text
                  <br />
                </label>
                <input
                  type="text"
                  className="input"
                  onChange={(e) => onChangeText(e)}
                />
                <br />
                <label>Amount + for Income and - for expense</label>
                <input
                  type="number"
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
