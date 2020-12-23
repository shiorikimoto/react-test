import React, { useState } from 'react'
import Title from './Title'
import Form from './Form'
import List from './List'

const App = () => {
  const [todos, setTodos] = useState([
    {
      content: '課題をする'
  },
  {
      content: '洗濯をする'
  },
  {
      content: '電話をする'
  }

  ])

  const addTodo = content => {
    setTodos([
        ...todos,
        {
            content: content,
        }
    ])
  
  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
}


  return (
    <>
        <h1>Todo App</h1>
        <Form todos={todos} setTodos={setTodos} />
        <List todos={todos} />
    </>
)
}

export default App