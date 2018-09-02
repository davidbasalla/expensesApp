import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = { expenses: [] };

  componentDidMount() {
    fetch("/expenses")
      .then(res => res.json())
      .then(expenses => this.setState({ expenses }));
  }

  handleSubmit(event) {
    console.log("SUBMIT");
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <h1>Expenses</h1>

        {this.state.expenses.map(expense => (
          <div key={expense.id}>
            {expense.name} £{expense.amount}
          </div>
        ))}

        <form onSubmit={this.handleSubmit} className="form">
          <label htmlFor="name">Name:</label>
          <input id="name" type="text" />
          <label htmlFor="name">Amount:</label>
          <input id="name" type="text" />
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

export default App;
