import React from 'react'
import Title from './Title'
import Form from './Form'
import List from './List'

const App = () => {
    return (
      
      <React.Fragment>
        <h1>Todo App</h1>
        <Title />
        <Form />
        <List />
      </React.Fragment>
    )
}

export default App