const express = require("express");
const todoController = require("./controllers/todoController");
const router = express.Router();

router.get("/", todoController.getTodos);
router.post("/insertTodo", todoController.insertTodo);
router.post("/deleteTodo", todoController.deleteTodo);
router.post("/updateTodo", todoController.updateTodo);

module.exports = router;
