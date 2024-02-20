import React from "react";
import "./App.css";
import ExpenseEntryItem from "./ExpenseEntryItem";

const item = {
  id: 1,
  name: "Grape Juice",
  amount: 30.5,
  spendDate: new Date("2020-10-10"),
  category: "Food",
};

function App() {
  return <div className="App">
    <ExpenseEntryItem item={item}/>
  </div>;
}

export default App;
