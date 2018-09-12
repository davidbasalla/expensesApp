import React, { Component } from "react";

import ExpensesList from "./app/components/ExpensesList";
import InputFields from "./app/components/InputFields";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: []
    };

    this.setState = this.setState.bind(this);
  }

  componentDidMount() {
    fetch("/expenses")
      .then(res => res.json())
      .then(expenses => this.setState({ expenses }));
  }

  render() {
    return (
      <div className="App">
        <h1>Expenses</h1>
        <ExpensesList expenses={this.state.expenses} />
        <InputFields setMainAppState={this.setState} />
      </div>
    );
  }
}

export default App;
