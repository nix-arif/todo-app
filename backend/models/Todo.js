// const todoCollection = require("../db").collection("items");
// const ObjectId = require("mongodb").ObjectId;

// const Todo = function (data) {
//   this.data = data;
// };

// Todo.prototype.insertTodo = function () {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const data = await todoCollection.insertOne(this.data);
//       resolve(data);
//     } catch (err) {
//       reject(err);
//     }
//   });
// };

// Todo.getTodos = function () {
//   return new Promise((resolve, reject) => {
//     todoCollection
//       .find()
//       .toArray()
//       .then((data) => {
//         resolve(data);
//       })
//       .catch((e) => {
//         reject(e);
//       });
//   });
// };

// Todo.delete = function (id) {
//   return new Promise((resolve, reject) => {
//     todoCollection
//       .deleteOne({ _id: ObjectId(id) })
//       .then((data) => resolve(data))
//       .catch((err) => reject(err));
//   });
// };

// module.exports = Todo;

const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  text: { type: String, required: true },
  isNewTodo: { type: Boolean, required: true },
  isInProgress: { type: Boolean, required: true },
  isCompleted: { type: Boolean, required: true },
  // id: { type: String, required: true },
});

module.exports = mongoose.model("Todo", todoSchema);
