import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: [],
      person: "",
      name: "",
      amount: "",
      date: ""
    };

    this.handlePersonChange = this.handlePersonChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch("/expenses")
      .then(res => res.json())
      .then(expenses => this.setState({ expenses }));
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleAmountChange(event) {
    this.setState({ amount: event.target.value });
  }

  handlePersonChange(event) {
    this.setState({ person: event.target.value });
  }

  handleDateChange(event) {
    this.setState({ date: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const expenses = this.state.expenses;
    expenses.push({
      id: expenses.length,
      person: this.state.person,
      name: this.state.name,
      amount: this.state.amount,
      date: this.state.date
    });

    this.setState({ expenses: expenses });
  }

  render() {
    return (
      <div className="App">
        <h1>Expenses</h1>
        <table className="center">
          <thead>
            <tr>
              <th>Who</th>
              <th>What</th>
              <th>Amount (£)</th>
              <th>When</th>
              <th />
            </tr>
          </thead>

          <tbody>
            {this.state.expenses.map(expense => (
              <tr key={expense.id}>
                <td>{expense.person}</td>

                <td>{expense.name}</td>

                <td>{expense.amount}</td>

                <td>{expense.date}</td>
                <td>
                  {" "}
                  <button>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <form onSubmit={this.handleSubmit} className="form">
          <label htmlFor="person">Who:</label>
          <input
            id="person"
            type="text"
            value={this.state.person}
            onChange={this.handlePersonChange}
          />

          <label htmlFor="name">What:</label>
          <input
            id="name"
            type="text"
            value={this.state.name}
            onChange={this.handleNameChange}
          />

          <label htmlFor="amount">Amount:</label>
          <input
            id="amount"
            type="number"
            value={this.state.amount}
            onChange={this.handleAmountChange}
          />

          <label htmlFor="date">When:</label>
          <input
            id="date"
            type="date"
            value={this.state.date}
            onChange={this.handleDateChange}
          />

          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

export default App;
