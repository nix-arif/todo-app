import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import * as api from "../api";

const initialState = {
  todoItems: [],
  isLoading: false,
  error: "",
};

export const getTodos = createAsyncThunk("/todo/getTodos", async () => {
  try {
    const response = await api.getTodos();
    return response.data;
  } catch (err) {
    console.log(err);
  }
});

export const insertTodo = createAsyncThunk(
  "/todo/insertTodo",
  async ({ todo, toast }) => {
    try {
      const response = await api.insertTodo(todo);
      toast.success("Data inserted");
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  "/todo/deleteTodo",
  async (todoId) => {
    try {
      await api.deleteTodo({ todoId });
    } catch (err) {
      console.log(err);
    }
  }
);

export const updateTodo = createAsyncThunk(
  "todo/updateTodo",
  async ({ transferedTodoId, stage }) => {
    try {
      const response = await api.updateTodo({ transferedTodoId, stage });
      return { status: response.status, data: response.data };
    } catch (err) {}
  }
);

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: {
    [getTodos.pending]: (state) => {
      state.isLoading = true;
    },
    [getTodos.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.todoItems = payload;
    },
    [getTodos.rejected]: (state) => {
      state.isLoading = false;
    },
    [insertTodo.pending]: (state) => {
      state.isLoading = true;
    },
    [insertTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      // localStorage.setItem("todo", JSON.stringify({ ...action.payload }));
      state.todoItems.push({ ...action.payload });
    },
    [insertTodo.rejected]: (state) => {
      state.isLoading = false;
    },
    [deleteTodo.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteTodo.fulfilled]: (state) => {
      state.isLoading = false;
    },
    [deleteTodo.rejected]: (state) => {
      state.isLoading = false;
    },
    [updateTodo.fulfilled]: (state, action) => {
      const { _id } = action.payload.data;
      const newTodoItems = state.todoItems.map((todoItem) => {
        if (todoItem._id === _id) {
          return action.payload.data;
        } else {
          return todoItem;
        }
      });
      state.todoItems = newTodoItems;
    },
  },
});

export default todoSlice;
