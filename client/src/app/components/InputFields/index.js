import React, { Component } from "react";

class InputFields extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: "Ana Paula",
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

    const _this = this;
    fetch("/expenses", {
      method: "POST",
      body: JSON.stringify({
        person: this.state.person,
        name: this.state.name,
        amount: this.state.amount,
        date: this.state.date
      }),
      headers: { "Content-Type": "application/json" }
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(body) {
        _this.props.setMainAppState({ expenses: body });
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <label htmlFor="person">Who:</label>
        <select
          id="person"
          value={this.state.person}
          onChange={this.handlePersonChange}
        >
          <option value="Ana Paula">Ana Paula</option>
          <option value="David">David</option>
        </select>

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
    );
  }
}

export default InputFields;
