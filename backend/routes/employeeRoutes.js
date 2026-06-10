const express = require("express");
const router = express.Router();

const Employee = require("../models/Employee");

router.get("/addsample", async (req, res) => {

  const employee = await Employee.create({
    name: "Hari K",
    email: "hari@gmail.com",
    department: "IT",
    designation: "Full Stack Developer"
  });

  res.json(employee);
});

router.get("/", async (req, res) => {

  const employees = await Employee.find();

  res.json(employees);
});

router.post("/", async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.json(employee);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.json({ message: "Employee Deleted" });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;