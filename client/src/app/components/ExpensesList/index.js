import React from "react";

const ExpensesList = ({ expenses }) => {
  return (
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
        {expenses.map(expense => (
          <tr key={expense.id}>
            <td>{expense.person}</td>
            <td>{expense.name}</td>
            <td>{expense.amount}</td>
            <td>{expense.date}</td>
            <td>
              {" "}
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

ExpensesList.defaultProps = {
  expenses: []
};

export default ExpensesList;
