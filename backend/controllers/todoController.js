const Todo = require("../models/Todo");

exports.getTodos = async (req, res) => {
  try {
    const todoItems = await Todo.find({});
    res.status(200).json(todoItems);
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
    console.log(err);
  }
};

exports.insertTodo = async (req, res) => {
  const { text, isNewTodo, isInProgress, isCompleted } = req.body;
  try {
    const result = await Todo.create({
      text,
      isNewTodo,
      isInProgress,
      isCompleted,
    });
    res.status(201).json({ result });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
    console.log(err);
  }
};

exports.deleteTodo = async (req, res) => {
  const { todoId } = req.body;
  try {
    const reply = await Todo.findOneAndRemove({ _id: todoId });
    console.log(reply);
    res.status(201).json(reply);
  } catch (err) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

exports.updateTodo = async (req, res) => {
  const { transferedTodoId, stage } = req.body;
  let newStage;
  switch (stage) {
    case "isNewTodo":
      newStage = { isNewTodo: true, isInProgress: false, isCompleted: false };
      break;
    case "isInProgress":
      newStage = { isNewTodo: false, isInProgress: true, isCompleted: false };
      break;
    case "isCompleted":
      newStage = { isNewTodo: false, isInProgress: false, isCompleted: true };
      break;
  }
  const updatedRecord = await Todo.findOneAndUpdate(
    { _id: transferedTodoId },
    newStage,
    { new: true }
  );
  console.log(updatedRecord);
  res.status(201).json(updatedRecord);
};
