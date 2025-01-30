import React, { useState } from "react";
import axios from "axios";

function ExpenseForm({ setExpenses }) {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [type, setType] = useState("expense");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newExpense = { title, amount, type };

        const response = await axios.post("http://localhost:5000/api/expenses", newExpense);
        setExpenses(prev => [...prev, response.data]);
        setTitle("");
        setAmount("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required />
            <input type="number" placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} required />
            <select value={type} onChange={e => setType(e.target.value)}>
                <option value="expense">Expense</option>
                <option value="income">Income</option>
            </select>
            <button type="submit">Add</button>
        </form>
    );
}

export default ExpenseForm;
