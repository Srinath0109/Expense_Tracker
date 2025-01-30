import React, { useState, useEffect } from "react";
import axios from "axios";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/expenses")
            .then(response => setExpenses(response.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <h1>Expense Tracker</h1>
            <ExpenseForm setExpenses={setExpenses} />
            <ExpenseList expenses={expenses} setExpenses={setExpenses} />
        </div>
    );
}

export default App;
