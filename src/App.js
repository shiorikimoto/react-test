import React from 'react'
import Title from './Title'
import Form from './Form'
import List from './List'

const App = () => {
  const todos = [
      {
          content: '課題をする'
      },
      {
          content: '洗濯をする'
      },
      {
          content: '電話をする'
      },
      {
          content: '電話をしない'
      }
  ]

    return (
      
      <>
        <h1>Todo App</h1>
        <Title />
        <Form />
        <List todos={todos}/>
      </>
    )
}

export default App