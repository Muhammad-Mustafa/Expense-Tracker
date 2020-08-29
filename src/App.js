import React, { useState, useContext } from "react";
import "./App.css";

import { GlobalContext } from "./context/GlobalState";
import { findAllByTestId } from "@testing-library/react";

function App() {
  const context = useContext(GlobalContext);
  const { dispatch } = useContext(GlobalContext);

  const { items } = context;
  // console.log(items);

  const [text, setText] = useState("");
  const [transiction, setTransiction] = useState("");
  const [transictionType, setTransictionType] = useState("");

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  const onChangeNumber = (e) => {
    setTransiction(e.target.value);
  };

  const checkTransitionType = (transiction) => {

    // console.log(Number(transiction))
    if (Number(transiction) < 0) {
      console.log('------------')
      return("expense-transiction");
    } else if (Number(transiction) > 0) {
      return("income-transiction");
    }
    }
    

  const submitHandler = (e) => {
    e.preventDefault();
    if(Number(transiction) == 0){
      alert('Zero is not a valid transiction')
      return false;
    }
    else{
      dispatch({
        type: "ADD_TRANSICTION",
        items: {
          text: text,
          transiction: Number(transiction),
          transictionType: checkTransitionType(transiction),
        },
      });
      setText("");
      setTransiction("");
    }
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
          {items.map((item) => {
            return (
              <div className={item.transictionType} key={item.id}>
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
                  value={text}
                />

                <br />
                <label>Amount + for Income and - for expense</label>
                <input
                  type="number"
                  required
                  placeholder="Enter the Amount"
                  className="input"
                  onChange={(e) => onChangeNumber(e)}
                  value={transiction}
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
