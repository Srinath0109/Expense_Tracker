import React from "react";
import axios from "axios";

function ExpenseList({ expenses, setExpenses }) {
    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/api/expenses/${id}`);
        setExpenses(expenses.filter(expense => expense._id !== id));
    };

    return (
        <ul>
            {expenses.map(expense => (
                <li key={expense._id}>
                    {expense.title} - ${expense.amount} ({expense.type})
                    <button onClick={() => handleDelete(expense._id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}

export default ExpenseList;
