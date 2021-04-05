import React from 'react'
import './App.css';
import TodoList from './Todo/TodoList'

function App() {
  const [todos, steTodos] = React.useState([
    {id: 1, completed: false, title: 'Get up'},
    {id: 2, completed: false, title: 'Drink caffe'},
    {id: 3, completed: false, title: 'Brush your teeth'},
  ])

  function ToggleTodo(id) {
    steTodos (
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  return (
    <div className="wrapper">
      <h1>My first react project</h1>
      <TodoList todos={todos} onToggle={ToggleTodo} />
    </div>
  );
}

export default App;
