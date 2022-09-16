const axios = require("axios");

const API = axios.create({ baseURL: "http://localhost:5000" });

export const insertTodo = (formData) => API.post("/todos/insertTodo", formData);
export const getTodos = () => API.get("/todos");
export const deleteTodo = (id) => API.post("/todos/deleteTodo", id);
export const updateTodo = (id) => API.post("/todos/updateTodo", id);
