import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   todos: (localStorage.getItem("todos") && localStorage.getItem("todos") != "[]") ? JSON.parse(localStorage.getItem("todos")) : [{ id: 1, title: 'Example todo' }]
// }
const initialState = {
  todos: (sessionStorage.getItem("todos") && sessionStorage.getItem("todos") != "[]") ? JSON.parse(sessionStorage.getItem("todos")) : [{ id: 1, title: 'Example todo' }]
}
export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
      sessionStorage.setItem("todos", JSON.stringify(state.todos))
      // localStorage.setItem("todos", JSON.stringify(state.todos))
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id != action.payload)
      sessionStorage.setItem("todos", JSON.stringify(state.todos))
      // localStorage.setItem("todos", JSON.stringify(state.todos))
    }
  },
})

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;