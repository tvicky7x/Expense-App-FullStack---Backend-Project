const express = require("express");
const Expenses = require("../Model/expense");

const router = express();

router.post("/add-expense", (req, res, next) => {
  res.redirect("/expense-page");
  Expenses.create(req.body);
});

router.post("/edit-expense", (req, res, next) => {
  res.redirect("/expense-page");
  Expenses.update(req.body, { where: { id: req.body.id } });
});

router.get("/get-expenses", async (req, res, next) => {
  try {
    const expenseData = await Expenses.findAll();
    const expenseArray = expenseData.map((books) => books.toJSON());
    res.send(expenseArray);
  } catch (err) {
    res.send([]);
    console.log(err);
  }
});

router.delete("/delete-expense", async (req, res, next) => {
  await Expenses.destroy({ where: { id: req.body.id } });
  res.send("Delete Done");
});

module.exports = router;
