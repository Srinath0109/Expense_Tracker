const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema({
    title: String,
    amount: Number,
    category: String,
    type: { type: String, enum: ["income", "expense"] },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Expense", ExpenseSchema);
