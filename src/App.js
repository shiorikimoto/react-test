import React, { useState } from 'react'
import Form from './Form'
import List from './List'
import shortid from 'shortid'

const App = () => {
  const [todos, setTodos] = useState([
    {
      content: '課題をする',
      id: 1//ID指定
    },
    {
      content: '洗濯をする',
      id: 2

    },
    {
      content: '電話をする',
      id: 3
    }

  ])

  const addTodo = content => {
    setTodos([
      ...todos,
      {
        content: content,
        id: shortid.generate()//ランダムにid keyつける
      }
    ])

  }

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }//指定したIdついたの消す

  return (
    <>
      <h1>Todo App</h1>
      <Form addTodo={addTodo} />
      <List todos={todos} deleteTodo={deleteTodo} />
    </>
  )
}

export default App