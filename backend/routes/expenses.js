const express = require("express");
const router = express.Router();
const Expense = require("../models/Expense");

// GET all expenses
router.get("/", async (req, res) => {
    const expenses = await Expense.find();
    res.json(expenses);
});

// POST a new expense
router.post("/", async (req, res) => {
    const expense = new Expense(req.body);
    await expense.save();
    res.json(expense);
});

// DELETE an expense
router.delete("/:id", async (req, res) => {
    await Expense.findByIdAndDelete(req.params.id);
    res.json({ message: "Expense deleted" });
});

module.exports = router;
